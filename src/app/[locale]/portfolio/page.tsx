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
  const title = locale === "es" ? "Proyectos en producción — ALORA" : "Projects in Production — ALORA";
  const description = locale === "es"
    ? "Sistemas reales que ya están operando y acompañando el crecimiento de nuestros clientes: sitios web, ecommerce, aplicaciones con IA y más."
    : "Real systems already running and supporting our clients' growth: websites, ecommerce, AI-powered apps and more.";
  const ogImage = `/api/og?title=${encodeURIComponent(locale === "es" ? "Proyectos en producción" : "Projects in Production")}`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.globalalora.com/${locale}/portfolio` },
    openGraph: { title, description, url: `https://www.globalalora.com/${locale}/portfolio`, images: [{ url: ogImage, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
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
