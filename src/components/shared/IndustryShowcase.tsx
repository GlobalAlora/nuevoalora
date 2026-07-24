"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

export interface IndustryExampleItem {
  icon: string;
  title: string;
  question: string;
  answer: string;
}

interface Props {
  items: IndustryExampleItem[];
  accent: string;
  accent2: string;
}

/** Pick an industry, watch the same AI answer with an example tailored to it. */
export function IndustryShowcase({ items, accent, accent2 }: Props) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <div className="mt-11 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
      {/* Industry picker */}
      <div className="flex flex-row flex-wrap gap-2.5 lg:flex-col">
        {items.map((it, i) => {
          const isActive = i === active;
          return (
            <button
              key={it.title}
              type="button"
              onClick={() => setActive(i)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300"
              style={
                isActive
                  ? { background: `color-mix(in oklab, ${accent} 16%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 45%, transparent)` }
                  : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }
              }
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg [&_svg]:h-4 [&_svg]:w-4"
                style={{ background: isActive ? `color-mix(in oklab, ${accent} 24%, transparent)` : "rgba(255,255,255,0.05)", color: isActive ? accent : "rgba(255,255,255,0.55)" }}
              >
                {ICONS[it.icon]}
              </span>
              <span className="text-[13.5px] font-semibold leading-snug" style={{ color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)" }}>
                {it.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Live example mockup */}
      <div
        key={active}
        className="industry-fade relative overflow-hidden rounded-2xl border"
        style={{
          borderColor: "rgba(255,255,255,0.12)",
          background: "linear-gradient(160deg, oklch(0.18 0.02 260), oklch(0.12 0.014 260))",
          boxShadow: `0 30px 70px -20px color-mix(in oklab, ${accent} 35%, transparent), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        <div className="flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
          <span className="ml-2 text-[11px] font-medium text-white/50">{item.title}</span>
          <span className="ml-auto flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider" style={{ color: accent }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
            live
          </span>
        </div>
        <div className="flex flex-col gap-3 p-6">
          <div className="flex items-start gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none"><circle cx="12" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.6" /><path d="M5 19c1.2-3.4 4-5 7-5s5.8 1.6 7 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </span>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3" style={{ background: "rgba(255,255,255,0.07)" }}>
              <span className="text-[13.5px] leading-snug text-white/85">{item.question}</span>
            </div>
          </div>
          <div className="ml-auto flex items-start gap-2.5">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm px-4 py-3" style={{ background: `color-mix(in oklab, ${accent} 24%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 42%, transparent)` }}>
              <span className="text-[13.5px] leading-snug text-white/95">{item.answer}</span>
            </div>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold" style={{ background: `color-mix(in oklab, ${accent} 30%, transparent)`, color: accent, border: `1px solid color-mix(in oklab, ${accent} 55%, transparent)` }}>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none"><rect x="4" y="8" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M12 8V5M9 5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="9" cy="13.5" r="1.2" fill="currentColor" /><circle cx="15" cy="13.5" r="1.2" fill="currentColor" /></svg>
            </span>
          </div>
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-30"
          style={{ background: accent2 }}
        />
      </div>

      <style>{`
        @keyframes industry-fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .industry-fade { animation: industry-fade-in 350ms ease; }
      `}</style>
    </div>
  );
}
