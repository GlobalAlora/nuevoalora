"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function ContactForm({ dict, locale }: Props) {
  const { contact } = dict;
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("error");
      router.push(`/${locale}/thank-you`);
    } catch {
      setError(contact.errorGeneral ?? "Error al enviar. Por favor intentá de nuevo.");
      setSubmitting(false);
    }
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.9)",
    fontSize: "14.5px",
    padding: "8px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 200ms, box-shadow 200ms",
  };
  const labelBase: React.CSSProperties = {
    fontSize: "12.5px",
    fontWeight: 520,
    letterSpacing: "0.04em",
    color: "rgba(255,255,255,0.55)",
    display: "block",
    marginBottom: "4px",
  };

  const fieldError = (msg?: string) =>
    msg ? <span className="mt-1 block text-[12px] text-red-400/80">{msg}</span> : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label style={labelBase}>{contact.name} <span className="text-red-400/70">*</span></label>
          <input {...register("nombre")} placeholder={contact.namePlaceholder} style={inputBase}
            className="placeholder:text-white/25 focus:border-[color-mix(in_oklab,var(--turquoise)_55%,transparent)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--turquoise)_10%,transparent)]" />
          {fieldError(errors.nombre?.message)}
        </div>
        <div>
          <label style={labelBase}>{contact.email} <span className="text-red-400/70">*</span></label>
          <input {...register("email")} type="email" placeholder={contact.emailPlaceholder} style={inputBase}
            className="placeholder:text-white/25 focus:border-[color-mix(in_oklab,var(--turquoise)_55%,transparent)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--turquoise)_10%,transparent)]" />
          {fieldError(errors.email?.message)}
        </div>
      </div>

      {/* Country + Phone row */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label style={labelBase}>{contact.country} <span className="text-red-400/70">*</span></label>
          <select {...register("pais")} style={{ ...inputBase, appearance: "none" }}
            className="placeholder:text-white/25 focus:border-[color-mix(in_oklab,var(--turquoise)_55%,transparent)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--turquoise)_10%,transparent)]">
            <option value="">{contact.countryPlaceholder}</option>
            {contact.countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {fieldError(errors.pais?.message)}
        </div>
        <div>
          <label style={labelBase}>{contact.phone} <span className="text-red-400/70">*</span></label>
          <input {...register("telefono")} type="tel" placeholder={contact.phonePlaceholder} style={inputBase}
            className="placeholder:text-white/25 focus:border-[color-mix(in_oklab,var(--turquoise)_55%,transparent)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--turquoise)_10%,transparent)]" />
          {fieldError(errors.telefono?.message)}
        </div>
      </div>

      {/* Website (optional) */}
      <div>
        <label style={labelBase}>{contact.website}</label>
        <input {...register("website")} type="url" placeholder={contact.websitePlaceholder} style={inputBase}
          className="placeholder:text-white/25 focus:border-[color-mix(in_oklab,var(--turquoise)_55%,transparent)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--turquoise)_10%,transparent)]" />
      </div>

      {/* Message */}
      <div>
        <label style={labelBase}>{contact.message} <span className="text-red-400/70">*</span></label>
        <textarea {...register("mensaje")} rows={3} placeholder={contact.messagePlaceholder}
          style={{ ...inputBase, resize: "vertical" }}
          className="placeholder:text-white/25 focus:border-[color-mix(in_oklab,var(--turquoise)_55%,transparent)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--turquoise)_10%,transparent)]" />
        {fieldError(errors.mensaje?.message)}
      </div>

      {/* Privacy */}
      <label className="flex cursor-pointer items-start gap-3">
        <input {...register("privacy")} type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 rounded accent-[var(--turquoise)]" />
        <span className="text-[12.5px] leading-relaxed text-white/45">
          {contact.privacyText}{" "}
          <a href={`/${locale}/privacy-policy`} className="underline transition-colors hover:text-white/80">
            {contact.privacyLink}
          </a>
        </span>
      </label>
      {fieldError(errors.privacy?.message)}

      {error && <p className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-[13px] text-red-400">{error}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
        style={{
          background: "linear-gradient(180deg, color-mix(in oklab, var(--turquoise) 78%, var(--ink) 22%), color-mix(in oklab, var(--turquoise) 64%, var(--ink) 36%))",
          boxShadow: "0 1px 0 color-mix(in oklab, white 18%, transparent) inset, 0 8px 22px -8px color-mix(in oklab, var(--turquoise) 42%, transparent)",
        }}
      >
        {submitting ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" />
              <path d="M12 2a10 10 0 010 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            {contact.sending}
          </>
        ) : (
          contact.submit
        )}
      </button>
    </form>
  );
}
