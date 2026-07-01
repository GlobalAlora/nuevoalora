import { notFound, redirect } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { TidyCalEmbed } from "@/components/booking/TidyCalEmbed";
import Image from "next/image";
import Link from "next/link";

interface Props { params: Promise<{ locale: string }> }

const META: Record<string, { title: string; description: string }> = {
  es: {
    title: "Llamada de Relevamiento Gratuita — ALORA",
    description: "Agendá una llamada de 20 minutos para analizar tu proyecto y descubrir cómo podemos ayudarte a crecer con tecnología, automatización e IA.",
  },
  en: {
    title: "Free Discovery Call — ALORA",
    description: "Schedule a 20-minute call to analyze your project and discover how we can help you grow with technology, automation and AI.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.es;
  return { title: m.title, description: m.description };
}

export default async function LlamadaPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  // EN users should use /en/discovery-call — redirect if someone lands here with EN
  if (locale === "en") redirect("/en/discovery-call");

  const tidycalPath = "alora/20-minutos-reunion";
  const l = locale as Locale;

  return (
    <main className="min-h-screen text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
      {/* Glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.18]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 35%, transparent), transparent)" }}
        />
        <div
          className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-3xl opacity-[0.12]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 40%, transparent), transparent)" }}
        />
      </div>

      {/* Minimal nav */}
      <header className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <Link href={`/${l}`} className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <Image src="/logo-web.png" alt="ALORA" width={110} height={30} className="h-8 w-auto" />
        </Link>
        <Link href={`/${l}`} className="text-[13px] text-white/45 transition-colors hover:text-white/80">
          ← {l === "es" ? "Volver al sitio" : "Back to site"}
        </Link>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-14">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", fontSize: "12px", letterSpacing: "0.2em" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="text-white/55 uppercase">Asesoría gratuita · 20 min</span>
          </div>
          <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em" }}>
            Agendá tu llamada de relevamiento
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-[16px] leading-relaxed text-white/55">
            Seleccioná el horario que mejor se adapte a tu agenda. En 20 minutos analizamos tu proyecto y te decimos cómo podemos ayudarte.
          </p>
        </div>

        {/* TidyCal embed */}
        <TidyCalEmbed path={tidycalPath} />

        {/* Reassurances */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {["Sin costo, sin compromiso", "Respuesta personalizada", "Equipo disponible"].map((item) => (
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
    </main>
  );
}
