import type { Metadata } from "next";
import Image from "next/image";
import { TechBackground } from "../ia-para-empresas/TechBackground";

const ACCENT = "var(--electric)";
const ACCENT2 = "var(--violet)";

export const metadata: Metadata = {
  title: "¡Tu auditoría de IA está agendada! | ALORA",
  robots: { index: false },
};

export default function GraciasLlamadaPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
      <TechBackground accent={ACCENT} accent2={ACCENT2} />

      <header className="relative z-10 flex items-center justify-center py-8">
        <Image src="/alora-logo-nav-white.png" alt="ALORA" width={110} height={30} className="h-8 w-auto" priority />
      </header>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: `color-mix(in oklab, ${ACCENT} 18%, transparent)`, border: `1px solid color-mix(in oklab, ${ACCENT} 45%, transparent)` }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4M3 10h18" />
              <path d="M9 15l2 2 4-4" />
            </svg>
          </div>
          <h1 className="mt-6 text-balance" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 720, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            Tu auditoría de IA está agendada
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty" style={{ fontSize: "16px", lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>
            Te enviamos la confirmación por email, con los detalles y el link de acceso. En 20 minutos analizamos tu operación y te mostramos, en concreto, dónde la IA puede generar retorno real.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-xl p-5 text-left" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[13px] font-semibold text-white/85">Antes de tu auditoría de IA, pensá en:</p>
            <ul className="mt-2 flex flex-col gap-1.5 text-[13px] leading-relaxed text-white/60">
              <li>— Qué proceso o equipo te consume más tiempo hoy</li>
              <li>— Qué sistemas usás actualmente (CRM, WhatsApp, ecommerce, etc.)</li>
              <li>— Qué te gustaría lograr en los próximos 6 meses</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="relative z-10 px-6 py-8 text-center">
        <p className="text-[12px] text-white/35">© 2026 ALORA. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
