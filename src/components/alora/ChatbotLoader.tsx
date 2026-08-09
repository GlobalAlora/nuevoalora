"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";
import { isChromelessPath } from "@/lib/chromeless-routes";

// Chatbot is a substantial client component (chat state machine, webhook
// calls, several effects) rendered on every single page via the root
// locale layout, whether or not a visitor ever opens it. Code-splitting it
// out with ssr:false keeps its JS off the critical path entirely — it
// loads after the page is interactive instead of competing with LCP.
const Chatbot = dynamic(() => import("./Chatbot").then((m) => m.Chatbot), { ssr: false });

export function ChatbotLoader({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const pathname = usePathname();
  if (isChromelessPath(pathname)) return null;
  return <Chatbot dict={dict} locale={locale} />;
}
