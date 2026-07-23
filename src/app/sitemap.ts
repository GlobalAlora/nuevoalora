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
const SITE_LAST_REVIEWED = "2026-07-20";

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

  // ── Legal ─────────────────────────────────────────────────────────────
  { path: "/privacy-policy",                                     freq: "yearly",  priority: 0.3 },
  { path: "/cookies",                                            freq: "yearly",  priority: 0.3 },
  { path: "/terminos",                                           freq: "yearly",  priority: 0.3 },

  // Excluidas intencionalmente (conversión, no indexar):
  // /thank-you, /call-booked
];

// Soluciones, casos de éxito y posts del blog se derivan directamente de sus
// archivos de datos, así el sitemap nunca queda desactualizado al agregar contenido.
const ROUTES: { path: string; freq: Freq; priority: number; image?: string; lastModified: string }[] = [
  ...STATIC_ROUTES.map((r) => ({ ...r, lastModified: SITE_LAST_REVIEWED })),
  ...SOLUTIONS.map((s) => ({ path: `/soluciones/${s.slug}`, freq: "monthly" as Freq, priority: 0.9, image: s.heroImage, lastModified: SITE_LAST_REVIEWED })),
  ...CASE_STUDIES.map((c) => ({ path: `/casos-de-exito/${c.slug}`, freq: "monthly" as Freq, priority: 0.8, image: c.heroImage, lastModified: SITE_LAST_REVIEWED })),
  ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, freq: "monthly" as Freq, priority: 0.8, image: p.image, lastModified: p.date })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(({ path, freq, priority, image, lastModified }) =>
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
  );
}
