"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";
import { CASE_STUDIES } from "@/lib/case-studies-data";

const CASE_STUDY_SLUGS = new Set(CASE_STUDIES.map((cs) => cs.slug));
const VISIBLE_COUNT = 3;

const CASE_IMAGES: Record<string, string> = {
  "castro-yeso": "/images/castroweb.png",
  "asesoria-dialogar": "/images/dialogar.png",
  "protorneos": "/images/protorneo.png",
  "tenis-trenque": "/images/tenisdemesatrenque.com.ar_.png",
  "starley": "/images/starleyweb.png",
  "jose-jose": "/images/josejose.png",
  "alkemia": "/images/alkemia.png",
  "soy-lidia": "/images/soylidia.png",
  "fpnn": "/images/fpnn.png",
  "grupo-terra-lauquen": "/images/grupoterralauquen.com.ar_.png",
  "cichic": "/images/chichicImage.png",
  "crm-alora": "/images/superadmin.png",
  "crm-lidia": "/images/superadmin.png",
  "talleres-unidos": "/images/talleres.png",
  "lidia-superadmin": "/images/superadmin.png",
  "ranking-tenis": "/images/tenisDeMesaImageRank.png",
  "nutriac": "/images/nutriac.png",
  "gangafan": "/images/gangafan-page.png",
  "mega-mayorista": "/images/megamayorista.png",
  "yumkax": "/images/yumkax.png",
  "terracota-valladolid": "/images/terracota.png",
};

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const TAG_COLORS: Record<string, string> = {
  Web: "turquoise",
  IA: "electric",
  AI: "electric",
  CRM: "violet",
  Landing: "violet",
  Automatización: "turquoise",
  Automation: "turquoise",
  Ecommerce: "electric",
  "E-commerce": "electric",
  Branding: "violet",
  App: "electric",
  Marketing: "violet",
  SEO: "turquoise",
};

function CaseTag({ label }: { label: string }) {
  const color = TAG_COLORS[label] ?? "turquoise";
  const styles: Record<string, React.CSSProperties> = {
    turquoise: { color: "var(--turquoise)", borderColor: "color-mix(in oklab, var(--turquoise) 35%, transparent)", background: "color-mix(in oklab, var(--turquoise) 8%, transparent)" },
    electric: { color: "var(--electric)", borderColor: "color-mix(in oklab, var(--electric) 35%, transparent)", background: "color-mix(in oklab, var(--electric) 8%, transparent)" },
    violet: { color: "var(--violet)", borderColor: "color-mix(in oklab, var(--violet) 35%, transparent)", background: "color-mix(in oklab, var(--violet) 8%, transparent)" },
  };
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-0.5"
      style={{ fontSize: "10.5px", fontWeight: 530, letterSpacing: "0.06em", ...styles[color] }}
    >
      {label}
    </span>
  );
}

function CaseFrame({ idx }: { idx: number }) {
  const frames = [
    // Castro Yeso — web landing
    <svg key="0" viewBox="0 0 420 240" className="h-full w-full">
      <rect width="420" height="240" fill="oklch(0.12 0.01 260)" />
      <rect x="0" y="0" width="420" height="24" fill="oklch(0.16 0.015 260)" />
      <circle cx="12" cy="12" r="4" fill="oklch(0.4 0.1 20)" /><circle cx="24" cy="12" r="4" fill="oklch(0.65 0.18 90)" /><circle cx="36" cy="12" r="4" fill="oklch(0.55 0.15 140)" />
      <rect x="55" y="7" width="160" height="10" rx="5" fill="rgba(255,255,255,0.06)" />
      <rect x="24" y="40" width="230" height="16" rx="3" fill="rgba(255,255,255,0.75)" />
      <rect x="24" y="64" width="180" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="24" y="76" width="150" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="24" y="100" width="80" height="28" rx="14" fill="var(--turquoise)" opacity="0.9" />
      <rect x="260" y="36" width="136" height="160" rx="8" fill="oklch(0.16 0.015 260)" stroke="rgba(255,255,255,0.12)" />
      <rect x="270" y="46" width="116" height="62" rx="4" fill="rgba(255,255,255,0.05)" />
      <polyline points="278,90 294,74 308,80 322,64 336,70 352,58 370,66" fill="none" stroke="var(--turquoise)" strokeOpacity="0.8" strokeWidth="1.5" />
      <rect x="270" y="118" width="50" height="6" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="270" y="130" width="116" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="270" y="137" width="90" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
    </svg>,
    // Asesoría Dialogar — CRM pipeline
    <svg key="1" viewBox="0 0 420 240" className="h-full w-full">
      <rect width="420" height="240" fill="oklch(0.12 0.01 260)" />
      <rect x="0" y="0" width="64" height="240" fill="oklch(0.145 0.015 260)" />
      {[30,62,94,126,158].map((y,i) => <rect key={i} x="10" y={y} width="44" height="18" rx="4" fill={i===1?"color-mix(in oklab, var(--turquoise) 25%, transparent)":"rgba(255,255,255,0.04)"} />)}
      <text x="32" y="42" fontSize="7" fill="rgba(255,255,255,0.6)" textAnchor="middle" fontFamily="sans-serif">CRM</text>
      {["LEADS","PROPUESTAS","CLIENTES","CERRADAS"].map((label,col) => (
        <g key={col}>
          <rect x={74+col*86} y={14} width={80} height={218} rx={6} fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.06)" />
          <text x={114+col*86} y={28} fontSize="7.5" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.08em">{label}</text>
          {Array.from({length: col===0?4:col===1?3:col===2?2:1}).map((_,card) => (
            <rect key={card} x={78+col*86} y={36+card*44} width={72} height={38} rx={4} fill={col===3?"color-mix(in oklab, var(--turquoise) 18%, transparent)":"rgba(255,255,255,0.04)"} stroke={col===3?"color-mix(in oklab, var(--turquoise) 35%, transparent)":"rgba(255,255,255,0.06)"} />
          ))}
        </g>
      ))}
    </svg>,
    // Protorneos — app / ranking system
    <svg key="2" viewBox="0 0 420 240" className="h-full w-full">
      <rect width="420" height="240" fill="oklch(0.12 0.01 260)" />
      <rect x="0" y="0" width="420" height="38" fill="oklch(0.16 0.015 260)" />
      <text x="210" y="24" fontSize="11" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.15em">PROTORNEOS</text>
      {[1,2,3,4,5].map((pos) => (
        <g key={pos}>
          <rect x="16" y={38+pos*36} width="388" height="32" rx="4" fill={pos===1?"color-mix(in oklab, var(--electric) 12%, transparent)":"rgba(255,255,255,0.025)"} stroke={pos===1?"color-mix(in oklab, var(--electric) 30%, transparent)":"rgba(255,255,255,0.05)"} />
          <text x="30" y={59+pos*36} fontSize="10" fill={pos===1?"var(--electric)":"rgba(255,255,255,0.5)"} fontFamily="sans-serif" fontWeight="700">#{pos}</text>
          <rect x="52" y={48+pos*36} width="80" height="6" rx="2" fill="rgba(255,255,255,0.25)" />
          <rect x="52" y={58+pos*36} width="50" height="4" rx="1" fill="rgba(255,255,255,0.12)" />
          <rect x="350" y={50+pos*36} width="40" height="10" rx="3" fill={pos===1?"color-mix(in oklab, var(--electric) 30%, transparent)":"rgba(255,255,255,0.06)"} />
        </g>
      ))}
    </svg>,
    // Tenis de Mesa Trenque — ecommerce / tienda
    <svg key="3" viewBox="0 0 420 240" className="h-full w-full">
      <rect width="420" height="240" fill="oklch(0.12 0.01 260)" />
      <rect x="0" y="0" width="420" height="26" fill="oklch(0.16 0.015 260)" />
      <rect x="140" y="8" width="140" height="10" rx="5" fill="rgba(255,255,255,0.06)" />
      {[0,1,2].map(col => (
        <g key={col}>
          <rect x={16+col*136} y={36} width={126} height={136} rx={8} fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.07)" />
          <rect x={26+col*136} y={46} width={106} height={72} rx={4} fill="rgba(255,255,255,0.04)" />
          <rect x={26+col*136} y={126} width={70} height={8} rx="2" fill="rgba(255,255,255,0.3)" />
          <rect x={26+col*136} y={138} width={45} height={8} rx="2" fill={col===1?"var(--turquoise)":"rgba(255,255,255,0.2)"} opacity={col===1?0.9:1} />
          <rect x={26+col*136} y={154} width={106} height={10} rx="5" fill={col===2?"color-mix(in oklab, var(--turquoise) 25%, transparent)":"rgba(255,255,255,0.06)"} />
        </g>
      ))}
      <rect x="16" y="186" width="388" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <rect x="155" y="198" width="110" height="16" rx="8" fill="var(--turquoise)" opacity="0.85" />
    </svg>,
    // Starley — marketing / campaigns
    <svg key="4" viewBox="0 0 420 240" className="h-full w-full">
      <defs>
        <linearGradient id="starley-line" x1="0" x2="1"><stop offset="0" stopColor="var(--violet)" stopOpacity="0.6" /><stop offset="1" stopColor="var(--electric)" stopOpacity="0.6" /></linearGradient>
      </defs>
      <rect width="420" height="240" fill="oklch(0.12 0.01 260)" />
      <rect x="0" y="0" width="420" height="26" fill="oklch(0.16 0.015 260)" />
      <text x="40" y="17" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif" letterSpacing="0.1em">ANALYTICS</text>
      <rect x="12" y="34" width="192" height="96" rx="8" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.06)" />
      <rect x="22" y="44" width="80" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
      <polyline points="20,118 50,100 80,104 110,86 140,90 170,72 194,78" fill="none" stroke="url(#starley-line)" strokeWidth="2" />
      <rect x="216" y="34" width="192" height="96" rx="8" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.06)" />
      <rect x="226" y="44" width="60" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
      {[0,1,2,3,4].map(i => <rect key={i} x={228+i*32} y={118-i*18} width={24} height={i*18+4} rx="2" fill={i===4?"var(--violet)":"color-mix(in oklab, var(--violet) 40%, transparent)"} opacity={0.8} />)}
      <rect x="12" y="142" width="396" height="86" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      {[0,1,2].map(i => <rect key={i} x={22+i*132} y={152} width={122} height={66} rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" />)}
    </svg>,
    // José José — branding / web
    <svg key="5" viewBox="0 0 420 240" className="h-full w-full">
      <defs>
        <linearGradient id="jj-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="oklch(0.72 0.13 195)" stopOpacity="0.5" /><stop offset="1" stopColor="oklch(0.62 0.18 295)" stopOpacity="0.4" /></linearGradient>
      </defs>
      <rect width="420" height="240" fill="oklch(0.12 0.01 260)" />
      <rect x="80" y="20" width="260" height="200" rx="12" fill="url(#jj-grad)" opacity="0.15" />
      <rect x="80" y="20" width="260" height="200" rx="12" fill="none" stroke="rgba(255,255,255,0.12)" />
      <circle cx="210" cy="94" r="38" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
      <circle cx="210" cy="94" r="28" fill="color-mix(in oklab, var(--turquoise) 20%, transparent)" />
      <text x="210" y="98" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.08em">LOGO</text>
      <text x="210" y="152" fontSize="14" fill="rgba(255,255,255,0.8)" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.2em">JOSÉ JOSÉ</text>
      <text x="210" y="168" fontSize="8" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.3em">SOLUCIONES DIGITALES</text>
      <rect x="150" y="186" width="120" height="18" rx="9" fill="var(--turquoise)" opacity="0.8" />
    </svg>,
  ];
  return frames[idx] ?? frames[0];
}

export function Cases({ dict, locale }: Props) {
  const { cases } = dict;
  const [activeFilter, setActiveFilter] = useState<string>(cases.filters[0]?.key ?? "");

  const filters = cases.filters.map((f) => ({ key: f.key, label: f.label }));

  const visible = cases.items
    .filter((item) => item.tags?.some((t) => t.toLowerCase() === activeFilter.toLowerCase()))
    .slice(0, VISIBLE_COUNT);

  return (
    <section id="casos" className="relative isolate overflow-hidden py-24">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(0.11 0.012 260) 0%, oklch(0.1 0.01 255) 100%)" }} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 50%, black 20%, transparent 80%)",
          maskImage: "radial-gradient(70% 60% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-[1150px] text-center text-white">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em]">
            <span className="text-white/50">{cases.sectionIndex}</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-white/80">{cases.sectionLabel}</span>
          </div>
          <h2 className="mt-6 sm:whitespace-nowrap" style={{ fontSize: "clamp(28px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
            {cases.heading}
          </h2>
          <p className="mt-4 text-pretty" style={{ maxWidth: "580px", margin: "16px auto 0", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.62)" }}>
            {cases.body}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className="rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200"
              style={activeFilter === f.key
                ? { borderColor: "color-mix(in oklab, var(--turquoise) 55%, transparent)", background: "color-mix(in oklab, var(--turquoise) 14%, transparent)", color: "var(--turquoise)" }
                : { borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.55)" }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Case cards grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, idx) => (
            <article
              key={item.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl text-white transition-all duration-500 hover:-translate-y-1.5"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.045)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Frame */}
              <div className="relative h-[190px] w-full overflow-hidden bg-[oklch(0.12_0.01_260)]">
                {CASE_IMAGES[item.slug] ? (
                  <Image
                    src={CASE_IMAGES[item.slug]}
                    alt={item.client}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.14_0.012_260)/80]" />
                {item.result && (
                  <div
                    className="absolute right-3 top-3 rounded-lg px-2.5 py-1"
                    style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <span className="text-xs font-semibold text-white/90">{item.result}</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags?.map((tag) => <CaseTag key={tag} label={tag} />)}
                </div>
                <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-white/90 transition-colors group-hover:text-white" style={{ letterSpacing: "-0.018em" }}>
                  {item.client}
                </h3>
                <p className="flex-1 text-[13.5px] leading-relaxed text-white/56">{item.desc}</p>
                {CASE_STUDY_SLUGS.has(item.slug) && (
                  <a
                    href={`/${locale}/casos-de-exito/${item.slug}`}
                    className="mt-1 inline-flex w-fit items-center gap-1.5 text-[12.5px] font-medium text-white/55 transition-colors hover:text-white/90"
                  >
                    {cases.ctaCard} →
                  </a>
                )}
              </div>

              {/* Hover border glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  padding: "1px",
                  background: "linear-gradient(140deg, color-mix(in oklab, var(--turquoise) 55%, transparent), transparent 50%)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={`/${locale}/portfolio`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/75 transition-all hover:border-white/20 hover:text-white"
          >
            {cases.ctaAll} →
          </a>
        </div>
      </div>
    </section>
  );
}
