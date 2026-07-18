import { getSolution } from "./solutions-data";
import { getBlogPost } from "./blog-data";

type Locale = "es" | "en";

export interface RelatedCard {
  href: string;
  title: string;
  eyebrow: string;
  image?: string;
}

// Only ~9 posts have a cover image today. Keep these lists limited to posts
// that do — blogCard() also guards this, but curating the list avoids
// reaching for an off-topic post just to fill a slot.
const SOLUTION_BLOG_POSTS: Record<string, string[]> = {
  "desarrollo-web": ["mi-empresa-necesita-inteligencia-artificial", "que-es-un-crm-y-por-que-lo-necesita-tu-empresa"],
  "aplicaciones-web": ["que-es-un-crm-y-por-que-lo-necesita-tu-empresa", "ia-automatizacion-negocios", "automatizacion-ia-pymes-casos"],
  "ecommerce": [],
  "chatbots": ["cuanto-cuesta-chatbot-ia", "chatbot-vs-agente-conversacional-ia", "chatbot-whatsapp-para-empresas"],
  "atencion-cliente-ia": ["agente-ia-atencion-cliente", "chatbot-vs-agente-conversacional-ia", "chatbot-whatsapp-para-empresas"],
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

// No solution page has its own heroImage — reuse the most representative
// case study screenshot instead of falling back to a blank gradient card.
const SOLUTION_CARD_IMAGE: Record<string, string> = {
  "desarrollo-web": "/images/case-studies/alkemia/hero.png",
  "aplicaciones-web": "/images/case-studies/autodux/hero.png",
  "ecommerce": "/images/case-studies/mimikids/hero-v2.png",
  "chatbots": "/images/case-studies/soy-lidia/hero.png",
  "atencion-cliente-ia": "/images/case-studies/alora-crm/hero.png",
  "desarrollo-software": "/images/case-studies/alora-crm/hero.png",
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
  return { href: `/${locale}/blog/${slug}`, title: post.title[locale], eyebrow: post.category[locale], image: post.image };
}

function solutionCard(slug: string, locale: Locale): RelatedCard | null {
  const sol = getSolution(slug);
  if (!sol) return null;
  return { href: `/${locale}/soluciones/${slug}`, title: sol.hero[locale].badge, eyebrow: locale === "es" ? "Solución" : "Solution", image: SOLUTION_CARD_IMAGE[slug] };
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
