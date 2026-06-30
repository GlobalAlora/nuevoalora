import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { Nav } from "@/components/alora/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { WhyAlora } from "@/components/sections/WhyAlora";
import { Process } from "@/components/sections/Process";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/alora/Chatbot";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Nav dict={dict} locale={locale as Locale} />
      <main>
        <Hero dict={dict} />
        <Services dict={dict} />
        <Cases dict={dict} locale={locale as Locale} />
        <WhyAlora dict={dict} />
        <Process dict={dict} />
        <ContactSection dict={dict} locale={locale as Locale} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
      <Chatbot dict={dict} locale={locale as Locale} />
    </>
  );
}
