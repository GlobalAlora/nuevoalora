import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "¡Llamada agendada! | ALORA" : "Call booked! | ALORA",
    robots: { index: false },
  };
}

export default async function CallBookedPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;

  const dict = await getDictionary(l);

  const steps = l === "es"
    ? [
        { n: "01", icon: "📅", title: "Tu llamada quedó agendada", desc: "Ya tenés el horario reservado, te llega la confirmación por mail." },
        { n: "02", icon: "🧭", title: "La preparamos", desc: "Revisamos tu proyecto antes de la llamada para aprovechar bien el tiempo." },
        { n: "03", icon: "🎥", title: "Nos conectamos", desc: "20 minutos para entender tu caso y mostrarte cómo podemos ayudarte." },
      ]
    : [
        { n: "01", icon: "📅", title: "Your call is booked", desc: "Your time slot is reserved, a confirmation is on its way to your inbox." },
        { n: "02", icon: "🧭", title: "We prepare for it", desc: "We review your project beforehand to make the most of the call." },
        { n: "03", icon: "🎥", title: "We hop on a call", desc: "20 minutes to understand your case and show you how we can help." },
      ];

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white pt-20" style={{ background: "oklch(0.13 0.015 260)" }}>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.14]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 40%, transparent), transparent)" }} />
      </div>

      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">

        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full"
          style={{ background: "color-mix(in oklab, var(--turquoise) 15%, transparent)", border: "1.5px solid color-mix(in oklab, var(--turquoise) 40%, transparent)", boxShadow: "0 0 40px color-mix(in oklab, var(--turquoise) 20%, transparent)" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--turquoise)" strokeWidth="2" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="var(--turquoise)" strokeWidth="2" strokeLinecap="round" />
            <path d="M8.5 15l2 2 4-4" stroke="var(--turquoise)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.035em" }}>
          {l === "es" ? "¡Llamada agendada!" : "Call booked!"}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/55">
          {l === "es"
            ? "Te esperamos en el horario elegido. Mientras tanto, revisá tu mail para ver la confirmación con el link de acceso."
            : "We'll see you at your chosen time. In the meantime, check your inbox for the confirmation email with the access link."}
        </p>

        <div className="mt-14 w-full">
          <h2 className="mb-8 text-[18px] font-semibold text-white/80">
            {l === "es" ? "¿Qué pasa ahora?" : "What happens next?"}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="mb-3 text-[28px]">{step.icon}</div>
                <div className="mb-1 text-[11px] font-mono text-white/30 tracking-widest">{step.n}</div>
                <h3 className="mb-2 text-[15px] font-semibold text-white">{step.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 w-full rounded-2xl p-8"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="mb-2 text-[20px] font-bold text-white" style={{ letterSpacing: "-0.025em" }}>
            {l === "es" ? "¿Necesitás cambiar el horario?" : "Need to change the time?"}
          </h2>
          <p className="mb-6 text-[14px] text-white/50">
            {l === "es"
              ? "Usá el link de reprogramar o cancelar que te llegó en el mail de confirmación."
              : "Use the reschedule or cancel link from your confirmation email."}
          </p>
          <a href={`https://wa.me/5491124629452`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
            style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,0.35)" }}>
            {l === "es" ? "Hablar por WhatsApp" : "Chat on WhatsApp"}
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-[13px] text-white/35">
            {l === "es" ? "Mientras esperás, seguinos:" : "While you wait, follow us:"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="https://www.linkedin.com/company/aloraglobal" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[13px] text-white/55 transition-all hover:border-white/25 hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.03)" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M4.98 3.5A2.49 2.49 0 002.5 6a2.49 2.49 0 002.48 2.5A2.49 2.49 0 007.46 6 2.49 2.49 0 004.98 3.5zM2.5 9.5h5V21h-5V9.5zm8 0h4.8v1.57h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 5.99 3.33 5.99 7.66V21H21.1v-4.3c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.77-2.63 3.6V21h-4.8V9.5z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/globalalora/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[13px] text-white/55 transition-all hover:border-white/25 hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.03)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <Link href={`/${l}`}
          className="mt-10 inline-flex items-center gap-2 text-[13px] text-white/35 transition-colors hover:text-white/70">
          ← {l === "es" ? "Volver al inicio" : "Back to home"}
        </Link>
      </div>
    </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
