import type { NextConfig } from "next";

// English blog URLs used to reuse the Spanish slug (e.g.
// /en/blog/que-es-un-agente-ia) before every post got a real English slug
// (see src/lib/blog-data.ts's `slugEn` field). This is a one-time list of
// the old → new EN slugs for posts that existed before that change, so any
// indexing/backlinks against the old URL aren't lost. New posts are born
// with their final slugEn from day one and never need an entry here — this
// list intentionally does NOT stay in sync with blog-data.ts going forward.
// (next.config.ts can't reliably import from src/ at config-load time, so
// this is a plain, static copy rather than a derived one.)
const OLD_EN_BLOG_SLUGS: Record<string, string> = {
  "que-es-un-agente-ia": "what-is-an-ai-agent",
  "automatizacion-empresas-make": "business-automation-with-make",
  "chatbot-vs-agente-conversacional-ia": "chatbot-vs-conversational-ai-agent",
  "mi-empresa-necesita-inteligencia-artificial": "does-my-business-need-ai",
  "agente-ia-atencion-cliente": "ai-agent-for-customer-service",
  "chatbot-clinicas-turnos-whatsapp": "chatbot-for-clinics-whatsapp-appointments",
  "automatizacion-ia-pymes-casos": "ai-automation-for-small-businesses",
  "cuanto-cuesta-chatbot-ia": "how-much-does-an-ai-chatbot-cost",
  "chatbot-whatsapp-para-empresas": "whatsapp-chatbot-for-businesses",
  "ia-automatizacion-negocios": "ai-automation-for-business",
  "5-automatizaciones-email-marketing-ecommerce": "5-email-marketing-automations-for-ecommerce",
  "landing-page-vs-sitio-web": "landing-page-vs-website",
  "llms-txt-contexto-para-interpretacion-ia": "llms-txt-for-ai-interpretation",
  "guia-seo-tecnico-2026-atraer-clientes": "technical-seo-guide-2026",
  "como-usar-ia-en-wordpress-para-atraer-clientes": "how-to-use-ai-in-wordpress",
  "wordpress-6-8-2-version-mantenimiento": "wordpress-6-8-2-maintenance-release",
  "tendencias-seo-para-desarrolladores": "seo-trends-for-developers",
  "mejorar-seguridad-wordpress-2025": "improve-wordpress-security-2025",
  "php-8-2-en-wordpress": "php-8-2-in-wordpress",
  "mejores-plugins-wordpress-2025": "best-wordpress-plugins-2025",
  "que-es-un-crm-y-por-que-lo-necesita-tu-empresa": "what-is-a-crm-and-why-your-business-needs-one",
  "ia-atencion-cliente-por-industria": "ai-customer-service-by-industry",
  "atencion-al-cliente-con-ia": "ai-customer-care",
  "seo-aeo-geo-sxo-aio-guia-completa": "seo-aeo-geo-sxo-aio-complete-guide",
};

const nextConfig: NextConfig = {
  // Redirect naked domain → www (canonical)
  async redirects() {
    const blogSlugRedirects = Object.entries(OLD_EN_BLOG_SLUGS).map(([oldSlug, newSlug]) => ({
      source: `/en/blog/${oldSlug}`,
      destination: `/en/blog/${newSlug}`,
      permanent: true,
    }));

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "globalalora.com" }],
        destination: "https://www.globalalora.com/:path*",
        permanent: true,
      },
      ...blogSlugRedirects,
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Cache static assets aggressively
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Cache images/fonts for 1 year
        source: "/:path(images|fonts|icons|media)/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache static files
        source: "/:path*\\.(ico|png|jpg|jpeg|webp|svg|woff2|woff)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // llms.txt: mark as markdown-capable and vary by Accept so CDNs
        // don't serve cached HTML to agents requesting text/markdown
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Vary", value: "Accept" },
        ],
      },
    ];
  },

  // Compress responses
  compress: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
