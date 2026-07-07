"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CaseStudyScreenshot } from "@/lib/case-studies-data";

interface Props {
  screenshots: CaseStudyScreenshot[];
  locale: "es" | "en";
  accent: string;
  accent2: string;
}

export function ScreenshotsCarousel({ screenshots, locale, accent, accent2 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragX = useRef<number | null>(null);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + screenshots.length) % screenshots.length);

  useEffect(() => {
    if (paused || screenshots.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % screenshots.length), 4500);
    return () => clearInterval(id);
  }, [paused, screenshots.length]);

  return (
    <div
      className="carousel-wrap relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative overflow-hidden rounded-2xl border select-none"
        style={{ borderColor: "rgba(255,255,255,0.1)", boxShadow: `0 30px 70px -25px color-mix(in oklab, ${accent} 32%, transparent)` }}
        onPointerDown={(e) => { dragX.current = e.clientX; }}
        onPointerUp={(e) => {
          if (dragX.current === null) return;
          const delta = e.clientX - dragX.current;
          if (Math.abs(delta) > 60) go(delta > 0 ? -1 : 1);
          dragX.current = null;
        }}
      >
        <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
          <span className="ml-3 truncate text-[12px] text-white/35">{screenshots[index].alt[locale]}</span>
        </div>

        <div className="relative aspect-[8/5] w-full" style={{ background: "#0b0d14" }}>
          {screenshots.map((shot, i) => (
            <div
              key={shot.src}
              className="carousel-slide absolute inset-0"
              style={{
                opacity: i === index ? 1 : 0,
                transform: `translateX(${(i - index) * 4}%) scale(${i === index ? 1 : 1.02})`,
                pointerEvents: i === index ? "auto" : "none",
              }}
            >
              <Image
                src={shot.src}
                alt={shot.alt[locale]}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 780px, 100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <button type="button" onClick={() => go(-1)} aria-label="Previous" className="carousel-arrow" style={{ left: "12px" }}>
          <svg viewBox="0 0 16 16" fill="none" width="15" height="15"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next" className="carousel-arrow" style={{ right: "12px" }}>
          <svg viewBox="0 0 16 16" fill="none" width="15" height="15"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className="carousel-dot"
            style={{ background: i === index ? accent : "rgba(255,255,255,0.18)", width: i === index ? "22px" : "7px" }}
          />
        ))}
      </div>

      <style>{`
        .carousel-slide { transition: opacity 550ms cubic-bezier(0.16,1,0.3,1), transform 550ms cubic-bezier(0.16,1,0.3,1); }
        .carousel-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          display: flex; align-items: center; justify-content: center;
          height: 38px; width: 38px; border-radius: 9999px;
          background: rgba(10,12,20,0.55); border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.75); backdrop-filter: blur(6px);
          transition: all 220ms ease; cursor: pointer;
        }
        .carousel-arrow:hover { background: color-mix(in oklab, ${accent} 30%, rgba(10,12,20,0.7)); border-color: color-mix(in oklab, ${accent} 55%, transparent); color: white; transform: translateY(-50%) scale(1.08); }
        .carousel-dot { height: 7px; border-radius: 9999px; transition: all 320ms cubic-bezier(0.16,1,0.3,1); cursor: pointer; }
        .carousel-dot:hover { background: color-mix(in oklab, ${accent2} 60%, rgba(255,255,255,0.3)) !important; }
      `}</style>
    </div>
  );
}
