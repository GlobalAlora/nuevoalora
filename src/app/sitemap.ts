import type { MetadataRoute } from "next";
import { SOLUTIONS } from "@/lib/solutions-data";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { BLOG_POSTS } from "@/lib/blog-data";

const BASE = "https://www.globalalora.com";
const LOCALES = ["es", "en"] as const;
type Freq = "weekly" | "monthly" | "yearly";

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
const ROUTES: { path: string; freq: Freq; priority: number; image?: string }[] = [
  ...STATIC_ROUTES,
  ...SOLUTIONS.map((s) => ({ path: `/soluciones/${s.slug}`, freq: "monthly" as Freq, priority: 0.9, image: s.heroImage })),
  ...CASE_STUDIES.map((c) => ({ path: `/casos-de-exito/${c.slug}`, freq: "monthly" as Freq, priority: 0.8, image: c.heroImage })),
  ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, freq: "monthly" as Freq, priority: 0.8, image: p.image })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(({ path, freq, priority, image }) =>
    LOCALES.map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
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
