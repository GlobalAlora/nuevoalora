"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

export interface IndustryExampleItem {
  icon: string;
  title: string;
  web: { q: string; a: string };
  whatsapp: { q: string; a: string };
  phone: { transcript: string };
}

interface Props {
  items: IndustryExampleItem[];
  accent: string;
  accent2: string;
}

/** Pick an industry, watch the same AI answer on all three channels — never just one. */
export function IndustryShowcase({ items, accent, accent2 }: Props) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <div className="mt-11">
      {/* Industry picker */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {items.map((it, i) => {
          const isActive = i === active;
          return (
            <button
              key={it.title}
              type="button"
              onClick={() => setActive(i)}
              className="flex items-center gap-2.5 rounded-full px-4 py-2.5 text-left transition-all duration-300"
              style={
                isActive
                  ? { background: `color-mix(in oklab, ${accent} 16%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 45%, transparent)` }
                  : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }
              }
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md [&_svg]:h-3.5 [&_svg]:w-3.5"
                style={{ background: isActive ? `color-mix(in oklab, ${accent} 24%, transparent)` : "rgba(255,255,255,0.05)", color: isActive ? accent : "rgba(255,255,255,0.55)" }}
              >
                {ICONS[it.icon]}
              </span>
              <span className="text-[13px] font-semibold leading-snug" style={{ color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)" }}>
                {it.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Live example — the same industry, on all three channels at once */}
      <div key={active} className="industry-fade mt-8 grid gap-4 lg:grid-cols-3">
        {/* Web */}
        <div className="relative overflow-hidden rounded-2xl border p-4" style={{ borderColor: "rgba(255,255,255,0.1)", background: "linear-gradient(160deg, oklch(0.18 0.02 260), oklch(0.13 0.014 260))" }}>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: `color-mix(in oklab, ${accent} 18%, transparent)`, color: accent }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><line x1="3" y1="8.5" x2="21" y2="8.5" stroke="currentColor" strokeWidth="1.6" /></svg>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-white/50">Sitio web</span>
            <span className="ml-auto flex items-center gap-1 text-[8px] font-semibold uppercase text-white/35">
              <span className="h-1.5 w-1.5 rounded-full industry-live-dot" style={{ background: accent }} />
              24/7
            </span>
          </div>
          <p className="text-[12.5px] leading-snug text-white/70">{item.web.q}</p>
          <p className="mt-1.5 rounded-lg px-2.5 py-2 text-[12.5px] font-medium leading-snug" style={{ background: `color-mix(in oklab, ${accent} 14%, transparent)`, color: accent }}>{item.web.a}</p>
        </div>

        {/* WhatsApp */}
        <div className="relative overflow-hidden rounded-2xl border p-4" style={{ borderColor: "rgba(255,255,255,0.1)", background: "linear-gradient(160deg, oklch(0.18 0.02 260), oklch(0.13 0.014 260))" }}>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "color-mix(in oklab, #25D366 20%, transparent)", color: "#25D366" }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z" /></svg>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-white/50">WhatsApp</span>
            <span className="ml-auto flex items-center gap-1 text-[8px] font-semibold uppercase text-white/35">
              <span className="h-1.5 w-1.5 rounded-full industry-live-dot" style={{ background: "#25D366" }} />
              24/7
            </span>
          </div>
          <p className="text-[12.5px] leading-snug text-white/70">{item.whatsapp.q}</p>
          <p className="mt-1.5 rounded-lg px-2.5 py-2 text-[12.5px] font-medium leading-snug" style={{ background: "color-mix(in oklab, #25D366 14%, transparent)", color: "#25D366" }}>{item.whatsapp.a}</p>
        </div>

        {/* Phone */}
        <div className="relative overflow-hidden rounded-2xl border p-4" style={{ borderColor: `color-mix(in oklab, ${accent2} 45%, transparent)`, background: `linear-gradient(160deg, color-mix(in oklab, ${accent2} 16%, oklch(0.18 0.02 260)), oklch(0.13 0.014 260))` }}>
          <span aria-hidden className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full blur-2xl opacity-40" style={{ background: accent2 }} />
          <div className="relative mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg industry-phone-pulse" style={{ background: `color-mix(in oklab, ${accent2} 26%, transparent)`, color: accent2 }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
              </svg>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: accent2 }}>Teléfono</span>
            <span className="ml-auto rounded-full px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide" style={{ background: accent2, color: "oklch(0.15 0.02 260)" }}>Voz real</span>
          </div>
          <p className="relative text-[12px] italic leading-snug text-white/80">{item.phone.transcript}</p>
          <div className="relative mt-2.5 flex items-center gap-2">
            <span className="text-[9px] font-medium" style={{ color: accent2 }}>Llamada en curso</span>
            <div className="flex items-center gap-[2.5px]">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="industry-wave-bar w-[2.5px] rounded-full" style={{ background: accent2, animationDelay: `${i * 0.11}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes industry-fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .industry-fade { animation: industry-fade-in 350ms ease; }
        @keyframes industry-live-dot-pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .industry-live-dot { animation: industry-live-dot-pulse 1.8s ease-in-out infinite; }
        @keyframes industry-phone-pulse-anim {
          0%, 100% { box-shadow: 0 0 0 0 color-mix(in oklab, ${accent2} 55%, transparent); }
          50% { box-shadow: 0 0 0 6px transparent; }
        }
        .industry-phone-pulse { animation: industry-phone-pulse-anim 1.8s ease-in-out infinite; }
        @keyframes industry-wave-bar-anim { 0%, 100% { height: 4px; opacity: 0.6; } 50% { height: 13px; opacity: 1; } }
        .industry-wave-bar { animation: industry-wave-bar-anim 0.9s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
