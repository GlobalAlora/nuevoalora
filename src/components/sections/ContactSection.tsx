import { ContactForm } from "@/components/forms/ContactForm";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function ContactSection({ dict, locale }: Props) {
  const { contact } = dict;

  return (
    <section id="contacto" className="relative isolate overflow-hidden py-24 text-white" style={{ background: "oklch(0.13 0.015 260)" }}>
      {/* Glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute bottom-0 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.22]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 35%, transparent), transparent)" }}
        />
        <div
          className="absolute right-[-6%] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full blur-3xl opacity-[0.16]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 40%, transparent), transparent)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(75% 65% at 50% 50%, black 20%, transparent 80%)",
            maskImage: "radial-gradient(75% 65% at 50% 50%, black 20%, transparent 80%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[42fr_58fr] lg:gap-20 lg:items-start">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] lg:justify-start">
              <span className="text-white/50">{contact.sectionIndex}</span>
              <span className="h-px w-8 bg-white/20" />
              <span className="text-white/80">{contact.sectionLabel}</span>
            </div>
            <h2 className="mt-6 text-balance" style={{ fontSize: "clamp(32px, 3.2vw, 50px)", fontWeight: 720, lineHeight: 1.06, letterSpacing: "-0.035em" }}>
              {contact.heading}
            </h2>
            <p className="mt-5 text-pretty text-[15.5px] leading-relaxed text-white/60">{contact.body}</p>

            {/* Reassurance items */}
            <ul className="mt-8 flex flex-col items-center gap-3 lg:items-start">
              {contact.reassurances.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-white/55">
                  <svg className="mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none" width="16" height="16">
                    <circle cx="8" cy="8" r="7" stroke="var(--turquoise)" strokeOpacity=".4" />
                    <path d="M5.5 8l1.5 1.5L10.5 6" stroke="var(--turquoise)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Alt CTA — WhatsApp */}
            <div className="mt-8">
              <p className="mb-3 text-[12px] uppercase tracking-[0.2em] text-white/35">{contact.orContact}</p>
              <a
                href="https://wa.me/541124629452"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/75 transition-all hover:border-white/20 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.135 1.535 5.865L0 24l6.343-1.657A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.5-5.408-1.383l-.387-.229-4.004 1.048 1.07-3.896-.255-.404A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <ContactForm dict={dict} locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
