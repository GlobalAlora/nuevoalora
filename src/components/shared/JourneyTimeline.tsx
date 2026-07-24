"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

export interface JourneyStage {
  icon?: string;
  tag: string;
  title: string;
  body: string;
}

interface Props {
  stages: JourneyStage[];
  accent: string;
  accent2: string;
}

/** A connected, animated timeline — the same AI moving through every stage, not three unrelated cards. */
export function JourneyTimeline({ stages, accent, accent2 }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mt-14">
      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
        {/* connecting line — desktop: horizontal through the icon centers; mobile: vertical */}
        <div
          aria-hidden
          className="absolute hidden lg:block"
          style={{ left: "16.5%", right: "16.5%", top: "30px", height: "2px", background: `linear-gradient(90deg, color-mix(in oklab, ${accent} 45%, transparent), color-mix(in oklab, ${accent2} 45%, transparent))` }}
        >
          <span className="journey-comet absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full" style={{ background: accent, boxShadow: `0 0 10px 2px ${accent}` }} />
        </div>
        <div
          aria-hidden
          className="absolute left-[29px] block lg:hidden"
          style={{ top: "20px", bottom: "20px", width: "2px", background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 45%, transparent), color-mix(in oklab, ${accent2} 45%, transparent))` }}
        >
          <span className="journey-comet-v absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full" style={{ background: accent, boxShadow: `0 0 10px 2px ${accent}` }} />
        </div>

        {stages.map((s, i) => {
          const isActive = active === i;
          return (
            <button
              key={s.tag}
              type="button"
              onClick={() => setActive(isActive ? null : i)}
              className="relative z-10 flex flex-1 items-start gap-4 text-left lg:flex-col lg:items-center lg:text-center lg:px-4"
            >
              <span
                className="journey-node flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full transition-all duration-300 [&_svg]:h-6 [&_svg]:w-6"
                style={{
                  background: isActive ? `color-mix(in oklab, ${accent} 26%, oklch(0.16 0.015 260))` : "oklch(0.16 0.015 260)",
                  border: `2px solid ${isActive ? accent : `color-mix(in oklab, ${accent} 35%, transparent)`}`,
                  color: accent,
                  boxShadow: isActive ? `0 0 0 6px color-mix(in oklab, ${accent} 14%, transparent)` : "none",
                }}
              >
                {s.icon ? ICONS[s.icon] : <span className="text-[13px] font-bold">{i + 1}</span>}
              </span>
              <div className="lg:mt-4">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide"
                  style={{ background: `color-mix(in oklab, ${accent} 16%, transparent)`, color: accent, border: `1px solid color-mix(in oklab, ${accent} 38%, transparent)` }}
                >
                  {s.tag}
                </span>
                <h4 className="mt-2 text-[15.5px] font-semibold leading-snug text-white/92">{s.title}</h4>
                <p
                  className="journey-body mt-1.5 overflow-hidden text-[13px] leading-relaxed text-white/55 transition-all duration-300 lg:mx-auto lg:max-w-[220px]"
                  style={{ maxHeight: isActive ? "160px" : "0px", opacity: isActive ? 1 : 0 }}
                >
                  {s.body}
                </p>
                {!isActive && (
                  <span className="mt-1 inline-block text-[11.5px] font-medium underline decoration-dotted" style={{ color: `color-mix(in oklab, ${accent} 80%, white 10%)` }}>
                    Ver más
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes journey-comet-move {
          0%   { left: 0%; opacity: 0; }
          8%   { opacity: 1; }
          46%  { left: calc(50% - 5px); opacity: 1; }
          54%  { left: calc(50% - 5px); opacity: 1; }
          92%  { opacity: 1; }
          100% { left: calc(100% - 10px); opacity: 0; }
        }
        .journey-comet { animation: journey-comet-move 6s ease-in-out infinite; }
        @keyframes journey-comet-move-v {
          0%   { top: 0%; opacity: 0; }
          8%   { opacity: 1; }
          46%  { top: calc(50% - 5px); opacity: 1; }
          54%  { top: calc(50% - 5px); opacity: 1; }
          92%  { opacity: 1; }
          100% { top: calc(100% - 10px); opacity: 0; }
        }
        .journey-comet-v { animation: journey-comet-move-v 6s ease-in-out infinite; }
        .journey-node { animation: journey-node-pulse 3.6s ease-in-out infinite; }
        @keyframes journey-node-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      `}</style>
    </div>
  );
}
