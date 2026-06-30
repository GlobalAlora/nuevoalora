import "server-only";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export function hasLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

const dictionaries = {
  es: () => import("@/dictionaries/es").then((m) => m.default),
  en: () => import("@/dictionaries/en").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

/** Alternate URLs for hreflang */
export function getAlternates(path: string) {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, `/${locale}${path}`])
  );
}
