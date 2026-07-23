import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsGrid } from "@/components/shared/TestimonialsGrid";

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

export default async function ResenasPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const isEs = l === "es";
  const { testimonials } = dict;
  const callHref = isEs ? "/es/llamada-de-relevamiento" : "/en/discovery-call";
  const reviewFormHref = `/${locale}/escribir-resena`;

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
          <div className="mt-14">
            <TestimonialsGrid testimonials={testimonials} />
          </div>

          {/* Leave a review */}
          <div className="mx-auto mt-16 max-w-xl rounded-2xl p-8 text-center"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 className="text-balance font-bold text-white" style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.03em" }}>
              {dict.reviewForm.heading}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-white/50">
              {dict.reviewForm.body}
            </p>
            <Link href={reviewFormHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 32px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}>
              {dict.reviewForm.submit} →
            </Link>
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
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
