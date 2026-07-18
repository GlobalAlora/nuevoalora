import { getSolution } from "./solutions-data";
import { getBlogPost } from "./blog-data";

type Locale = "es" | "en";

export interface RelatedCard {
  href: string;
  title: string;
  eyebrow: string;
  image?: string;
}

const SOLUTION_BLOG_POSTS: Record<string, string[]> = {
  "desarrollo-web": ["landing-page-vs-sitio-web", "guia-seo-tecnico-2026-atraer-clientes", "como-usar-ia-en-wordpress-para-atraer-clientes"],
  "aplicaciones-web": ["que-es-un-crm-y-por-que-lo-necesita-tu-empresa", "automatizacion-empresas-make", "ia-automatizacion-negocios"],
  "ecommerce": ["tienda-nube-vs-woocommerce", "5-automatizaciones-email-marketing-ecommerce"],
  "chatbots": ["cuanto-cuesta-chatbot-ia", "chatbot-vs-agente-conversacional-ia", "chatbot-whatsapp-para-empresas"],
  "atencion-cliente-ia": ["agente-ia-atencion-cliente", "que-es-un-agente-ia", "chatbot-vs-agente-conversacional-ia"],
  "desarrollo-software": ["mi-empresa-necesita-inteligencia-artificial", "ia-automatizacion-negocios", "automatizacion-ia-pymes-casos"],
};

const CASE_STUDY_SOLUTION: Record<string, string> = {
  autodux: "aplicaciones-web",
  "soy-lidia": "chatbots",
  "alora-crm": "aplicaciones-web",
  "castro-yeso": "desarrollo-web",
  alkemia: "desarrollo-web",
  distrisal: "ecommerce",
  voutier: "ecommerce",
  mimikids: "ecommerce",
};

const CASE_STUDY_BLOG_POSTS: Record<string, string[]> = {
  autodux: ["que-es-un-crm-y-por-que-lo-necesita-tu-empresa", "automatizacion-empresas-make"],
  "soy-lidia": ["cuanto-cuesta-chatbot-ia", "chatbot-clinicas-turnos-whatsapp", "agente-ia-atencion-cliente"],
  "alora-crm": ["que-es-un-crm-y-por-que-lo-necesita-tu-empresa", "agente-ia-atencion-cliente"],
  "castro-yeso": ["landing-page-vs-sitio-web", "guia-seo-tecnico-2026-atraer-clientes"],
  alkemia: ["landing-page-vs-sitio-web", "tendencias-seo-para-desarrolladores"],
  distrisal: ["tienda-nube-vs-woocommerce", "automatizacion-empresas-make"],
  voutier: ["tienda-nube-vs-woocommerce", "5-automatizaciones-email-marketing-ecommerce"],
  mimikids: ["tienda-nube-vs-woocommerce", "5-automatizaciones-email-marketing-ecommerce"],
};

function blogCard(slug: string, locale: Locale): RelatedCard | null {
  const post = getBlogPost(slug);
  if (!post) return null;
  return { href: `/${locale}/blog/${slug}`, title: post.title[locale], eyebrow: post.category[locale], image: post.image };
}

function solutionCard(slug: string, locale: Locale): RelatedCard | null {
  const sol = getSolution(slug);
  if (!sol) return null;
  return { href: `/${locale}/soluciones/${slug}`, title: sol.hero[locale].badge, eyebrow: locale === "es" ? "Solución" : "Solution", image: sol.heroImage };
}

export function getRelatedBlogPostsForSolution(slug: string, locale: Locale): RelatedCard[] {
  return (SOLUTION_BLOG_POSTS[slug] ?? []).map((s) => blogCard(s, locale)).filter((c): c is RelatedCard => c !== null);
}

export function getRelatedSolutionForCaseStudy(slug: string, locale: Locale): RelatedCard[] {
  const solutionSlug = CASE_STUDY_SOLUTION[slug];
  if (!solutionSlug) return [];
  const card = solutionCard(solutionSlug, locale);
  return card ? [card] : [];
}

export function getRelatedBlogPostsForCaseStudy(slug: string, locale: Locale): RelatedCard[] {
  return (CASE_STUDY_BLOG_POSTS[slug] ?? []).map((s) => blogCard(s, locale)).filter((c): c is RelatedCard => c !== null);
}
