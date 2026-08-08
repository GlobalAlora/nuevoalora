import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JourneyTimeline } from "@/components/shared/JourneyTimeline";
import { CookieBanner } from "@/components/alora/CookieBanner";
import { ICONS } from "@/lib/icons";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { SectionBackground } from "./SectionBackground";
import { AiHeroGraphic } from "./AiHeroGraphic";
import { ProofCarousel, type ProofItem } from "./ProofCarousel";
import { AiLandingContactForm } from "./AiLandingContactForm";

// Deliberately outside src/app/[locale]/: this page must never get the site
// Nav, Footer, WhatsApp bubble, chatbot or exit-intent popup that the locale
// layout injects everywhere else. No exits before the form.
// Don't move this under [locale] to "fix" the missing nav.
// See src/proxy.ts (LOCALE_EXEMPT_PREFIXES) — required for this route and
// its /gracias, /gracias-llamada, /reservar-llamada sub-pages to resolve
// without a /es prefix.
//
// Indexed on purpose (unlike its /gracias* sub-pages, which stay noindex):
// this page is meant to rank on its own, it's just not linked from the main
// nav yet. See src/app/robots.ts and src/app/sitemap.ts for the other two
// pieces of that — all three need to move together if that changes again.

const PAGE_URL = "https://www.globalalora.com/ia-para-empresas";
const PAGE_TITLE = "Auditoría de IA para empresas | ALORA";
const PAGE_DESC = "Diagnosticamos dónde la inteligencia artificial genera retorno real en tu operación — ventas, atención al cliente, procesos internos y datos. Auditoría gratuita de 20 minutos.";

const ACCENT_CYCLE = ["var(--turquoise)", "var(--electric)", "var(--violet)"];
const ACCENT = "var(--electric)";
const ACCENT2 = "var(--violet)";
const BG = "oklch(0.13 0.015 260)";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    images: [{ url: `/api/og?title=${encodeURIComponent("Auditoría de IA para empresas")}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`/api/og?title=${encodeURIComponent("Auditoría de IA para empresas")}`],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Inicio", url: "https://www.globalalora.com/es" },
  { name: "Auditoría de IA para empresas", url: PAGE_URL },
]);

const PROBLEM_CARDS: { icon: string; title: string; body: string }[] = [
  { icon: "controls", title: "Tu equipo pierde horas en tareas repetibles", body: "Trabajo manual que se podría automatizar, pero nadie tuvo el tiempo de priorizarlo." },
  { icon: "chat", title: "Tu atención al cliente no escala", body: "El volumen de consultas crece más rápido que la capacidad de tu equipo para responderlas." },
  { icon: "puzzle", title: "Tenés datos dispersos que no se traducen en decisiones", body: "La información existe, pero está repartida entre sistemas que no se hablan entre sí." },
  { icon: "search", title: "Ya evaluaste \"meter IA\", pero no sabés por dónde empezar", body: "Sobran herramientas y demos. Falta un criterio claro de qué caso de uso genera retorno real primero." },
];

const APPLICATION_CARDS: { icon: string; title: string; body: string }[] = [
  { icon: "target", title: "Ventas y atención comercial", body: "Seguimiento de leads, calificación automática y respuesta inmediata en cada canal de entrada." },
  { icon: "gears", title: "Operaciones y procesos internos", body: "Tareas repetibles conectadas entre sistemas, sin depender de que alguien las haga a mano cada vez." },
  { icon: "headset", title: "Atención al cliente y soporte", body: "Consultas frecuentes resueltas al instante, con derivación a una persona cuando el caso lo requiere." },
  { icon: "chart", title: "Datos y toma de decisiones", body: "Información dispersa convertida en reportes que efectivamente se usan para decidir." },
];

const INDUSTRIES: { icon: string; name: string; useCases: string[] }[] = [
  { icon: "cart", name: "Retail y ecommerce", useCases: ["Chatbot de ventas con catálogo y precios 24/7", "Recomendaciones personalizadas por historial de compra", "Seguimiento automático de carritos abandonados"] },
  { icon: "chat", name: "Salud y bienestar", useCases: ["Agente que agenda, confirma y recuerda turnos por WhatsApp", "Reducción de ausentismo con recordatorios automáticos", "Cobro de señas integrado en la conversación"] },
  { icon: "structure", name: "Inmobiliaria", useCases: ["Calificación automática de leads por presupuesto y zona", "Agente que coordina visitas según disponibilidad", "Respuesta instantánea a consultas de propiedades"] },
  { icon: "shield", name: "Servicios profesionales y legal", useCases: ["Formulario que prioriza consultas según urgencia", "Reseñas y prueba social mostradas en vivo", "Agenda de turnos sin intervención manual"] },
  { icon: "gears", name: "Manufactura e industria", useCases: ["Automatización de cotizaciones repetitivas", "Seguimiento de pedidos integrado a tu sistema de gestión", "Alertas automáticas de stock y reposición"] },
  { icon: "chart", name: "Finanzas y seguros", useCases: ["Calificación de leads por perfil de riesgo", "Respuestas automáticas a consultas frecuentes", "Reportes de conversión y seguimiento en tiempo real"] },
  { icon: "spark", name: "Agro", useCases: ["Seguimiento automático de pedidos y cotizaciones de insumos", "Alertas de stock y reposición por campaña", "Atención a productores por WhatsApp fuera de horario"] },
  { icon: "headset", name: "Empresas de servicios", useCases: ["Calificación de leads antes de pasar a un vendedor", "Agenda automática de visitas o demos", "Seguimiento post-venta sin intervención manual"] },
  { icon: "navigation", name: "Logística y distribución", useCases: ["Seguimiento de pedidos integrado a tu sistema de gestión", "Respuestas automáticas sobre estado de envío", "Alertas de demora antes de que el cliente pregunte"] },
];

const JOURNEY_STAGES = [
  { icon: "search", tag: "01", title: "Diagnóstico", body: "Relevamos tu operación real — sistemas, equipos y procesos — para identificar dónde la IA puede generar impacto concreto." },
  { icon: "target", tag: "02", title: "Priorización por impacto", body: "De todos los casos de uso posibles, definimos juntos cuáles conviene atacar primero según retorno y esfuerzo." },
  { icon: "code", tag: "03", title: "Implementación", body: "Construimos e integramos la solución con tus sistemas actuales, con entregas visibles durante todo el proceso." },
  { icon: "chart", tag: "04", title: "Medición y escalado", body: "Medimos el resultado real y expandimos a nuevas áreas una vez validado, no antes." },
];

const PROOF_ITEMS: ProofItem[] = [
  {
    client: "ALORA CRM",
    category: "CRM comercial con IA",
    image: "/images/case-studies/alora-crm/alora-crm-hero.png",
    imageAspect: "1400/613",
    problem: "Leads dispersos entre WhatsApp, chatbot y web, sin seguimiento centralizado — cada etapa dependía de que alguien se acordara de actualizar una planilla.",
    logic: "Automatizar el pipeline completo con IA integrada: que cada lead avance solo entre etapas y que el seguimiento no dependa de una persona.",
    solution: "Pipeline 100% automatizado, WhatsApp con IA integrado y dashboard comercial en tiempo real. Hoy licenciado como marca blanca a otras empresas.",
    metric: "En uso y evolución constante — 4 clientes con implementación white-label",
  },
  {
    client: "Soy LIDIA",
    category: "Agente de IA por WhatsApp",
    image: "/images/case-studies/soy-lidia/alora-soy-lidia-hero.png",
    imageAspect: "1600/1542",
    problem: "Consultorios pierden pacientes por no responder a tiempo, de noche o en hora pico — el paciente agenda con el primero que le contesta.",
    logic: "Una recepcionista digital que responda, agende y cobre dentro de la misma conversación de WhatsApp, sin intervención humana.",
    solution: "Agente de IA 24/7 que agenda, confirma, cobra señas y recuerda turnos automáticamente, con reportes de negocio en tiempo real.",
    metric: "En uso en consultorios de Argentina, Uruguay, España y Chile",
  },
  {
    client: "Presupuestación automática por IA",
    category: "Automatización de cotizaciones",
    imageAspect: "1400/700",
    problem: "Armar un presupuesto después de una reunión comercial implica horas de trabajo manual: revisar notas, calcular ítems y redactar la propuesta desde cero cada vez.",
    logic: "Que la IA lea las notas de la reunión y arme un borrador de presupuesto automáticamente, listo para revisar y ajustar antes de enviarlo.",
    solution: "Un sistema que toma notas de reunión y genera un presupuesto estructurado en minutos, con ítems y condiciones ya cargados.",
    metric: "El armado de un presupuesto pasa de horas a minutos",
  },
  {
    client: "Ticketing de soporte para empresas",
    category: "Soporte y atención con IA",
    imageAspect: "1400/700",
    problem: "Los reclamos y consultas de soporte llegan por distintos canales y se pierden entre mails, WhatsApp y planillas, sin un criterio claro de prioridad.",
    logic: "Centralizar cada consulta en un sistema de tickets con IA que clasifique, priorice y sugiera una respuesta antes de que un agente humano intervenga.",
    solution: "Sistema de ticketing con clasificación automática por urgencia y área, con respuestas sugeridas por IA para acelerar cada resolución.",
    metric: "Todos los canales de soporte centralizados en un solo lugar",
  },
  {
    client: "Sistema de proyectos y seguimiento",
    category: "Gestión de proyectos con IA",
    imageAspect: "1400/700",
    problem: "El estado real de cada proyecto vive en la cabeza de una persona, sin visibilidad para el resto del equipo ni para el cliente.",
    logic: "Centralizar tareas, tiempos y entregables en un solo lugar, con IA que resuma el avance y anticipe demoras antes de que se conviertan en un problema.",
    solution: "Panel de proyectos con seguimiento automático de avance, alertas de demora y resúmenes generados por IA en cada actualización.",
    metric: "Visibilidad de avance en tiempo real, sin pedir un status a mano",
  },
];

function SectionBadge({ children, accent = ACCENT }: { children: React.ReactNode; accent?: string }) {
  return (
    <div
      className="tech-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
      style={{
        color: accent,
        background: `color-mix(in oklab, ${accent} 7%, rgba(10,12,20,0.6))`,
        border: `1px solid color-mix(in oklab, ${accent} 45%, transparent)`,
        boxShadow: `0 0 22px -6px color-mix(in oklab, ${accent} 65%, transparent), inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      <span
        aria-hidden
        className="tech-badge-dot h-[6px] w-[6px] shrink-0 rounded-full"
        style={{ background: accent, boxShadow: `0 0 8px 1.5px color-mix(in oklab, ${accent} 80%, transparent)` }}
      />
      {children}
      <style>{`
        .tech-badge-dot { animation: tech-badge-pulse 2.2s ease-in-out infinite; }
        @keyframes tech-badge-pulse { 0%,100% { opacity: 0.55; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }
        @media (prefers-reduced-motion: reduce) { .tech-badge-dot { animation: none; } }
      `}</style>
    </div>
  );
}

function SectionHeader({ badge, title, intro, accent = ACCENT, nowrap = false }: { badge: string; title: string; intro: string; accent?: string; nowrap?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <SectionBadge accent={accent}>{badge}</SectionBadge>
      <h2
        className={nowrap ? "mt-5" : "mt-5 text-balance"}
        style={{ fontSize: nowrap ? "clamp(20px, 2.6vw, 38px)" : "clamp(26px, 3vw, 42px)", fontWeight: 720, lineHeight: 1.1, letterSpacing: "-0.03em", whiteSpace: nowrap ? "nowrap" : "normal" }}
      >
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-pretty" style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
        {intro}
      </p>
    </div>
  );
}

function TechCard({ icon, title, body, index }: { icon: string; title: string; body: string; index: number }) {
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length];
  const accent2 = ACCENT_CYCLE[(index + 1) % ACCENT_CYCLE.length];
  return (
    <div
      className="tech-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        border: `1px solid color-mix(in oklab, ${accent} 30%, rgba(255,255,255,0.1))`,
        boxShadow: `0 20px 50px -30px color-mix(in oklab, ${accent} 40%, transparent)`,
      }}
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}, ${accent2})` }} />
      <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-45" style={{ background: accent }} />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)", backgroundSize: "16px 16px", maskImage: "linear-gradient(180deg, transparent, black 35%, black 65%, transparent)", WebkitMaskImage: "linear-gradient(180deg, transparent, black 35%, black 65%, transparent)" }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className="flex h-12 w-12 items-center justify-center [&_svg]:h-5 [&_svg]:w-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(160deg, color-mix(in oklab, ${accent} 34%, transparent), color-mix(in oklab, ${accent2} 20%, transparent))`,
            color: accent,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {ICONS[icon]}
        </span>
        <span className="font-mono text-[11px] font-semibold text-white/25">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="relative text-[17px] font-semibold leading-snug text-white/94">{title}</h3>
      <p className="relative text-[14.5px] leading-relaxed text-white/62">{body}</p>

      <style>{`.tech-card:hover { transform: translateY(-3px); transition: transform 300ms ease; }`}</style>
    </div>
  );
}

function IndustryCard({ icon, name, useCases, index }: { icon: string; name: string; useCases: string[]; index: number }) {
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length];
  const accent2 = ACCENT_CYCLE[(index + 1) % ACCENT_CYCLE.length];
  return (
    <div
      className="tech-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        border: `1px solid color-mix(in oklab, ${accent} 30%, rgba(255,255,255,0.1))`,
        boxShadow: `0 20px 50px -30px color-mix(in oklab, ${accent} 40%, transparent)`,
      }}
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}, ${accent2})` }} />
      <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-45" style={{ background: accent }} />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)", backgroundSize: "16px 16px", maskImage: "linear-gradient(180deg, transparent, black 35%, black 65%, transparent)", WebkitMaskImage: "linear-gradient(180deg, transparent, black 35%, black 65%, transparent)" }}
      />

      <div className="relative flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center [&_svg]:h-[18px] [&_svg]:w-[18px] transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(160deg, color-mix(in oklab, ${accent} 34%, transparent), color-mix(in oklab, ${accent2} 20%, transparent))`,
            color: accent,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {ICONS[icon]}
        </span>
        <h3 className="text-[16px] font-semibold leading-snug text-white/94">{name}</h3>
      </div>
      <ul className="relative flex flex-col gap-2.5">
        {useCases.map((u) => (
          <li key={u} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/62">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} />
            {u}
          </li>
        ))}
      </ul>

      <style>{`.tech-card:hover { transform: translateY(-3px); transition: transform 300ms ease; }`}</style>
    </div>
  );
}

export default function IaParaEmpresasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="relative min-h-screen overflow-hidden text-white" style={{ background: BG }}>
        {/* Header — unlinked logo only, no nav */}
        <header className="relative z-10 flex items-center justify-center py-8">
          <Image src="/alora-logo-nav-white.png" alt="ALORA" width={110} height={30} className="h-8 w-auto" priority />
        </header>

        {/* Hero */}
        <section className="relative px-6 pb-20 pt-6">
          <SectionBackground variant="particles" accent={ACCENT} accent2={ACCENT2} />
          <div className="hero-split mx-auto max-w-6xl">
            <div className="hero-split-text">
              <SectionBadge>Consultoría en Inteligencia Artificial</SectionBadge>
              <h1
                className="mt-6 text-balance"
                style={{ fontSize: "clamp(32px, 4.6vw, 58px)", fontWeight: 720, lineHeight: 1.05, letterSpacing: "-0.035em" }}
              >
                ¿Qué puede hacer la IA por tu empresa?
                <span className="block" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Te lo mostramos con un diagnóstico, no con una demo.
                </span>
              </h1>
              <p className="hero-split-p mt-5 max-w-xl text-pretty" style={{ fontSize: "17.5px", lineHeight: 1.65, color: "rgba(255,255,255,0.68)" }}>
                Trabajamos con equipos que ya tienen una operación en marcha — ventas, atención al cliente, procesos internos, datos — y buscan aplicar IA donde realmente genera retorno, no donde está de moda.
              </p>
              <div className="hero-split-cta mt-8 flex justify-center">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14.5px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`, boxShadow: `0 8px 32px color-mix(in oklab, ${ACCENT} 35%, transparent)` }}
                >
                  Reservá una auditoría de IA para tu operación →
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[400px]">
              <AiHeroGraphic accent={ACCENT} accent2={ACCENT2} />
            </div>
          </div>
          <style>{`
            .hero-split { display: flex; flex-direction: column; gap: 56px; align-items: center; }
            .hero-split-text { text-align: center; }
            .hero-split-p { margin-left: auto; margin-right: auto; }
            @media (min-width: 768px) {
              .hero-split { display: grid; grid-template-columns: 1.1fr 0.9fr; align-items: center; }
              .hero-split-text, .hero-split-p { text-align: left; margin-left: 0; margin-right: 0; }
              .hero-split-cta { justify-content: flex-start; }
            }
          `}</style>
        </section>

        {/* Problem / friction */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="diagonal" accent={ACCENT_CYCLE[0]} accent2={ACCENT_CYCLE[2]} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="El problema"
              title="Señales de que tu negocio tiene margen para aplicar IA"
              intro="Estas señales aparecen en ventas, atención, operaciones y datos por igual — no hace falta que tengas un problema grave, alcanza con reconocerte en una de ellas."
              accent={ACCENT_CYCLE[0]}
            />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
              {PROBLEM_CARDS.map((c, i) => <TechCard key={c.title} index={i} {...c} />)}
            </div>
          </div>
        </section>

        {/* Where AI applies, by business function */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="pulse" accent={ACCENT_CYCLE[1]} accent2={ACCENT_CYCLE[0]} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Dónde aplica"
              title="Dónde aplicamos IA en tu negocio"
              intro="No vendemos una herramienta puntual — evaluamos tu operación completa y aplicamos IA donde el impacto es real."
              accent={ACCENT_CYCLE[1]}
            />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
              {APPLICATION_CARDS.map((c, i) => <TechCard key={c.title} index={i} {...c} />)}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="aurora" accent={ACCENT_CYCLE[2]} accent2={ACCENT_CYCLE[1]} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Por industria"
              title="Casos de aplicación de IA por industria"
              intro="Nueve rubros con aplicaciones de IA ya probadas en el mercado, para que veas dónde encaja tu negocio antes de la llamada."
              accent={ACCENT_CYCLE[2]}
            />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 industries-grid">
              {INDUSTRIES.map((ind, i) => (
                <IndustryCard key={ind.name} icon={ind.icon} name={ind.name} useCases={ind.useCases} index={i} />
              ))}
            </div>
            <style>{`
              @media (min-width: 768px) {
                .industries-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
              }
            `}</style>
          </div>
        </section>

        {/* Methodology */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="diagonal" accent={ACCENT} accent2={ACCENT2} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Cómo trabajamos"
              title="Un proceso de diagnóstico, no de venta"
              intro="Cuatro etapas, siempre en ese orden: primero entendemos tu operación, después construimos. Nunca al revés."
            />
            <JourneyTimeline stages={JOURNEY_STAGES} accent={ACCENT} accent2={ACCENT2} />
          </div>
        </section>

        {/* Proof — carousel, self-contained, no external links */}
        <section className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="pulse" accent={ACCENT2} accent2={ACCENT} />
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge="Resultados reales"
              title="IA en producción, no en demo"
              intro="Sistemas reales, algunos ya en uso y otros en camino — con el problema, la lógica y la solución de cada uno, sin vueltas."
            />
            <div className="mt-12">
              <ProofCarousel items={PROOF_ITEMS} />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="relative px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionBackground variant="aurora" accent={ACCENT} accent2={ACCENT2} />
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionBadge>Empecemos</SectionBadge>
              <h2 className="mt-5 text-balance" style={{ fontSize: "clamp(28px, 3.4vw, 46px)", fontWeight: 720, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                Empecemos con tu diagnóstico de IA
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance" style={{ fontSize: "16.5px", lineHeight: 1.62, color: "rgba(255,255,255,0.65)" }}>
                Una conversación breve para entender tu negocio y mostrarte, en concreto, dónde la IA puede generar resultado — sin compromiso.
              </p>
            </div>

            <div className="contact-split mt-14">
              {/* Left: audit explanation + smaller call CTA */}
              <div className="contact-split-left">
                <h3 className="text-[15px] font-bold uppercase tracking-wide text-white/50">¿Qué incluye?</h3>
                <ul className="mt-4 flex flex-col gap-3.5">
                  {[
                    "20 minutos, 100% online",
                    "Relevamiento de tu negocio y tus sistemas actuales",
                    "Quick wins y un roadmap de implementación",
                    "Totalmente gratuita, sin compromiso de compra",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-white/72">
                      <span className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full" style={{ background: `color-mix(in oklab, ${ACCENT} 20%, transparent)` }}>
                        <svg viewBox="0 0 16 16" fill="none" width="9" height="9"><path d="M3 8l3.5 3.5L13 4" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 rounded-full py-2.5 pl-3 pr-4" style={{ background: `color-mix(in oklab, ${ACCENT2} 10%, rgba(255,255,255,0.03))`, border: `1px solid color-mix(in oklab, ${ACCENT2} 30%, transparent)` }}>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `color-mix(in oklab, ${ACCENT2} 20%, transparent)`, color: ACCENT2 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                    </svg>
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-white/80">Pensado para empresas en funcionamiento, con equipo y operación activa.</p>
                </div>

                <Link
                  href="/ia-para-empresas/reservar-llamada"
                  className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)" }}
                >
                  Prefiero reservar llamada ya →
                </Link>
              </div>

              {/* Right: form */}
              <div
                className="contact-split-right rounded-[28px] p-7 sm:p-10"
                style={{ background: "linear-gradient(155deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <AiLandingContactForm accent={ACCENT} accent2={ACCENT2} />
              </div>
            </div>
            <style>{`
              .contact-split { display: flex; flex-direction: column; gap: 40px; }
              .contact-split-left, .contact-split-right { width: 100%; }
              @media (min-width: 768px) {
                .contact-split { display: grid; grid-template-columns: 2fr 3fr; gap: 56px; align-items: start; }
              }
            `}</style>
          </div>
        </section>

        {/* Minimal footer — legal links only, no site navigation */}
        <footer className="relative px-6 py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
            <Image src="/alora-logo-nav-white.png" alt="ALORA" width={81} height={22} className="opacity-60" />
            <p className="text-[12px] text-white/40">© 2026 ALORA. Todos los derechos reservados.</p>
            <div className="flex gap-4 text-[12px] text-white/40">
              <Link href="/es/privacy-policy" className="underline transition-colors hover:text-white/70">Privacidad</Link>
              <Link href="/es/cookies" className="underline transition-colors hover:text-white/70">Cookies</Link>
              <Link href="/es/terminos" className="underline transition-colors hover:text-white/70">Términos</Link>
            </div>
          </div>
        </footer>
      </main>
      <CookieBanner locale="es" />
    </>
  );
}
