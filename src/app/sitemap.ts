import type { MetadataRoute } from "next";

const BASE = "https://www.globalalora.com";
const LOCALES = ["es", "en"] as const;

type Freq = "weekly" | "monthly" | "yearly";

const ROUTES: { path: string; freq: Freq; priority: number }[] = [
  // Home
  { path: "",                                        freq: "weekly",  priority: 1.0 },

  // Servicios
  { path: "/servicios",                              freq: "monthly", priority: 0.9 },

  // Soluciones
  { path: "/soluciones/desarrollo-web",              freq: "monthly", priority: 0.9 },
  { path: "/soluciones/desarrollo-software",         freq: "monthly", priority: 0.9 },
  { path: "/soluciones/aplicaciones-web",            freq: "monthly", priority: 0.9 },
  { path: "/soluciones/ecommerce",                   freq: "monthly", priority: 0.9 },
  { path: "/soluciones/chatbots",                    freq: "monthly", priority: 0.9 },
  { path: "/soluciones/atencion-cliente-ia",         freq: "monthly", priority: 0.9 },
  { path: "/soluciones/landing-pages",               freq: "monthly", priority: 0.9 },
  { path: "/soluciones/automatizacion",              freq: "monthly", priority: 0.9 },

  // Casos de éxito
  { path: "/casos-de-exito",                         freq: "monthly", priority: 0.9 },

  // Blog
  { path: "/blog",                                   freq: "weekly",  priority: 0.8 },
  { path: "/blog/tienda-nube-vs-woocommerce",        freq: "monthly", priority: 0.8 },
  { path: "/blog/que-es-un-agente-ia",               freq: "monthly", priority: 0.8 },
  { path: "/blog/automatizacion-empresas-make",      freq: "monthly", priority: 0.8 },
  { path: "/blog/chatbot-vs-agente-conversacional-ia", freq: "monthly", priority: 0.8 },
  { path: "/blog/mi-empresa-necesita-inteligencia-artificial", freq: "monthly", priority: 0.8 },

  // Portfolio
  { path: "/portfolio",                              freq: "monthly", priority: 0.8 },

  // Reseñas / Presentación
  { path: "/resenas",                                freq: "monthly", priority: 0.7 },
  { path: "/presentacion",                           freq: "monthly", priority: 0.7 },

  // Contacto / Booking
  { path: "/contacto",                               freq: "monthly", priority: 0.8 },
  { path: "/llamada-de-relevamiento",                freq: "monthly", priority: 0.8 },

  // Legal
  { path: "/privacy-policy",                         freq: "yearly",  priority: 0.3 },
  { path: "/cookies",                                freq: "yearly",  priority: 0.3 },
  { path: "/terminos",                               freq: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const { path, freq, priority } of ROUTES) {
      entries.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE}/${l}${path}`])
          ),
        },
      });
    }
  }

  return entries;
}
