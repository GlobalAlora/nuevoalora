import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { FounderPhoto } from "@/components/shared/FounderPhoto";
import { ICONS } from "@/lib/icons";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Presentación | ALORA" : "About us | ALORA",
    description: isEs
      ? "Somos Bruno y Walo, fundadores de Alora. Conocé nuestro equipo y la metodología que aplicamos en cada proyecto, de principio a fin."
      : "We're Bruno and Walo, founders of Alora. Meet our team and the methodology we apply to every project, from start to finish.",
  };
}

const BRUNO_LINKEDIN = "https://www.linkedin.com/in/brunopiorno/";
const BRUNO_EMAIL = "mailto:somosglobalalora@gmail.com";
const WALO_LINKEDIN = "https://www.linkedin.com/in/walidjalil/";
const WALO_EMAIL = "mailto:somosglobalalora@gmail.com";
const WHATSAPP_URL = "https://wa.me/5491124629452";

const BRUNO_PHOTO = "/images/team/bruno.jpg";
const WALO_PHOTO = "/images/team/walo.jpg";

const STATS = [
  { icon: "chart", es: { n: "+12", label: "Años generando ecosistemas digitales" }, en: { n: "+12", label: "Years building digital ecosystems" } },
  { icon: "spark", es: { n: "IA First", label: "Integrada en cada proyecto" }, en: { n: "AI First", label: "Built into every project" } },
  { icon: "cloud", es: { n: "7 países", label: "Mercados activos" }, en: { n: "7 countries", label: "Active markets" } },
];

const CAPABILITIES_ES = [
  { icon: "target", label: "Estrategia" },
  { icon: "design", label: "Diseño" },
  { icon: "code", label: "Desarrollo" },
  { icon: "spark", label: "IA" },
  { icon: "chart", label: "Growth" },
  { icon: "shield", label: "QA" },
];
const CAPABILITIES_EN = [
  { icon: "target", label: "Strategy" },
  { icon: "design", label: "Design" },
  { icon: "code", label: "Development" },
  { icon: "spark", label: "AI" },
  { icon: "chart", label: "Growth" },
  { icon: "shield", label: "QA" },
];

// Icons for dict.process.steps (6 steps, same copy as the home page's Process section).
const METHOD_ICONS = ["search", "target", "code", "shield", "speed", "chart"];

// Icons for dict.why.cards (4 cards) — same icon set as the home page's WhyAlora section, reused verbatim.
const DIFF_ICONS = [
  <svg key="0" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeOpacity=".35" />
    <circle cx="20" cy="20" r="2.5" fill="currentColor" />
    <line x1="20" y1="6" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="29" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="20" x2="11" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="29" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 14l2 6-6-2 4-4z" fill="currentColor" opacity=".8" />
  </svg>,
  <svg key="1" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
    <path d="M22 6L10 22h10l-2 12 12-16H20l2-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".12" />
  </svg>,
  <svg key="2" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
    <path d="M20 6l12 4v8c0 7-5.5 11.5-12 14C13.5 29.5 8 25 8 18v-8l12-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".1" />
    <path d="M15 20l3.5 3.5L25 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="3" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
    <circle cx="20" cy="20" r="3.5" fill="currentColor" />
    <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="32" cy="14" r="3" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="8" cy="28" r="3" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.3" />
    <line x1="11" y1="14" x2="17" y2="18" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".6" />
    <line x1="29" y1="14" x2="23" y2="18" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".6" />
    <line x1="11" y1="28" x2="17" y2="22" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".6" />
    <line x1="29" y1="28" x2="23" y2="22" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".6" />
  </svg>,
];

const EXPECT_ICONS = ["headset", "search", "layers", "puzzle", "chat", "shield", "gears", "target"];
const EXPECT_ES = [
  "Trabajo directo con Bruno y Walo durante todo el proceso",
  "Diagnósticos claros antes de hablar de presupuesto",
  "Metodología iterativa con entregables medibles",
  "Equipo interno y red especializada para producción y escalado",
  "Comunicación constante, sin necesidad de perseguirnos para saber en qué estamos",
  "Código, diseños y accesos 100% tuyos, sin ataduras",
  "Acompañamiento cercano después del lanzamiento, no desaparecemos en el go-live",
  "Alcance y costos definidos por escrito, sin sorpresas en el camino",
];
const EXPECT_EN = [
  "Direct work with Bruno and Walo throughout the whole process",
  "Clear diagnostics before we even talk about budget",
  "An iterative methodology with measurable deliverables",
  "An in-house team plus a specialized network for production and scale",
  "Constant communication, no need to chase us for a status update",
  "Code, designs and access are 100% yours, with no strings attached",
  "Close support after launch — we don't disappear once you go live",
  "Scope and costs defined in writing, no surprises along the way",
];

export default async function PresentacionPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const isEs = l === "es";
  const callHref = isEs ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  const expect = isEs ? EXPECT_ES : EXPECT_EN;
  const capabilities = isEs ? CAPABILITIES_ES : CAPABILITIES_EN;
  const method = dict.process.steps;
  const diffs = dict.why.cards;
  const accents = ["var(--turquoise)", "var(--electric)", "var(--violet)"];

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="relative min-h-screen overflow-hidden text-white" style={{ background: "oklch(0.11 0.016 260)" }}>
        {/* Deep ambient background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -left-[10%] -top-[15%] h-[600px] w-[600px] rounded-full blur-3xl opacity-[0.14]"
            style={{ background: "radial-gradient(closest-side, var(--turquoise), transparent)" }} />
          <div className="absolute -right-[10%] top-1/3 h-[550px] w-[550px] rounded-full blur-3xl opacity-[0.12]"
            style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }} />
        </div>

        {/* Hero + Stats — one continuous section, single deep interactive background, no divider between them */}
        <div className="relative isolate overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid-dark opacity-40"
              style={{
                WebkitMaskImage: "radial-gradient(65% 85% at 70% 25%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
                maskImage: "radial-gradient(65% 85% at 70% 25%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
              }} />
            <div className="hero-glow-pulse absolute right-[6%] top-[10%] h-[460px] w-[460px] rounded-full blur-3xl opacity-30"
              style={{ background: "radial-gradient(closest-side, var(--electric), transparent)" }} />
            <div className="hero-glow-pulse absolute left-[8%] bottom-0 h-[380px] w-[380px] rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(closest-side, var(--violet), transparent)", animationDelay: "1.4s" }} />
          </div>

          <div className="mx-auto max-w-6xl px-6 pb-16 pt-32">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-center lg:text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
                  style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
                  <span className="font-medium uppercase text-white/60">{isEs ? "Presentación" : "About us"}</span>
                </div>
                <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(32px, 4.4vw, 52px)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
                  {isEs ? "Somos Bruno y Walo, " : "We're Bruno and Walo, "}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(100deg, var(--turquoise), var(--electric) 55%, var(--violet))" }}>
                    {isEs ? "fundadores de Alora" : "founders of Alora"}
                  </span>
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/55 lg:mx-0">
                  {isEs
                    ? "Somos los dueños, hablamos en primera persona y armamos el equipo ideal para cada desafío. Entramos al negocio, mapeamos el contexto real y proponemos una hoja de ruta accionable con talento senior en estrategia, diseño y tecnología."
                    : "We're the owners, we speak in the first person, and we build the ideal team for every challenge. We get into the business, map the real context, and propose an actionable roadmap with senior talent in strategy, design and technology."}
                </p>
              </div>

              {/* Founders photo duo */}
              <div className="relative mx-auto w-full max-w-xs">
                <div aria-hidden className="hero-glow-pulse absolute -inset-8 -z-10 rounded-full blur-3xl opacity-40" style={{ background: "linear-gradient(135deg, var(--turquoise), var(--violet))" }} />
                <div aria-hidden className="orbit-spin absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
                  <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full" style={{ background: "var(--turquoise)", boxShadow: "0 0 10px var(--turquoise)" }} />
                  <span className="absolute -bottom-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full" style={{ background: "var(--violet)", boxShadow: "0 0 8px var(--violet)" }} />
                </div>
                <div className="relative flex items-center justify-center">
                  <FounderPhoto
                    src={BRUNO_PHOTO}
                    alt="Bruno Piorno Polucci"
                    initials="BP"
                    accent="var(--turquoise)"
                    accent2="var(--electric)"
                    className="z-10 aspect-square w-[62%] rounded-full border-4 border-white/10"
                  />
                  <FounderPhoto
                    src={WALO_PHOTO}
                    alt="Walo Jalil"
                    initials="WJ"
                    accent="var(--violet)"
                    accent2="var(--electric)"
                    className="-ml-10 aspect-square w-[62%] rounded-full border-4 border-white/10"
                  />
                </div>
              </div>
            </div>

            {/* Stats — same section, no divider, continuous background */}
            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {STATS.map((s, i) => {
                const color = accents[i % accents.length];
                return (
                  <div key={s.es.label} className="group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5"
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.06)" }}>
                    <span className="node-pulse mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklab, ${color} 16%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 35%, transparent)`, color, animationDelay: `${i * 0.3}s` }}>
                      {ICONS[s.icon]}
                    </span>
                    <div className="font-bold" style={{ fontSize: "clamp(28px, 3.4vw, 40px)", letterSpacing: "-0.03em", color }}>
                      {isEs ? s.es.n : s.en.n}
                    </div>
                    <div className="mt-1 text-[13px] text-white/55">{isEs ? s.es.label : s.en.label}</div>

                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        padding: "1px",
                        background: `linear-gradient(140deg, color-mix(in oklab, ${color} 55%, transparent), transparent 60%)`,
                        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Directores */}
        <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {isEs ? "Directores" : "Directors"}
              </div>
              <h2 className="nowrap-heading text-balance font-bold" style={{ fontSize: "clamp(24px, 3.4vw, 44px)", letterSpacing: "-0.03em" }}>
                {isEs ? "Equipo que te acompaña desde el día uno" : "A team by your side from day one"}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[15px] text-white/55">
                {isEs
                  ? "Trabajás directamente con los dueños y con el equipo senior que armamos especialmente para tu proyecto."
                  : "You work directly with the owners and with the senior team we put together specifically for your project."}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Bruno */}
              <SpotlightCard accent="var(--turquoise)" className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-5">
                  <FounderPhoto
                    src={BRUNO_PHOTO}
                    alt="Bruno Piorno Polucci"
                    initials="BP"
                    accent="var(--turquoise)"
                    accent2="var(--electric)"
                    className="h-24 w-24 shrink-0 rounded-full border-2 border-white/10"
                  />
                  <div>
                    <h3 className="text-[19px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>Bruno Piorno Polucci</h3>
                    <p className="text-[13px] font-medium" style={{ color: "var(--turquoise)" }}>
                      {isEs ? "Founder & Director de Alora" : "Founder & Director of Alora"}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Estratega digital y líder de producto con formación en UX/UI y desarrollo full-stack. Fundó Alora para combinar diseño, tecnología y negocio en una misma mesa."
                    : "Digital strategist and product leader with a background in UX/UI and full-stack development. He founded Alora to bring design, technology and business to the same table."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Dirigió sitios y experiencias digitales para artistas y marcas como Lali Espósito, Duki, Bizarrap, Alejandro Sanz, José José y Nahuel Pennisi, además de empresas como Nutricia Bagó y Sony Music, asegurando entregas de alto impacto y estándares globales."
                    : "He directed sites and digital experiences for artists and brands such as Lali Espósito, Duki, Bizarrap, Alejandro Sanz, José José and Nahuel Pennisi, as well as companies like Nutricia Bagó and Sony Music, ensuring high-impact deliveries with global standards."}
                </p>
                <details className="group mt-3">
                  <summary className="flex cursor-pointer list-none items-center gap-1.5 text-[12.5px] font-semibold" style={{ color: "var(--turquoise)" }}>
                    {isEs ? "Leer trayectoria completa" : "Read full background"}
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" className="transition-transform duration-200 group-open:rotate-180">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="mt-3 flex flex-col gap-3">
                    <p className="text-[13.5px] leading-relaxed text-white/60">
                      {isEs
                        ? "Hace más de una década lidera equipos interdisciplinarios diseñando y construyendo experiencias digitales para pymes y corporativos. Trabajó como consultor independiente, lideró estudios boutique y dirigió producto en agencias regionales antes de fundar Alora."
                        : "For over a decade he has led interdisciplinary teams designing and building digital experiences for SMEs and corporations. He worked as an independent consultant, led boutique studios and ran product at regional agencies before founding Alora."}
                    </p>
                    <p className="text-[13.5px] leading-relaxed text-white/60">
                      {isEs
                        ? "Su foco está en traducir objetivos comerciales en roadmaps accionables: research, definición funcional, diseño, desarrollo y growth. Es obsesivo con los procesos medibles y las integraciones entre marketing, data y operaciones."
                        : "His focus is translating business goals into actionable roadmaps: research, functional definition, design, development and growth. He's obsessive about measurable processes and the integrations between marketing, data and operations."}
                    </p>
                    <p className="text-[13.5px] leading-relaxed text-white/60">
                      {isEs
                        ? "Desde Alora acompaña a cada cliente como socio: diagnósticos inmersivos, workshops tácticos y seguimiento cercano post implementación."
                        : "At Alora, he partners with every client: immersive diagnostics, tactical workshops and close follow-up after implementation."}
                    </p>
                  </div>
                </details>
                <ul className="mt-5 flex flex-col gap-2">
                  {(isEs
                    ? ["Más de 12 años liderando proyectos end-to-end", "Especialista en estrategias de adquisición y optimización de funnels", "Mentor en ecosistemas de innovación y programas de aceleración"]
                    : ["Over 12 years leading end-to-end projects", "Specialist in acquisition strategies and funnel optimization", "Mentor in innovation ecosystems and acceleration programs"]
                  ).map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[12.5px] text-white/50">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--turquoise)" }} />
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href={BRUNO_LINKEDIN} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[12.5px] text-white/60 transition-colors hover:text-white"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    LinkedIn
                  </a>
                  <a href={BRUNO_EMAIL}
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[12.5px] text-white/60 transition-colors hover:text-white"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    {isEs ? "Email" : "Email"}
                  </a>
                </div>
              </SpotlightCard>

              {/* Walo */}
              <SpotlightCard accent="var(--violet)" className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-5">
                  <FounderPhoto
                    src={WALO_PHOTO}
                    alt="Walo Jalil"
                    initials="WJ"
                    accent="var(--violet)"
                    accent2="var(--electric)"
                    className="h-24 w-24 shrink-0 rounded-full border-2 border-white/10"
                  />
                  <div>
                    <h3 className="text-[19px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>Walo Jalil</h3>
                    <p className="text-[13px] font-medium" style={{ color: "var(--violet)" }}>
                      {isEs ? "Co-founder & Director de Proyectos" : "Co-founder & Director of Projects"}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Consultor estratégico especializado en ecommerce, growth y automatización. Durante los últimos años lideró proyectos de transformación digital en retail, construcción y salud."
                    : "Strategic consultant specialized in ecommerce, growth and automation. In recent years he has led digital transformation projects in retail, construction and healthcare."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Fue consultor para ExxonMobil, Banco Galicia y Olapic, colaborando con marcas globales como Four Seasons, H&M, Dior y Porcelanosa, entre otras. Lideró equipos remotos y on-site asegurando consistencia en múltiples mercados."
                    : "He consulted for ExxonMobil, Banco Galicia and Olapic, collaborating with global brands such as Four Seasons, H&M, Dior and Porcelanosa, among others. He led remote and on-site teams ensuring consistency across multiple markets."}
                </p>
                <details className="group mt-3">
                  <summary className="flex cursor-pointer list-none items-center gap-1.5 text-[12.5px] font-semibold" style={{ color: "var(--violet)" }}>
                    {isEs ? "Leer trayectoria completa" : "Read full background"}
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" className="transition-transform duration-200 group-open:rotate-180">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="mt-3 flex flex-col gap-3">
                    <p className="text-[13.5px] leading-relaxed text-white/60">
                      {isEs
                        ? "Combina una fuerte mirada comercial con metodologías de producto. Viene construyendo equipos ágiles que integran marketing, ventas y tecnología, siempre con foco en impacto medible en revenue."
                        : "He combines a strong commercial eye with product methodologies. He has built agile teams that integrate marketing, sales and technology, always with a focus on measurable revenue impact."}
                    </p>
                    <p className="text-[13.5px] leading-relaxed text-white/60">
                      {isEs
                        ? "Trabajó con compañías regionales diseñando funnels omnicanal, estructuró departamentos de marketing de performance desde cero y aceleró lanzamientos de ecommerce B2B/B2C con foco en rentabilidad."
                        : "He worked with regional companies designing omnichannel funnels, built performance marketing departments from scratch, and accelerated B2B/B2C ecommerce launches with a focus on profitability."}
                    </p>
                    <p className="text-[13.5px] leading-relaxed text-white/60">
                      {isEs
                        ? "Además de dirigir proyectos en Alora, comparte contenido y mentorías sobre liderazgo creativo y construcción de propuestas de valor, apalancando su experiencia como emprendedor y consultor independiente."
                        : "Besides directing projects at Alora, he shares content and mentorship on creative leadership and building value propositions, drawing on his experience as an entrepreneur and independent consultant."}
                    </p>
                  </div>
                </details>
                <ul className="mt-5 flex flex-col gap-2">
                  {(isEs
                    ? ["Más de 300 workshops facilitados con equipos directivos", "Experto en growth para negocios B2B y canales mayoristas", "Speaker invitado en eventos de innovación y profesionalización comercial"]
                    : ["Over 300 workshops facilitated with leadership teams", "Growth expert for B2B businesses and wholesale channels", "Invited speaker at innovation and commercial professionalization events"]
                  ).map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[12.5px] text-white/50">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--violet)" }} />
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href={WALO_LINKEDIN} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[12.5px] text-white/60 transition-colors hover:text-white"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    LinkedIn
                  </a>
                  <a href={WALO_EMAIL}
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[12.5px] text-white/60 transition-colors hover:text-white"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    {isEs ? "Email" : "Email"}
                  </a>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>

        {/* Quiénes somos + Qué podés esperar — unified section, one continuous background */}
        <div className="relative isolate overflow-hidden py-20" style={{ background: "oklch(0.1 0.01 255)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid-dark opacity-25"
              style={{
                WebkitMaskImage: "radial-gradient(60% 75% at 18% 30%, rgba(0,0,0,1) 0%, transparent 75%)",
                maskImage: "radial-gradient(60% 75% at 18% 30%, rgba(0,0,0,1) 0%, transparent 75%)",
              }} />
            <div className="hero-glow-pulse absolute left-[6%] top-[22%] h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-3xl opacity-[0.16]"
              style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }} />
            <div className="hero-glow-pulse absolute right-[10%] bottom-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-[0.1]"
              style={{ background: "radial-gradient(closest-side, var(--turquoise), transparent)", animationDelay: "0.8s" }} />
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: "color-mix(in oklab, var(--turquoise) 75%, transparent)" }}>
                  {isEs ? "Equipo" : "Team"}
                </div>
                <h2 className="font-bold" style={{ fontSize: "clamp(32px, 3.6vw, 52px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  <span className="block">{isEs ? "Talento validado" : "Validated talent"}</span>
                  <span className="block">{isEs ? "en cada etapa" : "at every stage"}</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55 lg:mx-0">
                  {isEs
                    ? "Sumamos talento curado y validado por nosotros mismos: el perfil justo, estratégico o técnico, para lo que necesita cada proyecto y cada etapa. Nada de gente de más ni especialistas improvisados."
                    : "We bring in talent we've personally curated and validated: the right profile — strategic or technical — for whatever each project and stage calls for. No bloat, no improvised specialists."}
                </p>
              </div>

              {/* Capabilities orbit graphic — layered rings, flowing connections and a traveling satellite */}
              <div className="relative mx-auto h-[340px] w-[340px]">
                {/* outer static ring */}
                <div aria-hidden className="absolute inset-0 rounded-full border" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
                {/* middle dashed ring, slow spin */}
                <div aria-hidden className="absolute inset-[30px] rounded-full border border-dashed orbit-spin" style={{ borderColor: "rgba(255,255,255,0.16)" }} />
                {/* traveling satellite dot, counter-rotating on the outer ring */}
                <div aria-hidden className="absolute inset-0 orbit-spin-reverse">
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full" style={{ background: "var(--electric)", boxShadow: "0 0 10px var(--electric)" }} />
                </div>
                <div aria-hidden className="absolute inset-[70px] rounded-full blur-2xl opacity-30" style={{ background: "radial-gradient(closest-side, var(--turquoise), transparent)" }} />

                {/* connecting lines from the core to each capability */}
                <svg aria-hidden viewBox="0 0 340 340" className="absolute inset-0 h-full w-full overflow-visible">
                  {capabilities.map((cap, i) => {
                    const angle = (360 / capabilities.length) * i - 90;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 135;
                    const x2 = 170 + Math.cos(rad) * radius;
                    const y2 = 170 + Math.sin(rad) * radius;
                    const color = accents[i % accents.length];
                    return (
                      <line key={cap.label} x1="170" y1="170" x2={x2} y2={y2}
                        stroke={color} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 5"
                        className="orbit-line-flow" style={{ animationDelay: `${i * 0.3}s` }} />
                    );
                  })}
                </svg>

                {/* center node */}
                <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, var(--turquoise), var(--violet))", boxShadow: "0 0 30px color-mix(in oklab, var(--turquoise) 45%, transparent)" }}>
                  <span className="text-[12px] font-bold uppercase tracking-wider">Alora</span>
                </div>

                {capabilities.map((cap, i) => {
                  const angle = (360 / capabilities.length) * i - 90;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 135;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  const color = accents[i % accents.length];
                  return (
                    <div key={cap.label} className="absolute left-1/2 top-1/2 z-10 flex flex-col items-center gap-1.5" style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}>
                      <span className="node-pulse flex h-11 w-11 items-center justify-center rounded-full border" style={{ borderColor: `color-mix(in oklab, ${color} 45%, transparent)`, background: `color-mix(in oklab, ${color} 14%, transparent)`, color, animationDelay: `${i * 0.4}s` }}>
                        {ICONS[cap.icon]}
                      </span>
                      <span className="whitespace-nowrap text-[11px] font-medium text-white/60">{cap.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Qué podés esperar — same section, tighter integration */}
            <div className="mt-16">
              <h3 className="mb-8 text-center text-balance font-bold" style={{ fontSize: "clamp(24px, 2.8vw, 34px)", letterSpacing: "-0.02em" }}>
                {isEs ? "Qué podés esperar" : "What you can expect"}
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {expect.map((line, i) => {
                  const color = accents[i % accents.length];
                  return (
                    <div
                      key={line}
                      className="group relative flex items-start gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.045)",
                      }}
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                        style={{ color, background: `color-mix(in oklab, ${color} 12%, transparent)`, borderColor: `color-mix(in oklab, ${color} 25%, transparent)` }}
                      >
                        {ICONS[EXPECT_ICONS[i]]}
                      </span>
                      <span className="pt-2 text-[14px] leading-relaxed text-white/75">{line}</span>

                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          padding: "1px",
                          background: `linear-gradient(140deg, color-mix(in oklab, ${color} 60%, transparent), transparent 60%)`,
                          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Metodología de trabajo */}
        <div className="relative isolate overflow-hidden py-20" style={{ background: "oklch(0.115 0.012 260)" }}>
          <div aria-hidden className="pointer-events-none absolute right-[5%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-3xl opacity-[0.12]"
            style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 45%, transparent), transparent)" }} />

          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {isEs ? "Cómo trabajamos" : "How we work"}
              </div>
              <h2 className="nowrap-heading text-balance font-bold" style={{ fontSize: "clamp(24px, 3.2vw, 44px)", letterSpacing: "-0.03em" }}>
                {isEs ? "Un proceso claro de principio a fin" : "A clear process from start to finish"}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[15px] text-white/55">
                {isEs
                  ? "La misma metodología que aplicamos en cada proyecto: desde el primer contacto hasta la escalación en producción."
                  : "The same methodology we apply to every project: from first contact through scaling in production."}
              </p>
            </div>

            {/* Desktop: zigzag stepper, same pattern as the home page's process section */}
            <div className="relative mt-20 hidden lg:grid" style={{ gridTemplateColumns: `repeat(${method.length}, 1fr)`, gridTemplateRows: "116px auto 116px", columnGap: "1rem" }}>
              <div aria-hidden className="method-line absolute left-0 right-0 h-[2px] overflow-hidden" style={{ top: "138px" }}>
                <div className="method-line-sweep absolute inset-y-0 left-0" style={{ width: "200%" }} />
              </div>

              {method.map((step, idx) => {
                const color = accents[idx % accents.length];
                const isAbove = idx % 2 === 0;
                return isAbove ? (
                  <div key={`${step.n}-t`} className="method-node flex flex-col items-center justify-end pb-4 text-center" style={{ gridColumn: idx + 1, gridRow: 1, animationDelay: `${idx * 0.12}s` }}>
                    <h3 className="text-[15px] font-semibold leading-snug text-white/90" style={{ letterSpacing: "-0.015em" }}>{step.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/50">{step.body}</p>
                  </div>
                ) : (
                  <div key={`${step.n}-t`} className="method-node flex items-end justify-center pb-3" style={{ gridColumn: idx + 1, gridRow: 1, animationDelay: `${idx * 0.12}s` }}>
                    <span className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.22em", color: `color-mix(in oklab, ${color} 65%, transparent)` }}>{step.n}</span>
                  </div>
                );
              })}

              {method.map((step, idx) => {
                const color = accents[idx % accents.length];
                return (
                  <div key={`${step.n}-c`} className="relative z-10 flex items-center justify-center" style={{ gridColumn: idx + 1, gridRow: 2 }}>
                    <span
                      className="method-node-circle flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-transform duration-300"
                      style={{
                        borderColor: `color-mix(in oklab, ${color} 65%, transparent)`,
                        background: "oklch(0.115 0.012 260)",
                        color,
                        boxShadow: "0 0 0 6px oklch(0.115 0.012 260)",
                        animationDelay: `${idx * 0.3}s`,
                      }}
                    >
                      {ICONS[METHOD_ICONS[idx]]}
                    </span>
                  </div>
                );
              })}

              {method.map((step, idx) => {
                const color = accents[idx % accents.length];
                const isAbove = idx % 2 === 0;
                return !isAbove ? (
                  <div key={`${step.n}-b`} className="method-node flex flex-col items-center justify-start pt-4 text-center" style={{ gridColumn: idx + 1, gridRow: 3, animationDelay: `${idx * 0.12}s` }}>
                    <h3 className="text-[15px] font-semibold leading-snug text-white/90" style={{ letterSpacing: "-0.015em" }}>{step.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/50">{step.body}</p>
                  </div>
                ) : (
                  <div key={`${step.n}-b`} className="method-node flex items-start justify-center pt-3" style={{ gridColumn: idx + 1, gridRow: 3, animationDelay: `${idx * 0.12}s` }}>
                    <span className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.22em", color: `color-mix(in oklab, ${color} 65%, transparent)` }}>{step.n}</span>
                  </div>
                );
              })}
            </div>

            {/* Mobile/tablet: stacked cards */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
              {method.map((step, idx) => {
                const color = accents[idx % accents.length];
                return (
                  <div
                    key={step.title}
                    className="group relative flex flex-col gap-3 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[12px] font-semibold"
                        style={{ borderColor: `color-mix(in oklab, ${color} 45%, transparent)`, color, background: `color-mix(in oklab, ${color} 10%, transparent)` }}
                      >
                        {step.n}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: `color-mix(in oklab, ${color} 14%, transparent)`, color }}>
                        {ICONS[METHOD_ICONS[idx]]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold leading-tight tracking-tight text-white/90" style={{ letterSpacing: "-0.02em" }}>{step.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{step.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Diferenciales — same visual language as the home page's "Por qué Alora" section */}
        <section className="relative isolate overflow-hidden py-20" style={{ background: "oklch(0.1 0.01 255)" }}>
          <div
            aria-hidden
            className="pointer-events-none absolute left-[30%] top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-[0.18]"
            style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 40%, transparent), transparent)" }}
          />

          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {isEs ? "Diferenciales" : "What sets us apart"}
              </div>
              <h2 className="text-balance font-bold" style={{ fontSize: "clamp(32px, 3.6vw, 52px)", letterSpacing: "-0.03em" }}>
                {isEs ? "Lo que siempre vas a encontrar en el equipo" : "What you'll always find in the team"}
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {diffs.map((item, i) => {
                const color = accents[i % accents.length];
                return (
                  <div
                    key={item.title}
                    className="group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.045)",
                    }}
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{ color, background: `color-mix(in oklab, ${color} 12%, transparent)`, borderColor: `color-mix(in oklab, ${color} 25%, transparent)` }}
                    >
                      {DIFF_ICONS[i]}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[17px] font-semibold leading-tight tracking-tight text-white/90" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                      <p className="text-[13.5px] leading-relaxed text-white/55">{item.body}</p>
                    </div>

                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        padding: "1px",
                        background: `linear-gradient(140deg, color-mix(in oklab, ${color} 60%, transparent), transparent 60%)`,
                        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <div className="mx-auto max-w-4xl px-6 pb-24">
          <div className="rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--turquoise) 10%, transparent), color-mix(in oklab, var(--violet) 8%, transparent))", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {isEs ? "Próximo paso" : "Next step"}
            </div>
            <h2 className="text-balance font-bold text-white" style={{ fontSize: "clamp(30px, 3.4vw, 46px)", letterSpacing: "-0.03em" }}>
              {isEs ? "Coordinemos la reunión previa al presupuesto" : "Let's set up the pre-quote meeting"}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-white/50">
              {isEs
                ? "Reservamos 20 minutos para profundizar en el contexto, alinear expectativas y definir próximos hitos. Después de esa instancia, enviamos el presupuesto completo."
                : "We book 20 minutes to dig into the context, align expectations and define next milestones. After that call, we send the full quote."}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link href={callHref}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 32px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}>
                {isEs ? "Solicitar reunión" : "Request a meeting"}
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white transition-all hover:scale-[1.02]"
                style={{ background: "#25D366" }}>
                {isEs ? "Escribir por WhatsApp" : "Message us on WhatsApp"}
              </a>
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

          @keyframes hero-glow-pulse { 0%, 100% { opacity: .3; transform: scale(1); } 50% { opacity: .48; transform: scale(1.06); } }
          .hero-glow-pulse { animation: hero-glow-pulse 5s ease-in-out infinite; }

          @keyframes orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .orbit-spin { animation: orbit-spin 16s linear infinite; }

          @keyframes orbit-spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
          .orbit-spin-reverse { animation: orbit-spin-reverse 22s linear infinite; }

          @keyframes orbit-line-flow { from { stroke-dashoffset: 16; } to { stroke-dashoffset: 0; } }
          .orbit-line-flow { animation: orbit-line-flow 1.2s linear infinite; }

          @keyframes node-pulse { 0%, 100% { filter: drop-shadow(0 0 0px currentColor); } 50% { filter: drop-shadow(0 0 6px currentColor); } }
          .node-pulse { animation: node-pulse 2.6s ease-in-out infinite; }

          @keyframes method-pulse {
            0%, 100% { filter: drop-shadow(0 0 0px currentColor); }
            50% { filter: drop-shadow(0 0 7px currentColor); }
          }
          .method-node-circle { animation: method-pulse 2.8s ease-in-out infinite; }
          .method-node-circle:hover { animation-play-state: paused; filter: drop-shadow(0 0 9px currentColor); transform: scale(1.12); }

          .method-line { background: rgba(255,255,255,0.08); }
          .method-line-sweep {
            background-image: linear-gradient(90deg, transparent, var(--turquoise), var(--electric), var(--violet), transparent);
            background-size: 50% 100%;
            background-repeat: repeat-x;
            animation: method-line-sweep 5s linear infinite;
            will-change: transform;
          }
          @keyframes method-line-sweep {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }

          @keyframes method-fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .method-node { animation: method-fade-in 700ms ease-out backwards; }

          .nowrap-heading { white-space: normal; }
          @media (min-width: 640px) {
            .nowrap-heading { white-space: nowrap; }
          }
        `}</style>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
