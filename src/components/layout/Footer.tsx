import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function Footer({ dict, locale }: Props) {
  const { footer } = dict;
  const isEs = locale === "es";
  const callHref = isEs ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "oklch(0.09 0.012 258)" }}
    >
      {/* Top accent line */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--turquoise) 55%, transparent), color-mix(in oklab, var(--violet) 45%, transparent), transparent)" }} />

      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-[380px] w-[380px] rounded-full blur-3xl opacity-[0.10]" style={{ background: "radial-gradient(closest-side, var(--turquoise), transparent)" }} />
        <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-[0.08]" style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* CTA banner */}
        <div
          className="mb-14 flex flex-col items-center justify-between gap-6 rounded-2xl p-8 text-center sm:flex-row sm:text-left"
          style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--turquoise) 10%, transparent), color-mix(in oklab, var(--violet) 8%, transparent))", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <h3 className="text-[20px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
              {isEs ? "¿Charlamos de tu proyecto?" : "Let's talk about your project?"}
            </h3>
            <p className="mt-1 text-[13.5px] text-white/55">
              {isEs ? "Una llamada gratuita de 20 minutos, sin compromiso." : "A free 20-minute call, no strings attached."}
            </p>
          </div>
          <Link
            href={callHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3 text-[14px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))", boxShadow: "0 8px 28px color-mix(in oklab, var(--turquoise) 35%, transparent)" }}
          >
            {isEs ? "Reservar llamada" : "Book a call"} →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 transition-opacity hover:opacity-80" aria-label="ALORA — inicio">
              <Image
                src="/logo-nav-white.png"
                alt="ALORA"
                width={110}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/45">{footer.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/globalalora" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border transition-all"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white/50 transition-colors group-hover:text-white" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/globalalora" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border transition-all"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white/50 transition-colors group-hover:text-white">
                  <path d="M4.98 3.5A2.49 2.49 0 002.5 6a2.49 2.49 0 002.48 2.5A2.49 2.49 0 007.46 6 2.49 2.49 0 004.98 3.5zM2.5 9.5h5V21h-5V9.5zm8 0h4.8v1.57h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 5.99 3.33 5.99 7.66V21H21.1v-4.3c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.77-2.63 3.6V21h-4.8V9.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links column 1 */}
          <div>
            <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/35">{footer.servicesLabel}</h4>
            <ul className="flex flex-col gap-2.5">
              {footer.serviceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group relative inline-block text-[13.5px] text-white/50 transition-colors hover:text-white/90">
                    {link.label}
                    <span className="absolute -bottom-[2px] left-0 h-px w-0 bg-turquoise transition-[width] duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links column 2 */}
          <div>
            <h4 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/35">{footer.companyLabel}</h4>
            <ul className="flex flex-col gap-2.5">
              {footer.companyLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="group relative inline-block text-[13.5px] text-white/50 transition-colors hover:text-white/90">
                      {link.label}
                      <span className="absolute -bottom-[2px] left-0 h-px w-0 bg-turquoise transition-[width] duration-200 group-hover:w-full" />
                    </a>
                  ) : (
                    <Link href={`/${locale}${link.href}`} className="group relative inline-block text-[13.5px] text-white/50 transition-colors hover:text-white/90">
                      {link.label}
                      <span className="absolute -bottom-[2px] left-0 h-px w-0 bg-turquoise transition-[width] duration-200 group-hover:w-full" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-[12px] text-white/30">{footer.copy}</p>
          <div className="flex gap-5">
            <Link href={`/${locale}/privacy-policy`} className="text-[12px] text-white/30 transition-colors hover:text-white/60">{footer.privacy}</Link>
            <Link href={`/${locale}/cookies`} className="text-[12px] text-white/30 transition-colors hover:text-white/60">{footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
