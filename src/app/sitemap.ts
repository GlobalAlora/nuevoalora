import type { MetadataRoute } from "next";

const BASE_URL = "https://www.globalalora.com";
const LOCALES = ["es", "en"] as const;

const ROUTES = [
  "",
  "/portfolio",
  "/contacto",
  "/llamada-de-relevamiento",
  "/privacy-policy",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of ROUTES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE_URL}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
