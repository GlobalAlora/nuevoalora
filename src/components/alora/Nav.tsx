"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const SOLUTION_LINKS = {
  es: [
    { label: "Desarrollo Web",         slug: "desarrollo-web" },
    { label: "Landing Pages",           slug: "landing-pages" },
    { label: "Aplicaciones Web",        slug: "aplicaciones-web" },
    { label: "Ecommerce",               slug: "ecommerce" },
    { label: "Chatbots con IA",         slug: "chatbots" },
    { label: "Google Ads",              slug: "google-ads" },
    { label: "Mantenimiento Web",       slug: "mantenimiento-web" },
    { label: "IA para Atención al Cliente", slug: "atencion-cliente-ia" },
  ],
  en: [
    { label: "Web Development",         slug: "desarrollo-web" },
    { label: "Landing Pages",           slug: "landing-pages" },
    { label: "Web Applications",        slug: "aplicaciones-web" },
    { label: "Ecommerce",               slug: "ecommerce" },
    { label: "AI Chatbots",             slug: "chatbots" },
    { label: "Google Ads",              slug: "google-ads" },
    { label: "Web Maintenance",         slug: "mantenimiento-web" },
    { label: "AI Customer Service",     slug: "atencion-cliente-ia" },
  ],
};

export function Nav({ dict, locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const otherLocale = locale === "es" ? "en" : "es";
  const solutions = SOLUTION_LINKS[locale] ?? SOLUTION_LINKS.es;
  const contactHref = `/${locale}/contacto`;

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 h-20 border-b border-white/[0.06] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,10,18,.85)" : "rgba(8,10,18,.60)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="ALORA — inicio"
        >
          <Image
            src="/logo-web.png"
            alt="ALORA"
            width={132}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Servicios dropdown */}
          <div ref={dropdownRef} className="relative">
            <Link href={`/${locale}/servicios`} className="sr-only">Servicios</Link>
          <button
              onClick={() => setServicesOpen((v) => !v)}
              className="group relative flex items-center gap-1 text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white"
            >
              {dict.nav.services}
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
            </button>

            {servicesOpen && (
              <div
                className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-xl border py-2 shadow-2xl"
                style={{
                  background: "oklch(0.13 0.015 260)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
              >
                {solutions.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${locale}/soluciones/${s.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-[13.5px] text-white/65 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#casos" className="group relative text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white">
            {dict.nav.cases}
            <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
          </a>
          <a href="#por-que" className="group relative text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white">
            {dict.nav.why}
            <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
          </a>
          <Link href={contactHref} className="group relative text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white">
            {dict.nav.contact}
            <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={`/${otherLocale}`}
            className="text-[13px] font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white/90"
          >
            {otherLocale}
          </Link>
          <Link
            href={contactHref}
            className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-[6px] text-[13px] font-medium text-white/90 transition-all hover:border-turquoise/60 hover:text-white"
          >
            {dict.nav.cta}
          </Link>
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
          style={{ background: "rgba(8,10,18,.97)" }}
        >
          <nav className="flex flex-col gap-1">
            {/* Servicios accordion */}
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between py-3 text-[15px] text-white/80 transition-colors hover:text-white"
            >
              {dict.nav.services}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="mb-2 flex flex-col gap-0 rounded-lg border border-white/[0.06] py-1" style={{ background: "rgba(255,255,255,0.02)" }}>
                {solutions.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${locale}/soluciones/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 text-[13.5px] text-white/60 transition-colors hover:text-white"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            <a href="#casos" onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-white/80 transition-colors hover:text-white">
              {dict.nav.cases}
            </a>
            <a href="#por-que" onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-white/80 transition-colors hover:text-white">
              {dict.nav.why}
            </a>
            <Link href={contactHref} onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-white/80 transition-colors hover:text-white">
              {dict.nav.contact}
            </Link>

            <div className="mt-2 flex items-center gap-4 border-t border-white/[0.06] pt-4">
              <Link href={`/${otherLocale}`} className="text-[13px] uppercase tracking-widest text-white/50 hover:text-white">
                {otherLocale}
              </Link>
              <Link
                href={contactHref}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-[6px] text-[13px] font-medium text-white/90"
              >
                {dict.nav.cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
