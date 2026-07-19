/**
 * Blog categories mirror ALORA's own solutions 1:1, so a reader filtering
 * by category ends up looking at the same grouping as the Soluciones menu.
 * Colors reuse each solution's theme.primary from solutions-data.ts.
 */
export interface BlogCategory {
  es: string;
  en: string;
  color: string;
  solutionSlug: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { es: "Desarrollo Web", en: "Web Development", color: "var(--turquoise)", solutionSlug: "desarrollo-web" },
  { es: "Ecommerce", en: "Ecommerce", color: "var(--violet)", solutionSlug: "ecommerce" },
  { es: "Inteligencia Artificial", en: "Artificial Intelligence", color: "var(--electric)", solutionSlug: "chatbots" },
  { es: "Desarrollo de Software", en: "Software Development", color: "var(--turquoise)", solutionSlug: "desarrollo-software" },
];

export function getCategoryColor(categoryName: string): string {
  const match = BLOG_CATEGORIES.find((c) => c.es === categoryName || c.en === categoryName);
  return match?.color ?? "var(--turquoise)";
}
