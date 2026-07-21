"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

interface Message { from: "user" | "bot"; text: string; }

const CONTACT = { whatsapp: "+541124629452", email: "info@globalalora.com" };
const CAREERS_EMAIL = "info@globalalora.com";
const EMAILJS_SVC = "service_6r3ee9k";
const EMAILJS_TPL = "template_chatbot_lead";
const EMAILJS_KEY = "CwpWaIXVC5Pdb4Kae";

const CAREER_KEYWORDS = ["cv","curriculum","currículo","curriculo","resumen","resume","trabajo","trabajar","postular","aplicar","empleo","job","jobs","career","careers","hire","hiring","freelance","colaborar","portfolio","portafolio"];
const RETAIL_KEYWORDS = ["pedido","orden","compra","comprar","producto","productos","envio","envío","entrega","tienda","proveedor","order","purchase","shipping","delivery","store","package","merch","refund","return"];

const normalizeText = (t = "") => t.toLowerCase().normalize("NFD").replace(/[^\w\s@.+-]/g,"").replace(/\s+/g," ").trim();

function detectIntent(text: string): "career" | "retail" | null {
  const n = normalizeText(text);
  if (CAREER_KEYWORDS.some((k) => n.includes(k))) return "career";
  if (RETAIL_KEYWORDS.some((k) => n.includes(k))) return "retail";
  return null;
}

const AFFIRMATIVE: Record<string, string[]> = {
  es: ["si","sí","dale","ok","okay","claro","por supuesto","obvio"],
  en: ["yes","yeah","sure","ok","okay","alright","of course"],
};
const NEGATIVE: Record<string, string[]> = {
  es: ["no","nop","despues","después","mas tarde","más tarde","no gracias"],
  en: ["no","not really","maybe later","later","not now","no thanks"],
};

function isAffirmative(text: string, locale: string) {
  const n = normalizeText(text);
  return (AFFIRMATIVE[locale] ?? AFFIRMATIVE.es).some((w) => n === w || n.startsWith(w + " ") || n.endsWith(" " + w));
}
function isNegative(text: string, locale: string) {
  const n = normalizeText(text);
  return (NEGATIVE[locale] ?? NEGATIVE.es).some((w) => n === w || n.startsWith(w + " "));
}

function renderWithLinks(text: string) {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = urlRegex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(<a key={match.index} href={match[0]} target="_blank" rel="noopener noreferrer" className="underline text-[var(--turquoise)] hover:opacity-80">{match[0]}</a>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

async function sendEmailJS(params: Record<string, string>) {
  try {
    const { default: emailjs } = await import("@emailjs/browser");
    await emailjs.send(EMAILJS_SVC, EMAILJS_TPL, params, EMAILJS_KEY);
  } catch { /* fire and forget */ }
}

async function sendWebhooks(data: Record<string, string>) {
  fetch("/api/clay-webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source: "chatbot", ...data }),
  }).catch(() => {});
}

type Step = "chat" | "offer" | "name" | "email" | "phone" | "confirm_phone" | "done";

export function Chatbot({ dict, locale }: Props) {
  const t = dict.chatbot;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState<Step>("chat");
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
  const [msgsSinceOffer, setMsgsSinceOffer] = useState(0);
  const [hasOffered, setHasOffered] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const conversationId = useRef(`chat_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`);
  const hasEngaged = useRef(false);

  const botMsg = useCallback((text: string) => {
    setMessages((prev) => [...prev, { from: "bot", text }]);
  }, []);

  useEffect(() => {
    botMsg(t.welcome);
  }, [locale, t.welcome, botMsg]);

  // Auto-open after 5s on the first page of the visit — skipped on mobile,
  // where the panel covers most of the viewport (hero CTAs, nav) instead of
  // sitting in a small corner widget. Only once per browser session: a
  // sessionStorage flag (not just in-memory state) makes sure it doesn't
  // pop again on a later page even after a full navigation/reload, since it
  // already got its one chance to greet the visitor.
  const AUTO_OPENED_KEY = "alora_chatbot_autoopened";
  useEffect(() => {
    if (hasAutoOpened) return;
    if (window.innerWidth < 768) return;
    if (sessionStorage.getItem(AUTO_OPENED_KEY)) return;
    const id = setTimeout(() => {
      setOpen(true);
      setHasAutoOpened(true);
      sessionStorage.setItem(AUTO_OPENED_KEY, "1");
    }, 5000);
    return () => clearTimeout(id);
  }, [hasAutoOpened, pathname]);

  // Close the chat the instant a visitor focuses any field in a page's own
  // contact form — the panel is fixed bottom-right and can otherwise sit on
  // top of that form's submit button. The chat's own input isn't inside a
  // <form> element, so this never fires from typing a chat message.
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      if ((e.target as HTMLElement | null)?.closest("form")) setOpen(false);
    };
    document.addEventListener("focusin", handleFocusIn);
    return () => document.removeEventListener("focusin", handleFocusIn);
  }, []);

  // Scroll to bottom
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

  // Focus input on open
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 120); }, [open]);

  const addUserMsg = (text: string) => setMessages((prev) => [...prev, { from: "user", text }]);

  const askGroq = async (text: string, history: Message[]) => {
    setIsTyping(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, language: locale, conversationId: conversationId.current }),
      });
      const reply = res.ok ? await res.text() : t.error;
      botMsg(reply.trim() || t.error);

      // After N messages without offering, offer contact
      const newCount = msgsSinceOffer + 1;
      setMsgsSinceOffer(newCount);
      if (!hasOffered && newCount >= 3) {
        setTimeout(() => { botMsg(t.offerContact); setStep("offer"); setHasOffered(true); }, 600);
      }
    } catch {
      botMsg(t.error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isTyping) return;
    setInput("");
    addUserMsg(text);
    if (!hasEngaged.current) {
      hasEngaged.current = true;
      trackEvent("chatbot_engaged", { landing_page: pathname });
    }
    const newHistory: Message[] = [...messages, { from: "user", text }];

    // Career intent
    if (detectIntent(text) === "career") {
      botMsg(locale === "es"
        ? `¡Gracias por tu interés en Alora! Gestionamos las postulaciones por email. Enviá tu CV a ${CAREERS_EMAIL} con el asunto "Quiero colaborar con Alora".`
        : `Thanks for your interest in Alora! Please send your CV to ${CAREERS_EMAIL} with subject "Join Alora".`
      );
      return;
    }

    // Lead collection flow
    if (step === "offer") {
      if (isAffirmative(text, locale)) {
        botMsg(t.askName);
        setStep("name");
      } else {
        botMsg(t.continueChat);
        setStep("chat");
      }
      return;
    }

    if (step === "name") {
      const looksLikePhone = /^[\+\d][\d\s\-().]{5,}$/.test(text.trim());
      const looksLikeEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(text);
      if (looksLikePhone || looksLikeEmail) {
        botMsg(locale === "es"
          ? "Eso parece un teléfono o email 😊 ¿Podés escribirme solo tu nombre?"
          : "That looks like a phone or email 😊 Could you share just your name?");
        return;
      }
      setUserData((p) => ({ ...p, name: text }));
      botMsg(t.askEmail);
      setStep("email");
      return;
    }

    if (step === "email") {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(text)) {
        botMsg(t.invalidEmail);
        return;
      }
      setUserData((p) => ({ ...p, email: text }));
      botMsg(t.askPhone);
      setStep("phone");
      return;
    }

    if (step === "phone") {
      const looksLikePhone = /^[\+\d][\d\s\-().]{5,}$/.test(text.trim());
      if (!looksLikePhone) {
        botMsg(locale === "es"
          ? "¿Podés escribirme tu número de teléfono? Solo los números está bien 😊"
          : "Could you share your phone number? Just the digits is fine 😊");
        return;
      }
      setUserData((p) => ({ ...p, phone: text }));
      botMsg(locale === "es"
        ? `Tu número es *${text}* — ¿está bien? (Sí / No)`
        : `Your number is *${text}* — is that correct? (Yes / No)`);
      setStep("confirm_phone");
      return;
    }

    if (step === "confirm_phone") {
      if (isNegative(text, locale)) {
        botMsg(locale === "es"
          ? "Sin problema, ¿cuál es tu número correcto?"
          : "No problem, what's your correct number?");
        setStep("phone");
        return;
      }
      // Affirmative or anything else → confirm and send
      const { name, email, phone } = userData;
      setStep("done");
      botMsg(t.thankYou);
      const conv = newHistory.map((m) => `${m.from === "user" ? "Cliente" : "Bot"}: ${m.text}`).join("\n\n");
      void sendEmailJS({ lead_contact: `Email: ${email}\nTeléfono: ${phone}`, lead_type: "Chatbot completo", conversation: conv, user_message: text, date: new Date().toLocaleString("es-AR") });
      void sendWebhooks({ nombre: name, email, telefono: phone, locale, conversationId: conversationId.current, source: "chatbot", landingPage: pathname });
      trackEvent("chatbot_lead", { landing_page: pathname });
      return;
    }

    // Detect if user shared contact info mid-chat
    const phoneRe = /(\+?54\s?9?\s?)?(\d{2,4})[\s-]?(\d{6,8})|(\d{10,})/g;
    const emailRe = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const phones = text.match(phoneRe);
    const emails = text.match(emailRe);
    if (phones || emails) {
      const conv = newHistory.map((m) => `${m.from === "user" ? "Cliente" : "Bot"}: ${m.text}`).join("\n\n");
      void sendEmailJS({ lead_contact: [phones ? `Teléfono: ${phones.join(", ")}` : null, emails ? `Email: ${emails.join(", ")}` : null].filter(Boolean).join("\n"), lead_type: phones && emails ? "Tel+Email" : phones ? "Teléfono" : "Email", conversation: conv, user_message: text, date: new Date().toLocaleString("es-AR") });
    }

    await askGroq(text, newHistory);
  };

  const onKey = (e: React.KeyboardEvent) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Pulse notification */}
        {!open && (
          <div
            className="rounded-xl border px-4 py-2.5 text-[13px] font-medium text-white shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
            style={{ background: "rgba(10,12,22,0.92)", borderColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
            onClick={() => setOpen(true)}
          >
            {t.bubble}
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, var(--turquoise), var(--electric))",
            boxShadow: "0 8px 28px -6px color-mix(in oklab, var(--turquoise) 50%, transparent)",
          }}
          aria-label={open ? t.close : t.open}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" /></svg>
          )}
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "color-mix(in oklab, var(--turquoise) 35%, transparent)" }} />
          )}
        </button>
      </div>

      {/* Chat panel */}
      <div
        className="fixed bottom-24 right-6 z-50 transition-all duration-300"
        style={{
          width: "360px",
          maxHeight: "520px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transform: open ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
          transformOrigin: "bottom right",
        }}
      >
        {/* Glow halo — without this the panel blends into dark page backgrounds */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-[20px] opacity-40 blur-lg"
          style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric), var(--violet))" }}
        />
        <div
          className="relative flex h-full max-h-[520px] flex-col overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(165deg, oklch(0.19 0.022 260), oklch(0.11 0.014 260))",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px -14px rgba(0,0,0,0.65)",
            backdropFilter: "blur(16px)",
          }}
        >
        {/* Header */}
        <div className="flex items-center gap-3 border-b px-4 py-3.5" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="2" strokeLinejoin="round" /></svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white/90">{t.agentName}</p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="text-[11px] text-white/45">{t.online}</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label={t.close} className="ml-auto text-white/50 transition-colors hover:text-white/70">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed"
                style={msg.from === "bot"
                  ? { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.88)" }
                  : { background: "linear-gradient(135deg, color-mix(in oklab, var(--turquoise) 70%, oklch(0.13 0.015 260)), color-mix(in oklab, var(--electric) 60%, oklch(0.13 0.015 260)))", color: "white" }
                }
              >
                {renderWithLinks(msg.text)}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1 rounded-2xl px-4 py-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {[0,1,2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/40" style={{ animation: `chatDot 1.2s ease-in-out ${i*0.2}s infinite` }} />)}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border-t p-3" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder={t.inputPlaceholder}
            className="flex-1 rounded-xl px-4 py-2.5 text-[16px] text-white/90 placeholder:text-white/25 outline-none"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            aria-label={locale === "es" ? "Enviar mensaje" : "Send message"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all disabled:opacity-40 hover:scale-105"
            style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        </div>
      </div>

      <style>{`
        @keyframes chatDot { 0%,80%,100%{opacity:.25;transform:scale(.8)} 40%{opacity:1;transform:scale(1)} }
      `}</style>
    </>
  );
}
