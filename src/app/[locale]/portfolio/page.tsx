import { notFound } from "next/navigation";
import { Suspense } from "react";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { PortfolioContent } from "@/components/sections/PortfolioContent";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Casos de éxito — ALORA" : "Case Studies — ALORA",
    description: locale === "es"
      ? "Proyectos reales en producción: sitios web, ecommerce, aplicaciones con IA y más."
      : "Real projects in production: websites, ecommerce, AI-powered apps and more.",
    alternates: { canonical: `https://www.globalalora.com/${locale}/portfolio` },
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);

  return (
    <>
      <Nav dict={dict} locale={l} />
      <Suspense fallback={null}>
        <PortfolioContent />
      </Suspense>
      <Footer dict={dict} locale={l} />
    </>
  );
}
