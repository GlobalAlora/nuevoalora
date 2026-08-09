"use client";

import { useState } from "react";
import Image from "next/image";
import { HeroGraphic } from "@/components/shared/HeroInteractive";

export interface ProofItem {
  client: string;
  category: string;
  image?: string;
  imageAspect: string;
  problem: string;
  logic: string;
  solution: string;
  metric: string;
}

const ACCENT = "var(--electric)";
const ACCENT2 = "var(--violet)";

const NAV_LABELS = {
  es: { prev: "Caso anterior", next: "Caso siguiente", goTo: (n: number) => `Ver caso ${n}` },
  en: { prev: "Previous case", next: "Next case", goTo: (n: number) => `View case ${n}` },
};

interface RowLabels {
  problem: string;
  logic: string;
  solution: string;
}

/** Large, single-card-at-a-time proof carousel. No external link — problem/logic/solution shown inline. */
export function ProofCarousel({ items, rowLabels, locale = "es" }: { items: ProofItem[]; rowLabels: RowLabels; locale?: "es" | "en" }) {
  const [index, setIndex] = useState(0);
  const item = items[index];
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + items.length) % items.length);
  const nav = NAV_LABELS[locale];

  const rows: { label: string; body: string }[] = [
    { label: rowLabels.problem, body: item.problem },
    { label: rowLabels.logic, body: item.logic },
    { label: rowLabels.solution, body: item.solution },
  ];

  return (
    <div
      className="relative overflow-hidden rounded-[28px] p-7 sm:p-10 md:p-12"
      style={{
        background: "linear-gradient(155deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09), 0 40px 100px -30px rgba(0,0,0,0.65)",
      }}
    >
      <span aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-25" style={{ background: ACCENT }} />
      <span aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-20" style={{ background: ACCENT2 }} />

      {/* Nav */}
      <div className="relative z-10 mb-6 flex items-center justify-center gap-3 md:justify-start">
        <button type="button" aria-label={nav.prev} onClick={() => go(-1)} className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}>
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="flex items-center gap-2">
          {items.map((it, i) => (
            <button key={it.client} type="button" aria-label={nav.goTo(i + 1)} onClick={() => setIndex(i)} className="flex h-6 min-w-6 items-center justify-center">
              <span aria-hidden className="h-2 rounded-full transition-all duration-300" style={{ width: i === index ? "22px" : "8px", background: i === index ? `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})` : "rgba(255,255,255,0.18)" }} />
            </button>
          ))}
        </div>
        <button type="button" aria-label={nav.next} onClick={() => go(1)} className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}>
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <span className="text-[12px] font-medium text-white/40">{index + 1} / {items.length}</span>
      </div>

      <div className="proof-split relative">
        {/* Text */}
        <div className="proof-split-text flex flex-col">
          <div
            className="tech-badge inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{
              color: ACCENT,
              background: `color-mix(in oklab, ${ACCENT} 7%, rgba(10,12,20,0.6))`,
              border: `1px solid color-mix(in oklab, ${ACCENT} 45%, transparent)`,
              boxShadow: `0 0 22px -6px color-mix(in oklab, ${ACCENT} 65%, transparent), inset 0 1px 0 rgba(255,255,255,0.06)`,
            }}
          >
            <span aria-hidden className="h-[6px] w-[6px] shrink-0 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 8px 1.5px color-mix(in oklab, ${ACCENT} 80%, transparent)` }} />
            {item.category}
          </div>
          <h3 className="mt-5 text-balance text-white" style={{ fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 720, lineHeight: 1.12, letterSpacing: "-0.02em", minHeight: "1.2em" }}>
            {item.client}
          </h3>

          <div className="mt-6 flex flex-1 flex-col gap-4">
            {rows.map((r, i) => (
              <div key={r.label} className="flex gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ background: `color-mix(in oklab, ${i === 2 ? ACCENT : ACCENT2} 22%, transparent)`, color: i === 2 ? ACCENT : ACCENT2, border: `1px solid color-mix(in oklab, ${i === 2 ? ACCENT : ACCENT2} 45%, transparent)` }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider" style={{ color: i === 2 ? ACCENT : "rgba(255,255,255,0.5)" }}>{r.label}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/72">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-xl px-4 py-3" style={{ background: `color-mix(in oklab, ${ACCENT} 10%, rgba(255,255,255,0.03))`, border: `1px solid color-mix(in oklab, ${ACCENT} 25%, transparent)` }}>
            <p className="text-[13.5px] font-semibold" style={{ color: ACCENT }}>{item.metric}</p>
          </div>
        </div>

        {/* Image */}
        <div
          className="proof-split-image relative h-[280px] w-full overflow-hidden rounded-2xl border"
          style={{ borderColor: "rgba(255,255,255,0.12)", background: "#0b0d14", boxShadow: "0 30px 70px -24px rgba(0,0,0,0.55)" }}
        >
          {item.image ? (
            <Image src={item.image} alt={item.client} fill sizes="(max-width: 767px) 90vw, 40vw" className="object-contain" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="aspect-square w-[55%] opacity-90">
                <HeroGraphic accent={ACCENT} accent2={ACCENT2} />
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .proof-split { display: flex; flex-direction: column; gap: 40px; }
        @media (min-width: 768px) {
          .proof-split { display: grid; grid-template-columns: 3fr 2fr; gap: 56px; align-items: stretch; }
          .proof-split-text { min-height: 460px; }
          .proof-split-image { height: 100%; }
        }
      `}</style>
    </div>
  );
}
