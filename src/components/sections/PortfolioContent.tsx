"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { PORTFOLIO, sortByPriority, type ProjectCategory } from "@/lib/portfolio-data";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { ICONS } from "@/lib/icons";

const CASE_STUDY_SLUGS = new Set(CASE_STUDIES.map((cs) => cs.slug));
const CASE_STUDY_BY_SLUG = new Map(CASE_STUDIES.map((cs) => [cs.slug, cs]));

const CATEGORIES: { key: ProjectCategory; es: string; en: string }[] = [
  { key: "all",       es: "Todos",        en: "All" },
  { key: "web",       es: "Sitios Web",   en: "Websites" },
  { key: "ecommerce", es: "Ecommerce",    en: "Ecommerce" },
  { key: "app",       es: "Aplicaciones", en: "Apps" },
  { key: "ia",        es: "IA",           en: "AI" },
];

function normalizeTag(tag: string) {
  return tag.toLowerCase().replace(/[^a-z]/g, "");
}

function matchesCategory(project: { tags: string[] }, key: ProjectCategory) {
  if (key === "all") return true;
  return project.tags.some((t) => normalizeTag(t) === key);
}

const TAG_STYLE: Record<string, React.CSSProperties> = {
  Web:           { color: "var(--turquoise)", borderColor: "color-mix(in oklab, var(--turquoise) 35%, transparent)", background: "color-mix(in oklab, var(--turquoise) 8%, transparent)" },
  "E-commerce":  { color: "var(--electric)",  borderColor: "color-mix(in oklab, var(--electric) 35%, transparent)",  background: "color-mix(in oklab, var(--electric) 8%, transparent)" },
  IA:            { color: "var(--electric)",  borderColor: "color-mix(in oklab, var(--electric) 35%, transparent)",  background: "color-mix(in oklab, var(--electric) 8%, transparent)" },
  App:           { color: "var(--violet)",    borderColor: "color-mix(in oklab, var(--violet) 35%, transparent)",    background: "color-mix(in oklab, var(--violet) 8%, transparent)" },
  Automatización:{ color: "var(--violet)",    borderColor: "color-mix(in oklab, var(--violet) 35%, transparent)",    background: "color-mix(in oklab, var(--violet) 8%, transparent)" },
  Branding:      { color: "var(--violet)",    borderColor: "color-mix(in oklab, var(--violet) 35%, transparent)",    background: "color-mix(in oklab, var(--violet) 8%, transparent)" },
  SEO:           { color: "var(--turquoise)", borderColor: "color-mix(in oklab, var(--turquoise) 35%, transparent)", background: "color-mix(in oklab, var(--turquoise) 8%, transparent)" },
};

function ProjectPlaceholder({ slug }: { slug: string }) {
  const cs = CASE_STUDY_BY_SLUG.get(slug);
  const accent = cs?.theme.primary ?? "var(--turquoise)";
  const accent2 = cs?.theme.secondary ?? "var(--electric)";
  const icon = cs ? ICONS[cs.icon] : null;
  return (
    <div className="flex h-full w-full items-center justify-center" style={{ background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 22%, oklch(0.14 0.014 260)), color-mix(in oklab, ${accent2} 14%, oklch(0.12 0.01 260)))` }}>
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: `color-mix(in oklab, ${accent} 20%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 40%, transparent)`, color: accent }}>
        {icon}
      </span>
    </div>
  );
}

export function PortfolioContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = (params?.locale as string) ?? "es";
  const l = locale === "en" ? "en" : "es";

  const [active, setActive] = useState<ProjectCategory>("all");

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && CATEGORIES.some((c) => c.key === cat)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from the URL on mount
      setActive(cat as ProjectCategory);
    }
  }, [searchParams]);

  const filtered = PORTFOLIO.filter((p) => matchesCategory(p, active));
  const visible = sortByPriority(filtered);

  return (
    <main className="min-h-screen text-white pt-20" style={{ background: "oklch(0.13 0.015 260)" }}>
      {/* Glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.12]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 40%, transparent), transparent)" }} />
        <div className="absolute right-0 bottom-1/3 h-[400px] w-[400px] rounded-full blur-3xl opacity-[0.09]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 40%, transparent), transparent)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
            <span className="font-medium uppercase text-white/60">{l === "es" ? "Casos de éxito" : "Success cases"}</span>
          </div>
          <h1 className="text-balance font-bold text-white"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
            {l === "es" ? "Proyectos en producción" : "Projects in production"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/55">
            {l === "es"
              ? "Sistemas reales que ya están operando y acompañando el crecimiento de nuestros clientes."
              : "Real systems already running and supporting our clients' growth."}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button key={cat.key} onClick={() => setActive(cat.key)}
              className="rounded-full border px-5 py-2 text-[13.5px] font-medium transition-all duration-200"
              style={active === cat.key
                ? { borderColor: "color-mix(in oklab, var(--turquoise) 55%, transparent)", background: "color-mix(in oklab, var(--turquoise) 14%, transparent)", color: "var(--turquoise)" }
                : { borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.55)" }}>
              {cat[l]}
              <span className="ml-1.5 text-[11px] opacity-50">
                ({PORTFOLIO.filter((p) => matchesCategory(p, cat.key)).length})
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <article key={project.slug} id={project.slug}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}>

              {/* Hover glow */}
              <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"
                style={{ boxShadow: "0 0 0 1px color-mix(in oklab, var(--turquoise) 25%, transparent), 0 20px 50px -20px color-mix(in oklab, var(--turquoise) 35%, transparent)" }} />

              {/* Image */}
              <div className="relative h-[210px] overflow-hidden bg-[oklch(0.12_0.01_260)]">
                {project.image ? (
                  <Image src={project.image} alt={project.client} fill
                    priority={i === 0}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => {}} />
                ) : (
                  <ProjectPlaceholder slug={project.slug} />
                )}
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(8,10,18,0.85) 100%)" }} />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-2 p-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5"
                      style={{ fontSize: "10.5px", fontWeight: 530, letterSpacing: "0.06em", ...(TAG_STYLE[tag] ?? TAG_STYLE["Web"]) }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[16px] font-semibold text-white/90 transition-colors group-hover:text-white"
                  style={{ letterSpacing: "-0.018em" }}>
                  {project.client}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/52">
                  {project[l].desc}
                </p>
                {CASE_STUDY_SLUGS.has(project.slug) && (
                  <Link href={`/${l}/casos-de-exito/${project.slug}`}
                    className="mt-1 inline-flex w-fit items-center gap-1.5 text-[12px] font-medium text-white/45 transition-colors hover:text-white/80">
                    {l === "es" ? "Ver Caso de Éxito" : "View Case Study"} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl p-12 text-center"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="text-balance font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 40px)", letterSpacing: "-0.03em" }}>
            {l === "es" ? "¿Tu proyecto es el próximo?" : "Is your project next?"}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-white/50">
            {l === "es"
              ? "Agendá una llamada de 20 minutos y analizamos tu caso sin costo."
              : "Book a 20-minute call and we'll analyze your case at no cost."}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link href={l === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call"}
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 32px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}>
              {l === "es" ? "Agendar llamada gratuita" : "Book a free call"}
            </Link>
            <Link href={l === "es" ? "/es/contacto" : "/en/contacto"}
              className="inline-flex items-center rounded-full border px-8 py-3.5 text-[14px] font-medium text-white/75 transition-all hover:border-white/30 hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)" }}>
              {l === "es" ? "Enviar mensaje" : "Send a message"}
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
