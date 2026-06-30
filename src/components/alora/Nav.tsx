"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function Nav({ dict, locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: dict.nav.services, href: "#servicios" },
    { label: dict.nav.cases,    href: "#casos" },
    { label: dict.nav.why,      href: "#por-que" },
    { label: dict.nav.contact,  href: "#contacto" },
  ];

  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 h-20 border-b border-white/[0.06] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8,10,18,.75)"
          : "rgba(8,10,18,.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-[7px] text-[15px] font-semibold tracking-[0.14em] text-white/90 transition-colors hover:text-white"
        >
          <span
            className="inline-block h-[5px] w-[5px] rounded-full"
            style={{
              background: "var(--turquoise)",
              boxShadow: "0 0 6px color-mix(in oklab, var(--turquoise) 50%, transparent)",
            }}
          />
          ALORA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Language toggle */}
          <Link
            href={`/${otherLocale}`}
            className="text-[13px] font-medium text-white/50 transition-colors hover:text-white/90 uppercase tracking-widest"
          >
            {otherLocale}
          </Link>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-[6px] text-[13px] font-medium text-white/90 transition-all hover:border-turquoise/60 hover:text-white"
          >
            {dict.nav.cta}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/70 transition-colors hover:text-white md:hidden"
          aria-label="Abrir menú"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t border-white/[0.06] px-6 py-4 md:hidden"
          style={{ background: "rgba(8,10,18,.95)" }}
        >
          <nav className="flex flex-col gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-4 border-t border-white/[0.06] pt-4">
              <Link
                href={`/${otherLocale}`}
                className="text-[13px] text-white/50 hover:text-white uppercase tracking-widest"
              >
                {otherLocale}
              </Link>
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-[6px] text-[13px] font-medium text-white/90"
              >
                {dict.nav.cta}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
