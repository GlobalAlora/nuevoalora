import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SpotlightCard } from "@/components/shared/SpotlightCard";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "¡Mensaje recibido! | ALORA" : "Message received! | ALORA",
    robots: { index: false },
  };
}

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;

  const callUrl = l === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  const steps = l === "es"
    ? [
        { icon: "✉️", title: "Recibimos tu mensaje", desc: "Ya tenemos tus datos y el detalle de tu proyecto." },
        { icon: "🔍", title: "Lo analizamos", desc: "Revisamos tu caso y preparamos una propuesta personalizada." },
        { icon: "📞", title: "Te contactamos", desc: "Un experto te escribe o llama en menos de 24 horas." },
      ]
    : [
        { icon: "✉️", title: "We received your message", desc: "We already have your details and project info." },
        { icon: "🔍", title: "We analyze it", desc: "We review your case and prepare a personalized proposal." },
        { icon: "📞", title: "We contact you", desc: "An expert writes or calls you within 24 hours." },
      ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white" style={{ background: "oklch(0.11 0.016 260)" }}>
      {/* Deep ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-[10%] -top-[15%] h-[600px] w-[600px] rounded-full blur-3xl opacity-[0.16]"
          style={{ background: "radial-gradient(closest-side, var(--turquoise), transparent)" }} />
        <div className="absolute -right-[10%] top-1/3 h-[550px] w-[550px] rounded-full blur-3xl opacity-[0.14]"
          style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }} />
        <div className="absolute bottom-[-10%] left-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-[0.09]"
          style={{ background: "radial-gradient(closest-side, var(--electric), transparent)" }} />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* LEFT — confirmation */}
          <div className="text-center lg:text-left">
            <Link href={`/${l}`} className="mb-8 inline-flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
              <Image src="/logo-nav-white.png" alt="ALORA" width={110} height={30} className="h-7 w-auto" />
            </Link>

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl lg:mx-0 mx-auto"
              style={{ background: "color-mix(in oklab, var(--turquoise) 15%, transparent)", border: "1.5px solid color-mix(in oklab, var(--turquoise) 40%, transparent)", boxShadow: "0 0 40px color-mix(in oklab, var(--turquoise) 25%, transparent)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l4 4L19 7" stroke="var(--turquoise)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.035em", lineHeight: 1.1 }}>
              {l === "es" ? "¡Mensaje recibido!" : "Message received!"}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-pretty text-[16px] leading-relaxed text-white/55 lg:mx-0">
              {l === "es"
                ? "Gracias por contactarnos. Te respondemos en menos de 24 horas con una propuesta personalizada."
                : "Thanks for reaching out. We'll reply within 24 hours with a personalized proposal."}
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
              <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                <span className="text-[12px] text-white/35">{l === "es" ? "Seguinos:" : "Follow us:"}</span>
                <a href="https://www.linkedin.com/company/aloraglobal" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12px] text-white/55 transition-all hover:border-white/25 hover:text-white"
                  style={{ borderColor: "rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.03)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path d="M4.98 3.5A2.49 2.49 0 002.5 6a2.49 2.49 0 002.48 2.5A2.49 2.49 0 007.46 6 2.49 2.49 0 004.98 3.5zM2.5 9.5h5V21h-5V9.5zm8 0h4.8v1.57h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 5.99 3.33 5.99 7.66V21H21.1v-4.3c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.77-2.63 3.6V21h-4.8V9.5z" />
                  </svg>
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/globalalora/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12px] text-white/55 transition-all hover:border-white/25 hover:text-white"
                  style={{ borderColor: "rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.03)" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </div>

              <Link href={`/${l}`}
                className="inline-flex items-center gap-2 text-[13px] text-white/35 transition-colors hover:text-white/70">
                ← {l === "es" ? "Volver al inicio" : "Back to home"}
              </Link>
            </div>
          </div>

          {/* RIGHT — steps + CTA */}
          <div className="flex flex-col gap-5">
            <SpotlightCard
              accent="var(--turquoise)"
              className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "linear-gradient(160deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))" }}
            >
              <h2 className="mb-5 text-[13px] font-semibold uppercase tracking-wider text-white/45">
                {l === "es" ? "¿Qué pasa ahora?" : "What happens next?"}
              </h2>
              <div className="relative flex flex-col gap-5">
                <div aria-hidden className="absolute left-[15px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(rgba(255,255,255,0.16), rgba(255,255,255,0.04))" }} />
                {steps.map((step, i) => (
                  <div key={step.title} className="relative z-10 flex items-start gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[14px]"
                      style={{
                        background: `color-mix(in oklab, ${i === 0 ? "var(--turquoise)" : i === 1 ? "var(--electric)" : "var(--violet)"} 18%, oklch(0.11 0.016 260))`,
                        border: `1.5px solid color-mix(in oklab, ${i === 0 ? "var(--turquoise)" : i === 1 ? "var(--electric)" : "var(--violet)"} 45%, transparent)`,
                      }}
                    >
                      {step.icon}
                    </span>
                    <div className="pt-0.5">
                      <h3 className="text-[14.5px] font-semibold text-white">{step.title}</h3>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-white/50">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard
              accent="var(--electric)"
              className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "linear-gradient(160deg, color-mix(in oklab, var(--turquoise) 10%, rgba(255,255,255,0.02)), rgba(255,255,255,0.015))" }}
            >
              <h2 className="mb-1.5 text-[18px] font-bold text-white" style={{ letterSpacing: "-0.025em" }}>
                {l === "es" ? "¿No querés esperar?" : "Don't want to wait?"}
              </h2>
              <p className="mb-4 text-[13.5px] text-white/50">
                {l === "es"
                  ? "Agendá ahora mismo una llamada gratuita de 20 minutos y hablamos de tu proyecto al instante."
                  : "Book a free 20-minute call right now and let's talk about your project instantly."}
              </p>
              <Link href={callUrl}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 32px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {l === "es" ? "Agendar llamada gratuita" : "Book free call"}
              </Link>
            </SpotlightCard>
          </div>
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
  );
}
