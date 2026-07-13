import { notFound, redirect } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { TidyCalEmbed } from "@/components/booking/TidyCalEmbed";
import Image from "next/image";
import Link from "next/link";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Free Discovery Call — ALORA",
    description: "Schedule a 20-minute call to analyze your project and discover how we can help you grow with technology, automation and AI.",
    alternates: { canonical: "https://www.globalalora.com/en/discovery-call" },
  };
}

export default async function DiscoveryCallPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  // ES users → llamada-de-relevamiento
  if (locale === "es") redirect("/es/llamada-de-relevamiento");

  const l = locale as Locale;
  const tidycalPath = "alora/20-minutes";

  return (
    <main className="min-h-screen text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.18]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 35%, transparent), transparent)" }}
        />
      </div>

      {/* Minimal nav */}
      <header className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <Link href={`/${l}`} className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <Image src="/logo-nav-white.png" alt="ALORA" width={110} height={30} className="h-8 w-auto" />
        </Link>
        <Link href={`/${l}`} className="text-[13px] text-white/45 transition-colors hover:text-white/80">
          ← Back to site
        </Link>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[38fr_62fr] lg:items-start lg:gap-12">
          {/* Left: header — sticky on desktop so it stays in view as the widget grows */}
          <div className="text-center lg:sticky lg:top-10 lg:text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", fontSize: "12px", letterSpacing: "0.2em" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="text-white/55 uppercase">Free consultation · 20 min</span>
            </div>
            <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(22px, 2.6vw, 34px)", letterSpacing: "-0.03em" }}>
              Schedule your discovery call
            </h1>
            <p className="mx-auto mt-2 max-w-lg text-pretty text-[14px] leading-relaxed text-white/55 lg:mx-0">
              Pick the time that works best for you. In 20 minutes we&apos;ll analyze your project and show you exactly how we can help.
            </p>
          </div>

          {/* Right: TidyCal booking */}
          <div>
            <TidyCalEmbed path={tidycalPath} label="Book your call" />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          {["No cost, no commitment", "Personalized response", "Team available"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-[12px] text-white/40">
              <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
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
