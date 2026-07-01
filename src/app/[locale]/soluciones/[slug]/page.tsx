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

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

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

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/4 top-0 h-[600px] w-[800px] rounded-full blur-3xl opacity-[0.14]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 40%, transparent), transparent)" }}
        />
        <div
          className="absolute right-0 bottom-1/3 h-[400px] w-[500px] rounded-full blur-3xl opacity-[0.10]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 45%, transparent), transparent)" }}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-16">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
            <span className="font-medium uppercase text-white/60">{h.badge}</span>
          </div>

          <h1
            className="text-balance font-bold text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 58px)", letterSpacing: "-0.035em", lineHeight: 1.06 }}
          >
            {h.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            {h.sub}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={callUrl}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 32px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}
            >
              {ctaText}
            </Link>
            <a
              href={`https://wa.me/5491124629452?text=${encodeURIComponent(l === "es" ? `Hola! Me interesa saber más sobre ${h.badge}.` : `Hi! I'm interested in learning more about ${h.badge}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[14px] font-medium text-white/80 transition-all hover:border-white/30 hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
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
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, oklch(0.13 0.015 260) 100%)" }} />
            </div>
          </div>
        )}
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
          {l === "es" ? "Qué incluye" : "What's included"}
        </div>
        <h2
          className="mb-10 font-bold text-white"
          style={{ fontSize: "clamp(24px, 2.8vw, 36px)", letterSpacing: "-0.03em" }}
        >
          {l === "es" ? "Todo lo que necesitás" : "Everything you need"}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl p-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ background: "color-mix(in oklab, var(--turquoise) 18%, transparent)", border: "1px solid color-mix(in oklab, var(--turquoise) 35%, transparent)" }}
              >
                <svg viewBox="0 0 16 16" fill="none" width="10" height="10">
                  <path d="M3 8l3 3 6-6" stroke="var(--turquoise)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[14.5px] leading-snug text-white/75">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      {sol.projects && sol.projects.length > 0 && (
        <section className="border-y py-16" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
              {l === "es" ? "Proyectos reales" : "Real projects"}
            </div>
            <h2
              className="mb-10 font-bold text-white"
              style={{ fontSize: "clamp(24px, 2.8vw, 36px)", letterSpacing: "-0.03em" }}
            >
              {l === "es" ? "Resultados que ya están operando" : "Results already in production"}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sol.projects.map((proj) => (
                <a
                  key={proj.name}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                >
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
                    <p className="mt-1 text-[13px] leading-snug text-white/50">{l === "es" ? proj.es : proj.en}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
          {l === "es" ? "Proceso" : "Process"}
        </div>
        <h2
          className="mb-12 font-bold text-white"
          style={{ fontSize: "clamp(24px, 2.8vw, 36px)", letterSpacing: "-0.03em" }}
        >
          {l === "es" ? "Cómo trabajamos" : "How we work"}
        </h2>
        <div className="relative">
          {/* spine */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px hidden md:block" style={{ background: "linear-gradient(180deg, var(--turquoise), var(--electric))", opacity: 0.25 }} />
          <div className="flex flex-col gap-8">
            {process.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
                  style={{ background: "oklch(0.13 0.015 260)", border: "1.5px solid color-mix(in oklab, var(--turquoise) 50%, transparent)", color: "var(--turquoise)", boxShadow: "0 0 16px color-mix(in oklab, var(--turquoise) 20%, transparent)" }}
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
      </section>

      {/* CTA section */}
      <section className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2
            className="text-balance font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 46px)", letterSpacing: "-0.035em" }}
          >
            {l === "es" ? "¿Listo para empezar?" : "Ready to get started?"}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-white/55">
            {l === "es"
              ? "Agendá una llamada de 20 minutos y analizamos tu proyecto sin costo ni compromiso."
              : "Schedule a 20-minute call and we'll analyze your project at no cost or commitment."}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={callUrl}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white shadow-xl transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 40px color-mix(in oklab, var(--turquoise) 40%, transparent)" }}
            >
              {l === "es" ? "Agendar llamada gratuita" : "Book a free call"}
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="https://wa.me/5491124629452"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-white/45 transition-colors hover:text-white/80"
            >
              {l === "es" ? "o escribinos por WhatsApp" : "or message us on WhatsApp"}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {(l === "es"
              ? ["Sin costo, sin compromiso", "Respuesta personalizada", "Equipo disponible"]
              : ["No cost, no commitment", "Personalized response", "Team available"]
            ).map((item) => (
              <div key={item} className="flex items-center gap-2 text-[13px] text-white/40">
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <circle cx="8" cy="8" r="6" stroke="var(--turquoise)" strokeOpacity=".4" />
                  <path d="M5.5 8l1.5 1.5L10.5 6" stroke="var(--turquoise)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
