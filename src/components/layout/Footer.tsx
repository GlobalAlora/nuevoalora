import Link from "next/link";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function Footer({ dict, locale }: Props) {
  const { footer } = dict;

  return (
    <footer
      className="relative border-t text-white"
      style={{ background: "oklch(0.10 0.01 258)", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-[7px] text-[15px] font-semibold tracking-[0.14em] text-white/90 transition-colors hover:text-white">
              <span
                className="inline-block h-[5px] w-[5px] rounded-full"
                style={{ background: "var(--turquoise)", boxShadow: "0 0 6px color-mix(in oklab, var(--turquoise) 50%, transparent)" }}
              />
              ALORA
            </Link>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/45">{footer.tagline}</p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/globalalora" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:border-white/20 hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/globalalora" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:border-white/20 hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
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
                  <a href={link.href} className="text-[13.5px] text-white/50 transition-colors hover:text-white/90">{link.label}</a>
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
                  <Link href={`/${locale}${link.href}`} className="text-[13.5px] text-white/50 transition-colors hover:text-white/90">{link.label}</Link>
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
