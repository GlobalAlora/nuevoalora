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
    title: locale === "es" ? "Servicios — ALORA" : "Services — ALORA",
    description: locale === "es"
      ? "Desarrollo web, ecommerce, chatbots con IA, Google Ads y más. Soluciones digitales a medida para empresas."
      : "Web development, ecommerce, AI chatbots, Google Ads and more. Custom digital solutions for businesses.",
  };
}

const SERVICES = {
  es: [
    {
      slug: "desarrollo-web",
      icon: "🌐",
      title: "Desarrollo Web",
      desc: "Diseñamos y desarrollamos sitios web a medida que elevan tu marca, optimizados para SEO, velocidad y conversión en cualquier dispositivo.",
      tags: ["WordPress", "React", "Next.js", "SEO"],
    },
    {
      slug: "landing-pages",
      icon: "🎯",
      title: "Landing Pages",
      desc: "Creamos landing pages enfocadas en un único objetivo: generar leads o ventas con mensajes claros, formularios optimizados y medición precisa.",
      tags: ["Conversión", "A/B Testing", "Analytics"],
    },
    {
      slug: "aplicaciones-web",
      icon: "⚙️",
      title: "Aplicaciones Web",
      desc: "Construimos aplicaciones y sistemas web personalizados para automatizar procesos, integrar APIs y dar soporte a equipos internos o clientes.",
      tags: ["React", "Node.js", "APIs", "Bases de datos"],
    },
    {
      slug: "ecommerce",
      icon: "🛒",
      title: "Ecommerce / Tienda Online",
      desc: "Implementamos tiendas en Tiendanube o WooCommerce según tu estrategia, cuidando el catálogo, los medios de pago y la experiencia completa de compra.",
      tags: ["WooCommerce", "Tiendanube", "MercadoPago"],
    },
    {
      slug: "chatbots",
      icon: "🤖",
      title: "Chatbots con IA",
      desc: "Desplegamos chatbots con IA que responden consultas, califican leads y agendan reuniones de manera autónoma, integrados con tus herramientas clave.",
      tags: ["IA Generativa", "WhatsApp", "Integración CRM"],
    },
    {
      slug: "google-ads",
      icon: "📈",
      title: "Google Ads",
      desc: "Gestionamos campañas de Google Ads para captar demanda con intención real de compra, optimizando keywords, anuncios y presupuesto de forma continua.",
      tags: ["Search", "Display", "Shopping", "ROAS"],
    },
    {
      slug: "mantenimiento-web",
      icon: "🛡️",
      title: "Mantenimiento Web",
      desc: "Nos ocupamos del mantenimiento integral de tu web: actualizaciones, monitoreo, copias de seguridad y soporte proactivo para evitar caídas.",
      tags: ["Seguridad", "Backups", "Monitoreo 24/7"],
    },
    {
      slug: "atencion-cliente-ia",
      icon: "💬",
      title: "IA para Atención al Cliente",
      desc: "Automatizamos la atención al cliente con inteligencia artificial para responder en tiempo real, escalar sin costos fijos y mejorar la experiencia.",
      tags: ["GPT", "Automatización", "Multi-canal"],
    },
  ],
  en: [
    {
      slug: "desarrollo-web",
      icon: "🌐",
      title: "Web Development",
      desc: "We design and develop custom websites that elevate your brand, optimized for SEO, speed and conversion on any device.",
      tags: ["WordPress", "React", "Next.js", "SEO"],
    },
    {
      slug: "landing-pages",
      icon: "🎯",
      title: "Landing Pages",
      desc: "We create landing pages focused on a single goal: generating leads or sales with clear messages, optimized forms and precise measurement.",
      tags: ["Conversion", "A/B Testing", "Analytics"],
    },
    {
      slug: "aplicaciones-web",
      icon: "⚙️",
      title: "Web Applications",
      desc: "We build custom web applications and systems to automate processes, integrate APIs and support internal teams or customers.",
      tags: ["React", "Node.js", "APIs", "Databases"],
    },
    {
      slug: "ecommerce",
      icon: "🛒",
      title: "Ecommerce / Online Store",
      desc: "We implement stores on Tiendanube or WooCommerce according to your strategy, taking care of the catalog, payment methods and the full shopping experience.",
      tags: ["WooCommerce", "Tiendanube", "Payments"],
    },
    {
      slug: "chatbots",
      icon: "🤖",
      title: "AI Chatbots",
      desc: "We deploy AI-powered chatbots that answer queries, qualify leads and schedule meetings autonomously, integrated with your key tools.",
      tags: ["Generative AI", "WhatsApp", "CRM Integration"],
    },
    {
      slug: "google-ads",
      icon: "📈",
      title: "Google Ads",
      desc: "We manage Google Ads campaigns to capture demand with real purchase intent, continuously optimizing keywords, ads and budget.",
      tags: ["Search", "Display", "Shopping", "ROAS"],
    },
    {
      slug: "mantenimiento-web",
      icon: "🛡️",
      title: "Web Maintenance",
      desc: "We handle the comprehensive maintenance of your website: updates, monitoring, backups and proactive support to prevent downtime.",
      tags: ["Security", "Backups", "24/7 Monitoring"],
    },
    {
      slug: "atencion-cliente-ia",
      icon: "💬",
      title: "AI Customer Service",
      desc: "We automate customer service with artificial intelligence to respond in real time, scale without fixed costs and improve the experience.",
      tags: ["GPT", "Automation", "Multi-channel"],
    },
  ],
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const services = SERVICES[l] ?? SERVICES.es;

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen pt-20 text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
        {/* Glows */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.12]"
            style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 40%, transparent), transparent)" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
              <span className="font-medium uppercase text-white/60">
                {l === "es" ? "Soluciones digitales" : "Digital solutions"}
              </span>
            </div>
            <h1 className="text-balance font-bold text-white"
              style={{ fontSize: "clamp(36px, 4.5vw, 60px)", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
              {l === "es" ? "Nuestros servicios" : "Our services"}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/55">
              {l === "es"
                ? "Software, IA y experiencias digitales conectadas para que tu empresa opere mejor y crezca más rápido."
                : "Software, AI and connected digital experiences so your business operates better and grows faster."}
            </p>
          </div>

          {/* Services grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/${l}/soluciones/${svc.slug}`}
                className="group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.025)",
                }}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(ellipse at top, color-mix(in oklab, var(--turquoise) 6%, transparent), transparent 70%)" }} />

                <div className="mb-4 text-3xl">{svc.icon}</div>
                <h2 className="mb-3 text-[17px] font-semibold text-white">{svc.title}</h2>
                <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-white/50">{svc.desc}</p>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium text-white/40"
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="flex items-center gap-1 text-[13px] font-medium transition-colors"
                  style={{ color: "var(--turquoise)" }}>
                  {l === "es" ? "Ver detalle" : "View details"}
                  <svg viewBox="0 0 16 16" fill="none" width="12" height="12" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-2xl border p-10 text-center"
            style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)" }}>
            <h2 className="mb-4 text-[28px] font-bold text-white">
              {l === "es" ? "¿No sabés cuál es la mejor solución para tu caso?" : "Not sure which solution is right for you?"}
            </h2>
            <p className="mb-8 text-[16px] text-white/50">
              {l === "es"
                ? "Agendá una llamada de 20 minutos y te asesoramos sin costo ni compromiso."
                : "Book a 20-minute call and we'll advise you at no cost or commitment."}
            </p>
            <Link
              href={l === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call"}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white shadow-xl transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 40px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}
            >
              {l === "es" ? "Agendar llamada gratuita" : "Book a free call"}
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
