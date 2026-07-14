import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";

interface Props { params: Promise<{ locale: string }> }

const OG = "https://www.globalalora.com/api/og";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? "Soluciones — ALORA" : "Solutions — ALORA";
  const description = isEs
    ? "Desarrollo de software, desarrollo web, aplicaciones web, ecommerce, chatbots y agentes conversacionales con IA. Soluciones digitales a medida para empresas."
    : "Software development, web development, web applications, ecommerce, chatbots and conversational AI agents. Custom digital solutions for businesses.";
  return {
    title,
    description,
    alternates: { canonical: `https://www.globalalora.com/${locale}/servicios` },
    openGraph: { title, description, images: [{ url: OG, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [OG] },
  };
}

const ICONS: Record<string, React.ReactNode> = {
  code: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M15 11L7 20l8 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 11l8 9-8 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22.5" y1="8" x2="17.5" y2="32" stroke="currentColor" strokeWidth="1.3" strokeOpacity=".5" strokeLinecap="round" />
    </svg>
  ),
  structure: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <rect x="7" y="8" width="26" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".08" />
      <rect x="7" y="19" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="19" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="27" width="12" height="5" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  gears: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 6v3M16 23v3M6 16h3M23 16h3M9 9l2 2M9 23l2-2M23 9l-2 2M23 23l-2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="27" cy="27" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".08" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M6 8h4l3.2 16.6a2 2 0 002 1.6h12.2a2 2 0 002-1.6L32 13H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity=".06" />
      <circle cx="18" cy="33" r="1.8" fill="currentColor" />
      <circle cx="27" cy="33" r="1.8" fill="currentColor" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M6 10a3 3 0 013-3h22a3 3 0 013 3v14a3 3 0 01-3 3H16l-7 6v-6h-0a3 3 0 01-3-3V10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".06" />
      <circle cx="14" cy="17" r="1.6" fill="currentColor" />
      <circle cx="20" cy="17" r="1.6" fill="currentColor" />
      <circle cx="26" cy="17" r="1.6" fill="currentColor" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M8 21v-2a12 12 0 0124 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="5" y="20" width="7" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".06" />
      <rect x="28" y="20" width="7" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".06" />
      <path d="M32 30v1a4 4 0 01-4 4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const SERVICES = {
  es: [
    {
      slug: "desarrollo-software",
      icon: "code",
      accent: "var(--turquoise)",
      accent2: "var(--violet)",
      title: "Desarrollo de Software",
      desc: "Diseñamos y desarrollamos soluciones de software a medida para resolver problemas reales de tu negocio: sistemas, integraciones y automatizaciones.",
      tags: ["Software a medida", "Integraciones", "Automatización"],
    },
    {
      slug: "desarrollo-web",
      icon: "structure",
      accent: "var(--turquoise)",
      accent2: "var(--turquoise)",
      title: "Desarrollo Web",
      desc: "Diseñamos y desarrollamos sitios web a medida que elevan tu marca, optimizados para SEO, velocidad y conversión en cualquier dispositivo.",
      tags: ["WordPress", "React", "Next.js", "SEO"],
    },
    {
      slug: "aplicaciones-web",
      icon: "gears",
      accent: "var(--electric)",
      accent2: "var(--electric)",
      title: "Aplicaciones Web",
      desc: "Construimos aplicaciones y sistemas web personalizados para automatizar procesos, integrar APIs y dar soporte a equipos internos o clientes.",
      tags: ["React", "Node.js", "APIs", "Bases de datos"],
    },
    {
      slug: "ecommerce",
      icon: "cart",
      accent: "var(--violet)",
      accent2: "var(--violet)",
      title: "Ecommerce / Tienda Online",
      desc: "Implementamos tiendas online pensadas para vender, gestionar y escalar, cuidando el catálogo, los medios de pago y la experiencia completa de compra.",
      tags: ["WooCommerce", "Catálogo", "Medios de pago"],
    },
    {
      slug: "chatbots",
      icon: "chat",
      accent: "var(--electric)",
      accent2: "var(--violet)",
      title: "Chatbots IA",
      desc: "Diseñamos chatbots con flujos guiados que cualifican leads, agendan llamadas y capturan contactos de forma automática.",
      tags: ["Flujos guiados", "WhatsApp", "Integración CRM"],
    },
    {
      slug: "atencion-cliente-ia",
      icon: "headset",
      accent: "var(--violet)",
      accent2: "var(--electric)",
      title: "Agentes Conversacionales IA",
      desc: "Agentes de IA que sostienen conversaciones reales con tus clientes, entienden lenguaje natural y resuelven consultas de verdad.",
      tags: ["Conversación real", "Multi-canal", "Automatización"],
    },
  ],
  en: [
    {
      slug: "desarrollo-software",
      icon: "code",
      accent: "var(--turquoise)",
      accent2: "var(--violet)",
      title: "Software Development",
      desc: "We design and develop custom software solutions to solve your business's real problems: systems, integrations and automations.",
      tags: ["Custom software", "Integrations", "Automation"],
    },
    {
      slug: "desarrollo-web",
      icon: "structure",
      accent: "var(--turquoise)",
      accent2: "var(--turquoise)",
      title: "Web Development",
      desc: "We design and develop custom websites that elevate your brand, optimized for SEO, speed and conversion on any device.",
      tags: ["WordPress", "React", "Next.js", "SEO"],
    },
    {
      slug: "aplicaciones-web",
      icon: "gears",
      accent: "var(--electric)",
      accent2: "var(--electric)",
      title: "Web Applications",
      desc: "We build custom web applications and systems to automate processes, integrate APIs and support internal teams or customers.",
      tags: ["React", "Node.js", "APIs", "Databases"],
    },
    {
      slug: "ecommerce",
      icon: "cart",
      accent: "var(--violet)",
      accent2: "var(--violet)",
      title: "Ecommerce / Online Store",
      desc: "We build online stores designed to sell, manage and scale, taking care of the catalog, payment methods and the full shopping experience.",
      tags: ["WooCommerce", "Catalog", "Payments"],
    },
    {
      slug: "chatbots",
      icon: "chat",
      accent: "var(--electric)",
      accent2: "var(--violet)",
      title: "AI Chatbots",
      desc: "We design chatbots with guided flows that qualify leads, book calls and capture contacts automatically.",
      tags: ["Guided flows", "WhatsApp", "CRM Integration"],
    },
    {
      slug: "atencion-cliente-ia",
      icon: "headset",
      accent: "var(--violet)",
      accent2: "var(--electric)",
      title: "AI Conversational Agents",
      desc: "AI agents that hold real conversations with your customers, understand natural language and genuinely resolve queries.",
      tags: ["Real conversation", "Multi-channel", "Automation"],
    },
  ],
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const services = SERVICES[l] ?? SERVICES.es;
  const callUrl = l === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: l === "es" ? "Inicio" : "Home", url: `https://www.globalalora.com/${l}` },
    { name: l === "es" ? "Soluciones" : "Solutions", url: `https://www.globalalora.com/${l}/servicios` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.14]"
              style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 40%, transparent), transparent)" }}
            />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                WebkitMaskImage: "radial-gradient(60% 60% at 50% 20%, black 20%, transparent 80%)",
                maskImage: "radial-gradient(60% 60% at 50% 20%, black 20%, transparent 80%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
                style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
                <span className="font-medium uppercase text-white/60">
                  {l === "es" ? "Soluciones digitales" : "Digital solutions"}
                </span>
              </div>
              <h1
                className="text-balance text-white"
                style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
              >
                {l === "es" ? "Nuestras soluciones" : "Our solutions"}
              </h1>
              <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.66)" }}>
                {l === "es"
                  ? "Software, IA y experiencias digitales conectadas para que tu empresa opere mejor y crezca más rápido."
                  : "Software, AI and connected digital experiences so your business operates better and grows faster."}
              </p>
            </div>

            {/* Solutions grid */}
            <div className="mt-14 flex flex-wrap justify-center gap-5">
              {services.map((svc, i) => (
                <Link
                  key={svc.slug}
                  href={`/${l}/soluciones/${svc.slug}`}
                  className="feature-card group relative flex w-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: `radial-gradient(220px circle at 30% 20%, color-mix(in oklab, ${svc.accent} 22%, transparent), transparent 70%)` }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      padding: "1px",
                      background: `linear-gradient(140deg, color-mix(in oklab, ${svc.accent} 55%, transparent), transparent 60%)`,
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span
                    className="feature-icon relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `color-mix(in oklab, ${svc.accent} 16%, transparent)`, border: `1px solid color-mix(in oklab, ${svc.accent} 32%, transparent)`, color: svc.accent, animationDelay: `${i * 0.2}s` }}
                  >
                    {ICONS[svc.icon]}
                  </span>
                  <h2 className="relative z-10 mt-4 text-[17px] font-semibold leading-snug text-white/90">{svc.title}</h2>
                  <p className="relative z-10 mt-1.5 flex-1 text-[13.5px] leading-relaxed text-white/55">{svc.desc}</p>

                  <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="rounded-full px-2.5 py-0.5 text-[10.5px] font-medium"
                        style={{ background: `color-mix(in oklab, ${svc.accent} 12%, transparent)`, color: `color-mix(in oklab, ${svc.accent} 80%, white)`, border: `1px solid color-mix(in oklab, ${svc.accent} 26%, transparent)` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="relative z-10 mt-5 flex items-center gap-1.5 text-[13px] font-medium transition-transform group-hover:translate-x-0.5"
                    style={{ color: svc.accent }}>
                    {l === "es" ? "Ver detalle" : "View details"}
                    <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div
              className="relative mx-auto mt-16 flex max-w-3xl flex-col items-center gap-4 overflow-hidden rounded-2xl p-8 text-center sm:flex-row sm:text-left"
              style={{
                background: "linear-gradient(140deg, color-mix(in oklab, var(--turquoise) 10%, transparent), color-mix(in oklab, var(--violet) 6%, transparent))",
                border: "1px solid color-mix(in oklab, var(--turquoise) 22%, transparent)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-30"
                style={{ background: "var(--turquoise)" }}
              />
              <span
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--turquoise) 18%, transparent)", border: "1px solid color-mix(in oklab, var(--turquoise) 35%, transparent)", color: "var(--turquoise)" }}
              >
                <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
                  <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".4" />
                  <path d="M20 20l5-9-9 5-5 9 9-5z" fill="currentColor" fillOpacity=".85" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="relative z-10">
                <h2 className="text-[19px] font-semibold text-white/90" style={{ letterSpacing: "-0.01em" }}>
                  {l === "es" ? "¿No sabés cuál es la mejor solución para tu caso?" : "Not sure which solution is right for you?"}
                </h2>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/70">
                  {l === "es"
                    ? "Agendá una llamada de 20 minutos y te asesoramos sin costo ni compromiso."
                    : "Book a 20-minute call and we'll advise you at no cost or commitment."}
                </p>
                <Link
                  href={callUrl}
                  className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 30px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}
                >
                  {l === "es" ? "Agendar llamada gratuita" : "Book a free call"}
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes feature-icon-pulse {
            0%, 100% { filter: drop-shadow(0 0 0px currentColor); transform: translateY(0); }
            50% { filter: drop-shadow(0 0 6px currentColor); transform: translateY(-2px); }
          }
          .feature-icon { animation: feature-icon-pulse 3.4s ease-in-out infinite; }
          .feature-card:hover .feature-icon { animation-play-state: paused; filter: drop-shadow(0 0 8px currentColor); transform: translateY(-2px) scale(1.08); }
        `}</style>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
