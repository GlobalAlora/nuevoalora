import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getSolution, SOLUTIONS } from "@/lib/solutions-data";
import { getDictionary } from "@/lib/i18n";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroGraphic, HeroInteractiveBackground } from "@/components/shared/HeroInteractive";
import { SolutionGraphic } from "@/components/shared/SolutionGraphics";
import { ProjectsSection } from "./ProjectsSection";
import { SolutionContactForm } from "@/components/shared/SolutionContactForm";
import { ICONS as FEATURE_ICONS } from "@/lib/icons";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

const CASE_STUDY_HIGHLIGHT: Record<string, {
  caseSlug: string;
  image: string;
  imageAspect: string;
  imageAlt: string;
  badge: { es: string; en: string };
  heading: { es: string; en: string };
  body: { es: string; en: string };
  tags: { es: string[]; en: string[] };
}> = {
  chatbots: {
    caseSlug: "soy-lidia",
    image: "/images/case-studies/soy-lidia/hero.png",
    imageAspect: "1600/1542",
    imageAlt: "Soy LIDIA",
    badge: { es: "Caso de Éxito · Chatbots IA", en: "Case Study · AI Chatbots" },
    heading: {
      es: "LIDIA: el chatbot con IA que agenda turnos por WhatsApp, 24/7",
      en: "LIDIA: the AI chatbot that books appointments over WhatsApp, 24/7",
    },
    body: {
      es: "Diseñamos y desarrollamos LIDIA, un chatbot con IA para consultorios y clínicas de salud: responde, agenda turnos, cobra señas y envía recordatorios automáticamente por WhatsApp, sin intervención humana. Hoy está en uso en Argentina, Uruguay, España y Chile.",
      en: "We designed and built LIDIA, an AI chatbot for health clinics and private practices: it replies, books appointments, charges deposits and sends reminders automatically over WhatsApp, with no human intervention. Now in use in Argentina, Uruguay, Spain and Chile.",
    },
    tags: {
      es: ["Chatbot IA", "Agente Conversacional", "Software a Medida"],
      en: ["AI Chatbot", "Conversational Agent", "Custom Software"],
    },
  },
  "atencion-cliente-ia": {
    caseSlug: "soy-lidia",
    image: "/images/case-studies/soy-lidia/hero.png",
    imageAspect: "1600/1542",
    imageAlt: "Soy LIDIA",
    badge: { es: "Caso de Éxito · Agentes Conversacionales IA", en: "Case Study · AI Conversational Agents" },
    heading: {
      es: "LIDIA: el agente conversacional con IA que resuelve consultas por WhatsApp, 24/7",
      en: "LIDIA: the AI conversational agent that resolves inquiries over WhatsApp, 24/7",
    },
    body: {
      es: "Diseñamos y desarrollamos LIDIA, un agente conversacional con IA para consultorios y clínicas de salud: entiende lenguaje natural, resuelve consultas reales, agenda turnos y cobra señas automáticamente por WhatsApp, sin intervención humana. Hoy está en uso en Argentina, Uruguay, España y Chile.",
      en: "We designed and built LIDIA, an AI conversational agent for health clinics and private practices: it understands natural language, resolves real queries, books appointments and charges deposits automatically over WhatsApp, with no human intervention. Now in use in Argentina, Uruguay, Spain and Chile.",
    },
    tags: {
      es: ["Agente Conversacional IA", "Chatbot IA", "Software a Medida"],
      en: ["AI Conversational Agent", "AI Chatbot", "Custom Software"],
    },
  },
  ecommerce: {
    caseSlug: "autodux",
    image: "/images/case-studies/autodux/hero.png",
    imageAspect: "1144/694",
    imageAlt: "Autodux",
    badge: { es: "Caso de Éxito · Ecommerce", en: "Case Study · Ecommerce" },
    heading: {
      es: "Autodux: el marketplace que centraliza la compra y venta de autos",
      en: "Autodux: the marketplace centralizing car buying and selling",
    },
    body: {
      es: "Diseñamos y desarrollamos Autodux, un marketplace de compra y venta de autos: publicaciones para particulares y agencias, buscador con filtros, panel de gestión y contacto directo por WhatsApp con cada vendedor. Hoy centraliza la compra y venta de autos en Comodoro Rivadavia, Argentina.",
      en: "We designed and built Autodux, a car marketplace: listings for individuals and agencies, search with filters, a management panel and direct WhatsApp contact with every seller. Now centralizing car buying and selling in Comodoro Rivadavia, Argentina.",
    },
    tags: {
      es: ["Marketplace", "Ecommerce a Medida", "Software a Medida"],
      en: ["Marketplace", "Custom Ecommerce", "Custom Software"],
    },
  },
  "desarrollo-web": {
    caseSlug: "alkemia",
    image: "/images/case-studies/alkemia/hero.png",
    imageAspect: "1400/697",
    imageAlt: "ALKEMIA",
    badge: { es: "Caso de Éxito · Desarrollo Web", en: "Case Study · Web Development" },
    heading: {
      es: "ALKEMIA: el sitio institucional que construyó su presencia digital en tech e IA",
      en: "ALKEMIA: the institutional website that built its digital presence in tech and AI",
    },
    body: {
      es: "Diseñamos y desarrollamos el nuevo sitio institucional de ALKEMIA en WordPress, bilingüe en español e inglés: arquitectura pensada para conversión, copywriting con posicionamiento tech y SEO técnico desde el lanzamiento. Hoy representa su marca ante una audiencia en LATAM y mercados internacionales.",
      en: "We designed and built ALKEMIA's new institutional website in WordPress, bilingual in Spanish and English: a conversion-focused architecture, copywriting with a tech positioning, and technical SEO from launch. Now representing the brand for a LATAM and international audience.",
    },
    tags: {
      es: ["Sitio Institucional", "WordPress a Medida", "Bilingüe ES/EN"],
      en: ["Institutional Website", "Custom WordPress", "Bilingual ES/EN"],
    },
  },
  "desarrollo-software": {
    caseSlug: "soy-lidia",
    image: "/images/case-studies/soy-lidia/hero.png",
    imageAspect: "1600/1542",
    imageAlt: "Soy LIDIA",
    badge: { es: "Caso de Éxito · Desarrollo de Software", en: "Case Study · Custom Software Development" },
    heading: {
      es: "LIDIA: el software a medida que digitalizó la gestión de consultorios de salud",
      en: "LIDIA: the custom software that digitized health clinic management",
    },
    body: {
      es: "Diseñamos y desarrollamos LIDIA, un sistema de gestión a medida para consultorios y clínicas de salud: agenda multi-profesional, cobro de señas, reportes de negocio en tiempo real y una web propia generada automáticamente para cada clínica. Hoy está en uso en Argentina, Uruguay, España y Chile.",
      en: "We designed and built LIDIA, a custom management system for health clinics and private practices: multi-professional scheduling, deposit collection, real-time business reports and an automatically generated website for each clinic. Now in use in Argentina, Uruguay, Spain and Chile.",
    },
    tags: {
      es: ["Software a Medida", "Sistema de Gestión", "Dashboard de Reportes"],
      en: ["Custom Software", "Management System", "Reporting Dashboard"],
    },
  },
};

export async function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    SOLUTIONS.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const sol = getSolution(slug);
  if (!sol) return {};
  const l = hasLocale(locale) ? (locale as Locale) : "es";
  const m = sol.meta[l];
  return {
    title: m.title,
    description: m.desc,
    alternates: {
      canonical: `https://www.globalalora.com/${l}/soluciones/${slug}`,
      languages: { es: `/es/soluciones/${slug}`, en: `/en/soluciones/${slug}` },
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const sol = getSolution(slug);
  if (!sol) notFound();

  const dict = await getDictionary(l);
  const h = sol.hero[l];
  const features = sol.features[l];
  const process = sol.process[l];
  const ctaText = sol.cta[l];
  const callUrl = l === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  const accent = sol.theme.primary;
  const accent2 = sol.theme.secondary ?? sol.theme.primary;
  const SECTION_BG = "oklch(0.13 0.015 260)";
  const caseStudy = CASE_STUDY_HIGHLIGHT[sol.slug];

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white" style={{ background: SECTION_BG }}>
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/4 top-0 h-[600px] w-[800px] rounded-full blur-3xl opacity-[0.16]"
          style={{ background: `radial-gradient(closest-side, color-mix(in oklab, ${accent} 40%, transparent), transparent)` }}
        />
        <div
          className="absolute right-0 bottom-1/3 h-[400px] w-[500px] rounded-full blur-3xl opacity-[0.12]"
          style={{ background: `radial-gradient(closest-side, color-mix(in oklab, ${accent2} 45%, transparent), transparent)` }}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            WebkitMaskImage: "radial-gradient(65% 65% at 65% 40%, black 20%, transparent 80%)",
            maskImage: "radial-gradient(65% 65% at 65% 40%, black 20%, transparent 80%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-15%] top-[-15%] h-[650px] w-[650px] rounded-full blur-3xl opacity-[0.20]"
          style={{ background: `radial-gradient(closest-side, color-mix(in oklab, ${accent} 55%, transparent), transparent)` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[5%] bottom-[-10%] h-[400px] w-[400px] rounded-full blur-3xl opacity-[0.16]"
          style={{ background: `radial-gradient(closest-side, color-mix(in oklab, ${accent2} 55%, transparent), transparent)` }}
        />
        <HeroInteractiveBackground accent={accent} accent2={accent2} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-32 lg:grid-cols-[56fr_44fr] lg:items-center lg:pt-40">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
              <span className="font-medium uppercase text-white/60">{h.badge}</span>
            </div>

            <h1
              className="text-balance font-bold text-white"
              style={{ fontSize: h.headlineLines ? "clamp(40px, 5vw, 72px)" : "clamp(44px, 6vw, 84px)", letterSpacing: "-0.04em", lineHeight: 0.98 }}
            >
              {h.headlineLines ? h.headlineLines.map((line, i) => <span key={i} className="block">{line}</span>) : h.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              {h.sub}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href={callUrl}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})`, boxShadow: `0 8px 32px color-mix(in oklab, ${accent} 35%, transparent)` }}
              >
                {ctaText}
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            {sol.heroNote && (
              <div className="mt-4 inline-flex items-center gap-2" style={{ color: "rgba(255,255,255,0.42)" }}>
                <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
                  <circle cx="8" cy="8" r="6.3" stroke="currentColor" strokeWidth="1.3" strokeOpacity=".7" />
                  <path d="M8 4.7V8l2.4 1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px]">{sol.heroNote[l]}</span>
              </div>
            )}
            {sol.heroSecondaryCta && (
              <a
                href="#que-construimos"
                className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors"
                style={{ color: `color-mix(in oklab, ${accent} 75%, transparent)` }}
              >
                {sol.heroSecondaryCta[l]}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            )}
          </div>

          {/* Graphic */}
          {!sol.heroImage && (
            <div className="relative hidden lg:block">
              <div className="mx-auto w-full max-w-[480px]">
                <SolutionGraphic slug={sol.slug} accent={accent} accent2={accent2} locale={l === "en" ? "en" : "es"} />
              </div>
            </div>
          )}
        </div>

        {/* Hero image */}
        {sol.heroImage && (
          <div className="mx-auto max-w-5xl px-6 pb-16">
            <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <Image
                src={sol.heroImage}
                alt={h.headline}
                width={1200}
                height={600}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 60%, ${SECTION_BG} 100%)` }} />
            </div>
          </div>
        )}
      </section>

      {/* Stat bar */}
      {sol.statBar && (
        <section className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
              {sol.statBar.label[l]}
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {sol.statBar.items[l].map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="font-bold"
                    style={{
                      fontSize: "clamp(24px, 2.4vw, 34px)",
                      letterSpacing: "-0.02em",
                      color: stat.placeholder ? "rgba(255,255,255,0.3)" : "white",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[12.5px] leading-snug text-white/45">
                    {stat.label}
                    {stat.placeholder && (
                      <span className="ml-1 rounded border px-1 py-0.5 text-[9px] uppercase tracking-wide" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.35)" }}>
                        {l === "es" ? "completar" : "TODO"}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* App explainer — what a web app is, and how it compares to native apps / PWAs */}
      {sol.appExplainer && (
        <section className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mx-auto max-w-[760px] text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
                {sol.appExplainer.label[l]}
              </div>
              <h2
                className="mt-6 text-balance text-white"
                style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
              >
                {sol.appExplainer.heading[l]}
              </h2>
              <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "16px", lineHeight: 1.6, color: "rgba(255,255,255,0.62)" }}>
                {sol.appExplainer.intro[l]}
              </p>
            </div>

            {/* Definition callout */}
            <div
              className="relative mx-auto mt-11 flex max-w-3xl flex-col items-center gap-4 overflow-hidden rounded-2xl p-7 text-center sm:flex-row sm:text-left"
              style={{
                background: `linear-gradient(140deg, color-mix(in oklab, ${accent} 10%, transparent), color-mix(in oklab, ${accent2} 6%, transparent))`,
                border: `1px solid color-mix(in oklab, ${accent} 22%, transparent)`,
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-30"
                style={{ background: accent }}
              />
              <span
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: `color-mix(in oklab, ${accent} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 35%, transparent)`, color: accent }}
              >
                <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
                  <rect x="6" y="6" width="28" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".06" />
                  <line x1="6" y1="12" x2="34" y2="12" stroke="currentColor" strokeWidth="1.3" strokeOpacity=".5" />
                  <circle cx="9.5" cy="9" r="0.9" fill="currentColor" />
                  <circle cx="12.5" cy="9" r="0.9" fill="currentColor" />
                  <line x1="14" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="20" y1="26" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <div className="relative z-10">
                <h3 className="text-[15.5px] font-semibold text-white/90">{sol.appExplainer.definition.title[l]}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/70">{sol.appExplainer.definition.body[l]}</p>
              </div>
            </div>

            {/* Native app vs PWA vs custom web app comparison */}
            <h3 className="mx-auto mt-14 max-w-2xl text-balance text-center text-white" style={{ fontSize: "clamp(19px, 2vw, 24px)", fontWeight: 650, letterSpacing: "-0.02em" }}>
              {sol.appExplainer.comparison.heading[l]}
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-5">
              {sol.appExplainer.comparison.columns[l].map((col, i, arr) => (
                <div
                  key={i}
                  className={`flex w-full flex-col gap-3 rounded-2xl p-6 sm:w-[calc(50%-10px)] ${arr.length >= 3 ? "lg:w-[calc((100%-40px)/3)]" : "lg:w-[calc(50%-10px)]"}`}
                  style={
                    col.highlight
                      ? { background: `linear-gradient(155deg, color-mix(in oklab, ${accent} 16%, transparent), color-mix(in oklab, ${accent2} 8%, transparent))`, border: `1px solid color-mix(in oklab, ${accent} 32%, transparent)` }
                      : { background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)" }
                  }
                >
                  <span
                    className="inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide"
                    style={
                      col.highlight
                        ? { background: `color-mix(in oklab, ${accent} 20%, transparent)`, color: accent, border: `1px solid color-mix(in oklab, ${accent} 40%, transparent)` }
                        : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }
                    }
                  >
                    {col.tag}
                  </span>
                  <h4 className="text-[15px] font-semibold text-white/90">{col.title}</h4>
                  <p className="text-[13px] leading-relaxed text-white/55">{col.body}</p>
                  {col.href && (
                    <Link href={col.href} className="mt-1 inline-flex w-fit items-center gap-1.5 text-[13px] font-medium transition-transform hover:translate-x-0.5" style={{ color: accent }}>
                      {col.linkLabel}
                      <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What we build */}
      {sol.whatWeBuild && (
        <section id="que-construimos" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-[960px] text-center">
            {sol.whatWeBuild.label && (
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
                {sol.whatWeBuild.label[l]}
              </div>
            )}
            <h2
              className="text-balance text-white"
              style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
            >
              {sol.whatWeBuild.heading[l]}
            </h2>
            <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.66)" }}>
              {sol.whatWeBuild.intro[l]}
            </p>
          </div>
          <div className="mt-11 flex flex-wrap justify-center gap-5">
            {sol.whatWeBuild.items[l].map((item, i) => {
              const cardInner = (
                <>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: `radial-gradient(220px circle at 30% 20%, color-mix(in oklab, ${accent} 22%, transparent), transparent 70%)` }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      padding: "1px",
                      background: `linear-gradient(140deg, color-mix(in oklab, ${accent} 55%, transparent), transparent 60%)`,
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span
                    className="feature-icon relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `color-mix(in oklab, ${accent} 16%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 32%, transparent)`, color: accent, animationDelay: `${i * 0.2}s` }}
                  >
                    {FEATURE_ICONS[item.icon]}
                  </span>
                  <div className="relative z-10 flex-1">
                    <h3 className="text-[16px] font-semibold leading-snug text-white/90">{item.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/55">{item.body}</p>
                  </div>
                  {item.href && (
                    <span className="relative z-10 inline-flex items-center gap-1.5 text-[13px] font-medium transition-transform duration-300 group-hover:translate-x-0.5" style={{ color: accent }}>
                      {l === "es" ? "Ver solución" : "View solution"}
                      <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </>
              );
              const cardClass = "feature-card group relative flex w-full flex-col gap-4 overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1.5 sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]";
              const cardStyle = {
                background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)",
              };
              return item.href ? (
                <Link key={i} href={item.href} className={cardClass} style={cardStyle}>
                  {cardInner}
                </Link>
              ) : (
                <div key={i} className={cardClass} style={cardStyle}>
                  {cardInner}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Approach */}
      {sol.approach && (
        <section className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
                {sol.approach.label[l]}
              </div>
              <h2
                className="text-balance text-white"
                style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
              >
                {sol.approach.heading[l]}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                {sol.approach.body[l]}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {sol.approach.bullets[l].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `color-mix(in oklab, ${accent} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 35%, transparent)` }}
                    >
                      <svg viewBox="0 0 16 16" fill="none" width="10" height="10">
                        <path d="M3 8l3 3 6-6" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[14.5px] leading-snug text-white/75">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            {sol.approach.cards ? (
              <div className="grid grid-cols-2 gap-3">
                {sol.approach.cards[l].map((c, i) => {
                  const color = i % 2 === 0 ? accent : accent2;
                  return (
                    <div
                      key={i}
                      className="flex flex-col gap-2.5 rounded-xl p-4"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.05)",
                      }}
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: `color-mix(in oklab, ${color} 16%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 32%, transparent)`, color }}
                      >
                        {(() => {
                          const icon = FEATURE_ICONS[c.icon];
                          return icon ? <span className="[&_svg]:h-4 [&_svg]:w-4">{icon}</span> : null;
                        })()}
                      </span>
                      <div>
                        <h3 className="text-[12.5px] font-semibold leading-snug text-white/90">{c.title}</h3>
                        <p className="mt-1 text-[11px] leading-relaxed text-white/45">{c.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : sol.approach.stat ? (
              <div className="flex justify-center lg:justify-end">
                <div
                  className="rounded-2xl px-10 py-8 text-center"
                  style={{ background: `color-mix(in oklab, ${accent} 8%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 22%, transparent)` }}
                >
                  <div className="font-bold" style={{ fontSize: "56px", letterSpacing: "-0.03em", color: accent }}>
                    {sol.approach.stat.value}
                  </div>
                  <div className="mt-1 text-[13.5px] text-white/55">{sol.approach.stat.label[l]}</div>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* Use cases */}
      {sol.useCases && (
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="mx-auto max-w-[820px] text-center">
            {sol.useCases.label && (
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
                {sol.useCases.label[l]}
              </div>
            )}
            <h2
              className="text-balance text-white"
              style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
            >
              {sol.useCases.heading[l]}
            </h2>
          </div>
          <div className="mt-11 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sol.useCases.items[l].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                <span className="text-[14.5px] leading-snug text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Before / after */}
      {sol.beforeAfter && (
        <section className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="mx-auto max-w-[760px] text-center">
              {sol.beforeAfter.label && (
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
                  {sol.beforeAfter.label[l]}
                </div>
              )}
              <h2
                className="text-balance text-white"
                style={{ fontSize: "clamp(24px, 2.7vw, 38px)", fontWeight: 720, lineHeight: 1.15, letterSpacing: "-0.03em" }}
              >
                {sol.beforeAfter.heading[l]}
              </h2>
              {sol.beforeAfter.intro && (
                <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "760px", fontSize: "15px", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
                  {sol.beforeAfter.intro[l]}
                </p>
              )}
            </div>
            <div className="mt-10 flex flex-col gap-4">
              {sol.beforeAfter.rows[l].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-xl p-4 sm:grid-cols-[1fr_1fr_1fr]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-[14px] font-medium text-white/70">{row.label}</span>
                  <span className="text-[13.5px] text-white/35 line-through decoration-white/20">{row.before}</span>
                  <span className="flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: accent }}>
                    <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {row.after}
                  </span>
                </div>
              ))}
            </div>
            {sol.beforeAfter.closing && (
              <div
                className="relative mx-auto mt-8 flex max-w-2xl items-center gap-4 overflow-hidden rounded-2xl p-6 text-center sm:text-left"
                style={{
                  background: `linear-gradient(140deg, color-mix(in oklab, ${accent} 12%, transparent), color-mix(in oklab, ${accent2} 7%, transparent))`,
                  border: `1px solid color-mix(in oklab, ${accent} 25%, transparent)`,
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-30"
                  style={{ background: accent }}
                />
                <span
                  className="relative z-10 mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:mx-0"
                  style={{ background: `color-mix(in oklab, ${accent} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 38%, transparent)`, color: accent }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="M20 12a8 8 0 10-3.2 6.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M20 6v6h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="relative z-10 mx-auto text-[14.5px] font-medium leading-relaxed text-white/85 sm:mx-0">
                  {sol.beforeAfter.closing[l]}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features */}
      {(!sol.whatWeBuild || sol.featuresDetailed) && (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em]">
            <span style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
              {sol.featuresLabel ? sol.featuresLabel[l] : (l === "es" ? "Qué incluye" : "What's included")}
            </span>
          </div>
          <h2
            className="mt-6 text-balance text-white"
            style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
          >
            {sol.featuresHeading ? sol.featuresHeading[l] : (l === "es" ? "Todo lo que necesitás" : "Everything you need")}
          </h2>
          {sol.featuresIntro && (
            <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.66)" }}>
              {sol.featuresIntro[l]}
            </p>
          )}
        </div>
        {sol.featuresDetailed ? (
          <div className="mt-11 flex flex-wrap justify-center gap-5">
            {sol.featuresDetailed[l].map((f, i) => {
              const color = i % 2 === 0 ? accent : accent2;
              return (
                <div
                  key={i}
                  className="feature-card group relative flex w-full flex-col gap-4 overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-3 -top-3 select-none font-bold"
                    style={{ fontSize: "72px", color: `color-mix(in oklab, ${color} 10%, transparent)`, lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: `radial-gradient(220px circle at 30% 20%, color-mix(in oklab, ${color} 22%, transparent), transparent 70%)` }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      padding: "1px",
                      background: `linear-gradient(140deg, color-mix(in oklab, ${color} 55%, transparent), transparent 60%)`,
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span
                    className="feature-icon relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `color-mix(in oklab, ${color} 16%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 32%, transparent)`, color, animationDelay: `${i * 0.2}s` }}
                  >
                    {FEATURE_ICONS[f.icon]}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-[17px] font-semibold leading-snug text-white/90">{f.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/55">{f.body}</p>
                  </div>
                </div>
              );
            })}
            {sol.featuresConclusion && (
              <div
                className="conclusion-banner group relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-6 text-center sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]"
                style={{
                  background: `linear-gradient(155deg, color-mix(in oklab, ${accent} 18%, transparent), color-mix(in oklab, ${accent2} 10%, transparent) 70%)`,
                  border: `1px solid color-mix(in oklab, ${accent} 30%, transparent)`,
                }}
              >
                <span
                  aria-hidden
                  className="conclusion-glow pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                  style={{ background: accent, opacity: 0.3 }}
                />
                <span
                  className="conclusion-icon relative z-10 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${accent} 20%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 42%, transparent)`, color: accent }}
                >
                  <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5">
                    <path d="M16 4l3.2 8.4L28 15.6l-8.8 3.2L16 28l-3.2-9.2L4 15.6l8.8-3.2z" fill="currentColor" fillOpacity=".9" />
                  </svg>
                </span>
                <p className="relative z-10 text-[15px] font-medium leading-relaxed text-white/90">
                  {sol.featuresConclusion[l]}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-11 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: `color-mix(in oklab, ${accent} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 35%, transparent)` }}
                >
                  <svg viewBox="0 0 16 16" fill="none" width="10" height="10">
                    <path d="M3 8l3 3 6-6" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[14.5px] leading-snug text-white/75">{f}</span>
              </div>
            ))}
          </div>
        )}
      </section>
      )}

      {/* Projects / Case study */}
      {caseStudy ? (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
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
                <div
                  className="overflow-hidden rounded-2xl border"
                  style={{ borderColor: "rgba(255,255,255,0.12)", boxShadow: "0 30px 70px -24px rgba(0,0,0,0.55)" }}
                >
                  <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <div className="relative w-full" style={{ background: "#0b0d14", aspectRatio: caseStudy.imageAspect }}>
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 480px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        sol.projects && sol.projects.length > 0 && (
          <section className="border-y py-20" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-[820px] text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
                  {l === "es" ? "Proyectos reales" : "Real projects"}
                </div>
                <h2
                  className="mt-6 text-balance text-white"
                  style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
                >
                  {l === "es" ? "Resultados que ya están operando" : "Results already in production"}
                </h2>
                {sol.projectsIntro && (
                  <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.66)" }}>
                    {sol.projectsIntro[l]}
                  </p>
                )}
              </div>
              <ProjectsSection
                featured={sol.projects.slice(0, 3)}
                more={sol.projects.slice(3)}
                locale={l}
                accent={accent}
                moreLabel={l === "es" ? "Ver más proyectos" : "View more projects"}
                lessLabel={l === "es" ? "Ver menos" : "View less"}
              />
            </div>
          </section>
        )
      )}

      {/* Why us */}
      {sol.whyUsExtra && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-[980px] text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
              {l === "es" ? "Por qué ALORA" : "Why ALORA"}
            </div>
            <h2
              className="mt-6 text-balance text-white"
              style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
            >
              {sol.whyUsExtra.heading[l]}
            </h2>
            <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.66)" }}>
              {sol.whyUsExtra.intro[l]}
            </p>
          </div>
          <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sol.whyUsExtra.reasons[l].map((reason, i) => {
              const color = i % 2 === 0 ? accent : accent2;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: `radial-gradient(220px circle at 30% 20%, color-mix(in oklab, ${color} 20%, transparent), transparent 70%)` }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      padding: "1px",
                      background: `linear-gradient(140deg, color-mix(in oklab, ${color} 50%, transparent), transparent 60%)`,
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span
                    className="relative z-10 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide"
                    style={{ background: `color-mix(in oklab, ${color} 16%, transparent)`, color, border: `1px solid color-mix(in oklab, ${color} 34%, transparent)` }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
                    {reason.tag}
                  </span>
                  <p className="relative z-10 text-[14px] leading-snug text-white/75">{reason.label}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Testimonials — real client quotes */}
      {sol.testimonials && (
        <section className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
                {l === "es" ? "Testimonios" : "Testimonials"}
              </div>
              <h2
                className="mt-6 text-balance text-white"
                style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
              >
                {l === "es" ? "Lo que dicen quienes ya trabajaron con nosotros" : "What people who've worked with us say"}
              </h2>
            </div>

            <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {sol.testimonials[l].map((t, i) => {
                const color = i % 2 === 0 ? accent : accent2;
                const initials = t.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
                return (
                  <div
                    key={i}
                    className="relative flex flex-col gap-4 rounded-2xl p-7"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.05)",
                    }}
                  >
                    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" style={{ color, opacity: 0.5 }}>
                      <path d="M9 10c-3 0-5 2.3-5 5.4C4 18.7 6.4 21 9.5 21S15 18.7 15 15.6c0-2.5-1.6-4.6-3.9-5.3.3-1.6 1.6-3 3.4-3.3V9c-3 .3-5.5 2.5-5.5 1zM22 10c-3 0-5 2.3-5 5.4 0 3.3 2.4 5.6 5.5 5.6S28 18.7 28 15.6c0-2.5-1.6-4.6-3.9-5.3.3-1.6 1.6-3 3.4-3.3V9c-3 .3-5.5 2.5-5.5 1z" fill="currentColor" />
                    </svg>

                    <p className="text-[14.5px] leading-relaxed text-white/72">{t.quote}</p>

                    <div className="flex flex-wrap gap-2">
                      {t.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="rounded-full px-3 py-1 text-[11.5px] font-medium"
                          style={{ background: `color-mix(in oklab, ${color} 14%, transparent)`, color, border: `1px solid color-mix(in oklab, ${color} 30%, transparent)` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-1 flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                        style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})` }}
                      >
                        {initials}
                      </span>
                      <div>
                        <div className="text-[14px] font-semibold text-white/90">{t.name}</div>
                        <div className="text-[12.5px] leading-snug text-white/45">{t.role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Process — single-line stepper, alternating labels above/below */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: `color-mix(in oklab, ${accent} 70%, transparent)` }}>
            {sol.processLabel ? sol.processLabel[l] : (l === "es" ? "Proceso" : "Process")}
          </div>
          <h2
            className="mt-6 text-balance text-white"
            style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
          >
            {l === "es" ? "Cómo trabajamos" : "How we work"}
          </h2>
          {sol.processHeading && (
            <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.66)" }}>
              {sol.processHeading[l]}
            </p>
          )}
        </div>

        {/* Desktop zigzag stepper */}
        <div
          className="relative mt-20 hidden lg:grid"
          style={{ gridTemplateColumns: `repeat(${process.length}, 1fr)`, gridTemplateRows: "128px auto 128px", columnGap: "1rem" }}
        >
          <div aria-hidden className="process-line absolute left-0 right-0 h-[2px] overflow-hidden" style={{ top: "150px" }}>
            <div
              className="process-line-sweep absolute inset-y-0 left-0"
              style={{
                width: "200%",
                backgroundImage: `linear-gradient(90deg, transparent, ${accent}, ${accent2}, transparent)`,
                backgroundSize: "50% 100%",
                backgroundRepeat: "repeat-x",
              }}
            />
          </div>

          {process.map((step, idx) => {
            const isAbove = idx % 2 === 0;
            return isAbove ? (
              <div key={`${step.n}-t`} className="process-node flex flex-col items-center justify-end pb-4 text-center" style={{ gridColumn: idx + 1, gridRow: 1, animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-[16px] font-semibold leading-snug text-white/90" style={{ letterSpacing: "-0.01em" }}>{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{step.body}</p>
              </div>
            ) : (
              <div key={`${step.n}-t`} className="process-node flex items-end justify-center pb-3" style={{ gridColumn: idx + 1, gridRow: 1, animationDelay: `${idx * 0.1}s` }}>
                <span className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.22em", color: `color-mix(in oklab, ${accent2} 65%, transparent)` }}>{step.n}</span>
              </div>
            );
          })}

          {process.map((step, idx) => (
            <div key={`${step.n}-c`} className="relative z-10 flex items-center justify-center" style={{ gridColumn: idx + 1, gridRow: 2 }}>
              <span
                className="process-node-circle flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-[13px] font-bold transition-transform duration-300"
                style={{
                  borderColor: `color-mix(in oklab, ${idx % 2 === 0 ? accent : accent2} 65%, transparent)`,
                  background: SECTION_BG,
                  color: idx % 2 === 0 ? accent : accent2,
                  boxShadow: `0 0 0 6px ${SECTION_BG}`,
                  animationDelay: `${idx * 0.3}s`,
                }}
              >
                {step.n}
              </span>
            </div>
          ))}

          {process.map((step, idx) => {
            const isAbove = idx % 2 === 0;
            return !isAbove ? (
              <div key={`${step.n}-b`} className="process-node flex flex-col items-center justify-start pt-4 text-center" style={{ gridColumn: idx + 1, gridRow: 3, animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-[16px] font-semibold leading-snug text-white/90" style={{ letterSpacing: "-0.01em" }}>{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{step.body}</p>
              </div>
            ) : (
              <div key={`${step.n}-b`} className="process-node flex items-start justify-center pt-3" style={{ gridColumn: idx + 1, gridRow: 3, animationDelay: `${idx * 0.1}s` }}>
                <span className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.22em", color: `color-mix(in oklab, ${accent} 65%, transparent)` }}>{step.n}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile/tablet: simple stacked list */}
        <div className="relative mx-auto mt-14 max-w-2xl lg:hidden">
          <div className="absolute left-[19px] top-6 bottom-6 w-px" style={{ background: `linear-gradient(180deg, ${accent}, ${accent2})`, opacity: 0.25 }} />
          <div className="flex flex-col gap-8">
            {process.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
                  style={{ background: SECTION_BG, border: `1.5px solid color-mix(in oklab, ${accent} 50%, transparent)`, color: accent, boxShadow: `0 0 16px color-mix(in oklab, ${accent} 20%, transparent)` }}
                >
                  {step.n}
                </div>
                <div className="pt-2">
                  <h3 className="text-[17px] font-semibold text-white" style={{ letterSpacing: "-0.02em" }}>{step.title}</h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-white/55">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {sol.workPrinciple && (
          <div
            className="relative mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 overflow-hidden rounded-2xl p-7 text-center sm:flex-row sm:text-left"
            style={{
              background: `linear-gradient(140deg, color-mix(in oklab, ${accent} 10%, transparent), color-mix(in oklab, ${accent2} 6%, transparent))`,
              border: `1px solid color-mix(in oklab, ${accent} 22%, transparent)`,
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-30"
              style={{ background: accent }}
            />
            <span
              className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `color-mix(in oklab, ${accent} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 35%, transparent)`, color: accent }}
            >
              <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
                <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".4" />
                <path d="M20 20l5-9-9 5-5 9 9-5z" fill="currentColor" fillOpacity=".85" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="relative z-10">
              <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: `color-mix(in oklab, ${accent} 75%, transparent)` }}>
                {l === "es" ? "Principio de trabajo" : "Work principle"}
              </div>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/75">{sol.workPrinciple[l]}</p>
            </div>
          </div>
        )}
      </section>

      {/* CTA section */}
      <section className="relative overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            WebkitMaskImage: "radial-gradient(60% 80% at 50% 40%, black 20%, transparent 80%)",
            maskImage: "radial-gradient(60% 80% at 50% 40%, black 20%, transparent 80%)",
          }}
        />
        {/* decorative oversized network graphic, low opacity */}
        <div
          aria-hidden
          className="cta-bg-graphic pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] opacity-[0.07]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <HeroGraphic accent={accent} accent2={accent2} />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-[0.20]"
          style={{ background: `radial-gradient(closest-side, color-mix(in oklab, ${accent} 50%, transparent), transparent)` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[15%] bottom-[-10%] h-[350px] w-[350px] rounded-full blur-3xl opacity-[0.14]"
          style={{ background: `radial-gradient(closest-side, color-mix(in oklab, ${accent2} 55%, transparent), transparent)` }}
        />
        <HeroInteractiveBackground accent={accent} accent2={accent2} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
          {/* Left: pitch + 3 ways to reach us */}
          <div className="flex flex-col lg:h-full">
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]">
              <span style={{ color: `color-mix(in oklab, ${accent} 75%, transparent)` }}>
                {l === "es" ? "Empecemos" : "Let's start"}
              </span>
            </div>
            <h2
              className="text-balance text-white"
              style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
            >
              {sol.finalCta ? sol.finalCta.heading[l] : (l === "es" ? "¿Listo para empezar?" : "Ready to get started?")}
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/58">
              {sol.finalCta
                ? sol.finalCta.body[l]
                : l === "es"
                  ? "Agendá una llamada de 20 minutos y analizamos tu proyecto sin costo ni compromiso."
                  : "Schedule a 20-minute call and we'll analyze your project at no cost or commitment."}
            </p>

            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              {dict.solutionForm.ways}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={callUrl}
                className="contact-way flex items-center gap-4 rounded-2xl p-4 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${accent} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 38%, transparent)`, color: accent }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <rect x="4" y="3" width="16" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                    <line x1="8" y1="7.5" x2="16" y2="7.5" stroke="currentColor" strokeWidth="1.4" strokeOpacity=".5" />
                    <path d="M9 13l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="block text-[14.5px] font-semibold text-white/90">{dict.solutionForm.wayCall}</span>
                  <span className="block text-[12.5px] leading-snug text-white/45">{dict.solutionForm.wayCallBody}</span>
                </span>
              </Link>

              <a
                href="https://wa.me/5491124629452"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-way flex items-center gap-4 rounded-2xl p-4 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(37,211,102,0.16)", border: "1px solid rgba(37,211,102,0.4)", color: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="block text-[14.5px] font-semibold text-white/90">{dict.solutionForm.wayWhatsapp}</span>
                  <span className="block text-[12.5px] leading-snug text-white/45">{dict.solutionForm.wayWhatsappBody}</span>
                </span>
              </a>

              <a
                href="#solution-form"
                className="contact-way flex items-center gap-4 rounded-2xl p-4 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${accent2} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent2} 38%, transparent)`, color: accent2 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="block text-[14.5px] font-semibold text-white/90">{dict.solutionForm.wayForm}</span>
                  <span className="block text-[12.5px] leading-snug text-white/45">{dict.solutionForm.wayFormBody}</span>
                </span>
              </a>
            </div>

            {sol.finalCta && (
              <div
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 lg:mt-auto"
                style={{ background: `color-mix(in oklab, ${accent} 10%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 24%, transparent)` }}
              >
                <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
                  <circle cx="8" cy="8" r="6.3" stroke={accent} strokeWidth="1.3" />
                  <path d="M8 4.7V8l2.4 1.4" stroke={accent} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-medium text-white/70">{sol.finalCta.ctaNote[l]}</span>
              </div>
            )}
          </div>

          {/* Right: contact form */}
          <div
            id="solution-form"
            className="relative overflow-hidden rounded-3xl p-7 sm:p-9"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-25"
              style={{ background: accent }}
            />
            <h3 className="relative z-10 text-[19px] font-semibold text-white/90" style={{ letterSpacing: "-0.01em" }}>
              {dict.solutionForm.formHeading}
            </h3>
            <div className="relative z-10 mt-6">
              <SolutionContactForm dict={dict} locale={l} slug={slug} accent={accent} accent2={accent2} />
            </div>
          </div>
        </div>
      </section>

    </main>
      <Footer dict={dict} locale={l} />

      <style>{`
        @keyframes process-pulse {
          0%, 100% { filter: drop-shadow(0 0 0px currentColor); }
          50% { filter: drop-shadow(0 0 7px currentColor); }
        }
        .process-node-circle { animation: process-pulse 2.8s ease-in-out infinite; }
        .process-node-circle:hover { animation-play-state: paused; filter: drop-shadow(0 0 9px currentColor); transform: scale(1.12); }

        .process-line { background: rgba(255,255,255,0.08); }
        .process-line-sweep {
          animation: process-line-sweep 5s linear infinite;
          will-change: transform;
        }
        @keyframes process-line-sweep {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }

        @keyframes process-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .process-node { animation: process-fade-in 700ms ease-out backwards; }

        @keyframes feature-icon-pulse {
          0%, 100% { filter: drop-shadow(0 0 0px currentColor); transform: translateY(0); }
          50% { filter: drop-shadow(0 0 6px currentColor); transform: translateY(-2px); }
        }
        .feature-icon { animation: feature-icon-pulse 3.4s ease-in-out infinite; }
        .feature-card:hover .feature-icon { animation-play-state: paused; filter: drop-shadow(0 0 8px currentColor); transform: translateY(-2px) scale(1.08); }

        @keyframes hero-graphic-pulse { 0%, 100% { opacity: .7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
        .hero-graphic-node { animation: hero-graphic-pulse 3.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        @keyframes hero-graphic-dash { to { stroke-dashoffset: -36; } }
        .hero-graphic-edge { animation: hero-graphic-dash 5s linear infinite; }
        @keyframes hero-graphic-spin { to { transform: rotate(360deg); } }
        @keyframes hero-graphic-spin-rev { to { transform: rotate(-360deg); } }
        .hero-graphic-ring { animation: hero-graphic-spin 40s linear infinite; transform-box: fill-box; transform-origin: center; }
        .hero-graphic-ring-rev { animation: hero-graphic-spin-rev 55s linear infinite; transform-box: fill-box; transform-origin: center; }
        @keyframes hero-graphic-hub-pulse { 0%, 100% { filter: drop-shadow(0 0 0px currentColor); } 50% { filter: drop-shadow(0 0 14px currentColor); } }
        .hero-graphic-hub { animation: hero-graphic-hub-pulse 2.6s ease-in-out infinite; }
        @keyframes hero-graphic-particle-float { 0%, 100% { opacity: .3; transform: translateY(0); } 50% { opacity: .9; transform: translateY(-10px); } }
        .hero-graphic-particle { animation: hero-graphic-particle-float 4.5s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }

        @keyframes hero-graphic-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes hero-graphic-orbit-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .hero-graphic-orbit { animation-name: hero-graphic-orbit; animation-timing-function: linear; animation-iteration-count: infinite; transform-box: fill-box; transform-origin: 200px 200px; }
        .hero-graphic-orbit-rev { animation-name: hero-graphic-orbit-rev; animation-timing-function: linear; animation-iteration-count: infinite; transform-box: fill-box; transform-origin: 200px 200px; }

        @keyframes hero-graphic-flow { 0% { offset-distance: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
        .hero-graphic-flow { animation: hero-graphic-flow 3.2s linear infinite; }

        @keyframes hero-bg-drift-a { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(40px, 30px) scale(1.12); } }
        @keyframes hero-bg-drift-b { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-35px, -25px) scale(1.08); } }
        @keyframes hero-bg-drift-c { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(20px, -35px) scale(1.15); } }
        .hero-bg-drift-a { animation: hero-bg-drift-a 14s ease-in-out infinite; }
        .hero-bg-drift-b { animation: hero-bg-drift-b 17s ease-in-out infinite; }
        .hero-bg-drift-c { animation: hero-bg-drift-c 12s ease-in-out infinite; }

        @keyframes conclusion-glow-pulse { 0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.34; transform: translate(-50%, -50%) scale(1.15); } }
        .conclusion-glow { animation: conclusion-glow-pulse 4s ease-in-out infinite; }
        @keyframes conclusion-icon-pulse { 0%, 100% { filter: drop-shadow(0 0 0px currentColor); transform: scale(1); } 50% { filter: drop-shadow(0 0 10px currentColor); transform: scale(1.06); } }
        .conclusion-icon { animation: conclusion-icon-pulse 3s ease-in-out infinite; }
        .conclusion-banner { transition: border-color 400ms, transform 400ms; }
        .conclusion-banner:hover { transform: translateY(-2px); }

        @keyframes cta-bg-drift { 0%, 100% { transform: translate(-50%, -50%) rotate(0deg); } 50% { transform: translate(-50%, -50%) rotate(8deg); } }
        .cta-bg-graphic { animation: cta-bg-drift 22s ease-in-out infinite; }

        .contact-way:hover { border-color: rgba(255,255,255,0.22) !important; background: rgba(255,255,255,0.055) !important; transform: translateX(2px); }
      `}</style>
    </>
  );
}
