import { SpotlightCard } from "@/components/shared/SpotlightCard";
import type { Dictionary } from "@/dictionaries/es";

interface Props {
  testimonials: Dictionary["testimonials"];
}

const ACCENTS = ["var(--turquoise)", "var(--electric)", "var(--violet)", "var(--turquoise)"];

export function TestimonialsGrid({ testimonials }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {testimonials.items.map((t, i) => {
          const color = ACCENTS[i % ACCENTS.length];
          const initials = t.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
          return (
            <SpotlightCard
              key={t.name}
              accent={color}
              className="flex flex-col gap-4 rounded-2xl p-7"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" style={{ color, opacity: 0.5 }}>
                <path d="M9 10c-3 0-5 2.3-5 5.4C4 18.7 6.4 21 9.5 21S15 18.7 15 15.6c0-2.5-1.6-4.6-3.9-5.3.3-1.6 1.6-3 3.4-3.3V9c-3 .3-5.5 2.5-5.5 1zM22 10c-3 0-5 2.3-5 5.4 0 3.3 2.4 5.6 5.5 5.6S28 18.7 28 15.6c0-2.5-1.6-4.6-3.9-5.3.3-1.6 1.6-3 3.4-3.3V9c-3 .3-5.5 2.5-5.5 1z" fill="currentColor" />
              </svg>
              <p className="text-[14.5px] leading-relaxed text-white/72">{t.quote}</p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="rounded-full px-3 py-1 text-[11.5px] font-medium"
                    style={{ background: `color-mix(in oklab, ${color} 14%, transparent)`, color, border: `1px solid color-mix(in oklab, ${color} 30%, transparent)` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-1 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, ${color}, ${ACCENTS[(i + 1) % ACCENTS.length]})` }}>
                  {initials}
                </span>
                <div>
                  <div className="text-[14px] font-semibold text-white/90">{t.name}</div>
                  <div className="text-[12.5px] leading-snug text-white/45">{t.role}</div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      <style>{`
        .spotlight-card { position: relative; overflow: hidden; transition: transform 450ms cubic-bezier(0.16,1,0.3,1), border-color 450ms; }
        .spotlight-card:hover { transform: translateY(-4px); }
        .spotlight-card::before, .spotlight-card::after {
          content: ""; position: absolute; inset: 0; opacity: 0; z-index: 0; pointer-events: none;
          transition: opacity 550ms ease; border-radius: inherit;
        }
        .spotlight-card:hover::before, .spotlight-card:hover::after { opacity: 1; }
        .spotlight-card::before {
          background: radial-gradient(280px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%);
        }
        .spotlight-card::after {
          padding: 1px;
          background: radial-gradient(220px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, var(--accent) 65%, transparent), transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .spotlight-card > * { position: relative; z-index: 1; }
      `}</style>
    </>
  );
}
