import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { CASE_STUDIES } from "@/lib/case-studies-data";

interface Props { params: Promise<{ locale: string }> }

const OG = "https://globalalora.com/api/og";

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
    openGraph: { title, description, images: [{ url: OG, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [OG] },
  };
}

export default async function CasosDeExitoPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.14]"
            style={{ background: "radial-gradient(closest-side, var(--electric), transparent)" }}
          />
          <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-32 text-center lg:pt-40">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--electric)" }} />
              <span className="font-medium uppercase text-white/60">
                {l === "es" ? "Casos de éxito" : "Case studies"}
              </span>
            </div>
            <h1 className="text-balance text-white" style={{ fontSize: "clamp(32px, 4.6vw, 60px)", fontWeight: 720, letterSpacing: "-0.035em", lineHeight: 1.06 }}>
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
          <div className="flex flex-wrap justify-center gap-7">
            {CASE_STUDIES.map((cs) => {
              const h = cs.hero[l];
              const accent = cs.theme.primary;
              const accent2 = cs.theme.secondary ?? cs.theme.primary;
              return (
                <Link
                  key={cs.slug}
                  href={`/${l}/casos-de-exito/${cs.slug}`}
                  className="case-card group relative w-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 sm:w-[calc(50%-14px)] lg:w-[calc((100%-56px)/2)]"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: `radial-gradient(280px circle at 20% 15%, color-mix(in oklab, ${accent} 20%, transparent), transparent 70%)` }}
                  />
                  <div className="relative z-10 mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: `color-mix(in oklab, ${accent} 75%, transparent)` }}>
                    <span>{cs.category[l]}</span>
                  </div>
                  <h2 className="relative z-10 text-balance text-[24px] font-semibold leading-snug text-white/95" style={{ letterSpacing: "-0.02em" }}>
                    {h.title}
                  </h2>
                  <p className="relative z-10 mt-3 text-[14.5px] leading-relaxed text-white/55">{h.sub}</p>
                  <div className="relative z-10 mt-6 flex items-center justify-between text-[13px] text-white/45">
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
