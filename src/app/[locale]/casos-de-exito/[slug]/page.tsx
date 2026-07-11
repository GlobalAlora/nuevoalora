import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCaseStudy, CASE_STUDIES } from "@/lib/case-studies-data";
import { getDictionary } from "@/lib/i18n";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroGraphic, HeroInteractiveBackground } from "@/components/shared/HeroInteractive";
import { SolutionContactForm } from "@/components/shared/SolutionContactForm";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ScreenshotsCarousel } from "@/components/shared/ScreenshotsCarousel";
import { FeatureShowcase } from "@/components/shared/FeatureShowcase";
import { ICONS } from "@/lib/icons";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    CASE_STUDIES.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const l = hasLocale(locale) ? (locale as Locale) : "es";
  const m = cs.meta[l];
  return {
    title: m.title,
    description: m.desc,
    alternates: {
      canonical: `https://www.globalalora.com/${l}/casos-de-exito/${slug}`,
      languages: { es: `/es/casos-de-exito/${slug}`, en: `/en/casos-de-exito/${slug}` },
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const dict = await getDictionary(l);
  const h = cs.hero[l];
  const challenge = cs.challenge[l];
  const solution = cs.solution[l];
  const scope = cs.scopeDelivered[l];
  const callUrl = l === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  const accent = cs.theme.primary;
  const accent2 = cs.theme.secondary ?? cs.theme.primary;
  const SECTION_BG = "oklch(0.13 0.015 260)";

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
          <div
            className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
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
          <HeroInteractiveBackground accent={accent} accent2={accent2} />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-32 lg:grid-cols-[56fr_44fr] lg:items-center lg:pt-40">
            <div className="text-center lg:text-left">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-white"
                style={{
                  background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 80%, var(--ink) 20%), color-mix(in oklab, ${accent} 58%, var(--ink) 42%))`,
                  boxShadow: `0 1px 0 color-mix(in oklab, white 22%, transparent) inset, 0 10px 24px -10px color-mix(in oklab, ${accent} 55%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 40%, transparent)`,
                }}
              >
                <svg viewBox="0 0 32 32" fill="none" className="h-3.5 w-3.5">
                  <path d="M16 4l3.2 8.4L28 15.6l-8.8 3.2L16 28l-3.2-9.2L4 15.6l8.8-3.2z" fill="currentColor" />
                </svg>
                {h.badge}
              </div>

              <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(32px, 4.6vw, 60px)", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
                {h.title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {h.sub}
              </p>

              {/* Client info row */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-white/50 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><circle cx="8" cy="8" r="6.3" stroke="currentColor" strokeWidth="1.3" /></svg>
                  {cs.client}
                </span>
                <span>{cs.location[l]}</span>
                <span>{cs.category[l]}</span>
              </div>
            </div>

            {cs.heroImageMobile && (
              <div className="relative mt-2 lg:hidden">
                <div
                  className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[28px] border-4"
                  style={{ borderColor: "rgba(255,255,255,0.08)", boxShadow: `0 25px 60px -20px color-mix(in oklab, ${accent} 35%, transparent)` }}
                >
                  <div className="relative w-full" style={{ background: "#0b0d14", aspectRatio: cs.heroImageMobileAspect ?? "9/16" }}>
                    <Image src={cs.heroImageMobile} alt={`${cs.client} — mobile`} fill className="object-contain" sizes="280px" />
                  </div>
                </div>
              </div>
            )}

            <div className="relative hidden lg:block">
              {cs.heroImage ? (
                <div
                  className="overflow-hidden rounded-2xl border"
                  style={{ borderColor: "rgba(255,255,255,0.1)", boxShadow: `0 30px 80px -20px color-mix(in oklab, ${accent} 35%, transparent)` }}
                >
                  <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <div className="relative w-full" style={{ background: "#0b0d14", aspectRatio: cs.heroImageAspect ?? "16/10" }}>
                    <Image src={cs.heroImage} alt={cs.client} fill className="object-contain" sizes="520px" />
                  </div>
                </div>
              ) : (
                <div className="mx-auto aspect-square w-full max-w-[520px]" style={{ opacity: 0.95 }}>
                  <HeroGraphic accent={accent} accent2={accent2} />
                </div>
              )}

              {cs.heroImageMobile && (
                <div
                  className="absolute -bottom-8 -right-7 w-[118px] overflow-hidden rounded-[20px] border-4"
                  style={{ borderColor: "rgba(255,255,255,0.16)", boxShadow: `0 22px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.4)` }}
                >
                  <div className="relative w-full" style={{ background: "#0b0d14", aspectRatio: cs.heroImageMobileAspect ?? "9/16" }}>
                    <Image src={cs.heroImageMobile} alt={`${cs.client} — mobile`} fill className="object-contain" sizes="118px" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="relative overflow-hidden border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-0 h-[380px] w-[480px] rounded-full blur-3xl opacity-[0.10]"
            style={{ background: `radial-gradient(closest-side, ${accent}, transparent)` }}
          />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div
                className="mb-4 inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
                style={{
                  background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 80%, var(--ink) 20%), color-mix(in oklab, ${accent} 58%, var(--ink) 42%))`,
                  boxShadow: `0 1px 0 color-mix(in oklab, white 22%, transparent) inset, 0 8px 20px -10px color-mix(in oklab, ${accent} 55%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 40%, transparent)`,
                }}
              >
                {l === "es" ? "El desafío" : "The challenge"}
              </div>
              <h2 className="text-balance text-white" style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
                {challenge.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-[16px] leading-relaxed lg:mx-0" style={{ color: "rgba(255,255,255,0.62)" }}>
                {challenge.body}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {challenge.points.map((point, i) => {
                const color = i % 2 === 0 ? accent : accent2;
                return (
                  <SpotlightCard
                    key={i}
                    accent={color}
                    className="flex items-center gap-3 p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `color-mix(in oklab, ${color} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 35%, transparent)`, color }}
                    >
                      {ICONS[point.icon]}
                    </span>
                    <span className="text-[14px] leading-snug text-white/70">{point.text}</span>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[520px] rounded-full blur-3xl opacity-[0.08]"
            style={{ background: `radial-gradient(closest-side, ${accent2}, transparent)` }}
          />
          <div className="relative mx-auto max-w-7xl px-6 py-20">
            <div className="mx-auto max-w-[1100px] text-center">
              <div
                className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
                style={{
                  background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 80%, var(--ink) 20%), color-mix(in oklab, ${accent} 58%, var(--ink) 42%))`,
                  boxShadow: `0 1px 0 color-mix(in oklab, white 22%, transparent) inset, 0 8px 20px -10px color-mix(in oklab, ${accent} 55%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 40%, transparent)`,
                }}
              >
                {l === "es" ? "La solución" : "The solution"}
              </div>
              <h2 className="mx-auto mt-6 text-balance text-white" style={{ fontSize: "clamp(28px, 3vw, 46px)", fontWeight: 720, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                {solution.heading}
              </h2>
              <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.66)" }}>
                {solution.intro}
              </p>
            </div>

            <div className="mt-11">
              <FeatureShowcase items={solution.items} accent={accent} accent2={accent2} />
            </div>

            <div className="mt-14 border-t pt-10" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {l === "es" ? "Construido con" : "Built with"}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                {cs.techStack.map((t, i) => {
                  const color = i % 2 === 0 ? accent : accent2;
                  return (
                    <SpotlightCard
                      key={t.name}
                      accent={color}
                      className="tech-chip flex items-center gap-3 rounded-2xl px-5 py-4"
                      style={{ background: "rgba(255,255,255,0.04)", border: `1px solid color-mix(in oklab, ${color} 26%, rgba(255,255,255,0.1))` }}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: `color-mix(in oklab, ${color} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 38%, transparent)`, color }}
                      >
                        {ICONS[t.icon]}
                      </span>
                      <span>
                        <span className="block text-[15px] font-semibold text-white/92">{t.name}</span>
                        <span className="block text-[12px] text-white/45">{t.body[l]}</span>
                      </span>
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots carousel */}
        {cs.screenshots && cs.screenshots.length > 0 && (
          <section className="relative overflow-hidden border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.10]"
              style={{ background: `radial-gradient(closest-side, ${accent}, transparent)` }}
            />
            <div className="relative mx-auto max-w-7xl px-6 py-16">
              <div className="mx-auto mb-10 max-w-[680px] text-center">
                <div
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
                  style={{
                    background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 80%, var(--ink) 20%), color-mix(in oklab, ${accent} 58%, var(--ink) 42%))`,
                    boxShadow: `0 1px 0 color-mix(in oklab, white 22%, transparent) inset, 0 8px 20px -10px color-mix(in oklab, ${accent} 55%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 40%, transparent)`,
                  }}
                >
                  {l === "es" ? "En producción" : "In production"}
                </div>
                <h2 className="mt-4 text-balance text-white" style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 720, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {l === "es" ? "Así se ve la plataforma" : "This is what the platform looks like"}
                </h2>
              </div>
              <ScreenshotsCarousel screenshots={cs.screenshots} locale={l} accent={accent} accent2={accent2} />
            </div>
          </section>
        )}

        {/* Scope delivered */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute right-1/4 top-10 h-[420px] w-[560px] rounded-full blur-3xl opacity-[0.13]"
            style={{ background: `radial-gradient(closest-side, ${accent2}, transparent)` }}
          />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div className="text-center lg:text-left">
                <div
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
                  style={{
                    background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 80%, var(--ink) 20%), color-mix(in oklab, ${accent} 58%, var(--ink) 42%))`,
                    boxShadow: `0 1px 0 color-mix(in oklab, white 22%, transparent) inset, 0 8px 20px -10px color-mix(in oklab, ${accent} 55%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 40%, transparent)`,
                  }}
                >
                  {l === "es" ? "Resultado" : "Outcome"}
                </div>
                <h2 className="mt-6 text-balance text-white" style={{ fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 720, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                  {scope.heading}
                </h2>
                <p className="mt-5 text-pretty text-[16px] leading-relaxed text-white/62">
                  {scope.intro}
                </p>

                <SpotlightCard
                  accent={accent}
                  className="stat-card mt-8 inline-flex flex-col items-center gap-1 rounded-2xl p-6 lg:items-start"
                  style={{
                    background: `linear-gradient(140deg, color-mix(in oklab, ${accent} 16%, transparent), rgba(255,255,255,0.02))`,
                    border: `1px solid color-mix(in oklab, ${accent} 32%, transparent)`,
                  }}
                >
                  <span className="text-[12.5px] font-medium uppercase tracking-[0.16em] text-white/45">
                    {l === "es" ? "Tiempo de desarrollo" : "Development time"}
                  </span>
                  <span className="text-[34px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
                    {l === "es" ? cs.duration.es : cs.duration.en}
                  </span>
                </SpotlightCard>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {scope.items.map((item, i) => {
                  const color = i % 2 === 0 ? accent : accent2;
                  return (
                    <SpotlightCard
                      key={i}
                      accent={color}
                      className="flex items-start gap-3 rounded-xl p-4"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: `color-mix(in oklab, ${color} 20%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 40%, transparent)` }}>
                        <svg viewBox="0 0 16 16" fill="none" width="10" height="10">
                          <path d="M3 8l3 3 6-6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[14px] leading-snug text-white/78">{item}</span>
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-[0.20]"
            style={{ background: `radial-gradient(closest-side, color-mix(in oklab, ${accent} 50%, transparent), transparent)` }}
          />
          <HeroInteractiveBackground accent={accent} accent2={accent2} />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <div
                className="mb-4 inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
                style={{
                  background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 80%, var(--ink) 20%), color-mix(in oklab, ${accent} 58%, var(--ink) 42%))`,
                  boxShadow: `0 1px 0 color-mix(in oklab, white 22%, transparent) inset, 0 8px 20px -10px color-mix(in oklab, ${accent} 55%, transparent), 0 0 0 1px color-mix(in oklab, ${accent} 40%, transparent)`,
                }}
              >
                {l === "es" ? "Empecemos" : "Let's start"}
              </div>
              <h2 className="text-balance text-white" style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
                {l === "es" ? "¿Tenés un proyecto parecido?" : "Have a similar project?"}
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/58">
                {l === "es"
                  ? "Coordinemos una llamada breve para entender tu proyecto y ver cómo ayudarte a construirlo."
                  : "Let's set up a brief call to understand your project and see how we can help you build it."}
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
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklab, ${accent} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 38%, transparent)`, color: accent }}>
                    {ICONS.controls}
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
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(37,211,102,0.16)", border: "1px solid rgba(37,211,102,0.4)", color: "#25D366" }}>
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
                  href="#case-study-form"
                  className="contact-way flex items-center gap-4 rounded-2xl p-4 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklab, ${accent2} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${accent2} 38%, transparent)`, color: accent2 }}>
                    {ICONS.chat}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[14.5px] font-semibold text-white/90">{dict.solutionForm.wayForm}</span>
                    <span className="block text-[12.5px] leading-snug text-white/45">{dict.solutionForm.wayFormBody}</span>
                  </span>
                </a>
              </div>
            </div>

            <div
              id="case-study-form"
              className="relative overflow-hidden rounded-3xl p-7 sm:p-9"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-25" style={{ background: accent }} />
              <h3 className="relative z-10 text-[19px] font-semibold text-white/90" style={{ letterSpacing: "-0.01em" }}>
                {dict.solutionForm.formHeading}
              </h3>
              <div className="relative z-10 mt-6">
                <SolutionContactForm dict={dict} locale={l} slug={slug} accent={accent} accent2={accent2} source="caso-de-exito" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={l} />

      <style>{`
        /* Spotlight cards — mouse-tracked light + gradient border, used across the page */
        .spotlight-card { position: relative; overflow: hidden; border-radius: 1rem; transition: transform 450ms cubic-bezier(0.16,1,0.3,1), border-color 450ms; }
        .spotlight-card:hover { transform: translateY(-6px); }
        .spotlight-card::before, .spotlight-card::after {
          content: ""; position: absolute; inset: 0; opacity: 0; z-index: 0; pointer-events: none;
          transition: opacity 550ms ease; border-radius: inherit;
        }
        .spotlight-card:hover::before, .spotlight-card:hover::after { opacity: 1; }
        .spotlight-card::before {
          background: radial-gradient(280px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, var(--accent) 26%, transparent), transparent 70%);
        }
        .spotlight-card::after {
          padding: 1px;
          background: radial-gradient(220px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, var(--accent) 70%, transparent), transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .spotlight-card > * { position: relative; z-index: 1; }

        .tech-chip:hover { border-color: color-mix(in oklab, var(--accent) 45%, transparent) !important; }
        .stat-card { box-shadow: inset 0 1px 0 rgba(255,255,255,0.1); }

        .contact-way:hover { border-color: rgba(255,255,255,0.22) !important; background: rgba(255,255,255,0.055) !important; transform: translateX(2px); }

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
      `}</style>
    </>
  );
}
