import type { Dictionary } from "@/dictionaries/es";

interface Props {
  dict: Dictionary;
}

const ICONS = [
  // Compass / strategy
  <svg key="0" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeOpacity=".35" />
    <circle cx="20" cy="20" r="2.5" fill="currentColor" />
    <line x1="20" y1="6" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="29" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="20" x2="11" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="29" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 14l2 6-6-2 4-4z" fill="currentColor" opacity=".8" />
  </svg>,
  // Flash / speed
  <svg key="1" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
    <path d="M22 6L10 22h10l-2 12 12-16H20l2-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".12" />
  </svg>,
  // Shield / trust
  <svg key="2" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
    <path d="M20 6l12 4v8c0 7-5.5 11.5-12 14C13.5 29.5 8 25 8 18v-8l12-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".1" />
    <path d="M15 20l3.5 3.5L25 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Network / ecosystem
  <svg key="3" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
    <circle cx="20" cy="20" r="3.5" fill="currentColor" />
    <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="32" cy="14" r="3" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="8" cy="28" r="3" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.3" />
    <line x1="11" y1="14" x2="17" y2="18" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".6" />
    <line x1="29" y1="14" x2="23" y2="18" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".6" />
    <line x1="11" y1="28" x2="17" y2="22" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".6" />
    <line x1="29" y1="28" x2="23" y2="22" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".6" />
  </svg>,
];

const CARD_ACCENT: string[] = ["turquoise", "electric", "turquoise", "violet"];
const ACCENT_STYLE: Record<string, React.CSSProperties> = {
  turquoise: { color: "var(--turquoise)", background: "color-mix(in oklab, var(--turquoise) 12%, transparent)", borderColor: "color-mix(in oklab, var(--turquoise) 25%, transparent)" },
  electric: { color: "var(--electric)", background: "color-mix(in oklab, var(--electric) 12%, transparent)", borderColor: "color-mix(in oklab, var(--electric) 25%, transparent)" },
  violet: { color: "var(--violet)", background: "color-mix(in oklab, var(--violet) 12%, transparent)", borderColor: "color-mix(in oklab, var(--violet) 25%, transparent)" },
};

export function WhyAlora({ dict }: Props) {
  const { why } = dict;

  return (
    <section id="por-que" className="relative isolate overflow-hidden py-24 text-white" style={{ background: "oklch(0.1 0.01 255)" }}>
      {/* Radial glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[30%] top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-[0.18]"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 40%, transparent), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em]">
            <span className="text-white/50">{why.sectionIndex}</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-white/80">{why.sectionLabel}</span>
          </div>
          <h2 className="mt-6 text-balance" style={{ fontSize: "clamp(36px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
            {why.heading}
          </h2>
          <p className="mt-5 text-pretty" style={{ maxWidth: "600px", margin: "20px auto 0", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.62)" }}>
            {why.body}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.cards.map((card, idx) => {
            const accent = CARD_ACCENT[idx] ?? "turquoise";
            return (
              <div
                key={card.title}
                className="group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.045)",
                }}
              >
                {/* Icon */}
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={ACCENT_STYLE[accent]}
                >
                  {ICONS[idx]}
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-white/90" style={{ letterSpacing: "-0.02em" }}>
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-white/55">{card.body}</p>
                </div>

                {/* Gradient border on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    padding: "1px",
                    background: `linear-gradient(140deg, color-mix(in oklab, var(--${accent}) 60%, transparent), transparent 60%)`,
                    WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
