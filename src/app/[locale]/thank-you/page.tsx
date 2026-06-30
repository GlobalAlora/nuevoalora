import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

interface Props { params: Promise<{ locale: string }> }

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center" style={{ background: "oklch(0.13 0.015 260)" }}>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{ background: "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--turquoise) 8%, transparent), transparent)" }}
      />
      <div className="relative max-w-md">
        <div
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "color-mix(in oklab, var(--turquoise) 18%, transparent)", border: "1px solid color-mix(in oklab, var(--turquoise) 35%, transparent)" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4 4L19 7" stroke="var(--turquoise)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white" style={{ letterSpacing: "-0.03em" }}>
          {locale === "es" ? "¡Mensaje enviado!" : "Message sent!"}
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-white/60">
          {locale === "es"
            ? "Gracias por contactarnos. Un asesor te va a responder en menos de 24 horas."
            : "Thanks for reaching out. An advisor will get back to you within 24 hours."}
        </p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/75 transition-all hover:border-white/20 hover:text-white"
        >
          ← {locale === "es" ? "Volver al inicio" : "Back to home"}
        </Link>
      </div>
    </main>
  );
}
