import type { Dictionary } from "@/dictionaries/es";

interface Props {
  dict: Dictionary;
}

const ACCENTS = ["var(--turquoise)", "var(--electric)", "var(--violet)", "var(--turquoise)"];

export function Testimonials({ dict }: Props) {
  const { testimonials } = dict;

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

        {/* Testimonial cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.items.map((t, i) => {
            const color = ACCENTS[i % ACCENTS.length];
            const initials = t.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
            return (
              <div
                key={t.name}
                className="relative flex flex-col gap-4 rounded-2xl p-7 text-white"
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
                    style={{ background: `linear-gradient(135deg, ${color}, ${ACCENTS[(i + 1) % ACCENTS.length]})` }}
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
      </div>
    </section>
  );
}
