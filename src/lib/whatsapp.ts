/**
 * Shared WhatsApp link builder.
 * The prefilled text is what the VISITOR sends to ALORA's WhatsApp — always
 * written in the visitor's own voice, naming the page they came from so
 * incoming chats can be traced back to their landing page.
 */

const WA_NUMBER = "5491124629452";

interface PageContext {
  label: string;
  isCaseStudy: boolean;
}

function getPageContext(pathname: string): PageContext | null {
  const segments = pathname.split("/").filter(Boolean).filter((s) => s !== "es" && s !== "en");
  if (segments.length === 0) return null;
  const label = segments[segments.length - 1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const isCaseStudy = segments[0] === "casos-de-exito" && segments.length > 1;
  return { label, isCaseStudy };
}

export function buildWhatsAppHref(pathname: string, locale: string): string {
  const ctx = getPageContext(pathname);
  const message = locale === "es"
    ? ctx
      ? ctx.isCaseStudy
        ? `Hola! Quiero saber más sobre sus servicios. Estuve recién en la página del caso de éxito de ${ctx.label} y quiero hablar con ustedes.`
        : `Hola! Quiero saber más sobre sus servicios. Estuve recién en la página de ${ctx.label} y quiero hablar con ustedes.`
      : "Hola! Quiero saber más sobre sus servicios y quiero hablar con ustedes."
    : ctx
      ? ctx.isCaseStudy
        ? `Hi! I'd like to know more about your services. I was just on the ${ctx.label} case study page and would like to talk to you.`
        : `Hi! I'd like to know more about your services. I was just on the ${ctx.label} page and would like to talk to you.`
      : "Hi! I'd like to know more about your services and would like to talk to you.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
