"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, usePathname } from "next/navigation";
import { solutionContactSchema, type SolutionContactFormData } from "@/lib/schemas";
import type { Dictionary } from "@/dictionaries/es";

interface Props {
  dict: Dictionary;
  locale: string;
  slug: string;
  accent: string;
  accent2: string;
  source?: string;
}

export function SolutionContactForm({ dict, locale, slug, accent, accent2, source }: Props) {
  const { solutionForm: f, contact } = dict;
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SolutionContactFormData>({ resolver: zodResolver(solutionContactSchema) });

  const onSubmit = async (data: SolutionContactFormData) => {
    setSubmitting(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/solution-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, slug, source, landingPage: pathname }),
      });
      if (!res.ok) throw new Error("error");
      reset();
      router.push(`/${locale}/thank-you`);
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
    fontSize: "14px",
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
  const optionStyle: React.CSSProperties = {
    background: "var(--ink)",
    color: "rgba(255,255,255,0.92)",
  };

  const fieldError = (msg?: string) =>
    msg ? <span className="mt-1 block text-[11.5px] text-red-400/80">{msg}</span> : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" style={{ ["--focus-color" as string]: accent }}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="solution-nombre" style={labelBase}>{f.name} <span className="text-red-400/70">*</span></label>
          <input id="solution-nombre" {...register("nombre")} placeholder={f.namePlaceholder} style={inputBase} className={`form-field ${focusClass}`} />
          {fieldError(errors.nombre?.message)}
        </div>
        <div>
          <label htmlFor="solution-email" style={labelBase}>{f.email} <span className="text-red-400/70">*</span></label>
          <input id="solution-email" {...register("email")} type="email" placeholder={f.emailPlaceholder} style={inputBase} className={`form-field ${focusClass}`} />
          {fieldError(errors.email?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="solution-empresa" style={labelBase}>{f.company}</label>
          <input id="solution-empresa" {...register("empresa")} placeholder={f.companyPlaceholder} style={inputBase} className={`form-field ${focusClass}`} />
        </div>
        <div>
          <label htmlFor="solution-pais" style={labelBase}>{f.country} <span className="text-red-400/70">*</span></label>
          <select id="solution-pais" {...register("pais")} style={{ ...inputBase, appearance: "none" }} className={`form-field ${focusClass}`}>
            <option value="" style={optionStyle}>{f.countryPlaceholder}</option>
            {contact.countries.map((c) => <option key={c} value={c} style={optionStyle}>{c}</option>)}
          </select>
          {fieldError(errors.pais?.message)}
        </div>
      </div>

      <div>
        <label htmlFor="solution-mensaje" style={labelBase}>{f.project} <span className="text-red-400/70">*</span></label>
        <textarea id="solution-mensaje" {...register("mensaje")} rows={4} placeholder={f.projectPlaceholder} style={{ ...inputBase, resize: "vertical" }} className={`form-field ${focusClass}`} />
        {fieldError(errors.mensaje?.message)}
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input {...register("privacy")} type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 rounded" style={{ accentColor: accent }} />
        <span className="text-[12px] leading-relaxed text-white/45">
          {f.consent}{" "}
          <a href={`/${locale}/privacy-policy`} className="underline transition-colors hover:text-white/80">
            {f.privacyLink}
          </a>
        </span>
      </label>
      {fieldError(errors.privacy?.message)}

      {status === "error" && (
        <p className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-[13px] text-red-400">{f.errorGeneral}</p>
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
            {f.sending}
          </>
        ) : (
          f.submit
        )}
      </button>

      <style>{`
        .form-field:focus { border-color: color-mix(in oklab, ${accent} 55%, transparent) !important; }
      `}</style>
    </form>
  );
}
