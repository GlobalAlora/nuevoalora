import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { HeroGraphic } from "@/components/shared/HeroInteractive";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";

interface Props { params: Promise<{ locale: string }> }

const OG = "https://www.globalalora.com/api/og";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? "Casos de éxito — ALORA" : "Case Studies — ALORA";
  const description = isEs
    ? "Proyectos reales que construimos: el desafío, la solución y el resultado."
    : "Real projects we built: the challenge, the solution and the outcome.";
  return {
    title,
    description,
    alternates: { canonical: `https://www.globalalora.com/${locale}/casos-de-exito` },
    openGraph: { title, description, images: [{ url: OG, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [OG] },
  };
}

export default async function CasosDeExitoPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: l === "es" ? "Inicio" : "Home", url: `https://www.globalalora.com/${l}` },
    { name: l === "es" ? "Casos de Éxito" : "Success Stories", url: `https://www.globalalora.com/${l}/casos-de-exito` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.14]"
            style={{ background: "radial-gradient(closest-side, var(--electric), transparent)" }}
          />
          <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-32 text-center lg:pt-40">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--electric)" }} />
              <span className="font-medium uppercase text-white/60">
                {l === "es" ? "Casos de éxito" : "Case studies"}
              </span>
            </div>
            <h1 className="text-white" style={{ fontSize: "clamp(19px, 5.2vw, 46px)", fontWeight: 720, letterSpacing: "-0.03em", lineHeight: 1.06, whiteSpace: "nowrap" }}>
              {l === "es" ? "Proyectos reales, resultados reales" : "Real projects, real results"}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[16px] leading-relaxed text-white/60">
              {l === "es"
                ? "El problema que tenía cada cliente, cómo lo resolvimos y qué construimos para lograrlo."
                : "The problem each client had, how we solved it, and what we built to get there."}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-28">
          <div className="flex flex-col gap-8">
            {CASE_STUDIES.map((cs, i) => {
              const h = cs.hero[l];
              const accent = cs.theme.primary;
              const accent2 = cs.theme.secondary ?? cs.theme.primary;
              const imageOnRight = i % 2 === 0;
              return (
                <Link
                  key={cs.slug}
                  href={`/${l}/casos-de-exito/${cs.slug}`}
                  className="case-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 sm:p-9"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: `radial-gradient(420px circle at ${imageOnRight ? "15%" : "85%"} 15%, color-mix(in oklab, ${accent} 18%, transparent), transparent 70%)` }}
                  />
                  <div className={`relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14`}>
                    <div className={imageOnRight ? "lg:order-1" : "lg:order-2"}>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: `color-mix(in oklab, ${accent} 75%, transparent)` }}>
                        <span>{cs.category[l]}</span>
                      </div>
                      <h2 className="mt-3 text-balance text-[26px] font-semibold leading-snug text-white/95" style={{ letterSpacing: "-0.02em" }}>
                        {h.title}
                      </h2>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">{h.sub}</p>
                      <div className="mt-6 flex items-center justify-between text-[13px] text-white/45">
                        <span>{cs.client} · {cs.location[l]}</span>
                        <span
                          className="inline-flex items-center gap-1.5 font-medium transition-colors"
                          style={{ color: accent2 }}
                        >
                          {l === "es" ? "Ver caso completo" : "Read full case"}
                          <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className={imageOnRight ? "lg:order-2" : "lg:order-1"}>
                      <div
                        className="overflow-hidden rounded-2xl border"
                        style={{ borderColor: "rgba(255,255,255,0.1)", boxShadow: "0 24px 60px -20px rgba(0,0,0,0.5)" }}
                      >
                        {cs.heroImage ? (
                          <div className="relative w-full" style={{ background: "#0b0d14", aspectRatio: cs.heroImageAspect ?? "16/10" }}>
                            <Image
                              src={cs.heroImage}
                              alt={cs.client}
                              fill
                              sizes="(max-width: 1024px) 90vw, 480px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                            <div className="absolute inset-0 flex items-center justify-center opacity-90">
                              <div className="aspect-square w-[70%]">
                                <HeroGraphic accent={accent} accent2={accent2} />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
