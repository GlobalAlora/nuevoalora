import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ICONS } from "@/lib/icons";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Quiénes somos | ALORA" : "About us | ALORA",
    description: isEs
      ? "Conocé al equipo detrás de ALORA y cómo trabajamos: diseño, desarrollo y estrategia para construir herramientas digitales que generan resultados reales."
      : "Meet the team behind ALORA and how we work: design, development and strategy to build digital tools that deliver real results.",
  };
}

const TEAM_ES = [
  { icon: "code", title: "Desarrollo", desc: "Arquitectura, programación y performance en cada línea de código." },
  { icon: "design", title: "Diseño UX/UI", desc: "Experiencias claras e intuitivas, pensadas para el usuario real." },
  { icon: "controls", title: "Gestión de Proyectos", desc: "Planificación y seguimiento para que cada entrega llegue a tiempo." },
  { icon: "shield", title: "QA", desc: "Pruebas exhaustivas antes de que cualquier cosa llegue a producción." },
  { icon: "chart", title: "Comercial y Estrategia", desc: "Acompañamos cada decisión con foco en resultados de negocio." },
];

const TEAM_EN = [
  { icon: "code", title: "Development", desc: "Architecture, programming and performance in every line of code." },
  { icon: "design", title: "UX/UI Design", desc: "Clear, intuitive experiences designed for the real user." },
  { icon: "controls", title: "Project Management", desc: "Planning and follow-up so every delivery lands on time." },
  { icon: "shield", title: "QA", desc: "Thorough testing before anything reaches production." },
  { icon: "chart", title: "Commercial & Strategy", desc: "We support every decision with a focus on business results." },
];

const WHY_ES = [
  { title: "Seguimiento personalizado real", body: "Trabajás siempre con el mismo equipo, no con una rotación de cuentas junior." },
  { title: "Flexibilidad y adaptación", body: "Ajustamos el proceso a como trabaja tu empresa, no al revés." },
  { title: "Talento bilingüe", body: "Equipo capaz de operar en español e inglés según lo necesite tu negocio." },
  { title: "Enfoque estratégico con visión de negocio", body: "Cada decisión técnica responde a un objetivo comercial concreto." },
  { title: "Experiencia en distintos niveles de complejidad", body: "Desde landing pages simples hasta sistemas multi-módulo con IA." },
  { title: "Transparencia en proceso y comunicación", body: "Siempre sabés en qué etapa está tu proyecto y qué sigue." },
];

const WHY_EN = [
  { title: "Real, personalized follow-up", body: "You work with the same team throughout, not a rotation of junior accounts." },
  { title: "Flexibility and adaptation", body: "We adjust the process to how your company works, not the other way around." },
  { title: "Bilingual talent", body: "A team able to operate in Spanish and English as your business needs." },
  { title: "Strategic focus with business vision", body: "Every technical decision responds to a concrete business objective." },
  { title: "Experience across complexity levels", body: "From simple landing pages to multi-module systems powered by AI." },
  { title: "Transparency in process and communication", body: "You always know what stage your project is at and what comes next." },
];

const FIT_ES = [
  "Tu negocio ya está en marcha y buscás estructura digital real",
  "Tenés un objetivo concreto de crecimiento o mejora operativa",
  "Buscás un enfoque estratégico para tu proyecto digital, no solo una entrega puntual",
];

const FIT_EN = [
  "Your business is already up and running and needs real digital structure",
  "You have a concrete goal for growth or operational improvement",
  "You're looking for a strategic approach to your digital project, not just a one-off delivery",
];

export default async function PresentacionPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const isEs = l === "es";
  const callHref = isEs ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  const team = isEs ? TEAM_ES : TEAM_EN;
  const why = isEs ? WHY_ES : WHY_EN;
  const fit = isEs ? FIT_ES : FIT_EN;
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

        {/* Header */}
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-32 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)", fontSize: "11.5px", letterSpacing: "0.18em" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
            <span className="font-medium uppercase text-white/60">{isEs ? "Quiénes somos" : "About us"}</span>
          </div>
          <h1 className="text-balance font-bold text-white" style={{ fontSize: "clamp(30px, 4.2vw, 48px)", letterSpacing: "-0.035em", lineHeight: 1.1 }}>
            {isEs
              ? "Diseñamos herramientas digitales que aportan estructura, eficiencia y crecimiento"
              : "We design digital tools that bring structure, efficiency and growth"}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/55">
            {isEs
              ? "Somos un equipo multidisciplinario enfocado en construir soluciones digitales que funcionan en el mundo real. Trabajamos en la intersección entre negocio y tecnología: entendemos los objetivos comerciales antes de escribir una sola línea de código."
              : "We're a multidisciplinary team focused on building digital solutions that work in the real world. We operate at the intersection of business and technology: we understand commercial goals before writing a single line of code."}
          </p>
        </div>

        {/* Team */}
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-bold" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.03em" }}>
              {isEs ? "Un equipo multidisciplinario" : "A multidisciplinary team"}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/55">
              {isEs
                ? "Cada proyecto combina estrategia, diseño, desarrollo y control de calidad, pensado para verse bien y funcionar de verdad."
                : "Every project combines strategy, design, development and quality control, built to look good and to actually work."}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, i) => (
              <div key={member.title} className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${accents[i % accents.length]} 16%, transparent)`, border: `1px solid color-mix(in oklab, ${accents[i % accents.length]} 35%, transparent)`, color: accents[i % accents.length] }}>
                  {ICONS[member.icon]}
                </span>
                <h3 className="text-[14px] font-semibold text-white">{member.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/50">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why work with us */}
        <div className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance font-bold" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.03em" }}>
                {isEs ? "¿Por qué trabajar con ALORA?" : "Why work with ALORA?"}
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {why.map((item, i) => (
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

        {/* Target market */}
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-balance font-bold" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.03em" }}>
            {isEs ? "¿Con qué tipo de empresas trabajamos?" : "What kind of companies do we work with?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
            {isEs
              ? "Nos enfocamos en organizaciones que ya están operando y buscan estructura digital real para crecer, optimizar o escalar."
              : "We focus on organizations that are already operating and looking for real digital structure to grow, optimize or scale."}
          </p>
          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 text-left">
            {fit.map((line) => (
              <div key={line} className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="mt-0.5 shrink-0">
                  <path d="M5 12l4 4L19 7" stroke="var(--turquoise)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] leading-relaxed text-white/75">{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="mx-auto max-w-4xl px-6 pb-20 text-center">
          <h2 className="mb-8 text-[13px] font-semibold uppercase tracking-wider text-white/40">
            {isEs ? "Reconocimientos" : "Recognition"}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[15px] font-semibold text-white">DesignRush</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                {isEs
                  ? "Reconocidos entre las principales empresas de desarrollo web por DesignRush."
                  : "Recognized among the top web development companies by DesignRush."}
              </p>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[15px] font-semibold text-white">TechBehemoths</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                {isEs
                  ? "Premiados por TechBehemoths como líderes en WordPress, React.js y Desarrollo Web."
                  : "Awarded by TechBehemoths as leaders in WordPress, React.js and Web Development."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl px-6 pb-24">
          <div className="rounded-2xl p-10 text-center"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 className="text-balance font-bold text-white" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.03em" }}>
              {isEs ? "¿Charlamos de tu proyecto?" : "Let's talk about your project?"}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-white/50">
              {isEs
                ? "Agendá una llamada de 20 minutos y analizamos tu caso sin costo."
                : "Book a 20-minute call and we'll analyze your case at no cost."}
            </p>
            <Link href={callHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 32px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}>
              {isEs ? "Agendar llamada gratuita" : "Book a free call"} →
            </Link>
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
