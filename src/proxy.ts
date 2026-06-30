import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

function getLocale(request: NextRequest): Locale {
  // 1. Cookie takes priority (user's explicit choice)
  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && LOCALES.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Accept-Language header
  const acceptLang = request.headers.get("accept-language") ?? "";
  const preferred = acceptLang
    .split(",")
    .map((s) => s.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find((lang) => LOCALES.includes(lang as Locale));

  return (preferred as Locale) ?? DEFAULT_LOCALE;
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
