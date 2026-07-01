"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "alora_exit_popup_seen";
const WA_NUMBER = "5491124629452";

export function ExitIntentPopup({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);

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
  const waMsg = isEs
    ? "Hola! Me interesa conocer más sobre sus servicios."
    : "Hi! I'd like to learn more about your services.";
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  const bookHref = `/${locale}/${isEs ? "llamada-de-relevamiento" : "discovery-call"}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div
        className="fixed left-1/2 top-1/2 z-[71] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl p-8 shadow-2xl"
        style={{ background: "#fff", color: "#1a1a2e" }}
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="text-center">
          <div className="mb-3 text-4xl">💡</div>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            {isEs ? "¡ESPERA! ANTES DE IRTE..." : "WAIT! BEFORE YOU GO..."}
          </p>
          <h2 className="mb-3 text-[22px] font-bold leading-tight" style={{ color: "#0d1b2a" }}>
            {isEs
              ? "¿Sabés cuánto cuesta tu proyecto?"
              : "Do you know how much your project costs?"}
          </h2>
          <p className="mb-6 text-[14px] leading-relaxed text-gray-500">
            {isEs
              ? "Reservá una sesión gratuita de 20 minutos y te damos una cotización en menos de 24hs. Sin compromiso."
              : "Book a free 20-minute session and we'll give you a quote in under 24 hours. No commitment."}
          </p>

          <Link
            href={bookHref}
            onClick={close}
            className="mb-3 flex items-center justify-center gap-2 rounded-full py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "oklch(0.13 0.015 260)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            {isEs ? "Reservar sesión gratuita" : "Book a free session"}
          </Link>

          <p className="mb-3 text-[12px] text-gray-400">
            {isEs ? "o escribinos directo" : "or message us directly"}
          </p>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border-2 py-3 text-[15px] font-semibold transition-colors hover:bg-green-50"
            style={{ borderColor: "#25D366", color: "#25D366" }}
          >
            <svg viewBox="0 0 32 32" width="18" height="18" fill="#25D366">
              <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.734 5.47 2.018 7.773L0 32l8.466-2.018A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm7.27 20.368c-.398-.2-2.355-1.162-2.72-1.294-.365-.133-.631-.2-.897.2-.266.398-1.03 1.294-1.263 1.56-.233.265-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.055-1.981-2.358-2.214-2.756-.233-.398-.025-.613.175-.812.18-.179.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.2-.897-2.16-1.228-2.956-.323-.775-.65-.67-.897-.682l-.763-.013c-.266 0-.697.1-.063 1.063.632.963 2.292 3.52 2.292 3.52s2.36 3.92 7.258 5.414c1.012.348 1.802.555 2.416.71.014.003 1.014.195 1.016.196.798.133 1.53.114 2.107-.013.644-.142 1.98-.81 2.261-1.592.282-.78.282-1.45.198-1.592-.083-.142-.315-.225-.664-.365z"/>
            </svg>
            {isEs ? "Hablar por WhatsApp" : "Chat on WhatsApp"}
          </a>

          <button
            onClick={close}
            className="mt-4 text-[12px] text-gray-400 underline transition-colors hover:text-gray-600"
          >
            {isEs ? "No gracias, me la pierdo" : "No thanks, I'll pass"}
          </button>
        </div>
      </div>
    </>
  );
}
