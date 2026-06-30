import { AloraOS } from "@/components/alora/AloraOS";
import type { Dictionary } from "@/dictionaries/es";

interface Props {
  dict: Dictionary;
}

export function Hero({ dict }: Props) {
  const { hero } = dict;

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* Backgrounds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.16 0.018 260) 0%, oklch(0.13 0.015 260) 55%, oklch(0.11 0.012 260) 100%)",
          }}
        />
        <div
          className="absolute inset-0 bg-grid-dark opacity-40"
          style={{
            WebkitMaskImage:
              "radial-gradient(60% 70% at 72% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.05) 100%)",
            maskImage:
              "radial-gradient(60% 70% at 72% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.05) 100%)",
          }}
        />
        <div
          className="absolute right-[-10%] top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 14%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute left-[-6%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 7%, transparent), transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div
        className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-8 md:grid-cols-[58fr_42fr] md:items-center md:gap-10 md:pt-8"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        {/* Copy */}
        <div className="min-w-0 max-w-[860px]" style={{ transform: "translateY(-36px)" }}>
          {/* Chip */}
          <div
            className="inline-flex items-center gap-2 rounded-full border bg-transparent uppercase text-white/[0.72]"
            style={{
              height: "32px",
              paddingInline: "18px",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              whiteSpace: "nowrap",
              marginBottom: "40px",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <span
              className="rounded-full"
              style={{ width: "4px", height: "4px", background: "var(--turquoise)", opacity: 0.7 }}
            />
            {hero.chip}
          </div>

          {/* H1 */}
          <h1 className="max-w-[880px]">
            <span
              className="block text-white"
              style={{
                fontSize: "clamp(64px, 5.2vw, 88px)",
                fontWeight: 820,
                lineHeight: 0.84,
                letterSpacing: "-0.045em",
              }}
            >
              <span className="block">{hero.h1Line1}</span>
              <span className="block whitespace-nowrap">
                {hero.h1Line2}{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(100deg, var(--turquoise), var(--electric) 55%, color-mix(in oklab, var(--violet) 70%, transparent))",
                  }}
                >
                  {hero.h1Accent}
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <div
            style={{
              maxWidth: "640px",
              fontSize: "clamp(20px, 1.64vw, 28px)",
              fontWeight: 560,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.82)",
              marginTop: "14px",
              marginBottom: "36px",
            }}
          >
            <span className="block">{hero.sub1}</span>
            <span className="block">{hero.sub2}</span>
          </div>

          {/* Body */}
          <p
            className="text-pretty"
            style={{
              maxWidth: "620px",
              fontSize: "16.5px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.72)",
              marginBottom: "28px",
            }}
          >
            {hero.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex w-fit items-center gap-2 rounded-full px-8 py-[6px] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--turquoise) 78%, var(--ink) 22%), color-mix(in oklab, var(--turquoise) 66%, var(--ink) 34%))",
                boxShadow:
                  "0 1px 0 color-mix(in oklab, white 18%, transparent) inset, 0 6px 18px -8px color-mix(in oklab, var(--turquoise) 42%, transparent), 0 0 0 1px color-mix(in oklab, var(--turquoise) 35%, transparent)",
              }}
            >
              {hero.ctaPrimary}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#casos"
              className="group inline-flex items-center gap-2 rounded-full bg-transparent px-4 py-[6px] text-sm text-white/65 transition-colors duration-300 hover:text-white"
            >
              {hero.ctaSecondary}
              <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white/70">→</span>
            </a>
          </div>
        </div>

        {/* AloraOS graph */}
        <div
          className="relative flex min-w-0 items-center justify-center"
          style={{ opacity: 0.82, transform: "translate(-56px, -42px) scale(1.1)" }}
        >
          <div className="w-full max-w-[690px]">
            <AloraOS dict={dict} />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative border-t border-white/[0.06]">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden px-6 py-7"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="hero-ticker flex w-max items-center gap-12 whitespace-nowrap">
            {Array.from({ length: 3 }).map((_, r) => (
              <div key={r} className="flex items-center gap-12">
                {hero.ticker.map((t, i) => (
                  <span key={`${t}-${i}`} className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/35">
                    <span className="inline-block h-[3px] w-[3px] rounded-full bg-white/30" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.3333%); } }
        .hero-ticker { animation: hero-ticker 38s linear infinite; }
      `}</style>
    </section>
  );
}
