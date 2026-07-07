"use client";

import { useEffect, useState } from "react";
import type { CaseStudyFeature } from "@/lib/case-studies-data";
import { ICONS } from "@/lib/icons";

interface Props {
  items: CaseStudyFeature[];
  accent: string;
  accent2: string;
}

const AUTOPLAY_MS = 4200;

export function FeatureShowcase({ items, accent, accent2 }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const item = items[active];
  const color = active % 2 === 0 ? accent : accent2;

  return (
    <div className="showcase-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((it, i) => {
          const itColor = i % 2 === 0 ? accent : accent2;
          const isActive = i === active;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="showcase-tab flex items-center gap-2 rounded-full py-2 pl-2 pr-3.5 transition-all duration-300"
              style={{
                background: isActive ? `color-mix(in oklab, ${itColor} 16%, transparent)` : "rgba(255,255,255,0.03)",
                border: isActive ? `1px solid color-mix(in oklab, ${itColor} 45%, transparent)` : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300"
                style={{ background: isActive ? itColor : "rgba(255,255,255,0.06)", color: isActive ? "#0b0d14" : "rgba(255,255,255,0.5)" }}
              >
                {ICONS[it.icon]}
              </span>
              <span
                className="whitespace-nowrap text-[12.5px] font-medium transition-colors duration-300"
                style={{ color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)" }}
              >
                {it.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className="showcase-panel relative mx-auto mt-6 max-w-3xl overflow-hidden rounded-3xl p-8 sm:p-10"
        style={{
          background: `linear-gradient(150deg, color-mix(in oklab, ${color} 13%, transparent), rgba(255,255,255,0.02))`,
          border: `1px solid color-mix(in oklab, ${color} 30%, transparent)`,
        }}
      >
        <span aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl opacity-25" style={{ background: color }} />
        <div key={active} className="showcase-content relative z-10">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ background: `color-mix(in oklab, ${color} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 38%, transparent)`, color }}
          >
            {ICONS[item.icon]}
          </span>
          <h3 className="mt-5 text-[23px] font-semibold leading-snug text-white">{item.title}</h3>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/62">{item.body}</p>
        </div>

        <div className="relative z-10 mt-8 flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Feature ${i + 1}`}
              className="h-1 flex-1 overflow-hidden rounded-full"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              {i === active && (
                <span
                  key={`${active}-${paused}`}
                  className="showcase-progress-fill block h-full"
                  style={{ background: color, animationPlayState: paused ? "paused" : "running" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes showcase-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .showcase-content { animation: showcase-fade 420ms ease; }
        @keyframes showcase-progress { from { width: 0%; } to { width: 100%; } }
        .showcase-progress-fill { animation: showcase-progress ${AUTOPLAY_MS}ms linear forwards; }
        .showcase-tab:hover { border-color: rgba(255,255,255,0.2) !important; }
      `}</style>
    </div>
  );
}
