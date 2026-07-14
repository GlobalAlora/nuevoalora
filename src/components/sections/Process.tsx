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
  // 4 — QA
  <svg key="3" viewBox="0 0 32 32" fill="none" className="h-5 w-5">
    <rect x="4" y="4" width="17" height="22" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 14l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="23" cy="22" r="5" stroke="currentColor" strokeWidth="1.6" />
    <line x1="26.5" y1="25.5" x2="29" y2="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // 5 — Launch
  <svg key="4" viewBox="0 0 32 32" fill="none" className="h-5 w-5">
    <path d="M16 6c4 0 8 4 8 10s-4 10-8 10S8 22 8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16 6l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="2.5" fill="currentColor" opacity=".5" />
  </svg>,
  // 6 — Scale
  <svg key="5" viewBox="0 0 32 32" fill="none" className="h-5 w-5">
    <polyline points="5,23 10,16 16,19 22,10 27,13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="22,10 27,10 27,15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const SECTION_BG = "oklch(0.115 0.012 260)";
const STEP_COLORS = ["var(--turquoise)", "var(--electric)", "var(--violet)"];

export function Process({ dict }: Props) {
  const { process } = dict;

  return (
    <section className="relative isolate overflow-hidden py-24 text-white" style={{ background: SECTION_BG }}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-3xl opacity-[0.12]"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 45%, transparent), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-[1150px] text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em]">
            <span className="text-white/50">{process.sectionIndex}</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-white/80">{process.sectionLabel}</span>
          </div>
          <h2 className="mt-6" style={{ fontSize: "clamp(28px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
            <span className="block sm:whitespace-nowrap">{process.headingLine1}</span>
            <span className="block sm:whitespace-nowrap">{process.headingLine2}</span>
          </h2>
        </div>

        {/* Desktop: zigzag stepper — content alternates above/below a single connecting line, so each label gets full room to be readable */}
        <div
          className="relative mt-20 hidden lg:grid"
          style={{ gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "132px auto 132px", columnGap: "1rem" }}
        >
          <div aria-hidden className="step-line absolute left-0 right-0 h-[2px] overflow-hidden" style={{ top: "154px" }}>
            <div className="step-line-sweep absolute inset-y-0 left-0" style={{ width: "200%" }} />
          </div>

          {process.steps.map((step, idx) => {
            const color = STEP_COLORS[idx % STEP_COLORS.length];
            const isAbove = idx % 2 === 0;
            return isAbove ? (
              <div key={`${step.n}-t`} className="step-node flex flex-col items-center justify-end pb-4 text-center" style={{ gridColumn: idx + 1, gridRow: 1, animationDelay: `${idx * 0.12}s` }}>
                <h3 className="text-[17px] font-semibold leading-snug text-white/90" style={{ letterSpacing: "-0.015em" }}>{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{step.body}</p>
              </div>
            ) : (
              <div key={`${step.n}-t`} className="step-node flex items-end justify-center pb-3" style={{ gridColumn: idx + 1, gridRow: 1, animationDelay: `${idx * 0.12}s` }}>
                <span className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.22em", color: `color-mix(in oklab, ${color} 92%, transparent)` }}>{step.n}</span>
              </div>
            );
          })}

          {process.steps.map((step, idx) => {
            const color = STEP_COLORS[idx % STEP_COLORS.length];
            return (
              <div key={`${step.n}-c`} className="relative z-10 flex items-center justify-center" style={{ gridColumn: idx + 1, gridRow: 2 }}>
                <span
                  className="step-node-circle flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-transform duration-300"
                  style={{
                    borderColor: `color-mix(in oklab, ${color} 65%, transparent)`,
                    background: SECTION_BG,
                    color,
                    boxShadow: `0 0 0 6px ${SECTION_BG}`,
                    animationDelay: `${idx * 0.3}s`,
                  }}
                >
                  {STEP_ICONS[idx]}
                </span>
              </div>
            );
          })}

          {process.steps.map((step, idx) => {
            const color = STEP_COLORS[idx % STEP_COLORS.length];
            const isAbove = idx % 2 === 0;
            return !isAbove ? (
              <div key={`${step.n}-b`} className="step-node flex flex-col items-center justify-start pt-4 text-center" style={{ gridColumn: idx + 1, gridRow: 3, animationDelay: `${idx * 0.12}s` }}>
                <h3 className="text-[17px] font-semibold leading-snug text-white/90" style={{ letterSpacing: "-0.015em" }}>{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{step.body}</p>
              </div>
            ) : (
              <div key={`${step.n}-b`} className="step-node flex items-start justify-center pt-3" style={{ gridColumn: idx + 1, gridRow: 3, animationDelay: `${idx * 0.12}s` }}>
                <span className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.22em", color: `color-mix(in oklab, ${color} 92%, transparent)` }}>{step.n}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile/tablet: stacked cards — reading order alone conveys the sequence */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
          {process.steps.map((step, idx) => {
            const color = STEP_COLORS[idx % STEP_COLORS.length];
            return (
              <div
                key={step.n}
                className="group relative flex flex-col gap-3 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[12px] font-semibold"
                    style={{
                      borderColor: `color-mix(in oklab, ${color} 45%, transparent)`,
                      color,
                      background: `color-mix(in oklab, ${color} 10%, transparent)`,
                    }}
                  >
                    {step.n}
                  </span>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ background: `color-mix(in oklab, ${color} 14%, transparent)`, color }}
                  >
                    {STEP_ICONS[idx]}
                  </span>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-white/90" style={{ letterSpacing: "-0.02em" }}>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/55">{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes step-pulse {
          0%, 100% { filter: drop-shadow(0 0 0px currentColor); }
          50% { filter: drop-shadow(0 0 7px currentColor); }
        }
        .step-node-circle { animation: step-pulse 2.8s ease-in-out infinite; }
        .step-node-circle:hover { animation-play-state: paused; filter: drop-shadow(0 0 9px currentColor); transform: scale(1.12); }

        .step-line { background: rgba(255,255,255,0.08); }
        .step-line-sweep {
          background-image: linear-gradient(90deg, transparent, var(--turquoise), var(--electric), var(--violet), transparent);
          background-size: 50% 100%;
          background-repeat: repeat-x;
          animation: step-line-sweep 5s linear infinite;
          will-change: transform;
        }
        @keyframes step-line-sweep {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }

        @keyframes step-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .step-node { animation: step-fade-in 700ms ease-out backwards; }
      `}</style>
    </section>
  );
}
