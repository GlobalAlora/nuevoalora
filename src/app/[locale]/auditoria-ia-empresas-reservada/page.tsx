import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { TechBackground } from "../ia-para-empresas/TechBackground";
import { AGENDADA_CONTENT, LANDING_CONTENT } from "../ia-para-empresas/content";
import { FireAnalyticsEvent } from "@/components/shared/FireAnalyticsEvent";

const ACCENT = "var(--electric)";
const ACCENT2 = "var(--violet)";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = hasLocale(locale) ? (locale as Locale) : "es";
  return { title: AGENDADA_CONTENT[l].title, robots: { index: false } };
}

export default async function AuditoriaReservadaPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const t = AGENDADA_CONTENT[l];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
      <FireAnalyticsEvent event="schedule_audit" params={{ landing_page: `/${l}/auditoria-ia-empresas-reservada` }} />
      <TechBackground accent={ACCENT} accent2={ACCENT2} />

      <header className="relative z-10 flex items-center justify-center py-8">
        <Image src="/alora-logo-nav-white.png" alt="ALORA" width={110} height={30} className="h-8 w-auto" priority />
      </header>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: `color-mix(in oklab, ${ACCENT} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${ACCENT} 45%, transparent)` }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4M3 10h18" />
              <path d="M9 15l2 2 4-4" />
            </svg>
          </div>
          <h1 className="mt-6 text-balance" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 720, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            {t.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty" style={{ fontSize: "16px", lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>
            {t.body}
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-xl p-5 text-left" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[13px] font-semibold text-white/85">{t.prepHeading}</p>
            <ul className="mt-2 flex flex-col gap-1.5 text-[13px] leading-relaxed text-white/60">
              {t.prepItems.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <footer className="relative z-10 px-6 py-8 text-center">
        <p className="text-[12px] text-white/35">{LANDING_CONTENT[l].footer.copyright}</p>
      </footer>
    </main>
  );
}
