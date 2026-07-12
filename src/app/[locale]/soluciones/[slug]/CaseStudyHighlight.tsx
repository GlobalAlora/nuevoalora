"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { HeroGraphic } from "@/components/shared/HeroInteractive";

export interface CaseStudyHighlightItem {
  caseSlug: string;
  image?: string;
  imageAspect: string;
  imageAlt: string;
  frame?: "browser" | "phone";
  badge: { es: string; en: string };
  heading: { es: string; en: string };
  body: { es: string; en: string };
  tags: { es: string[]; en: string[] };
}

interface Props {
  items: CaseStudyHighlightItem[];
  l: Locale;
  accent: string;
  accent2: string;
}

export function CaseStudyHighlight({ items, l, accent, accent2 }: Props) {
  const [index, setIndex] = useState(0);
  const caseStudy = items[index];
  const hasMultiple = items.length > 1;
  // Fixed frame size across all slides — keeps the card from resizing when the
  // active item's image has a different native aspect ratio than the others.
  const frameAspect = items[0].imageAspect;

  const go = (next: number) => setIndex((next + items.length) % items.length);

  return (
    <div
      className="relative overflow-hidden rounded-[28px] p-7 sm:p-10 lg:p-12"
      style={{
        background: "linear-gradient(155deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09), 0 40px 100px -30px rgba(0,0,0,0.65)",
      }}
    >
      {/* Corner glows — color and depth without flattening the card */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{ background: accent }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-25"
        style={{ background: accent2 }}
      />
      {/* Gradient-traced border ring — the "techy circuit" edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{
          padding: "1px",
          background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 55%, transparent), transparent 42%, transparent 58%, color-mix(in oklab, ${accent2} 50%, transparent))`,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {hasMultiple && (
        <div className="relative z-10 mb-6 flex items-center justify-center gap-3 lg:justify-start">
          <button
            type="button"
            aria-label={l === "es" ? "Caso anterior" : "Previous case"}
            onClick={() => go(index - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}
          >
            <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {items.map((item, i) => (
              <button
                key={item.caseSlug}
                type="button"
                aria-label={`${l === "es" ? "Ver caso" : "View case"} ${i + 1}`}
                onClick={() => setIndex(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "22px" : "8px",
                  background: i === index ? `linear-gradient(90deg, ${accent}, ${accent2})` : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={l === "es" ? "Caso siguiente" : "Next case"}
            onClick={() => go(index + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}
          >
            <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-[12px] font-medium text-white/40">
            {index + 1} / {items.length}
          </span>
        </div>
      )}

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        {/* Text */}
        <div className="text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-white"
            style={{
              background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 80%, var(--ink) 20%), color-mix(in oklab, ${accent} 58%, var(--ink) 42%))`,
              boxShadow: `0 1px 0 color-mix(in oklab, white 22%, transparent) inset, 0 10px 24px -10px color-mix(in oklab, ${accent} 55%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 40%, transparent)`,
            }}
          >
            <svg viewBox="0 0 32 32" fill="none" className="h-3.5 w-3.5">
              <path d="M16 4l3.2 8.4L28 15.6l-8.8 3.2L16 28l-3.2-9.2L4 15.6l8.8-3.2z" fill="currentColor" />
            </svg>
            {caseStudy.badge[l]}
          </div>
          <h2
            className="mt-6 text-balance text-white"
            style={{ fontSize: "clamp(28px, 3.2vw, 48px)", fontWeight: 720, lineHeight: 1.08, letterSpacing: "-0.03em" }}
          >
            {caseStudy.heading[l]}
          </h2>
          <p className="mx-auto mt-5 text-pretty lg:mx-0" style={{ maxWidth: "560px", fontSize: "16px", lineHeight: 1.65, color: "rgba(255,255,255,0.7)" }}>
            {caseStudy.body[l]}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {caseStudy.tags[l].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[11.5px] font-medium text-white/70"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href={`/${l}/casos-de-exito/${caseStudy.caseSlug}`}
              className="group inline-flex items-center gap-1 rounded-full py-1.5 pl-6 pr-1.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))",
                boxShadow: `0 1px 0 rgba(255,255,255,0.16) inset, 0 16px 36px -14px color-mix(in oklab, ${accent} 60%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 45%, transparent)`,
              }}
            >
              {l === "es" ? "Leer caso completo" : "Read full case study"}
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5"
                style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})` }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Case study image */}
        {caseStudy.frame === "phone" ? (
          <div className="flex justify-center">
            <div
              className="w-full max-w-[280px] overflow-hidden rounded-[36px] border-[6px]"
              style={{ borderColor: "rgba(255,255,255,0.14)", background: "#0b0d14", boxShadow: "0 30px 70px -24px rgba(0,0,0,0.55)" }}
            >
              <div className="relative w-full" style={{ aspectRatio: frameAspect }}>
                {caseStudy.image && (
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.imageAlt}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "rgba(255,255,255,0.12)", boxShadow: "0 30px 70px -24px rgba(0,0,0,0.55)" }}
          >
            <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
            </div>
            <div className="relative w-full" style={{ background: "#0b0d14", aspectRatio: frameAspect }}>
              {caseStudy.image ? (
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="aspect-square w-[70%] opacity-95">
                    <HeroGraphic accent={accent} accent2={accent2} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
