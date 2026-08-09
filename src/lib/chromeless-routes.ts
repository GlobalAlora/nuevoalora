// Routes that must never show the shared WhatsApp bubble, chatbot or
// exit-intent popup that src/app/[locale]/layout.tsx injects on every page
// by default — the AI-audit funnel is meant to have no exits before its own
// form. Slugs only (no /es or /en prefix): matched against the pathname
// with .includes(), so it works for both locales automatically.
const CHROMELESS_SLUGS = [
  "/ia-para-empresas",
  "/gracias-ia-empresas",
  "/reservar-auditoria-ia-empresas",
  "/auditoria-ia-empresas-reservada",
];

export function isChromelessPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return CHROMELESS_SLUGS.some((slug) => pathname.includes(slug));
}
