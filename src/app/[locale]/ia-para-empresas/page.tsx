import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { JourneyTimeline } from "@/components/shared/JourneyTimeline";
import { ICONS } from "@/lib/icons";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { SectionBackground } from "./SectionBackground";
import { AiHeroGraphic } from "./AiHeroGraphic";
import { ProofCarousel, type ProofItem } from "./ProofCarousel";
import { AiLandingContactForm } from "./AiLandingContactForm";
import { LANDING_CONTENT } from "./content";

// Deliberately no Nav/Footer/WhatsApp bubble/chatbot/exit-intent popup on
// this page or its conversion sub-pages (gracias-ia-empresas,
// reservar-auditoria-ia-empresas, auditoria-ia-empresas-reservada): no exits
// before the form. That's enforced in the three shared chrome components
// (WhatsAppButton, ExitIntentPopupLoader, ChatbotLoader) via
// src/lib/chromeless-routes.ts, NOT by living outside [locale] — this page
// lives inside [locale] like every other route so it gets a proper /es and
// /en prefix. Don't reintroduce Nav/Footer here to "match" other pages.
//
// Indexed on purpose (unlike its sub-pages above, which stay noindex): this
// page is meant to rank on its own, it's just not linked from the main nav.
// See src/app/robots.ts and src/app/sitemap.ts for the other two pieces —
// all three need to move together if that changes again.

interface Props {
  params: Promise<{ locale: string }>;
}

const ACCENT_CYCLE = ["var(--turquoise)", "var(--electric)", "var(--violet)"];
const ACCENT = "var(--electric)";
const ACCENT2 = "var(--violet)";
const BG = "oklch(0.13 0.015 260)";

// Media for the proof carousel is locale-independent (same screenshots),
// index-aligned with LANDING_CONTENT[l].proof.items.
const PROOF_MEDIA: { image?: string; imageAspect: string }[] = [
  { image: "/images/case-studies/alora-crm/alora-crm-hero.png", imageAspect: "1400/613" },
  { image: "/images/case-studies/soy-lidia/alora-soy-lidia-hero.png", imageAspect: "1600/1542" },
  { imageAspect: "1400/700" },
  { imageAspect: "1400/700" },
  { imageAspect: "1400/700" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = hasLocale(locale) ? (locale as Locale) : "es";
  const t = LANDING_CONTENT[l];
  const url = `https://www.globalalora.com/${l}/ia-para-empresas`;
  const ogImage = `/api/og?title=${encodeURIComponent(t.breadcrumb.page)}`;

  return {
    title: t.meta.title,
    description: t.meta.desc,
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: { es: "/es/ia-para-empresas", en: "/en/ia-para-empresas", "x-default": "/es/ia-para-empresas" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.desc,
      url,
      locale: l === "es" ? "es_AR" : "en_US",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.desc,
      images: [ogImage],
    },
  };
}

function SectionBadge({ children, accent = ACCENT }: { children: React.ReactNode; accent?: string }) {
  return (
    <div
      className="tech-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
      style={{
        color: accent,
        background: `color-mix(in oklab, ${accent} 7%, rgba(10,12,20,0.6))`,
        border: `1px solid color-mix(in oklab, ${accent} 45%, transparent)`,
        boxShadow: `0 0 22px -6px color-mix(in oklab, ${accent} 65%, transparent), inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      <span
        aria-hidden
        className="tech-badge-dot h-[6px] w-[6px] shrink-0 rounded-full"
        style={{ background: accent, boxShadow: `0 0 8px 1.5px color-mix(in oklab, ${accent} 80%, transparent)` }}
      />
      {children}
      <style>{`
        .tech-badge-dot { animation: tech-badge-pulse 2.2s ease-in-out infinite; }
        @keyframes tech-badge-pulse { 0%,100% { opacity: 0.55; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }
        @media (prefers-reduced-motion: reduce) { .tech-badge-dot { animation: none; } }
      `}</style>
    </div>
  );
}

function SectionHeader({ badge, title, intro, accent = ACCENT, nowrap = false }: { badge: string; title: string; intro: string; accent?: string; nowrap?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <SectionBadge accent={accent}>{badge}</SectionBadge>
      <h2
        className={nowrap ? "mt-5" : "mt-5 text-balance"}
        style={{ fontSize: nowrap ? "clamp(20px, 2.6vw, 38px)" : "clamp(26px, 3vw, 42px)", fontWeight: 720, lineHeight: 1.1, letterSpacing: "-0.03em", whiteSpace: nowrap ? "nowrap" : "normal" }}
      >
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-pretty" style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
        {intro}
      </p>
    </div>
  );
}

function TechCard({ icon, title, body, index }: { icon: string; title: string; body: string; index: number }) {
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length];
  const accent2 = ACCENT_CYCLE[(index + 1) % ACCENT_CYCLE.length];
  return (
    <div
      className="tech-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        border: `1px solid color-mix(in oklab, ${accent} 30%, rgba(255,255,255,0.1))`,
        boxShadow: `0 20px 50px -30px color-mix(in oklab, ${accent} 40%, transparent)`,
      }}
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}, ${accent2})` }} />
      <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-45" style={{ background: accent }} />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)", backgroundSize: "16px 16px", maskImage: "linear-gradient(180deg, transparent, black 35%, black 65%, transparent)", WebkitMaskImage: "linear-gradient(180deg, transparent, black 35%, black 65%, transparent)" }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className="flex h-12 w-12 items-center justify-center [&_svg]:h-5 [&_svg]:w-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(160deg, color-mix(in oklab, ${accent} 34%, transparent), color-mix(in oklab, ${accent2} 20%, transparent))`,
            color: accent,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {ICONS[icon]}
        </span>
        <span className="font-mono text-[11px] font-semibold text-white/25">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="relative text-[17px] font-semibold leading-snug text-white/94">{title}</h3>
      <p className="relative text-[14.5px] leading-relaxed text-white/62">{body}</p>

      <style>{`.tech-card:hover { transform: translateY(-3px); transition: transform 300ms ease; }`}</style>
    </div>
  );
}

function IndustryCard({ icon, name, useCases, index }: { icon: string; name: string; useCases: string[]; index: number }) {
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length];
  const accent2 = ACCENT_CYCLE[(index + 1) % ACCENT_CYCLE.length];
  return (
    <div
      className="tech-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        border: `1px solid color-mix(in oklab, ${accent} 30%, rgba(255,255,255,0.1))`,
        boxShadow: `0 20px 50px -30px color-mix(in oklab, ${accent} 40%, transparent)`,
      }}
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}, ${accent2})` }} />
      <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-45" style={{ background: accent }} />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)", backgroundSize: "16px 16px", maskImage: "linear-gradient(180deg, transparent, black 35%, black 65%, transparent)", WebkitMaskImage: "linear-gradient(180deg, transparent, black 35%, black 65%, transparent)" }}
      />

      <div className="relative flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center [&_svg]:h-[18px] [&_svg]:w-[18px] transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(160deg, color-mix(in oklab, ${accent} 34%, transparent), color-mix(in oklab, ${accent2} 20%, transparent))`,
            color: accent,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {ICONS[icon]}
        </span>
        <h3 className="text-[16px] font-semibold leading-snug text-white/94">{name}</h3>
      </div>
      <ul className="relative flex flex-col gap-2.5">
        {useCases.map((u) => (
          <li key={u} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/62">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} />
            {u}
          </li>
        ))}
      </ul>

      <style>{`.tech-card:hover { transform: translateY(-3px); transition: transform 300ms ease; }`}</style>
    </div>
  );
}

export default async function IaParaEmpresasPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const t = LANDING_CONTENT[l];
  const pageUrl = `https://www.globalalora.com/${l}/ia-para-empresas`;

  const PROOF_ITEMS: ProofItem[] = t.proof.items.map((item, i) => ({ ...item, ...PROOF_MEDIA[i] }));

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t.breadcrumb.home, url: `https://www.globalalora.com/${l}` },
    { name: t.breadcrumb.page, url: pageUrl },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.breadcrumb.page,
    description: t.meta.desc,
    url: pageUrl,
    provider: { "@type": "Organization", name: "ALORA", url: "https://www.globalalora.com" },
    areaServed: ["Argentina", "España", "Estados Unidos", "México", "Colombia", "Chile", "Uruguay", "Paraguay"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="relative min-h-screen overflow-hidden text-white" style={{ background: BG }}>
        {/* Header — unlinked logo only, no nav */}
        <header className="relative z-10 flex items-center justify-center py-8">
          <Image src="/alora-logo-nav-white.png" alt="ALORA" width={110} height={30} className="h-8 w-auto" priority />
        </header>

        {/* Hero */}
        <section className="relative px-6 pb-20 pt-6">
          <SectionBackground variant="particles" accent={ACCENT} accent2={ACCENT2} />
          <div className="hero-split mx-auto max-w-6xl">
            <div className="hero-split-text">
              <SectionBadge>{t.hero.badge}</SectionBadge>
              <h1
                className="mt-6 text-balance"
                style={{ fontSize: "clamp(32px, 4.6vw, 58px)", fontWeight: 720, lineHeight: 1.05, letterSpacing: "-0.035em" }}
              >
                {t.hero.h1Line1}
                <span className="block" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  {t.hero.h1Line2}
                </span>
              </h1>
              <p className="hero-split-p mt-5 max-w-xl text-pretty" style={{ fontSize: "17.5px", lineHeight: 1.65, color: "rgba(255,255,255,0.68)" }}>
                {t.hero.paragraph}
              </p>
              <div className="hero-split-cta mt-8 flex justify-center">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14.5px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`, boxShadow: `0 8px 32px color-mix(in oklab, ${ACCENT} 35%, transparent)` }}
                >
                  {t.hero.cta}
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[400px]">
              <AiHeroGraphic accent={ACCENT} accent2={ACCENT2} />
            </div>
          </div>
          <style>{`
            .hero-split { display: flex; flex-direction: column; gap: 56px; align-items: center; }
            .hero-split-text { text-align: center; }
            .hero-split-p { margin-left: auto; margin-right: auto; }
            @media (min-width: 768px) {
              .hero-split { display: grid; grid-template-columns: 1.1fr 0.9fr; align-items: center; }
              .hero-split-text, .hero-split-p { text-align: left; margin-left: 0; margin-right: 0; }
              .hero-split-cta { justify-content: flex-start; }
            }
          `}</style>
        </section>

        {/* Problem / friction */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="diagonal" accent={ACCENT_CYCLE[0]} accent2={ACCENT_CYCLE[2]} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader badge={t.problem.badge} title={t.problem.title} intro={t.problem.intro} accent={ACCENT_CYCLE[0]} />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
              {t.problem.cards.map((c, i) => <TechCard key={c.title} index={i} {...c} />)}
            </div>
          </div>
        </section>

        {/* Where AI applies, by business function */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="pulse" accent={ACCENT_CYCLE[1]} accent2={ACCENT_CYCLE[0]} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader badge={t.application.badge} title={t.application.title} intro={t.application.intro} accent={ACCENT_CYCLE[1]} />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
              {t.application.cards.map((c, i) => <TechCard key={c.title} index={i} {...c} />)}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="aurora" accent={ACCENT_CYCLE[2]} accent2={ACCENT_CYCLE[1]} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader badge={t.industries.badge} title={t.industries.title} intro={t.industries.intro} accent={ACCENT_CYCLE[2]} />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 industries-grid">
              {t.industries.items.map((ind, i) => (
                <IndustryCard key={ind.name} icon={ind.icon} name={ind.name} useCases={ind.useCases} index={i} />
              ))}
            </div>
            <style>{`
              @media (min-width: 768px) {
                .industries-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
              }
            `}</style>
          </div>
        </section>

        {/* Methodology */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="diagonal" accent={ACCENT} accent2={ACCENT2} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader badge={t.methodology.badge} title={t.methodology.title} intro={t.methodology.intro} />
            <JourneyTimeline stages={t.methodology.stages} accent={ACCENT} accent2={ACCENT2} />
          </div>
        </section>

        {/* Proof — carousel, self-contained, no external links */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="pulse" accent={ACCENT2} accent2={ACCENT} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader badge={t.proof.badge} title={t.proof.title} intro={t.proof.intro} />
            <div className="mt-12">
              <ProofCarousel items={PROOF_ITEMS} rowLabels={t.proof.rowLabels} />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="aurora" accent={ACCENT} accent2={ACCENT2} />
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionBadge>{t.contact.badge}</SectionBadge>
              <h2 className="mt-5" style={{ fontSize: "clamp(22px, 2.9vw, 40px)", fontWeight: 720, lineHeight: 1.08, letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>
                {t.contact.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance" style={{ fontSize: "16.5px", lineHeight: 1.62, color: "rgba(255,255,255,0.65)" }}>
                {t.contact.subtitle}
              </p>
            </div>

            <div className="contact-split mt-14">
              {/* Left: audit explanation + smaller call CTA */}
              <div className="contact-split-left">
                <h3 className="text-[15px] font-bold uppercase tracking-wide text-white/50">{t.contact.leftHeading}</h3>
                <ul className="mt-4 flex flex-col gap-3.5">
                  {t.contact.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-white/72">
                      <span className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full" style={{ background: `color-mix(in oklab, ${ACCENT} 20%, transparent)` }}>
                        <svg viewBox="0 0 16 16" fill="none" width="9" height="9"><path d="M3 8l3.5 3.5L13 4" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 rounded-full py-2.5 pl-3 pr-4" style={{ background: `color-mix(in oklab, ${ACCENT2} 10%, rgba(255,255,255,0.03))`, border: `1px solid color-mix(in oklab, ${ACCENT2} 30%, transparent)` }}>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `color-mix(in oklab, ${ACCENT2} 20%, transparent)`, color: ACCENT2 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                    </svg>
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-white/80">{t.contact.infoChip}</p>
                </div>

                <Link
                  href={`/${l}/reservar-auditoria-ia-empresas`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)" }}
                >
                  {t.contact.secondaryCta}
                </Link>
              </div>

              {/* Right: form */}
              <div
                className="contact-split-right rounded-[28px] p-7 sm:p-10"
                style={{ background: "linear-gradient(155deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <AiLandingContactForm accent={ACCENT} accent2={ACCENT2} locale={l} />
              </div>
            </div>
            <style>{`
              .contact-split { display: flex; flex-direction: column; gap: 40px; }
              .contact-split-left, .contact-split-right { width: 100%; }
              @media (min-width: 768px) {
                .contact-split { display: grid; grid-template-columns: 2fr 3fr; gap: 56px; align-items: start; }
              }
            `}</style>
          </div>
        </section>

        {/* FAQ — visible accordion, feeds the FAQPage schema above */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="particles" accent={ACCENT_CYCLE[0]} accent2={ACCENT_CYCLE[1]} />
          <div className="mx-auto max-w-3xl">
            <SectionHeader badge={t.faq.badge} title={t.faq.title} intro={t.faq.intro} accent={ACCENT_CYCLE[0]} />
            <div className="mt-10 space-y-3">
              {t.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border px-6 py-5 transition-colors open:border-white/20"
                  style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-[15px] font-medium text-white/90 group-open:text-white">{item.question}</span>
                    <span aria-hidden className="shrink-0 text-white/30 transition-transform group-open:rotate-45" style={{ color: ACCENT_CYCLE[0] }}>
                      <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-[14px] leading-relaxed text-white/60">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal footer — legal links only, no site navigation */}
        <footer className="relative px-6 py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
            <Image src="/alora-logo-nav-white.png" alt="ALORA" width={81} height={22} className="opacity-60" />
            <p className="text-[12px] text-white/40">{t.footer.copyright}</p>
            <div className="flex gap-4 text-[12px] text-white/40">
              <Link href={`/${l}/privacy-policy`} className="underline transition-colors hover:text-white/70">{t.footer.privacy}</Link>
              <Link href={`/${l}/cookies`} className="underline transition-colors hover:text-white/70">{t.footer.cookies}</Link>
              <Link href={`/${l}/terminos`} className="underline transition-colors hover:text-white/70">{t.footer.terms}</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
