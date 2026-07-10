import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { Nav } from "@/components/alora/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { WhyAlora } from "@/components/sections/WhyAlora";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/alora/Chatbot";

interface Props {
  params: Promise<{ locale: string }>;
}

const OG_IMAGE = "https://globalalora.com/opengraph-image";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const url = `https://globalalora.com/${locale}`;
  const title = isEs
    ? "ALORA — Tecnología, Automatización e IA para empresas"
    : "ALORA — Technology, Automation and AI for businesses";
  const description = isEs
    ? "Construimos ecosistemas digitales completos — software, aplicaciones, ecommerce, chatbots y agentes de IA — para que tu negocio opere y escale con fluidez."
    : "We build complete digital ecosystems — software, apps, ecommerce, chatbots and AI agents — so your business runs and scales smoothly.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { es: "https://globalalora.com/es", en: "https://globalalora.com/en" },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "ALORA",
      locale: isEs ? "es_AR" : "en_US",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ALORA — Software, IA y Automatización" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Nav dict={dict} locale={locale as Locale} />
      <main>
        <Hero dict={dict} locale={locale as Locale} />
        <Services dict={dict} locale={locale as Locale} />
        <Cases dict={dict} locale={locale as Locale} />
        <WhyAlora dict={dict} />
        <Testimonials dict={dict} />
        <Process dict={dict} />
        <ContactSection dict={dict} locale={locale as Locale} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
      <Chatbot dict={dict} locale={locale as Locale} />
    </>
  );
}
