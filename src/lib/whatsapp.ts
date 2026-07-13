/**
 * Shared WhatsApp link builder.
 * Appends a page-specific line to every message so incoming chats show which
 * landing page the click came from, without maintaining a slug->label map.
 */

const WA_NUMBER = "5491124629452";

function pageLabel(pathname: string, locale: string): string {
  const segments = pathname.split("/").filter(Boolean).filter((s) => s !== "es" && s !== "en");
  if (segments.length === 0) return locale === "es" ? "Inicio" : "Home";
  return segments[segments.length - 1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Builds a wa.me href whose prefilled text always includes the landing page,
 * so a WhatsApp click can be traced back to the page it originated from.
 */
export function buildWhatsAppHref(pathname: string, locale: string, baseMessage?: string): string {
  const label = pageLabel(pathname, locale);
  const contextLine = locale === "es" ? `Te escribo desde: ${label}.` : `I'm writing from: ${label}.`;
  const message = baseMessage ? `${baseMessage}\n\n${contextLine}` : contextLine;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
