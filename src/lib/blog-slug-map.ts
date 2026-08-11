// Slug pairs for the Nav.tsx language switcher only — every blog post has a
// distinct translated slug per locale (see BlogPost.slug/slugEn in
// blog-data.ts), so switching /es <-> /en on a post page needs a real
// translation, not just a prefix swap. Kept as a small standalone map
// (rather than importing blog-data.ts directly) so Nav — rendered on every
// page — doesn't bundle the full post dataset (titles, article bodies, FAQs)
// just to resolve a slug. Regenerate by running the extraction one-liner in
// the "Fix ES/EN switcher for blog posts" commit whenever a post's slug or
// slugEn changes.
export const BLOG_SLUG_ES_TO_EN: Record<string, string> = {
  "tienda-nube-vs-woocommerce": "tienda-nube-vs-woocommerce",
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
  "ia-generativa-vs-ia-predictiva": "generative-ai-vs-predictive-ai",
};

export const BLOG_SLUG_EN_TO_ES: Record<string, string> = Object.fromEntries(
  Object.entries(BLOG_SLUG_ES_TO_EN).map(([es, en]) => [en, es])
);
