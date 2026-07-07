"use client";

import { useState } from "react";
import Image from "next/image";
import type { SolutionProject } from "@/lib/solutions-data";

interface Props {
  featured: SolutionProject[];
  more: SolutionProject[];
  locale: string;
  accent: string;
  moreLabel: string;
  lessLabel: string;
}

export function ProjectsSection({ featured, more, locale, accent, moreLabel, lessLabel }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? [...featured, ...more] : featured;

  return (
    <>
      <div className="mt-11 flex flex-wrap justify-center gap-6">
        {visible.map((proj) => (
          <a
            key={proj.name}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group relative w-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                padding: "1px",
                background: `linear-gradient(140deg, color-mix(in oklab, ${accent} 60%, transparent), transparent 55%)`,
                WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <div className="relative h-48 overflow-hidden">
              <Image
                src={proj.image}
                alt={proj.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(8,10,18,0.85) 100%)" }} />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-semibold text-white">{proj.name}</h3>
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14" className="opacity-40 transition-opacity group-hover:opacity-70">
                  <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="mt-1 text-[13px] leading-snug text-white/50">{locale === "es" ? proj.es : proj.en}</p>
            </div>
          </a>
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[14px] font-medium text-white/80 transition-all hover:border-white/30 hover:text-white"
            style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.03)" }}
          >
            {expanded ? lessLabel : moreLabel}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              width="12"
              height="12"
              style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 300ms" }}
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
