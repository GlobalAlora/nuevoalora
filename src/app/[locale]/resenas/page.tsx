import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ReviewForm } from "@/components/shared/ReviewForm";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Reseñas de clientes | ALORA" : "Client reviews | ALORA",
    description: isEs
      ? "Lo que dicen los clientes que ya trabajaron con ALORA en sus proyectos de software, IA y automatización."
      : "What clients who've already worked with ALORA on their software, AI and automation projects have to say.",
    alternates: { canonical: `https://www.globalalora.com/${locale}/resenas` },
  };
}

const ACCENTS = ["var(--turquoise)", "var(--electric)", "var(--violet)", "var(--turquoise)"];

export default async function ResenasPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const isEs = l === "es";
  const { testimonials } = dict;
  const callHref = isEs ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="relative min-h-screen overflow-hidden text-white" style={{ background: "oklch(0.11 0.016 260)" }}>
        {/* Deep ambient background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -left-[10%] -top-[15%] h-[600px] w-[600px] rounded-full blur-3xl opacity-[0.14]"
            style={{ background: "radial-gradient(closest-side, var(--turquoise), transparent)" }} />
          <div className="absolute -right-[10%] top-1/3 h-[550px] w-[550px] rounded-full blur-3xl opacity-[0.12]"
            style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }} />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
              <span className="font-medium uppercase text-white/60">{isEs ? "Reseñas" : "Reviews"}</span>
            </div>
            <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
              {isEs ? "Lo que dicen nuestros clientes" : "What our clients say"}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-white/55">
              {isEs
                ? "Opiniones reales de clientes que ya tienen su proyecto funcionando en producción."
                : "Real feedback from clients who already have their project running in production."}
            </p>
          </div>

          {/* Testimonials */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {testimonials.items.map((t, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              const initials = t.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
              return (
                <SpotlightCard
                  key={t.name}
                  accent={color}
                  className="flex flex-col gap-4 rounded-2xl p-7"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" style={{ color, opacity: 0.5 }}>
                    <path d="M9 10c-3 0-5 2.3-5 5.4C4 18.7 6.4 21 9.5 21S15 18.7 15 15.6c0-2.5-1.6-4.6-3.9-5.3.3-1.6 1.6-3 3.4-3.3V9c-3 .3-5.5 2.5-5.5 1zM22 10c-3 0-5 2.3-5 5.4 0 3.3 2.4 5.6 5.5 5.6S28 18.7 28 15.6c0-2.5-1.6-4.6-3.9-5.3.3-1.6 1.6-3 3.4-3.3V9c-3 .3-5.5 2.5-5.5 1z" fill="currentColor" />
                  </svg>
                  <p className="text-[14.5px] leading-relaxed text-white/72">{t.quote}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span key={tag} className="rounded-full px-3 py-1 text-[11.5px] font-medium"
                        style={{ background: `color-mix(in oklab, ${color} 14%, transparent)`, color, border: `1px solid color-mix(in oklab, ${color} 30%, transparent)` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                      style={{ background: `linear-gradient(135deg, ${color}, ${ACCENTS[(i + 1) % ACCENTS.length]})` }}>
                      {initials}
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold text-white/90">{t.name}</div>
                      <div className="text-[12.5px] leading-snug text-white/45">{t.role}</div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Leave a review */}
          <div id="dejar-resena" className="mx-auto mt-16 max-w-xl rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 className="text-balance text-center font-bold text-white" style={{ fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.03em" }}>
              {dict.reviewForm.heading}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-[14px] leading-relaxed text-white/50">
              {dict.reviewForm.body}
            </p>
            <div className="mt-8">
              <ReviewForm dict={dict} locale={l} />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl p-10 text-center"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 className="text-balance font-bold text-white" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.03em" }}>
              {isEs ? "¿Querés ser el próximo caso de éxito?" : "Want to be our next success story?"}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-white/50">
              {isEs
                ? "Agendá una llamada de 20 minutos y analizamos tu proyecto sin costo."
                : "Book a 20-minute call and we'll analyze your project at no cost."}
            </p>
            <Link href={callHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 32px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}>
              {isEs ? "Agendar llamada gratuita" : "Book a free call"} →
            </Link>
          </div>
        </div>

        <style>{`
          .spotlight-card { position: relative; overflow: hidden; transition: transform 450ms cubic-bezier(0.16,1,0.3,1), border-color 450ms; }
          .spotlight-card:hover { transform: translateY(-4px); }
          .spotlight-card::before, .spotlight-card::after {
            content: ""; position: absolute; inset: 0; opacity: 0; z-index: 0; pointer-events: none;
            transition: opacity 550ms ease; border-radius: inherit;
          }
          .spotlight-card:hover::before, .spotlight-card:hover::after { opacity: 1; }
          .spotlight-card::before {
            background: radial-gradient(280px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%);
          }
          .spotlight-card::after {
            padding: 1px;
            background: radial-gradient(220px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, var(--accent) 65%, transparent), transparent 70%);
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
          .spotlight-card > * { position: relative; z-index: 1; }
        `}</style>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
