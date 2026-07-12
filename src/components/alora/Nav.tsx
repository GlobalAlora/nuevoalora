"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";
import { ICONS as NAV_ICONS } from "@/lib/icons";
import { CASE_STUDIES } from "@/lib/case-studies-data";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const SOLUTION_LINKS = {
  es: [
    { label: "Desarrollo de Software", slug: "desarrollo-software", desc: "Software a medida para resolver problemas reales.", icon: "code", accent: "var(--turquoise)" },
    { label: "Desarrollo Web", slug: "desarrollo-web", desc: "Sitios web que representan tu negocio y generan resultados.", icon: "structure", accent: "var(--turquoise)" },
    { label: "Aplicaciones Web", slug: "aplicaciones-web", desc: "Sistemas y plataformas que digitalizan tu operación.", icon: "gears", accent: "var(--electric)" },
    { label: "Ecommerce", slug: "ecommerce", desc: "Tiendas online listas para vender y escalar.", icon: "cart", accent: "var(--violet)" },
    { label: "Chatbots IA", slug: "chatbots", desc: "Flujos guiados que cualifican leads y agendan llamadas.", icon: "chat", accent: "var(--electric)" },
    { label: "Agentes Conversacionales IA", slug: "atencion-cliente-ia", desc: "Conversaciones reales con tus clientes, las 24 horas.", icon: "headset", accent: "var(--violet)" },
  ],
  en: [
    { label: "Software Development", slug: "desarrollo-software", desc: "Custom software to solve real business problems.", icon: "code", accent: "var(--turquoise)" },
    { label: "Web Development", slug: "desarrollo-web", desc: "Websites that represent your business and drive results.", icon: "structure", accent: "var(--turquoise)" },
    { label: "Web Applications", slug: "aplicaciones-web", desc: "Systems and platforms that digitize your operation.", icon: "gears", accent: "var(--electric)" },
    { label: "Ecommerce", slug: "ecommerce", desc: "Online stores ready to sell and scale.", icon: "cart", accent: "var(--violet)" },
    { label: "AI Chatbots", slug: "chatbots", desc: "Guided flows that qualify leads and book calls.", icon: "chat", accent: "var(--electric)" },
    { label: "AI Conversational Agents", slug: "atencion-cliente-ia", desc: "Real conversations with your customers, 24/7.", icon: "headset", accent: "var(--violet)" },
  ],
};


const WHATSAPP_URL = "https://wa.me/5491124629452";

export function Nav({ dict, locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [casesOpen, setCasesOpen] = useState(false);
  const [mobileCasesOpen, setMobileCasesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const casesDropdownRef = useRef<HTMLDivElement>(null);
  const casesPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard SSR-safe portal mount check
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideTrigger = dropdownRef.current?.contains(target);
      const insidePanel = panelRef.current?.contains(target);
      if (!insideTrigger && !insidePanel) {
        setServicesOpen(false);
      }
      const insideCasesTrigger = casesDropdownRef.current?.contains(target);
      const insideCasesPanel = casesPanelRef.current?.contains(target);
      if (!insideCasesTrigger && !insideCasesPanel) {
        setCasesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const pathname = usePathname();
  const otherLocale = locale === "es" ? "en" : "es";
  const solutions = SOLUTION_LINKS[locale] ?? SOLUTION_LINKS.es;
  const caseStudies = CASE_STUDIES;
  const homeHref = `/${locale}`;
  const casosHref = `/${locale}/casos-de-exito`;
  const blogHref = `/${locale}/blog`;
  const contactHref = `/${locale}/contacto`;
  const callHref = locale === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  // Routes whose URL slug is translated per locale, so switching language
  // needs an explicit mapping instead of just swapping the /es|/en prefix.
  const SLUG_OVERRIDES: Record<string, string> = {
    "/llamada-de-relevamiento": "/discovery-call",
    "/discovery-call": "/llamada-de-relevamiento",
  };
  const restPath = pathname?.replace(/^\/(es|en)/, "") || "";
  const otherLocaleHref = `/${otherLocale}${SLUG_OVERRIDES[restPath] ?? restPath}`;
  const esHref = locale === "es" ? pathname ?? homeHref : otherLocaleHref;
  const enHref = locale === "en" ? pathname ?? homeHref : otherLocaleHref;

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
          href={homeHref}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="ALORA — inicio"
        >
          <Image
            src="/logo-nav-white.png"
            alt="ALORA"
            width={132}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href={homeHref} className="group relative text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white">
            {dict.nav.home}
            <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
          </Link>

          {/* Soluciones dropdown */}
          <div ref={dropdownRef} className="relative">
            <Link href={`/${locale}/servicios`} className="sr-only">{dict.nav.solutions}</Link>
          <button
              onClick={() => setServicesOpen((v) => !v)}
              className="group relative flex items-center justify-center gap-1 text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white"
              style={{ width: "94px" }}
            >
              {dict.nav.solutions}
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
            </button>

            {servicesOpen && mounted && createPortal(
              <div ref={panelRef}>
                <div
                  aria-hidden
                  className="fixed inset-0 z-30 transition-opacity duration-200"
                  style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
                  onClick={() => setServicesOpen(false)}
                />
                <div
                  className="mega-menu-panel fixed left-1/2 top-20 z-50 mt-0 w-full max-w-7xl px-6"
                >
                <div
                  className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border lg:grid-cols-[1fr_300px]"
                  style={{
                    background: "oklch(0.16 0.018 260)",
                    borderColor: "rgba(255,255,255,0.12)",
                    boxShadow: "0 30px 90px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Solutions grid */}
                  <div className="p-6">
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      {locale === "es" ? "Nuestras soluciones" : "Our solutions"}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {solutions.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${locale}/soluciones/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group relative flex flex-col gap-3 overflow-hidden rounded-xl p-4 transition-colors hover:bg-white/[0.05]"
                        >
                          <span
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{ background: `radial-gradient(160px circle at 20% 15%, color-mix(in oklab, ${s.accent} 20%, transparent), transparent 70%)` }}
                          />
                          <span
                            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors"
                            style={{ background: `color-mix(in oklab, ${s.accent} 14%, transparent)`, border: `1px solid color-mix(in oklab, ${s.accent} 32%, transparent)`, color: s.accent }}
                          >
                            {NAV_ICONS[s.icon]}
                          </span>
                          <span className="relative z-10">
                            <span className="block text-[14px] font-semibold text-white/90 transition-colors group-hover:text-white">{s.label}</span>
                            <span className="mt-1 block text-[12.5px] leading-snug text-white/45">{s.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA sidebar */}
                  <div
                    className="flex flex-col gap-3 p-6"
                    style={{ background: "rgba(255,255,255,0.02)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div>
                      <div className="text-[15px] font-semibold text-white/90">
                        {locale === "es" ? "¿No sabés cuál elegir?" : "Not sure which to pick?"}
                      </div>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/50">
                        {locale === "es"
                          ? "Contanos tu proyecto y te ayudamos a encontrar la solución correcta."
                          : "Tell us about your project and we'll help you find the right solution."}
                      </p>
                    </div>
                    <Link
                      href={callHref}
                      onClick={() => setServicesOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                      style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))" }}
                    >
                      {dict.nav.ctaCall}
                    </Link>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setServicesOpen(false)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:scale-[1.02]"
                      style={{ background: "#25D366" }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {dict.nav.ctaWhatsapp}
                    </a>
                    <div className="mt-1 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                      <Link
                        href={`/${locale}/servicios`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between text-[13px] font-medium text-white/60 transition-colors hover:text-white"
                      >
                        {locale === "es" ? "Ver todas las soluciones" : "See all solutions"}
                        <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                      <Link
                        href={casosHref}
                        onClick={() => setServicesOpen(false)}
                        className="mt-2 flex items-center justify-between text-[13px] font-medium text-white/60 transition-colors hover:text-white"
                      >
                        {dict.nav.cases}
                        <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              </div>,
              document.body
            )}
          </div>

          {/* Casos de Éxito dropdown */}
          <div ref={casesDropdownRef} className="relative">
            <Link href={casosHref} className="sr-only">{dict.nav.cases}</Link>
            <button
              onClick={() => setCasesOpen((v) => !v)}
              className="group relative flex items-center justify-center gap-1 text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white"
              style={{ width: "128px" }}
            >
              {dict.nav.cases}
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`mt-0.5 transition-transform duration-200 ${casesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
            </button>

            {casesOpen && mounted && createPortal(
              <div ref={casesPanelRef}>
                <div
                  aria-hidden
                  className="fixed inset-0 z-30 transition-opacity duration-200"
                  style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
                  onClick={() => setCasesOpen(false)}
                />
                <div className="mega-menu-panel fixed left-1/2 top-20 z-50 mt-0 w-full max-w-7xl px-6">
                <div
                  className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border lg:grid-cols-[1fr_300px]"
                  style={{
                    background: "oklch(0.16 0.018 260)",
                    borderColor: "rgba(255,255,255,0.12)",
                    boxShadow: "0 30px 90px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Case studies grid */}
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                        {locale === "es" ? "Proyectos reales" : "Real projects"}
                      </div>
                      <Link
                        href={casosHref}
                        onClick={() => setCasesOpen(false)}
                        className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-lg transition-all hover:scale-[1.03]"
                        style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))" }}
                      >
                        {locale === "es" ? "Ver todos los casos" : "See all case studies"}
                        <svg viewBox="0 0 16 16" fill="none" width="11" height="11">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {caseStudies.map((cs) => {
                        const cat = cs.category[locale] ?? cs.category.es;
                        const accent = cs.theme.primary;
                        const accent2 = cs.theme.secondary ?? cs.theme.primary;
                        return (
                          <Link
                            key={cs.slug}
                            href={`/${locale}/casos-de-exito/${cs.slug}`}
                            onClick={() => setCasesOpen(false)}
                            className="group flex flex-col overflow-hidden rounded-xl transition-colors hover:bg-white/[0.05]"
                            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                          >
                            <div
                              className="relative aspect-[16/10] w-full overflow-hidden"
                              style={{ background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 30%, #0b0d14), color-mix(in oklab, ${accent2} 20%, #0b0d14))` }}
                            >
                              {cs.heroImage ? (
                                <Image
                                  src={cs.heroImage}
                                  alt={cs.client}
                                  fill
                                  sizes="200px"
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center" style={{ color: accent }}>
                                  <span className="h-6 w-6 opacity-80">{NAV_ICONS[cs.icon]}</span>
                                </div>
                              )}
                            </div>
                            <div className="p-2.5">
                              <span className="block truncate text-[13px] font-semibold text-white/90 transition-colors group-hover:text-white">{cs.client}</span>
                              <span
                                className="mt-1.5 inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-medium"
                                style={{ background: `color-mix(in oklab, ${accent} 16%, transparent)`, color: accent }}
                              >
                                {cat}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right: CTA sidebar */}
                  <div
                    className="flex flex-col gap-3 p-6"
                    style={{ background: "rgba(255,255,255,0.02)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div>
                      <div className="text-[15px] font-semibold text-white/90">
                        {locale === "es" ? "¿Tenés un proyecto parecido?" : "Have a similar project?"}
                      </div>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/50">
                        {locale === "es"
                          ? "Contanos qué necesitás y te contamos cómo lo resolveríamos."
                          : "Tell us what you need and we'll tell you how we'd solve it."}
                      </p>
                    </div>
                    <Link
                      href={callHref}
                      onClick={() => setCasesOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                      style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric))" }}
                    >
                      {dict.nav.ctaCall}
                    </Link>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setCasesOpen(false)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:scale-[1.02]"
                      style={{ background: "#25D366" }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {dict.nav.ctaWhatsapp}
                    </a>
                    <div className="mt-1 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                      <Link
                        href={`/${locale}/servicios`}
                        onClick={() => setCasesOpen(false)}
                        className="flex items-center justify-between text-[13px] font-medium text-white/60 transition-colors hover:text-white"
                      >
                        {locale === "es" ? "Ver todas las soluciones" : "See all solutions"}
                        <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              </div>,
              document.body
            )}
          </div>

          <Link href={blogHref} className="group relative text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white">
            {dict.nav.blog}
            <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
          </Link>

          <Link
            href={contactHref}
            className="group relative flex items-center justify-center text-[14px] font-medium text-white/[0.75] transition-colors hover:text-white"
            style={{ width: "66px" }}
          >
            {dict.nav.contact}
            <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-turquoise transition-[width] duration-200 group-hover:w-full" />
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-0.5 rounded-full border border-white/[0.1] bg-white/[0.03] p-[3px]">
            <Link
              href={esHref}
              className={`rounded-full px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide transition-colors ${
                locale === "es" ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
              style={locale === "es" ? { background: "linear-gradient(135deg, var(--turquoise), var(--electric))" } : undefined}
            >
              ES
            </Link>
            <Link
              href={enHref}
              className={`rounded-full px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide transition-colors ${
                locale === "en" ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
              style={locale === "en" ? { background: "linear-gradient(135deg, var(--turquoise), var(--electric))" } : undefined}
            >
              EN
            </Link>
          </div>
          <Link
            href={callHref}
            className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-[6px] text-[13px] font-medium text-white/90 transition-all hover:border-turquoise/60 hover:text-white"
            style={{ width: "204px" }}
          >
            {dict.nav.ctaCall}
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-[6px] text-[13px] font-semibold text-white shadow-md transition-all hover:scale-[1.03]"
            style={{ background: "#25D366", width: "180px" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {dict.nav.ctaWhatsapp}
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
          style={{ background: "rgba(8,10,18,.97)" }}
        >
          <nav className="flex flex-col gap-1">
            <Link href={homeHref} onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-white/80 transition-colors hover:text-white">
              {dict.nav.home}
            </Link>

            {/* Soluciones accordion */}
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between py-3 text-[15px] text-white/80 transition-colors hover:text-white"
            >
              {dict.nav.solutions}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="mb-2 flex flex-col gap-1 rounded-lg border border-white/[0.06] p-2" style={{ background: "rgba(255,255,255,0.02)" }}>
                {solutions.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${locale}/soluciones/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "color-mix(in oklab, var(--turquoise) 14%, transparent)", border: "1px solid color-mix(in oklab, var(--turquoise) 30%, transparent)", color: "var(--turquoise)" }}
                    >
                      {NAV_ICONS[s.icon]}
                    </span>
                    <span>
                      <span className="block text-[13.5px] font-medium text-white/85">{s.label}</span>
                      <span className="mt-0.5 block text-[12px] leading-snug text-white/45">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* Casos de Éxito accordion */}
            <button
              onClick={() => setMobileCasesOpen((v) => !v)}
              className="flex items-center justify-between py-3 text-[15px] text-white/80 transition-colors hover:text-white"
            >
              {dict.nav.cases}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${mobileCasesOpen ? "rotate-180" : ""}`}>
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileCasesOpen && (
              <div className="mb-2 flex flex-col gap-1 rounded-lg border border-white/[0.06] p-2" style={{ background: "rgba(255,255,255,0.02)" }}>
                {caseStudies.map((cs) => {
                  const industry = cs.industry[locale] ?? cs.industry.es;
                  const accent = cs.theme.primary;
                  return (
                    <Link
                      key={cs.slug}
                      href={`/${locale}/casos-de-exito/${cs.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: `color-mix(in oklab, ${accent} 14%, transparent)`, border: `1px solid color-mix(in oklab, ${accent} 30%, transparent)`, color: accent }}
                      >
                        {NAV_ICONS[cs.icon]}
                      </span>
                      <span>
                        <span className="block text-[13.5px] font-medium text-white/85">{cs.client}</span>
                        <span className="mt-0.5 block text-[12px] leading-snug text-white/45">{industry}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
            <Link href={blogHref} onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-white/80 transition-colors hover:text-white">
              {dict.nav.blog}
            </Link>
            <Link href={contactHref} onClick={() => setMobileOpen(false)} className="py-3 text-[15px] text-white/80 transition-colors hover:text-white">
              {dict.nav.contact}
            </Link>

            <div className="mt-2 flex flex-col gap-3 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-0.5 self-start rounded-full border border-white/[0.1] bg-white/[0.03] p-[3px]">
                <Link
                  href={esHref}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-full px-3 py-1.5 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                    locale === "es" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                  style={locale === "es" ? { background: "linear-gradient(135deg, var(--turquoise), var(--electric))" } : undefined}
                >
                  ES
                </Link>
                <Link
                  href={enHref}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-full px-3 py-1.5 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                    locale === "en" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                  style={locale === "en" ? { background: "linear-gradient(135deg, var(--turquoise), var(--electric))" } : undefined}
                >
                  EN
                </Link>
              </div>
              <Link
                href={callHref}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13.5px] font-medium text-white/90"
              >
                {dict.nav.ctaCall}
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-white"
                style={{ background: "#25D366" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {dict.nav.ctaWhatsapp}
              </a>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes mega-menu-in {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .mega-menu-panel { animation: mega-menu-in 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </header>
  );
}
