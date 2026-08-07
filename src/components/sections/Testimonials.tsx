"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries/es";

interface Props {
  dict: Dictionary;
}

const ACCENTS = ["var(--turquoise)", "var(--electric)", "var(--violet)", "var(--turquoise)"];
const VISIBLE = 2;

export function Testimonials({ dict }: Props) {
  const { testimonials } = dict;
  const { items } = testimonials;
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + items.length) % items.length);
  const visible = Array.from({ length: Math.min(VISIBLE, items.length) }, (_, k) => ({
    item: items[(index + k) % items.length],
    slot: k,
  }));

  return (
    <section className="relative isolate overflow-hidden py-24">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(0.1 0.01 255) 0%, oklch(0.11 0.012 260) 100%)" }} />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl opacity-[0.1]"
        style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-[1150px] text-center text-white">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em]">
            <span className="text-white/50">{testimonials.sectionIndex}</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-white/80">{testimonials.sectionLabel}</span>
          </div>
          <h2 className="mt-6 text-balance" style={{ fontSize: "clamp(28px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-pretty" style={{ maxWidth: "580px", margin: "16px auto 0", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.62)" }}>
            {testimonials.body}
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative mt-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {visible.map(({ item: t, slot }) => {
              const globalIdx = items.indexOf(t);
              const color = ACCENTS[globalIdx % ACCENTS.length];
              const initials = t.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
              return (
                <div
                  key={`${index}-${slot}`}
                  className="testimonial-card relative flex flex-col gap-4 rounded-2xl p-7 text-white"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" style={{ color, opacity: 0.5 }}>
                    <path d="M9 10c-3 0-5 2.3-5 5.4C4 18.7 6.4 21 9.5 21S15 18.7 15 15.6c0-2.5-1.6-4.6-3.9-5.3.3-1.6 1.6-3 3.4-3.3V9c-3 .3-5.5 2.5-5.5 1zM22 10c-3 0-5 2.3-5 5.4 0 3.3 2.4 5.6 5.5 5.6S28 18.7 28 15.6c0-2.5-1.6-4.6-3.9-5.3.3-1.6 1.6-3 3.4-3.3V9c-3 .3-5.5 2.5-5.5 1z" fill="currentColor" />
                  </svg>

                  <p className="text-[14.5px] leading-relaxed text-white/72">{t.quote}</p>

                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-[11.5px] font-medium"
                        style={{ background: `color-mix(in oklab, ${color} 14%, transparent)`, color, border: `1px solid color-mix(in oklab, ${color} 30%, transparent)` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-1 flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                      style={{ background: `linear-gradient(135deg, ${color}, ${ACCENTS[(globalIdx + 1) % ACCENTS.length]})` }}
                    >
                      {initials}
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold text-white/90">{t.name}</div>
                      <div className="text-[12.5px] leading-snug text-white/45">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="testimonial-arrow">
              <svg viewBox="0 0 16 16" fill="none" width="15" height="15"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="testimonial-arrow">
              <svg viewBox="0 0 16 16" fill="none" width="15" height="15"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-card { animation: testimonial-in 420ms cubic-bezier(0.16,1,0.3,1); }
        @keyframes testimonial-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .testimonial-arrow {
          display: flex; align-items: center; justify-content: center;
          height: 40px; width: 40px; border-radius: 9999px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.75); transition: all 220ms ease; cursor: pointer;
        }
        .testimonial-arrow:hover { background: color-mix(in oklab, var(--turquoise) 22%, rgba(255,255,255,0.05)); border-color: color-mix(in oklab, var(--turquoise) 45%, transparent); color: white; }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-card { animation: none; }
        }
      `}</style>
    </section>
  );
}
