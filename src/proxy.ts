import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

// ISO 3166-1 alpha-2 codes for Spanish-speaking countries.
const SPANISH_SPEAKING_COUNTRIES = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "SV", "GQ", "GT",
  "HN", "MX", "NI", "PA", "PY", "PE", "ES", "UY", "VE",
]);

function getLocale(request: NextRequest): Locale {
  // 1. Cookie takes priority (user's explicit choice, e.g. via the language switcher)
  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && LOCALES.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Geolocate via the country header Vercel's edge network injects in production.
  // Not present in local dev, so this branch is skipped there.
  const country = request.headers.get("x-vercel-ip-country");
  if (country) {
    return SPANISH_SPEAKING_COUNTRIES.has(country) ? "es" : "en";
  }

  // 3. No geo data available (local dev, or hosting without the header) — default to Spanish.
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // files with extensions (images, fonts, etc.)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a supported locale prefix
  const hasLocale = LOCALES.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) return NextResponse.next();

  // Redirect bare paths to locale-prefixed version
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
