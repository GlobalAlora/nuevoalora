"use client";

import { useRef } from "react";

interface Props {
  slug: string;
  accent: string;
  accent2: string;
  locale?: "es" | "en";
}

interface VariantProps {
  accent: string;
  accent2: string;
  locale: "es" | "en";
}

const T = {
  es: {
    codeEditor: {
      tab: "index.tsx",
      build: "Build exitoso",
      ai: "Sugerencia IA",
    },
    webBuilder: { cta: "Ver más", score: "Rendimiento" },
    kanban: { todo: "Por hacer", doing: "En curso", done: "Listo" },
    ecommerce: { cart: "Carrito", pay: "Pago", done: "Listo", new: "Nuevo", off: "-20%" },
    chatbot: {
      bot: "Chatbot",
      ask: "¿En qué te podemos ayudar hoy?",
      chips: ["Cotización", "Agendar llamada", "Hablar con asesor"],
      picked: "Quiero agendar una llamada",
      confirm: "¡Listo! Elegí un horario disponible 👇",
      slots: ["Mar 10:00", "Mié 15:30"],
      step: "Paso 2 de 3",
    },
    agent: {
      label: "Agente IA",
      msg1: "Hola, ¿tenés turno para el jueves? Y de paso, ¿cuánto sale la consulta?",
      msg2: "¡Sí! Tengo lugar el jueves a las 11hs, la consulta sale $15.000. ¿Te lo reservo?",
      msg3: "Dale, resérvamelo",
      msg4: "Listo, quedás confirmado para el jueves a las 11hs 🙌",
      contextLabel: "Por qué no es un chatbot",
      tag1: "Entiende preguntas combinadas",
      tag2: "Sin opciones prearmadas",
      tag3: "Recuerda el contexto",
    },
  },
  en: {
    codeEditor: {
      tab: "index.tsx",
      build: "Build successful",
      ai: "AI suggestion",
    },
    webBuilder: { cta: "Learn more", score: "Performance" },
    kanban: { todo: "To do", doing: "In progress", done: "Done" },
    ecommerce: { cart: "Cart", pay: "Payment", done: "Done", new: "New", off: "-20%" },
    chatbot: {
      bot: "Chatbot",
      ask: "How can we help you today?",
      chips: ["Get a quote", "Book a call", "Talk to sales"],
      picked: "I want to book a call",
      confirm: "Done! Pick an available time 👇",
      slots: ["Tue 10:00", "Wed 3:30"],
      step: "Step 2 of 3",
    },
    agent: {
      label: "AI Agent",
      msg1: "Hi, do you have an opening Thursday? And how much is the consultation?",
      msg2: "Yes! I have an opening Thursday at 11am, the consultation is $150. Want me to book it?",
      msg3: "Yes, go ahead and book it",
      msg4: "Done, you're confirmed for Thursday at 11am 🙌",
      contextLabel: "Why this isn't a chatbot",
      tag1: "Understands combined questions",
      tag2: "No pre-set menu options",
      tag3: "Remembers the context",
    },
  },
};

/* Ambient glow blobs shared behind every graphic for depth */
function GlowBg({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
      <div className="sg-blob-a absolute left-[8%] top-[10%] h-[160px] w-[160px] rounded-full blur-3xl opacity-40" style={{ background: accent }} />
      <div className="sg-blob-b absolute right-[10%] bottom-[12%] h-[180px] w-[180px] rounded-full blur-3xl opacity-30" style={{ background: accent2 }} />
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="sg-particle absolute h-1 w-1 rounded-full"
          style={{
            left: `${15 + i * 18}%`,
            top: `${10 + (i % 3) * 30}%`,
            background: i % 2 === 0 ? accent : accent2,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

function SpotFrame({ children, accent, className = "" }: { children: React.ReactNode; accent: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - r.left}px`);
    el.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`sg-frame sg-float relative overflow-hidden rounded-2xl border ${className}`}
      style={{
        borderColor: "rgba(255,255,255,0.12)",
        background: "linear-gradient(160deg, oklch(0.18 0.02 260), oklch(0.12 0.014 260))",
        boxShadow: `0 40px 90px -20px color-mix(in oklab, ${accent} 40%, transparent), inset 0 1px 0 rgba(255,255,255,0.08)`,
        ["--accent" as string]: accent,
      }}
    >
      <span className="sg-frame-spot pointer-events-none absolute inset-0" />
      {children}
    </div>
  );
}

function ChromeBar({ label, accent }: { label?: string; accent?: string }) {
  return (
    <div className="relative flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
      {label && <span className="ml-2 text-[10.5px] text-white/50">{label}</span>}
      {accent && <span className="sg-live ml-auto flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider" style={{ color: accent }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />live</span>}
    </div>
  );
}

function Avatar({ color, bot }: { color: string; bot?: boolean }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold" style={{ background: `color-mix(in oklab, ${color} 30%, transparent)`, color, border: `1px solid color-mix(in oklab, ${color} 55%, transparent)` }}>
      {bot ? (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none"><rect x="4" y="8" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M12 8V5M9 5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="9" cy="13.5" r="1.2" fill="currentColor" /><circle cx="15" cy="13.5" r="1.2" fill="currentColor" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none"><circle cx="12" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.6" /><path d="M5 19c1.2-3.4 4-5 7-5s5.8 1.6 7 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      )}
    </span>
  );
}

/* 1. Desarrollo de Software — code editor with AI suggestion */
function CodeEditorGraphic({ accent, accent2, locale }: VariantProps) {
  const t = T[locale].codeEditor;
  const lines: { w: string; indent: number; color: string }[] = [
    { w: "34%", indent: 0, color: accent2 },
    { w: "58%", indent: 1, color: "rgba(255,255,255,0.6)" },
    { w: "44%", indent: 1, color: accent },
    { w: "68%", indent: 2, color: "rgba(255,255,255,0.45)" },
    { w: "26%", indent: 2, color: accent2 },
    { w: "50%", indent: 1, color: accent },
    { w: "56%", indent: 0, color: "rgba(255,255,255,0.6)" },
  ];
  return (
    <div className="relative">
      <GlowBg accent={accent} accent2={accent2} />
      <div className="sg-float-slow absolute -right-6 -top-6 w-[70%] opacity-40" style={{ animationDelay: "0.3s" }}>
        <div className="h-24 rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.08)", background: "oklch(0.14 0.014 260)" }} />
      </div>
      <SpotFrame accent={accent}>
        <ChromeBar label={t.tab} accent={accent2} />
        <div className="flex gap-4 p-5">
          <div className="flex flex-col gap-3 pt-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="h-3 w-3 rounded-sm" style={{ background: i === 1 ? accent : "rgba(255,255,255,0.18)" }} />
            ))}
          </div>
          <div className="flex-1 space-y-3">
            {lines.map((ln, i) => (
              <div key={i} className="flex items-center gap-2" style={{ paddingLeft: `${ln.indent * 14}px` }}>
                <span className="text-[10px] text-white/25">{i + 1}</span>
                <span
                  className="sg-code-line h-3 rounded-full"
                  style={{ width: ln.w, background: ln.color, boxShadow: `0 0 8px color-mix(in oklab, ${ln.color === "rgba(255,255,255,0.6)" || ln.color === "rgba(255,255,255,0.45)" ? accent : ln.color} 40%, transparent)`, animationDelay: `${i * 0.18}s` }}
                />
                {i === lines.length - 1 && <span className="sg-cursor h-3.5 w-[2px]" style={{ background: accent }} />}
              </div>
            ))}
            <div className="sg-ai-chip mt-2 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-medium" style={{ background: `color-mix(in oklab, ${accent2} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent2} 45%, transparent)`, color: accent2 }}>
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none"><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" fill="currentColor" /></svg>
              {t.ai}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-t px-5 py-3" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
          <span className="sg-blink h-2 w-2 rounded-full" style={{ background: "#28c840", boxShadow: "0 0 8px #28c840" }} />
          <span className="text-[11px] text-white/55">{t.build}</span>
        </div>
      </SpotFrame>
    </div>
  );
}

/* 2. Desarrollo Web — page being built, performance + SEO scored live */
function WebBuilderGraphic({ accent, accent2, locale }: VariantProps) {
  const t = T[locale].webBuilder;
  return (
    <div className="relative">
      <GlowBg accent={accent} accent2={accent2} />
      <SpotFrame accent={accent}>
        <ChromeBar accent={accent2} />
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="h-2.5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2 w-7 rounded-full" style={{ background: "rgba(255,255,255,0.14)" }} />
              ))}
            </div>
          </div>
          <div
            className="relative mb-3 h-[76px] overflow-hidden rounded-lg"
            style={{ background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 45%, transparent), color-mix(in oklab, ${accent2} 30%, transparent))` }}
          >
            <span className="sg-select-pulse absolute inset-0 rounded-lg border-2 border-dashed" style={{ borderColor: accent2 }} />
            <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-[3px]" style={{ background: accent2, boxShadow: `0 0 8px color-mix(in oklab, ${accent2} 60%, transparent)` }} />
            <span className="absolute -left-1.5 -bottom-1.5 h-3 w-3 rounded-[3px]" style={{ background: accent2, boxShadow: `0 0 8px color-mix(in oklab, ${accent2} 60%, transparent)` }} />
          </div>
          <div className="mb-1.5 h-3 w-3/4 rounded-full" style={{ background: "rgba(255,255,255,0.22)" }} />
          <div className="mb-1.5 h-2 w-full rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div className="mb-4 h-2 w-1/2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})`, boxShadow: `0 8px 20px -6px color-mix(in oklab, ${accent} 55%, transparent)` }}
          >
            {t.cta}
            <svg viewBox="0 0 16 16" width="10" height="10" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
      </SpotFrame>

      {/* floating performance gauge */}
      <div
        className="sg-float absolute -right-5 -top-5 flex h-[68px] w-[68px] items-center justify-center rounded-full border"
        style={{ borderColor: "rgba(255,255,255,0.12)", background: "oklch(0.17 0.02 260)", boxShadow: `0 18px 44px -10px color-mix(in oklab, ${accent} 55%, transparent)` }}
      >
        <svg viewBox="0 0 40 40" width="42" height="42" className="-rotate-90">
          <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
          <circle cx="20" cy="20" r="16" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" className="sg-gauge" style={{ strokeDasharray: 100 }} />
        </svg>
        <span className="absolute text-[12px] font-bold text-white">98</span>
      </div>
      <span className="sg-float absolute -right-2 top-[52px] text-[8px] font-medium uppercase tracking-wider text-white/50">{t.score}</span>

      {/* floating SEO badge */}
      <div
        className="sg-float-slow absolute -left-4 -bottom-4 flex items-center gap-1.5 rounded-full border px-3 py-1.5"
        style={{ borderColor: `color-mix(in oklab, ${accent2} 50%, transparent)`, background: "oklch(0.17 0.02 260)", boxShadow: `0 14px 34px -10px color-mix(in oklab, ${accent2} 50%, transparent)` }}
      >
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none"><path d="M5 13l4 4L19 7" stroke={accent2} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] font-semibold" style={{ color: accent2 }}>SEO</span>
      </div>
    </div>
  );
}

/* 3. Aplicaciones Web — kanban-style internal workflow tool */
function KanbanGraphic({ accent, accent2, locale }: VariantProps) {
  const t = T[locale].kanban;
  const columns = [
    { label: t.todo, dot: accent2 },
    { label: t.doing, dot: accent },
    { label: t.done, dot: "#28c840" },
  ];
  return (
    <div className="relative">
      <GlowBg accent={accent} accent2={accent2} />
      <SpotFrame accent={accent}>
        <ChromeBar accent={accent2} />
        <div className="grid grid-cols-3 gap-2.5 p-5">
          {columns.map((col, ci) => (
            <div key={col.label} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: col.dot, boxShadow: `0 0 6px ${col.dot}` }} />
                <span className="text-[8.5px] font-medium uppercase tracking-wide text-white/45">{col.label}</span>
              </div>
              <div className="space-y-1.5">
                {[0, 1].map((ri) => (
                  <div
                    key={ri}
                    className={`rounded-md p-2 ${ci === 1 && ri === 0 ? "sg-kanban-drag" : ""}`}
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
                  >
                    <span className="mb-1 block h-1.5 w-full rounded-full" style={{ background: `color-mix(in oklab, ${ci % 2 === 0 ? accent : accent2} 55%, transparent)` }} />
                    <span className="block h-1 w-2/3 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
                    {ci === 1 && ri === 0 && (
                      <span className="mt-1.5 flex -space-x-1">
                        <span className="h-3 w-3 rounded-full border" style={{ borderColor: "oklch(0.17 0.02 260)", background: accent }} />
                        <span className="h-3 w-3 rounded-full border" style={{ borderColor: "oklch(0.17 0.02 260)", background: accent2 }} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SpotFrame>
    </div>
  );
}

/* 4. Ecommerce — product grid + cart flow */
function EcommerceGraphic({ accent, accent2, locale }: VariantProps) {
  const t = T[locale].ecommerce;
  const products = [accent, accent2, accent2, accent];
  return (
    <div className="relative">
      <GlowBg accent={accent} accent2={accent2} />
      <SpotFrame accent={accent}>
        <ChromeBar accent={accent2} />
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="h-2.5 w-20 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: `color-mix(in oklab, ${accent} 25%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 45%, transparent)` }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none"><path d="M4 5h2l2 11h10l2-8H7" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="19" r="1.3" fill={accent} /><circle cx="17" cy="19" r="1.3" fill={accent} /></svg>
              <span className="sg-cart-badge absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white" style={{ background: accent2, boxShadow: `0 0 10px color-mix(in oklab, ${accent2} 60%, transparent)` }}>3</span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.map((c, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
                {i === 0 && (
                  <span className="absolute left-1.5 top-1.5 z-10 rounded-full px-1.5 py-0.5 text-[8px] font-bold text-white" style={{ background: accent2 }}>{t.new}</span>
                )}
                {i === 2 && (
                  <span className="absolute left-1.5 top-1.5 z-10 rounded-full px-1.5 py-0.5 text-[8px] font-bold text-white" style={{ background: accent }}>{t.off}</span>
                )}
                <div className="h-14 w-full" style={{ background: `linear-gradient(135deg, color-mix(in oklab, ${c} 45%, transparent), transparent)` }} />
                <div className="p-2">
                  <span className="block h-1.5 w-3/4 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
                  <span className="mt-1.5 block h-2 w-8 rounded-full" style={{ background: c, boxShadow: `0 0 6px color-mix(in oklab, ${c} 50%, transparent)` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="mb-2 h-1 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
              <span className="sg-progress block h-full rounded-full" style={{ background: `linear-gradient(90deg, ${accent}, ${accent2})` }} />
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/45">
              <span className="sg-step flex items-center gap-1" style={{ animationDelay: "0s" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} /> {t.cart}
              </span>
              <span className="sg-step flex items-center gap-1" style={{ animationDelay: "0.9s" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} /> {t.pay}
              </span>
              <span className="sg-step flex items-center gap-1" style={{ animationDelay: "1.8s" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} /> {t.done}
              </span>
            </div>
          </div>
        </div>
      </SpotFrame>
    </div>
  );
}

/* 5. Chatbots IA — guided flow (buttons, no free text) */
function ChatbotGraphic({ accent, accent2, locale }: VariantProps) {
  const t = T[locale].chatbot;
  return (
    <div className="relative">
      <GlowBg accent={accent} accent2={accent2} />
      <SpotFrame accent={accent}>
        <ChromeBar label={t.bot} accent={accent} />
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-start gap-2">
            <Avatar color={accent} bot />
            <div className="max-w-[76%] rounded-2xl rounded-tl-sm px-3.5 py-2.5" style={{ background: "rgba(255,255,255,0.07)" }}>
              <span className="text-[12px] leading-snug text-white/80">{t.ask}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pl-8">
            {t.chips.map((c, i) => (
              <span
                key={c}
                className="sg-chip rounded-full px-3 py-1.5 text-[11px] font-medium"
                style={{
                  border: `1px solid color-mix(in oklab, ${i % 2 === 0 ? accent : accent2} 55%, transparent)`,
                  color: i % 2 === 0 ? accent : accent2,
                  background: `color-mix(in oklab, ${i % 2 === 0 ? accent : accent2} 10%, transparent)`,
                  animationDelay: `${i * 1.1}s`,
                }}
              >
                {c}
              </span>
            ))}
          </div>
          <div className="ml-auto flex items-start gap-2">
            <div className="max-w-[64%] rounded-2xl rounded-tr-sm px-3.5 py-2.5" style={{ background: `color-mix(in oklab, ${accent} 28%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 45%, transparent)` }}>
              <span className="text-[12px] font-medium text-white/95">{t.picked}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Avatar color={accent} bot />
            <div className="max-w-[76%] rounded-2xl rounded-tl-sm px-3.5 py-2.5" style={{ background: "rgba(255,255,255,0.07)" }}>
              <span className="block text-[12px] leading-snug text-white/80">{t.confirm}</span>
              <div className="mt-2 flex gap-1.5">
                {t.slots.map((s, i) => (
                  <span key={s} className="sg-chip rounded-lg px-2.5 py-1 text-[10px] font-semibold" style={{ background: `color-mix(in oklab, ${accent2} 22%, transparent)`, color: accent2, animationDelay: `${1.5 + i * 0.6}s` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 pt-1 pl-8">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 rounded-full transition-all" style={{ width: i === 1 ? "16px" : "6px", background: i === 1 ? accent : "rgba(255,255,255,0.18)" }} />
            ))}
            <span className="ml-1.5 text-[10px] text-white/50">{t.step}</span>
          </div>
        </div>
      </SpotFrame>
    </div>
  );
}

/* 6. Agentes Conversacionales IA — real free-form conversation + a live "understanding" panel, deliberately distinct from the Chatbot's button-driven flow */
function ContextTag({ icon, text, color, delay }: { icon: React.ReactNode; text: string; color: string; delay: string }) {
  return (
    <div
      className="sg-context-tag flex items-center gap-1.5 rounded-full px-2.5 py-1.5"
      style={{ background: `color-mix(in oklab, ${color} 14%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 40%, transparent)`, animationDelay: delay }}
    >
      <span style={{ color }}>{icon}</span>
      <span className="text-[9px] font-medium leading-none text-white/85">{text}</span>
    </div>
  );
}

function AgentGraphic({ accent, accent2, locale }: VariantProps) {
  const t = T[locale].agent;
  return (
    <div className="relative">
      <GlowBg accent={accent} accent2={accent2} />
      <SpotFrame accent={accent}>
        <ChromeBar label={t.label} accent={accent2} />
        <div className="flex flex-col gap-2.5 p-5">
          <div className="flex items-start gap-2">
            <Avatar color={accent} bot={false} />
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm px-3.5 py-2.5" style={{ background: "rgba(255,255,255,0.07)" }}>
              <span className="text-[11px] leading-snug text-white/80">{t.msg1}</span>
            </div>
          </div>
          <div className="ml-auto flex items-start gap-2">
            <div className="max-w-[82%] rounded-2xl rounded-tr-sm px-3.5 py-2.5" style={{ background: `color-mix(in oklab, ${accent} 26%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 42%, transparent)` }}>
              <span className="text-[11px] leading-snug text-white/95">{t.msg2}</span>
            </div>
            <Avatar color={accent} bot />
          </div>
          <div className="flex items-start gap-2">
            <Avatar color={accent} bot={false} />
            <div className="max-w-[60%] rounded-2xl rounded-tl-sm px-3.5 py-2.5" style={{ background: "rgba(255,255,255,0.07)" }}>
              <span className="text-[11px] leading-snug text-white/80">{t.msg3}</span>
            </div>
          </div>
          <div className="ml-auto flex items-start gap-2">
            <div className="max-w-[78%] rounded-2xl rounded-tr-sm px-3.5 py-2.5" style={{ background: `color-mix(in oklab, ${accent} 26%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 42%, transparent)` }}>
              <span className="text-[11px] leading-snug text-white/95">{t.msg4}</span>
            </div>
            <Avatar color={accent} bot />
          </div>
        </div>
      </SpotFrame>

      {/* floating "understanding" panel — what actually sets a real conversational agent apart from a guided chatbot */}
      <div
        className="sg-float absolute -right-6 top-8 w-[178px] rounded-xl border p-3"
        style={{ borderColor: "rgba(255,255,255,0.12)", background: "oklch(0.17 0.02 260)", boxShadow: `0 20px 50px -12px color-mix(in oklab, ${accent} 45%, transparent)` }}
      >
        <div className="mb-2 flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none"><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" fill={accent2} /></svg>
          <span className="text-[8.5px] font-semibold uppercase tracking-wider text-white/45">{t.contextLabel}</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <ContextTag
            color={accent}
            delay="0s"
            text={t.tag1}
            icon={<svg viewBox="0 0 24 24" width="10" height="10" fill="none"><path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>}
          />
          <ContextTag
            color={accent2}
            delay="0.5s"
            text={t.tag2}
            icon={<svg viewBox="0 0 24 24" width="10" height="10" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>}
          />
          <ContextTag
            color="#28c840"
            delay="1s"
            text={t.tag3}
            icon={<svg viewBox="0 0 24 24" width="10" height="10" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          />
        </div>
      </div>
    </div>
  );
}

function variantFor(slug: string, accent: string, accent2: string, locale: "es" | "en") {
  const p: VariantProps = { accent, accent2, locale };
  switch (slug) {
    case "desarrollo-software":
      return <CodeEditorGraphic {...p} />;
    case "desarrollo-web":
      return <WebBuilderGraphic {...p} />;
    case "aplicaciones-web":
      return <KanbanGraphic {...p} />;
    case "ecommerce":
      return <EcommerceGraphic {...p} />;
    case "chatbots":
      return <ChatbotGraphic {...p} />;
    case "atencion-cliente-ia":
      return <AgentGraphic {...p} />;
    default:
      return null;
  }
}

export function SolutionGraphic({ slug, accent, accent2, locale = "es" }: Props) {
  return (
    <div className="relative h-full w-full">
      {variantFor(slug, accent, accent2, locale)}
      <style>{`
        @keyframes sg-float-anim { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        .sg-float { animation: sg-float-anim 5s ease-in-out infinite; }
        .sg-float-slow { animation: sg-float-anim 7.5s ease-in-out infinite; }

        @keyframes sg-blob-a-anim { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(14px, 10px) scale(1.15); } }
        @keyframes sg-blob-b-anim { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-12px, -14px) scale(1.1); } }
        .sg-blob-a { animation: sg-blob-a-anim 8s ease-in-out infinite; }
        .sg-blob-b { animation: sg-blob-b-anim 9s ease-in-out infinite; }

        @keyframes sg-particle-anim { 0%, 100% { opacity: 0.2; transform: translateY(0); } 50% { opacity: 0.9; transform: translateY(-10px); } }
        .sg-particle { animation: sg-particle-anim 3.5s ease-in-out infinite; }

        .sg-frame-spot {
          background: radial-gradient(220px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, var(--accent) 16%, transparent), transparent 70%);
          opacity: 0; transition: opacity 400ms;
        }
        .sg-frame:hover .sg-frame-spot { opacity: 1; }

        @keyframes sg-blink-anim { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
        .sg-blink { animation: sg-blink-anim 1.6s ease-in-out infinite; }
        .sg-cursor { animation: sg-blink-anim 1s step-end infinite; }

        @keyframes sg-code-line-anim { 0%, 100% { opacity: 0.75; filter: brightness(1); } 50% { opacity: 1; filter: brightness(1.25); } }
        .sg-code-line { animation: sg-code-line-anim 3.2s ease-in-out infinite; }

        @keyframes sg-ai-chip-anim { 0%, 100% { opacity: 0.6; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-2px); } }
        .sg-ai-chip { animation: sg-ai-chip-anim 3s ease-in-out infinite; }

        @keyframes sg-select-pulse-anim { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .sg-select-pulse { animation: sg-select-pulse-anim 2.2s ease-in-out infinite; }

        @keyframes sg-gauge-anim { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 8; } }
        .sg-gauge { stroke-dashoffset: 100; animation: sg-gauge-anim 1.8s ease-out forwards; }

        @keyframes sg-kanban-drag-anim { 0%, 100% { transform: translateY(0) scale(1); box-shadow: none; } 50% { transform: translateY(-4px) scale(1.04); box-shadow: 0 10px 24px -8px rgba(0,0,0,0.5); } }
        .sg-kanban-drag { animation: sg-kanban-drag-anim 2.8s ease-in-out infinite; }

        @keyframes sg-cart-badge-anim { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.25); } }
        .sg-cart-badge { animation: sg-cart-badge-anim 2.2s ease-in-out infinite; }

        @keyframes sg-progress-anim { 0% { width: 15%; } 45% { width: 55%; } 100% { width: 92%; } }
        .sg-progress { animation: sg-progress-anim 4.5s ease-in-out infinite alternate; }

        @keyframes sg-step-anim { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }
        .sg-step { animation: sg-step-anim 2.4s ease-in-out infinite; }

        @keyframes sg-chip-anim { 0%, 100% { filter: brightness(1); transform: translateY(0) scale(1); } 15% { filter: brightness(1.7); transform: translateY(-2px) scale(1.05); } 30% { filter: brightness(1); transform: translateY(0) scale(1); } }
        .sg-chip { animation: sg-chip-anim 3.3s ease-in-out infinite; }

        @keyframes sg-context-tag-anim { 0%, 100% { opacity: 0.55; transform: translateX(0); } 50% { opacity: 1; transform: translateX(2px); } }
        .sg-context-tag { animation: sg-context-tag-anim 2.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
