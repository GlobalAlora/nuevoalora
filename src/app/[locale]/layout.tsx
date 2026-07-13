import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary, getAlternates, LOCALES } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { CookieBanner } from "@/components/alora/CookieBanner";
import { ExitIntentPopup } from "@/components/alora/ExitIntentPopup";
import { WhatsAppButton } from "@/components/alora/WhatsAppButton";
import { Chatbot } from "@/components/alora/Chatbot";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};

  const dict = await getDictionary(locale as Locale);
  const alternates = getAlternates("");

  return {
    title: {
      default: dict.meta.home.title,
      template: `%s — ALORA`,
    },
    description: dict.meta.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: alternates.es,
        en: alternates.en,
        "x-default": alternates.es,
      },
    },
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: `https://www.globalalora.com/${locale}`,
      siteName: "ALORA",
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);

  return (
    <>
      {children}
      <CookieBanner locale={locale} />
      <ExitIntentPopup locale={locale} />
      <WhatsAppButton locale={locale} />
      <Chatbot dict={dict} locale={l} />
    </>
  );
}
