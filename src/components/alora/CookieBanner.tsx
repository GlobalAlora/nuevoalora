"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "alora_cookie_consent";

export function CookieBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  const isEs = locale === "es";

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[60] border-t"
      style={{
        background: "oklch(0.11 0.012 260)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:gap-8">
        <p className="flex-1 text-[13px] leading-relaxed text-white/55">
          {isEs
            ? <>Usamos cookies para mejorar tu experiencia. Al continuar, aceptás su uso. <Link href={`/${locale}/cookies`} className="underline hover:text-white/80">Política de Privacidad</Link>.</>
            : <>We use cookies to improve your experience. By continuing, you accept their use. <Link href={`/${locale}/cookies`} className="underline hover:text-white/80">Privacy Policy</Link>.</>
          }
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={reject}
            className="rounded-full border px-5 py-2 text-[13px] font-medium text-white/55 transition-colors hover:text-white"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            {isEs ? "Rechazar" : "Reject"}
          </button>
          <button
            onClick={accept}
            className="rounded-full px-5 py-2 text-[13px] font-medium text-white transition-colors"
            style={{ background: "var(--turquoise)", color: "oklch(0.1 0.01 260)" }}
          >
            {isEs ? "Aceptar" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
