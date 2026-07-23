import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { ReviewForm } from "@/components/shared/ReviewForm";
import { TestimonialsGrid } from "@/components/shared/TestimonialsGrid";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Dejanos tu reseña | ALORA" : "Leave us a review | ALORA",
    description: isEs
      ? "¿Ya trabajaste con ALORA? Contanos cómo fue tu experiencia."
      : "Have you worked with ALORA? Tell us how it went.",
    alternates: { canonical: `https://www.globalalora.com/${locale}/escribir-resena` },
  };
}

export default async function EscribirResenaPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const isEs = l === "es";
  const { testimonials } = dict;
  const resenasHref = `/${locale}/resenas`;

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

        <div className="mx-auto max-w-2xl px-6 pb-20 pt-32">
          {/* Header */}
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
              <span className="font-medium uppercase text-white/60">{isEs ? "Reseñas" : "Reviews"}</span>
            </div>
            <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(30px, 4vw, 44px)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
              {dict.reviewForm.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/55">
              {dict.reviewForm.body}
            </p>
          </div>

          {/* Form */}
          <div className="mt-12 rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <ReviewForm dict={dict} locale={l} />
          </div>

          {/* Social proof */}
          <div className="mt-20">
            <div className="text-center">
              <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/35">
                {isEs ? "Lo que dicen otros clientes" : "What other clients say"}
              </div>
            </div>
            <div className="mt-8">
              <TestimonialsGrid testimonials={testimonials} twoColumn={false} />
            </div>
            <div className="mt-8 text-center">
              <Link href={resenasHref} className="text-[13.5px] font-medium text-white/50 underline transition-colors hover:text-white/80">
                {isEs ? "Ver todas las reseñas" : "See all reviews"} →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
