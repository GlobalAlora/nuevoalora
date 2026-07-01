import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Chatbot } from "@/components/alora/Chatbot";

interface Props { params: Promise<{ locale: string }> }

const META = {
  es: {
    title: "Contacto | ALORA — Hablemos de tu Proyecto",
    description: "Contactá a Alora para hablar de tu proyecto digital. Respondemos en menos de 24 horas con una propuesta personalizada.",
  },
  en: {
    title: "Contact | ALORA — Let's Talk About Your Project",
    description: "Contact Alora to talk about your digital project. We respond within 24 hours with a personalized proposal.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale as keyof typeof META] ?? META.es;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `https://www.globalalora.com/${locale}/contacto` },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);

  const callUrl = l === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent("+541124629452")}&text=${encodeURIComponent(l === "es" ? "Hola! Me gustaría obtener más información sobre sus servicios." : "Hello! I would like to get more information about your services.")}&type=phone_number&app_absent=0`;

  return (
    <>
      <Nav dict={dict} locale={l} />

      <main className="text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 pb-16">
          {/* Glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.18]"
              style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 35%, transparent), transparent)" }}
            />
            <div
              className="absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full blur-3xl opacity-[0.13]"
              style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 40%, transparent), transparent)" }}
            />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              {/* Left: copy */}
              <div>
                <div
                  className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
                  style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
                  <span className="font-medium uppercase text-white/60">
                    {l === "es" ? "🚀 Transformación Digital" : "🚀 Digital Transformation"}
                  </span>
                </div>

                <h1
                  className="text-balance font-bold text-white"
                  style={{ fontSize: "clamp(36px, 4.5vw, 60px)", letterSpacing: "-0.035em", lineHeight: 1.06 }}
                >
                  {l === "es" ? "Hablemos de tu proyecto" : "Let's talk about your project"}
                </h1>

                <p className="mt-5 max-w-lg text-pretty text-[17px] leading-relaxed text-white/60">
                  {l === "es"
                    ? "En ALORA creamos sistemas digitales inteligentes que impulsan el crecimiento, optimizan operaciones y conectan con tus clientes de manera significativa y rentable."
                    : "At ALORA, we create intelligent digital systems that drive growth, optimize operations, and connect with your customers in a meaningful and profitable way."}
                </p>

                <p className="mt-4 text-[15px] text-white/45">
                  {l === "es"
                    ? "📅 Agenda tu consulta gratuita — cupos limitados este mes"
                    : "📅 Book your free consultation — limited spots this month"}
                </p>

                <div className="mt-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 32px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {l === "es" ? "Hablar con un especialista" : "Talk to a specialist"}
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap gap-8">
                  {[
                    { n: "50+", label: l === "es" ? "Proyectos Exitosos" : "Successful Projects" },
                    { n: "8+",  label: l === "es" ? "Años de Experiencia" : "Years of Experience" },
                    { n: "98%", label: l === "es" ? "Clientes Satisfechos" : "Satisfied Clients" },
                  ].map((s) => (
                    <div key={s.n}>
                      <div className="text-[32px] font-bold text-white" style={{ letterSpacing: "-0.04em", background: "linear-gradient(135deg, var(--turquoise), var(--electric))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        {s.n}
                      </div>
                      <div className="text-[13px] text-white/45">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: book call card */}
              <div
                className="rounded-2xl p-8"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h2 className="mb-2 text-[22px] font-bold text-white" style={{ letterSpacing: "-0.025em" }}>
                  {l === "es" ? "Agendá una llamada gratuita" : "Book a free call"}
                </h2>
                <p className="mb-6 text-[14.5px] text-white/50">
                  {l === "es"
                    ? "20 minutos. Sin costo. Sin compromiso. Analizamos tu proyecto y te decimos cómo podemos ayudarte."
                    : "20 minutes. No cost. No commitment. We analyze your project and tell you how we can help."}
                </p>
                <a
                  href={callUrl}
                  className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[15px] font-semibold text-white transition-all hover:scale-[1.01]"
                  style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {l === "es" ? "Agendar llamada de 20 min" : "Book 20-min call"}
                </a>

                <div className="my-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="text-[12px] text-white/35">{l === "es" ? "o completá el formulario" : "or fill out the form"}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { icon: "📧", label: l === "es" ? "Respondemos en < 24 horas" : "We respond in < 24 hours" },
                    { icon: "🔒", label: l === "es" ? "Tus datos están seguros" : "Your data is safe" },
                    { icon: "✅", label: l === "es" ? "Sin spam, sin compromiso" : "No spam, no commitment" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-2.5 text-[13.5px] text-white/55">
                      <span>{r.icon}</span>
                      <span>{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reuse the ContactSection component (has the full form) */}
        <ContactSection dict={dict} locale={l} />
      </main>

      <Footer dict={dict} locale={l} />
      <Chatbot dict={dict} locale={l} />
    </>
  );
}
