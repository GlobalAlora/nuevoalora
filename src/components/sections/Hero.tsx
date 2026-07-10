"use client";

import { useEffect, useRef } from "react";
import { AloraOS } from "@/components/alora/AloraOS";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale?: Locale;
}

const tickerColors = ["var(--turquoise)", "var(--electric)", "var(--violet)"];
const TICKER_DURATION_MS = 38000;

export function Hero({ dict, locale }: Props) {
  const { hero } = dict;
  const dimTrackRef = useRef<HTMLDivElement>(null);
  const colorTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    let loopWidthPx = 0;

    const measure = () => {
      if (dimTrackRef.current) loopWidthPx = dimTrackRef.current.scrollWidth / 3;
    };
    measure();
    window.addEventListener("resize", measure);

    const tick = (time: number) => {
      if (loopWidthPx > 0) {
        const progress = (time % TICKER_DURATION_MS) / TICKER_DURATION_MS;
        const transform = `translateX(-${(progress * loopWidthPx).toFixed(2)}px)`;
        if (dimTrackRef.current) dimTrackRef.current.style.transform = transform;
        if (colorTrackRef.current) colorTrackRef.current.style.transform = transform;
      }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", measure);
    };
  }, []);

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

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:min-h-[640px] md:grid-cols-[58fr_42fr] md:items-center md:gap-10 md:py-28">
        {/* Copy */}
        <div className="min-w-0 max-w-[860px] pt-24 text-center md:pt-0 md:text-left">
          {/* H1 */}
          <h1 className="max-w-[880px]" style={{ marginBottom: "28px" }}>
            <span
              className="block text-white text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px]"
              style={{
                fontWeight: 820,
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
              }}
            >
              <span className="block">{hero.h1Line1}</span>
              <span className="block">{hero.h1Line2}</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, var(--turquoise), var(--electric) 55%, color-mix(in oklab, var(--violet) 70%, transparent))",
                  backgroundSize: "100% 200%",
                  backgroundPosition: "0 0",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {hero.h1Accent}
              </span>
            </span>
          </h1>

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
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
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
          className="relative flex min-w-0 items-center justify-end"
          style={{ opacity: 0.82, transform: "scale(1.05)" }}
        >
          <div className="w-full max-w-[690px]">
            <AloraOS dict={dict} locale={locale} />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative border-t border-white/[0.06]">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden px-6 py-5"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          }}
        >
          {/* Unpadded inner wrapper: w-full keeps its box matching the visible viewport-width container (not the huge scrolling track), so the mask's 50% is the true center */}
          <div className="relative w-full">
            {/* Dim base text, position driven by rAF so it stays pixel-identical to the colored layer */}
            <div ref={dimTrackRef} className="flex w-max items-center gap-12 whitespace-nowrap">
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

            {/* Static center spotlight mask, sized relative to the viewport-width container (not the moving track) */}
            <div
              className="absolute inset-0 flex items-center"
              style={{
                maskImage: "linear-gradient(90deg, transparent, transparent 43%, black 50%, transparent 57%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, transparent 43%, black 50%, transparent 57%, transparent)",
              }}
            >
              <div ref={colorTrackRef} className="flex w-max items-center gap-12 whitespace-nowrap">
                {Array.from({ length: 3 }).map((_, r) => (
                  <div key={r} className="flex items-center gap-12" style={{ textShadow: "0 0 7px currentColor" }}>
                    {hero.ticker.map((t, i) => {
                      const color = tickerColors[i % tickerColors.length];
                      return (
                        <span
                          key={`${t}-${i}`}
                          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em]"
                          style={{ color }}
                        >
                          <span className="inline-block h-[3px] w-[3px] rounded-full" style={{ background: color }} />
                          {t}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
