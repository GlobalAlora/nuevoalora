"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildWhatsAppHref } from "@/lib/whatsapp";

const STORAGE_KEY = "alora_exit_popup_seen";

export function ExitIntentPopup({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const onMouseOut = (e: MouseEvent) => {
      if (triggered) return;
      if (e.clientY <= 0) {
        triggered = true;
        sessionStorage.setItem(STORAGE_KEY, "1");
        setVisible(true);
      }
    };

    // Wait 3s before activating so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", onMouseOut);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseOut);
    };
  }, []);

  const close = () => setVisible(false);

  if (!visible) return null;

  const isEs = locale === "es";
  const waHref = buildWhatsAppHref(pathname, locale);
  const bookHref = `/${locale}/${isEs ? "llamada-de-relevamiento" : "discovery-call"}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[70] transition-opacity duration-200"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
        onClick={close}
      />

      {/* Modal */}
      <div
        className="exit-popup-in fixed left-1/2 top-1/2 z-[71] w-[90vw] max-w-md overflow-hidden rounded-2xl border"
        style={{
          borderColor: "rgba(255,255,255,0.12)",
          background: "oklch(0.16 0.018 260)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* ambient glow */}
        <span aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl opacity-25" style={{ background: "var(--turquoise)" }} />
        <span aria-hidden className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full blur-3xl opacity-20" style={{ background: "var(--violet)" }} />

        <div className="relative p-8">
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="text-center">
            <span
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "color-mix(in oklab, var(--turquoise) 16%, transparent)", border: "1px solid color-mix(in oklab, var(--turquoise) 35%, transparent)" }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path d="M12 3a6 6 0 00-3.5 10.9c.4.3.6.8.6 1.3V16h5.8v-.8c0-.5.2-1 .6-1.3A6 6 0 0012 3z" stroke="var(--turquoise)" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9.5 19h5M10.2 21.5h3.6" stroke="var(--turquoise)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>

            <div className="mb-2 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "color-mix(in oklab, var(--turquoise) 75%, transparent)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
              {isEs ? "Antes de irte" : "Before you go"}
            </div>
            <h2 className="mb-3 text-balance text-[22px] font-bold leading-tight text-white">
              {isEs
                ? "¿Sabés cuánto cuesta tu proyecto?"
                : "Do you know how much your project costs?"}
            </h2>
            <p className="mb-6 text-[14px] leading-relaxed text-white/55">
              {isEs
                ? "Reservá una sesión gratuita de 20 minutos y te damos una cotización en menos de 24hs. Sin compromiso."
                : "Book a free 20-minute session and we'll give you a quote in under 24 hours. No commitment."}
            </p>

            <Link
              href={bookHref}
              onClick={close}
              className="mb-3 flex items-center justify-center gap-2 rounded-full py-3 text-[15px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, var(--turquoise), var(--electric))",
                boxShadow: "0 8px 30px -8px color-mix(in oklab, var(--turquoise) 45%, transparent)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              {isEs ? "Reservar sesión gratuita" : "Book a free session"}
            </Link>

            <p className="mb-3 text-[12px] text-white/50">
              {isEs ? "o escribinos directo" : "or message us directly"}
            </p>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full py-3 text-[15px] font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: "#0D8050" }}
            >
              <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.734 5.47 2.018 7.773L0 32l8.466-2.018A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm7.27 20.368c-.398-.2-2.355-1.162-2.72-1.294-.365-.133-.631-.2-.897.2-.266.398-1.03 1.294-1.263 1.56-.233.265-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.055-1.981-2.358-2.214-2.756-.233-.398-.025-.613.175-.812.18-.179.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.2-.897-2.16-1.228-2.956-.323-.775-.65-.67-.897-.682l-.763-.013c-.266 0-.697.1-.063 1.063.632.963 2.292 3.52 2.292 3.52s2.36 3.92 7.258 5.414c1.012.348 1.802.555 2.416.71.014.003 1.014.195 1.016.196.798.133 1.53.114 2.107-.013.644-.142 1.98-.81 2.261-1.592.282-.78.282-1.45.198-1.592-.083-.142-.315-.225-.664-.365z" />
              </svg>
              {isEs ? "Hablar por WhatsApp" : "Chat on WhatsApp"}
            </a>

            <button
              onClick={close}
              className="mt-4 text-[12px] text-white/50 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white/60"
            >
              {isEs ? "No gracias, me la pierdo" : "No thanks, I'll pass"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes exit-popup-in-anim {
          from { opacity: 0; transform: translate(-50%, -46%) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .exit-popup-in { animation: exit-popup-in-anim 320ms cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>
    </>
  );
}
