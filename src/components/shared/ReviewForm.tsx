"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema, type ReviewFormData } from "@/lib/schemas";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function ReviewForm({ dict, locale }: Props) {
  const { reviewForm: f } = dict;
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>({ resolver: zodResolver(reviewSchema) });

  const rating = watch("rating");

  const onSubmit = async (data: ReviewFormData) => {
    setSubmitting(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("error");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.9)",
    fontSize: "16px",
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
  const focusClass =
    "placeholder:text-white/25 focus:border-[color-mix(in_oklab,var(--turquoise)_55%,transparent)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--turquoise)_10%,transparent)]";

  const fieldError = (msg?: string) =>
    msg ? <span className="mt-1 block text-[12px] text-red-400/80">{msg}</span> : null;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{
            background: "color-mix(in oklab, var(--turquoise) 15%, transparent)",
            border: "1.5px solid color-mix(in oklab, var(--turquoise) 40%, transparent)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4 4L19 7" stroke="var(--turquoise)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-white/70">{f.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="review-nombre" style={labelBase}>{f.name} <span className="text-red-400/70">*</span></label>
          <input id="review-nombre" {...register("nombre")} placeholder={f.namePlaceholder} style={inputBase} className={focusClass} />
          {fieldError(errors.nombre?.message)}
        </div>
        <div>
          <label htmlFor="review-cargo" style={labelBase}>{f.cargo} <span className="text-red-400/70">*</span></label>
          <input id="review-cargo" {...register("cargo")} placeholder={f.cargoPlaceholder} style={inputBase} className={focusClass} />
          {fieldError(errors.cargo?.message)}
        </div>
      </div>

      <div>
        <label htmlFor="review-empresa" style={labelBase}>{f.company}</label>
        <input id="review-empresa" {...register("empresa")} placeholder={f.companyPlaceholder} style={inputBase} className={focusClass} />
        {fieldError(errors.empresa?.message)}
      </div>

      <div>
        <label style={labelBase}>{f.rating} <span className="text-red-400/70">*</span></label>
        <input type="hidden" {...register("rating", { valueAsNumber: true })} />
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} / 5`}
              aria-pressed={rating === n}
              onClick={() => setValue("rating", n, { shouldValidate: true })}
              className="flex h-9 w-9 items-center justify-center transition-transform hover:scale-110"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={rating >= n ? "var(--turquoise)" : "none"}>
                <path
                  d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z"
                  stroke={rating >= n ? "var(--turquoise)" : "rgba(255,255,255,0.35)"}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
        {fieldError(errors.rating?.message)}
      </div>

      <div>
        <label htmlFor="review-resena" style={labelBase}>{f.review} <span className="text-red-400/70">*</span></label>
        <textarea
          id="review-resena"
          {...register("resena")}
          rows={5}
          placeholder={f.reviewPlaceholder}
          style={{ ...inputBase, resize: "vertical" }}
          className={focusClass}
        />
        {fieldError(errors.resena?.message)}
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input {...register("privacy")} type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 rounded accent-[var(--turquoise)]" />
        <span className="text-[12.5px] leading-relaxed text-white/45">
          {f.privacyText}{" "}
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
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto sm:px-8"
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
            {f.sending}
          </>
        ) : (
          f.submit
        )}
      </button>
    </form>
  );
}
