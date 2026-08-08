"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { aiLandingContactSchema, COMPANY_SIZE_BANDS, type AiLandingContactFormData } from "@/lib/schemas";
import { trackEvent } from "@/lib/analytics";

const COUNTRIES = [
  "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica",
  "Ecuador", "El Salvador", "Guatemala", "Honduras", "México",
  "Nicaragua", "Panamá", "Paraguay", "Perú", "Uruguay", "Venezuela",
  "España", "Portugal", "Estados Unidos", "Canadá", "Otro",
];

const LANDING_PAGE = "/ia-para-empresas";

interface Props {
  accent: string;
  accent2: string;
}

export function AiLandingContactForm({ accent, accent2 }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AiLandingContactFormData>({ resolver: zodResolver(aiLandingContactSchema) });

  const onSubmit = async (data: AiLandingContactFormData) => {
    setSubmitting(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/ia-para-empresas-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("error");
      trackEvent("generate_lead", {
        form_id: "ia-para-empresas-contact-form",
        landing_page: LANDING_PAGE,
        company_size: data.companySize,
      });
      reset();
      router.push("/ia-para-empresas/gracias");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.92)",
    fontSize: "16px",
    padding: "10px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 200ms, box-shadow 200ms",
  };
  const labelBase: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 520,
    letterSpacing: "0.03em",
    color: "rgba(255,255,255,0.55)",
    display: "block",
    marginBottom: "6px",
  };
  const focusClass = "placeholder:text-white/25 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.05)]";
  const optionStyle: React.CSSProperties = { background: "var(--ink)", color: "rgba(255,255,255,0.92)" };
  const fieldError = (msg?: string) =>
    msg ? <span className="mt-1 block text-[11.5px] text-red-400/80">{msg}</span> : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" style={{ ["--focus-color" as string]: accent }}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ai-nombre" style={labelBase}>Nombre <span className="text-red-400/70">*</span></label>
          <input id="ai-nombre" {...register("nombre")} placeholder="Tu nombre" style={inputBase} className={`form-field ${focusClass}`} />
          {fieldError(errors.nombre?.message)}
        </div>
        <div>
          <label htmlFor="ai-apellido" style={labelBase}>Apellido <span className="text-red-400/70">*</span></label>
          <input id="ai-apellido" {...register("apellido")} placeholder="Tu apellido" style={inputBase} className={`form-field ${focusClass}`} />
          {fieldError(errors.apellido?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ai-email" style={labelBase}>Correo <span className="text-red-400/70">*</span></label>
          <input id="ai-email" {...register("email")} type="email" placeholder="vos@empresa.com" style={inputBase} className={`form-field ${focusClass}`} />
          {fieldError(errors.email?.message)}
        </div>
        <div>
          <label htmlFor="ai-empresa" style={labelBase}>Empresa <span className="text-red-400/70">*</span></label>
          <input id="ai-empresa" {...register("empresa")} placeholder="Nombre de tu empresa" style={inputBase} className={`form-field ${focusClass}`} />
          {fieldError(errors.empresa?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ai-tamano" style={labelBase}>Tamaño de la empresa <span className="text-red-400/70">*</span></label>
          <select id="ai-tamano" {...register("companySize")} style={{ ...inputBase, appearance: "none" }} className={`form-field ${focusClass}`} defaultValue="">
            <option value="" disabled style={optionStyle}>Seleccioná una opción</option>
            {COMPANY_SIZE_BANDS.map((b) => <option key={b} value={b} style={optionStyle}>{b}</option>)}
          </select>
          {fieldError(errors.companySize?.message)}
        </div>
        <div>
          <label htmlFor="ai-pais" style={labelBase}>País <span className="text-red-400/70">*</span></label>
          <select id="ai-pais" {...register("pais")} style={{ ...inputBase, appearance: "none" }} className={`form-field ${focusClass}`} defaultValue="">
            <option value="" disabled style={optionStyle}>Seleccioná tu país</option>
            {COUNTRIES.map((c) => <option key={c} value={c} style={optionStyle}>{c}</option>)}
          </select>
          {fieldError(errors.pais?.message)}
        </div>
      </div>

      <div>
        <label htmlFor="ai-mensaje" style={labelBase}>¿Qué proceso o equipo te gustaría optimizar con IA? <span className="text-red-400/70">*</span></label>
        <textarea id="ai-mensaje" {...register("mensaje")} rows={4} placeholder="Contanos un poco sobre tu operación y qué te gustaría mejorar" style={{ ...inputBase, resize: "vertical" }} className={`form-field ${focusClass}`} />
        {fieldError(errors.mensaje?.message)}
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input {...register("privacy")} type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 rounded" style={{ accentColor: accent }} />
        <span className="text-[12px] leading-relaxed text-white/45">
          Acepto la política de privacidad y quiero recibir novedades y comunicaciones comerciales de ALORA.{" "}
          <Link href="/es/privacy-policy" className="underline transition-colors hover:text-white/80">
            Política de Privacidad
          </Link>
        </span>
      </label>
      {fieldError(errors.privacy?.message)}

      {status === "error" && (
        <p className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-[13px] text-red-400">
          Error al enviar. Por favor intentá de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[14.5px] font-semibold text-white shadow-lg transition-all hover:scale-[1.01] disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})`, boxShadow: `0 8px 30px color-mix(in oklab, ${accent} 35%, transparent)` }}
      >
        {submitting ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" />
              <path d="M12 2a10 10 0 010 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Enviando...
          </>
        ) : (
          "Reservar mi auditoría de IA"
        )}
      </button>

      <style>{`
        .form-field:focus { border-color: color-mix(in oklab, ${accent} 55%, transparent) !important; }
      `}</style>
    </form>
  );
}
