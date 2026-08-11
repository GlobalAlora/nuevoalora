import type { MetadataRoute } from "next";
import { SOLUTIONS } from "@/lib/solutions-data";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { BLOG_POSTS } from "@/lib/blog-data";

const BASE = "https://www.globalalora.com";
const LOCALES = ["es", "en"] as const;
type Freq = "weekly" | "monthly" | "yearly";

// Solutions, case studies and static pages don't carry a per-item "last
// updated" date today, so instead of stamping every route with the moment
// the sitemap happens to be requested (which told Google everything changes
// on every crawl), routes without real data use this fixed reference date.
// Bump it by hand when a real, meaningful update goes out.
const SITE_LAST_REVIEWED = "2026-07-21";

const STATIC_ROUTES: { path: string; freq: Freq; priority: number; image?: string }[] = [
  // ── Home ─────────────────────────────────────────────────────────────────
  { path: "",                                                    freq: "weekly",  priority: 1.0 },

  // ── Servicios ────────────────────────────────────────────────────────────
  { path: "/servicios",                                          freq: "monthly", priority: 0.9 },

  // ── Casos de éxito (listado) ───────────────────────────────────────────
  { path: "/casos-de-exito",                                     freq: "monthly", priority: 0.9 },

  // ── Blog (listado) ────────────────────────────────────────────────────
  { path: "/blog",                                               freq: "weekly",  priority: 0.8 },

  // ── Portafolio / Reseñas / Presentación ──────────────────────────────
  { path: "/portfolio",                                          freq: "monthly", priority: 0.8 },
  { path: "/resenas",                                            freq: "monthly", priority: 0.7 },
  { path: "/escribir-resena",                                    freq: "monthly", priority: 0.5 },
  { path: "/presentacion",                                       freq: "monthly", priority: 0.7 },

  // ── Contacto / Booking ────────────────────────────────────────────────
  { path: "/contacto",                                           freq: "monthly", priority: 0.8 },
  { path: "/llamada-de-relevamiento",                            freq: "monthly", priority: 0.8 },
  { path: "/discovery-call",                                     freq: "monthly", priority: 0.8 },
  { path: "/ia-para-empresas",                                   freq: "monthly", priority: 0.8 },

  // ── Legal ─────────────────────────────────────────────────────────────
  { path: "/privacy-policy",                                     freq: "yearly",  priority: 0.3 },
  { path: "/cookies",                                            freq: "yearly",  priority: 0.3 },
  { path: "/terminos",                                           freq: "yearly",  priority: 0.3 },

  // Excluidas intencionalmente (conversión, no indexar):
  // /thank-you, /call-booked, /gracias-ia-empresas,
  // /reservar-auditoria-ia-empresas, /auditoria-ia-empresas-reservada
];

// Soluciones y casos de éxito comparten el mismo slug en /es/ y /en/ (son
// nombres propios), así que pasan por el LOCALES.map(...) genérico de abajo.
// Los posts del blog NO: cada uno tiene un slug en español (p.slug) y otro en
// inglés (p.slugEn), así que se arman aparte, con la URL correcta por idioma.
const ROUTES: { path: string; freq: Freq; priority: number; image?: string; lastModified: string }[] = [
  ...STATIC_ROUTES.map((r) => ({ ...r, lastModified: SITE_LAST_REVIEWED })),
  ...SOLUTIONS.map((s) => ({ path: `/soluciones/${s.slug}`, freq: "monthly" as Freq, priority: 0.9, image: s.heroImage, lastModified: SITE_LAST_REVIEWED })),
  ...CASE_STUDIES.map((c) => ({ path: `/casos-de-exito/${c.slug}`, freq: "monthly" as Freq, priority: 0.8, image: c.heroImage, lastModified: SITE_LAST_REVIEWED })),
];

const BLOG_ROUTES: MetadataRoute.Sitemap = BLOG_POSTS.flatMap((p) => {
  const alternates = { languages: { es: `${BASE}/es/blog/${p.slug}`, en: `${BASE}/en/blog/${p.slugEn}` } };
  return LOCALES.map((locale) => ({
    url: `${BASE}/${locale}/blog/${locale === "en" ? p.slugEn : p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly" as Freq,
    priority: 0.8,
    images: p.image ? [`${BASE}${p.image}`] : undefined,
    alternates,
  }));
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.flatMap(({ path, freq, priority, image, lastModified }) =>
      LOCALES.map((locale) => ({
        url: `${BASE}/${locale}${path}`,
        lastModified,
        changeFrequency: freq,
        priority,
        images: image ? [`${BASE}${image}`] : undefined,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE}/${l}${path}`])
          ),
        },
      }))
    ),
    ...BLOG_ROUTES,
  ];
}
