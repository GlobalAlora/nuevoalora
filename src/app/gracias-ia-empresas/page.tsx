import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TechBackground } from "../ia-para-empresas/TechBackground";

const ACCENT = "var(--electric)";
const ACCENT2 = "var(--violet)";

export const metadata: Metadata = {
  title: "¡Solicitud de auditoría de IA recibida! | ALORA",
  robots: { index: false },
};

export default function GraciasFormularioPage() {
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
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="mt-6 text-balance" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 720, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            Recibimos tu solicitud de auditoría de IA
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty" style={{ fontSize: "16px", lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>
            Un especialista revisa lo que nos contaste sobre tu operación y te escribe en menos de 24 horas para coordinar tu auditoría de IA — 20 minutos, online y gratis.
          </p>

          <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-3 text-left sm:grid-cols-3 sm:text-center">
            {[
              { n: "01", t: "Revisamos tu operación" },
              { n: "02", t: "Te contactamos en 24hs" },
              { n: "03", t: "Agendamos tu auditoría de IA" },
            ].map((s) => (
              <div key={s.n} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="font-mono text-[11px] font-semibold" style={{ color: ACCENT }}>{s.n}</p>
                <p className="mt-1 text-[13px] text-white/70">{s.t}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[13.5px] text-white/45">
            ¿Preferís no esperar?{" "}
            <Link href="/reservar-auditoria-ia-empresas" className="font-medium underline transition-colors hover:text-white/80" style={{ color: ACCENT }}>
              Reservá tu auditoría de IA ahora
            </Link>
          </p>
        </div>
      </div>

      <footer className="relative z-10 px-6 py-8 text-center">
        <p className="text-[12px] text-white/35">© 2026 ALORA. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
