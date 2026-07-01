"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MESSAGES = [
  "Esta página fue al café y no volvió.",
  "Alguien deployó sin mergear. No señalamos culpables.",
  "404: ni el chatbot sabe dónde está esto.",
  "La ruta existe en staging. Solo en staging.",
  "El diseñador la dejó en Figma. No llegó a prod.",
  "Se la llevó el cliente en el último cambio de última hora.",
];

export default function NotFound() {
  const [msg, setMsg] = useState("");
  const [dots, setDots] = useState(0);

  useEffect(() => {
    setMsg(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
    const t = setInterval(() => setDots((d) => (d + 1) % 4), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6 text-white"
      style={{ background: "oklch(0.13 0.015 260)" }}
    >
      {/* Glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/3 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-[0.12]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 50%, transparent), transparent)" }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-[0.08]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 60%, transparent), transparent)" }}
        />
      </div>

      {/* Logo */}
      <Link href="/es" className="mb-12 transition-opacity hover:opacity-75">
        <Image src="/logo-web.png" alt="ALORA" width={110} height={30} className="h-8 w-auto" />
      </Link>

      {/* Big 404 */}
      <div className="relative mb-6 select-none">
        <span
          className="block bg-clip-text text-transparent font-black"
          style={{
            fontSize: "clamp(120px, 20vw, 200px)",
            letterSpacing: "-0.06em",
            lineHeight: 1,
            backgroundImage: "linear-gradient(135deg, var(--turquoise), var(--electric) 50%, color-mix(in oklab, var(--violet) 70%, transparent))",
          }}
        >
          404
        </span>
        {/* Scanline flicker */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)",
          }}
        />
      </div>

      {/* Terminal-style message */}
      <div
        className="mb-8 rounded-xl border px-6 py-4 font-mono text-[13px]"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          color: "var(--turquoise)",
          minWidth: "min(480px, 90vw)",
        }}
      >
        <span className="text-white/30">$ </span>
        <span className="text-white/60">find . -name </span>
        <span className="text-white/90">&quot;esta-pagina&quot;</span>
        <br />
        <span className="text-white/30 mt-1 block">
          {">"} {msg || "Buscando"}{".".repeat(dots)}
        </span>
        <span className="mt-1 block" style={{ color: "#f87171" }}>
          Error: No such file or directory
        </span>
      </div>

      <p className="mb-8 text-center text-[15px] leading-relaxed text-white/45 max-w-sm">
        La página que buscás no existe, se movió o alguien la rompió.
        <br />
        <span className="text-white/25 text-[13px]">(no preguntés quién)</span>
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/es"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] font-semibold text-white transition-all hover:scale-[1.03]"
          style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))" }}
        >
          <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Volver al inicio
        </Link>
        <Link
          href="/es/contacto"
          className="inline-flex items-center rounded-full border px-7 py-3 text-[14px] font-medium text-white/70 transition-all hover:border-white/30 hover:text-white"
          style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)" }}
        >
          Contactar soporte
        </Link>
      </div>

      {/* Easter egg */}
      <p className="mt-16 text-[11px] text-white/15">
        Si llegaste acá por un link roto, avisanos ↗
      </p>
    </main>
  );
}
