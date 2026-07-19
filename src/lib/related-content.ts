import { getBlogPost } from "./blog-data";

type Locale = "es" | "en";

export interface RelatedCard {
  href: string;
  title: string;
  eyebrow: string;
  image?: string;
  imageAlt?: string;
}

const SOLUTION_BLOG_POSTS: Record<string, string[]> = {
  "desarrollo-web": ["mi-empresa-necesita-inteligencia-artificial", "que-es-un-crm-y-por-que-lo-necesita-tu-empresa"],
  "aplicaciones-web": ["que-es-un-crm-y-por-que-lo-necesita-tu-empresa", "ia-automatizacion-negocios", "automatizacion-ia-pymes-casos"],
  "ecommerce": [],
  "chatbots": ["cuanto-cuesta-chatbot-ia", "chatbot-vs-agente-conversacional-ia", "chatbot-whatsapp-para-empresas"],
  "atencion-cliente-ia": ["agente-ia-atencion-cliente", "chatbot-vs-agente-conversacional-ia", "chatbot-whatsapp-para-empresas"],
  "desarrollo-software": ["mi-empresa-necesita-inteligencia-artificial", "ia-automatizacion-negocios", "automatizacion-ia-pymes-casos"],
};

const CASE_STUDY_BLOG_POSTS: Record<string, string[]> = {
  autodux: ["que-es-un-crm-y-por-que-lo-necesita-tu-empresa", "ia-automatizacion-negocios"],
  "soy-lidia": ["cuanto-cuesta-chatbot-ia", "chatbot-clinicas-turnos-whatsapp", "agente-ia-atencion-cliente"],
  "alora-crm": ["que-es-un-crm-y-por-que-lo-necesita-tu-empresa", "agente-ia-atencion-cliente"],
  "castro-yeso": ["chatbot-whatsapp-para-empresas", "mi-empresa-necesita-inteligencia-artificial"],
  alkemia: ["mi-empresa-necesita-inteligencia-artificial", "ia-automatizacion-negocios"],
  distrisal: [],
  voutier: [],
  mimikids: [],
};

function blogCard(slug: string, locale: Locale): RelatedCard | null {
  const post = getBlogPost(slug);
  if (!post || !post.image) return null;
  return { href: `/${locale}/blog/${slug}`, title: post.title[locale], eyebrow: post.category[locale][0], image: post.image, imageAlt: post.imageAlt?.[locale] };
}

export function getRelatedBlogPostsForSolution(slug: string, locale: Locale): RelatedCard[] {
  return (SOLUTION_BLOG_POSTS[slug] ?? []).map((s) => blogCard(s, locale)).filter((c): c is RelatedCard => c !== null);
}

export function getRelatedBlogPostsForCaseStudy(slug: string, locale: Locale): RelatedCard[] {
  return (CASE_STUDY_BLOG_POSTS[slug] ?? []).map((s) => blogCard(s, locale)).filter((c): c is RelatedCard => c !== null);
}
