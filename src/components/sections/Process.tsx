import type { Dictionary } from "@/dictionaries/es";

interface Props {
  dict: Dictionary;
}

const STEP_ICONS = [
  // 1 — Discovery
  <svg key="0" viewBox="0 0 32 32" fill="none" className="h-5 w-5">
    <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.6" />
    <line x1="19.5" y1="19.5" x2="25" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="2.5" fill="currentColor" opacity=".4" />
  </svg>,
  // 2 — Strategy
  <svg key="1" viewBox="0 0 32 32" fill="none" className="h-5 w-5">
    <rect x="4" y="10" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 6h12l2 4H8l2-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <line x1="10" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="10" y1="21" x2="18" y2="21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  // 3 — Build
  <svg key="2" viewBox="0 0 32 32" fill="none" className="h-5 w-5">
    <rect x="5" y="5" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 16l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // 4 — Launch
  <svg key="3" viewBox="0 0 32 32" fill="none" className="h-5 w-5">
    <path d="M16 6c4 0 8 4 8 10s-4 10-8 10S8 22 8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16 6l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="2.5" fill="currentColor" opacity=".5" />
  </svg>,
  // 5 — Grow
  <svg key="4" viewBox="0 0 32 32" fill="none" className="h-5 w-5">
    <polyline points="5,23 10,16 16,19 22,10 27,13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="22,10 27,10 27,15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function Process({ dict }: Props) {
  const { process } = dict;

  return (
    <section className="relative isolate overflow-hidden py-24 text-white" style={{ background: "oklch(0.115 0.012 260)" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-3xl opacity-[0.12]"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 45%, transparent), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em]">
            <span className="text-white/50">{process.sectionIndex}</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-white/80">{process.sectionLabel}</span>
          </div>
          <h2 className="mt-6 text-balance" style={{ fontSize: "clamp(36px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
            {process.heading}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* Vertical spine — desktop */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{ background: "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--turquoise) 30%, transparent) 20%, color-mix(in oklab, var(--turquoise) 20%, transparent) 80%, transparent)" }}
          />

          <div className="flex flex-col gap-10">
            {process.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.n} className={`group relative flex items-start gap-8 md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content card */}
                  <div
                    className="flex-1 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ background: "color-mix(in oklab, var(--turquoise) 14%, transparent)", color: "var(--turquoise)" }}
                      >
                        {STEP_ICONS[idx]}
                      </span>
                      <span className="font-mono text-white/35" style={{ fontSize: "11px", letterSpacing: "0.24em" }}>{step.n}</span>
                    </div>
                    <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-white/90" style={{ letterSpacing: "-0.02em" }}>
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/55">{step.body}</p>
                  </div>

                  {/* Centre dot — desktop */}
                  <div className="relative hidden shrink-0 md:flex md:h-10 md:w-10 md:items-center md:justify-center">
                    <div
                      className="h-3 w-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                      style={{ borderColor: "var(--turquoise)", background: "oklch(0.12 0.01 260)", boxShadow: "0 0 10px color-mix(in oklab, var(--turquoise) 40%, transparent)" }}
                    />
                  </div>

                  {/* Spacer on alternating side */}
                  <div className="hidden flex-1 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
