import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { SpotlightCard } from "@/components/shared/SpotlightCard";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Presentación | ALORA" : "About us | ALORA",
    description: isEs
      ? "Somos Bruno y Walo, fundadores de Alora. Conocé cómo trabajamos, nuestro equipo y la metodología que usamos antes de cotizar cualquier proyecto."
      : "We're Bruno and Walo, founders of Alora. Learn how we work, meet the team, and see the methodology we follow before quoting any project.",
  };
}

// Real LinkedIn/email links pending confirmation from the client — placeholders until provided.
const BRUNO_LINKEDIN = "#";
const BRUNO_EMAIL = "mailto:somosglobalalora@gmail.com";
const WALO_LINKEDIN = "#";
const WALO_EMAIL = "mailto:somosglobalalora@gmail.com";
const WHATSAPP_URL = "https://wa.me/5491124629452";

const STATS = [
  { es: { n: "+12", label: "Años lanzando productos digitales" }, en: { n: "+12", label: "Years launching digital products" } },
  { es: { n: "120+", label: "Proyectos liderados" }, en: { n: "120+", label: "Projects led" } },
  { es: { n: "7 países", label: "Mercados activos" }, en: { n: "7 countries", label: "Active markets" } },
];

const EXPECT_ES = [
  "Trabajo directo con Bruno y Walo durante todo el proceso",
  "Diagnósticos claros antes de hablar de presupuesto",
  "Metodología iterativa con entregables medibles",
  "Equipo interno y red especializada para producción y escalado",
];
const EXPECT_EN = [
  "Direct work with Bruno and Walo throughout the whole process",
  "Clear diagnostics before we even talk about budget",
  "An iterative methodology with measurable deliverables",
  "An in-house team plus a specialized network for production and scale",
];

const PRE_QUOTE_ES = [
  { title: "Workshop con stakeholders clave", body: "Reunimos a dirección, operaciones y comercial para alinear objetivos, restricciones y expectativas de éxito." },
  { title: "Mapa de experiencia actual + fricciones", body: "Documentamos el journey completo, las brechas del proceso y los puntos de dolor de clientes y del equipo interno." },
  { title: "Priorización de quick wins y riesgos", body: "Evaluamos impacto vs. esfuerzo para decidir qué se aborda primero y qué necesita validaciones técnicas o legales adicionales." },
  { title: "Definición preliminar de stack y dependencias", body: "Proponemos arquitectura técnica, roles necesarios y plan de integración con los sistemas existentes." },
];
const PRE_QUOTE_EN = [
  { title: "Workshop with key stakeholders", body: "We bring together leadership, operations and sales to align objectives, constraints and what success looks like." },
  { title: "Current experience map + friction points", body: "We document the full journey, the gaps in the process, and the pain points for both customers and the internal team." },
  { title: "Prioritizing quick wins and risks", body: "We weigh impact vs. effort to decide what gets tackled first and what needs extra technical or legal validation." },
  { title: "Preliminary stack and dependencies", body: "We propose the technical architecture, the roles needed, and an integration plan with existing systems." },
];

const METHOD_ES = [
  { n: "1", title: "Diagnóstico inmersivo", body: "Entrevistas con los decisores, relevamiento de stack actual y comprensión profunda del modelo de negocio antes de presupuestar." },
  { n: "2", title: "Mapa de oportunidades", body: "Definimos quick wins, riesgos y dependencias. Construimos el alcance ideal y alternativas escalables por etapa." },
  { n: "3", title: "Roadmap & KPIs", body: "Estructuramos entregables, responsables y métricas que guiarán la implementación. Cada hito tiene un objetivo claro." },
  { n: "4", title: "Coordinación ejecutiva", body: "Alineamos agendas, definimos canales de comunicación y dejamos listo el kick-off del proyecto antes del presupuesto formal." },
];
const METHOD_EN = [
  { n: "1", title: "Immersive diagnosis", body: "Interviews with decision-makers, a review of the current stack, and a deep understanding of the business model before quoting." },
  { n: "2", title: "Opportunity map", body: "We define quick wins, risks and dependencies, and build the ideal scope plus scalable alternatives by stage." },
  { n: "3", title: "Roadmap & KPIs", body: "We structure deliverables, owners and metrics that will guide implementation. Every milestone has a clear objective." },
  { n: "4", title: "Executive coordination", body: "We align calendars, define communication channels, and get the project kickoff ready before the formal quote." },
];

const DIFFS_ES = [
  { title: "Visión de negocio + tech", body: "Integramos estrategia comercial, UX y desarrollo. Cada decisión creativa responde a objetivos de ventas y operación." },
  { title: "Seniority hands-on", body: "Somos los mismos que diseñamos, facilitamos y ejecutamos, así la propuesta llega intacta del primer workshop a la entrega final." },
  { title: "Procesos medibles", body: "Documentamos cada etapa, priorizamos tableros de control y aseguramos transferencia de conocimiento al equipo interno." },
];
const DIFFS_EN = [
  { title: "Business vision + tech", body: "We integrate commercial strategy, UX and development. Every creative decision responds to sales and operations goals." },
  { title: "Hands-on seniority", body: "We're the same people who design, facilitate and execute, so the proposal arrives intact from the first workshop to final delivery." },
  { title: "Measurable processes", body: "We document every stage, prioritize control dashboards, and make sure knowledge transfers to your internal team." },
];

const FAQS_ES = [
  { q: "¿Qué necesitan antes de enviar un presupuesto?", a: "Siempre hacemos workshops con los decisores para entender objetivos, restricciones y dependencias técnicas. Con ese contexto claro armamos un presupuesto que realmente aplica a tu caso." },
  { q: "¿Trabajan con equipo propio o aliados externos?", a: "Tenemos un núcleo senior en estrategia, diseño y tecnología, y sumamos especialistas de confianza (data, contenidos, performance) según el desafío." },
  { q: "¿Cómo se componen los honorarios?", a: "Definimos milestones con entregables concretos: cada etapa incluye research, ejecución y QA, y cobramos por el valor entregado en cada una." },
  { q: "¿Qué pasa después del go-live?", a: "Acompañamos el lanzamiento con métricas claras, training para el equipo interno y plan de evolución. Podemos seguir como partner o transferir todo." },
];
const FAQS_EN = [
  { q: "What do you need before sending a quote?", a: "We always run workshops with decision-makers to understand goals, constraints and technical dependencies. With that context clear, we put together a quote that actually fits your case." },
  { q: "Do you work with your own team or outside partners?", a: "We have a senior core in strategy, design and technology, and bring in trusted specialists (data, content, performance) depending on the challenge." },
  { q: "How are fees structured?", a: "We define milestones with concrete deliverables: each stage includes research, execution and QA, and we charge for the value delivered in each one." },
  { q: "What happens after go-live?", a: "We support the launch with clear metrics, training for your internal team, and an evolution plan. We can stay on as a partner or hand everything over." },
];

export default async function PresentacionPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const isEs = l === "es";
  const callHref = isEs ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  const expect = isEs ? EXPECT_ES : EXPECT_EN;
  const preQuote = isEs ? PRE_QUOTE_ES : PRE_QUOTE_EN;
  const method = isEs ? METHOD_ES : METHOD_EN;
  const diffs = isEs ? DIFFS_ES : DIFFS_EN;
  const faqs = isEs ? FAQS_ES : FAQS_EN;
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

        {/* Hero */}
        <div className="mx-auto max-w-4xl px-6 pb-10 pt-32 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
            <span className="font-medium uppercase text-white/60">{isEs ? "Presentación" : "About us"}</span>
          </div>
          <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(30px, 4.2vw, 48px)", letterSpacing: "-0.035em", lineHeight: 1.1 }}>
            {isEs ? "Somos Bruno y Walo, fundadores de Alora" : "We're Bruno and Walo, founders of Alora"}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/55">
            {isEs
              ? "Somos los dueños, hablamos en primera persona y armamos el equipo ideal para cada desafío. Entramos al negocio, mapeamos el contexto real y proponemos una hoja de ruta accionable con talento senior en estrategia, diseño y tecnología."
              : "We're the owners, we speak in the first person, and we build the ideal team for every challenge. We get into the business, map the real context, and propose an actionable roadmap with senior talent in strategy, design and technology."}
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-4xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.es.label} className="rounded-2xl p-6 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="font-bold" style={{ fontSize: "clamp(28px, 3.4vw, 40px)", letterSpacing: "-0.03em", color: "var(--turquoise)" }}>
                  {isEs ? s.es.n : s.en.n}
                </div>
                <div className="mt-1 text-[13px] text-white/55">{isEs ? s.es.label : s.en.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Qué podés esperar */}
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="mb-6 text-center text-balance font-bold" style={{ fontSize: "clamp(24px, 3vw, 34px)", letterSpacing: "-0.03em" }}>
            {isEs ? "Qué podés esperar" : "What you can expect"}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {expect.map((line) => (
              <div key={line} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="mt-0.5 shrink-0">
                  <path d="M5 12l4 4L19 7" stroke="var(--turquoise)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] leading-relaxed text-white/75">{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quiénes somos */}
        <div className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: "color-mix(in oklab, var(--turquoise) 75%, transparent)" }}>
              {isEs ? "Quiénes somos" : "Who we are"}
            </div>
            <h2 className="text-balance font-bold" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.03em" }}>
              {isEs ? "Dos fundadores al frente, un equipo capacitado detrás" : "Two founders at the front, a skilled team behind"}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/55">
              {isEs
                ? "Alora nació para reducir la distancia entre la consultoría estratégica y la ejecución técnica. Nosotros lideramos cada conversación y coordinamos un equipo multidisciplinario de diseñadores, developers, analistas y productores que se suman según la complejidad del proyecto."
                : "Alora was born to close the gap between strategic consulting and technical execution. We lead every conversation and coordinate a multidisciplinary team of designers, developers, analysts and producers who join in based on project complexity."}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
              {isEs
                ? "Cada proyecto arranca con workshops inmersivos: entendemos procesos comerciales, stack actual y objetivos reales. Recién después proponemos un alcance y presupuesto que haga sentido al negocio y definimos el squad ideal para ejecutarlo."
                : "Every project starts with immersive workshops: we understand business processes, the current stack and real objectives. Only then do we propose a scope and budget that make sense for the business, and define the ideal squad to execute it."}
            </p>
          </div>
        </div>

        {/* Antes de cotizar hacemos */}
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {isEs ? "Antes de cotizar hacemos" : "Before we quote, we do"}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {preQuote.map((item, i) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-bold"
                  style={{ background: `color-mix(in oklab, ${accents[i % accents.length]} 18%, transparent)`, color: accents[i % accents.length] }}>
                  {i + 1}
                </span>
                <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directores */}
        <div className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {isEs ? "Directores" : "Directors"}
              </div>
              <h2 className="text-balance font-bold" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.03em" }}>
                {isEs ? "Equipo que te acompaña desde el día uno" : "A team by your side from day one"}
              </h2>
              <p className="mt-3 text-[15px] text-white/55">
                {isEs
                  ? "Trabajás directamente con los dueños y con el equipo senior que armamos especialmente para tu proyecto."
                  : "You work directly with the owners and with the senior team we put together specifically for your project."}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Bruno */}
              <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-[20px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))" }}>
                  BP
                </span>
                <h3 className="mt-4 text-[19px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>Bruno Piorno Polucci</h3>
                <p className="text-[13px] font-medium" style={{ color: "var(--turquoise)" }}>
                  {isEs ? "Founder & Director de Alora" : "Founder & Director of Alora"}
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Estratega digital y líder de producto con formación en UX/UI y desarrollo full-stack. Fundó Alora para combinar diseño, tecnología y negocio en una misma mesa."
                    : "Digital strategist and product leader with a background in UX/UI and full-stack development. He founded Alora to bring design, technology and business to the same table."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Hace más de una década lidera equipos interdisciplinarios diseñando y construyendo experiencias digitales para pymes y corporativos. Trabajó como consultor independiente, lideró estudios boutique y dirigió producto en agencias regionales antes de fundar Alora."
                    : "For over a decade he has led interdisciplinary teams designing and building digital experiences for SMEs and corporations. He worked as an independent consultant, led boutique studios and ran product at regional agencies before founding Alora."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Su foco está en traducir objetivos comerciales en roadmaps accionables: research, definición funcional, diseño, desarrollo y growth. Es obsesivo con los procesos medibles y las integraciones entre marketing, data y operaciones."
                    : "His focus is translating business goals into actionable roadmaps: research, functional definition, design, development and growth. He's obsessive about measurable processes and the integrations between marketing, data and operations."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Dirigió sitios y experiencias digitales para artistas y marcas como Lali Espósito, Duki, Bizarrap, Alejandro Sanz, José José y Nahuel Pennisi, además de empresas como Nutricia Bagó y Sony Music, asegurando entregas de alto impacto y estándares globales."
                    : "He directed sites and digital experiences for artists and brands such as Lali Espósito, Duki, Bizarrap, Alejandro Sanz, José José and Nahuel Pennisi, as well as companies like Nutricia Bagó and Sony Music, ensuring high-impact deliveries with global standards."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Desde Alora acompaña a cada cliente como socio: diagnósticos inmersivos, workshops tácticos y seguimiento cercano post implementación."
                    : "At Alora, he partners with every client: immersive diagnostics, tactical workshops and close follow-up after implementation."}
                </p>
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
              </div>

              {/* Walo */}
              <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-[20px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--violet), var(--electric))" }}>
                  WJ
                </span>
                <h3 className="mt-4 text-[19px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>Walo Jalil</h3>
                <p className="text-[13px] font-medium" style={{ color: "var(--violet)" }}>
                  {isEs ? "Co-founder & Director de Proyectos" : "Co-founder & Director of Projects"}
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Consultor estratégico especializado en ecommerce, growth y automatización. Durante los últimos años lideró proyectos de transformación digital en retail, construcción y salud."
                    : "Strategic consultant specialized in ecommerce, growth and automation. In recent years he has led digital transformation projects in retail, construction and healthcare."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Combina una fuerte mirada comercial con metodologías de producto. Viene construyendo equipos ágiles que integran marketing, ventas y tecnología, siempre con foco en impacto medible en revenue."
                    : "He combines a strong commercial eye with product methodologies. He has built agile teams that integrate marketing, sales and technology, always with a focus on measurable revenue impact."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Trabajó con compañías regionales diseñando funnels omnicanal, estructuró departamentos de marketing de performance desde cero y aceleró lanzamientos de ecommerce B2B/B2C con foco en rentabilidad."
                    : "He worked with regional companies designing omnichannel funnels, built performance marketing departments from scratch, and accelerated B2B/B2C ecommerce launches with a focus on profitability."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Fue consultor para ExxonMobil, Banco Galicia y Olapic, colaborando con marcas globales como Four Seasons, H&M, Dior y Porcelanosa, entre otras. Lideró equipos remotos y on-site asegurando consistencia en múltiples mercados."
                    : "He consulted for ExxonMobil, Banco Galicia and Olapic, collaborating with global brands such as Four Seasons, H&M, Dior and Porcelanosa, among others. He led remote and on-site teams ensuring consistency across multiple markets."}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {isEs
                    ? "Además de dirigir proyectos en Alora, comparte contenido y mentorías sobre liderazgo creativo y construcción de propuestas de valor, apalancando su experiencia como emprendedor y consultor independiente."
                    : "Besides directing projects at Alora, he shares content and mentorship on creative leadership and building value propositions, drawing on his experience as an entrepreneur and independent consultant."}
                </p>
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
              </div>
            </div>
          </div>
        </div>

        {/* Metodología previa al presupuesto */}
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {isEs ? "Metodología previa al presupuesto" : "Pre-quote methodology"}
            </div>
            <h2 className="text-balance font-bold" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.03em" }}>
              {isEs ? "Claridad antes de cotizar" : "Clarity before quoting"}
            </h2>
            <p className="mt-3 text-[15px] text-white/55">
              {isEs ? "Pasos que transitamos juntos antes de enviar la propuesta económica." : "The steps we walk through together before sending the economic proposal."}
            </p>
          </div>
          <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${accents[i % accents.length]}, ${accents[(i + 1) % accents.length]})` }}>
                  {step.n}
                </span>
                <h3 className="text-[14.5px] font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-white/55">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciales */}
        <div className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {isEs ? "Diferenciales" : "What sets us apart"}
              </div>
              <h2 className="text-balance font-bold" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.03em" }}>
                {isEs ? "Lo que siempre vas a encontrar en el equipo" : "What you'll always find in the team"}
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {diffs.map((item, i) => (
                <SpotlightCard
                  key={item.title}
                  accent={accents[i % accents.length]}
                  className="rounded-2xl p-6"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55">{item.body}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {isEs ? "FAQs" : "FAQs"}
            </div>
            <h2 className="text-balance font-bold" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.03em" }}>
              {isEs ? "Preguntas frecuentes antes de avanzar" : "Frequently asked questions before moving forward"}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-xl px-5 py-4"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-white">
                  {item.q}
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" className="shrink-0 transition-transform duration-200 group-open:rotate-180">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="mx-auto max-w-4xl px-6 pb-24">
          <div className="rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--turquoise) 10%, transparent), color-mix(in oklab, var(--violet) 8%, transparent))", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {isEs ? "Próximo paso" : "Next step"}
            </div>
            <h2 className="text-balance font-bold text-white" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.03em" }}>
              {isEs ? "Coordinemos la reunión previa al presupuesto" : "Let's set up the pre-quote meeting"}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-white/50">
              {isEs
                ? "Reservamos 45 minutos para profundizar en el contexto, alinear expectativas y definir próximos hitos. Después de esa instancia, enviamos el presupuesto completo."
                : "We book 45 minutes to dig into the context, align expectations and define next milestones. After that call, we send the full quote."}
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
        `}</style>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
