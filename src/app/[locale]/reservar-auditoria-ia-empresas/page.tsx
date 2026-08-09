import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { TechBackground } from "../ia-para-empresas/TechBackground";
import { RESERVAR_CONTENT, LANDING_CONTENT } from "../ia-para-empresas/content";

const ACCENT = "var(--electric)";
const ACCENT2 = "var(--violet)";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = hasLocale(locale) ? (locale as Locale) : "es";
  return { title: RESERVAR_CONTENT[l].title, robots: { index: false } };
}

export default async function ReservarAuditoriaPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const t = RESERVAR_CONTENT[l];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
      <TechBackground accent={ACCENT} accent2={ACCENT2} />

      <header className="relative z-10 flex items-center justify-center py-8">
        <Image src="/alora-logo-nav-white.png" alt="ALORA" width={110} height={30} className="h-8 w-auto" priority />
      </header>

      <div className="relative z-10 mx-auto w-full max-w-2xl flex-1 px-6 py-10">
        <div className="text-center">
          <h1 className="text-balance" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 720, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            {t.h1}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-pretty" style={{ fontSize: "15.5px", lineHeight: 1.6, color: "rgba(255,255,255,0.62)" }}>
            {t.subtitle}
          </p>
        </div>

        <div
          className="mt-8 overflow-hidden rounded-2xl p-2 sm:p-4"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="tidycal-embed" data-path="alora/auditoria-ia" />
        </div>
      </div>

      <footer className="relative z-10 px-6 py-8 text-center">
        <p className="text-[12px] text-white/35">{LANDING_CONTENT[l].footer.copyright}</p>
      </footer>

      <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" strategy="afterInteractive" async />
    </main>
  );
}
