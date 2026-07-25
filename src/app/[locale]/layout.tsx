import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary, getAlternates, LOCALES } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { CookieBanner } from "@/components/alora/CookieBanner";
import { ExitIntentPopupLoader } from "@/components/alora/ExitIntentPopupLoader";
import { WhatsAppButton } from "@/components/alora/WhatsAppButton";
import { ChatbotLoader } from "@/components/alora/ChatbotLoader";

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
    // No `template`: every page's own title already includes "ALORA"
    // itself (e.g. "X | ALORA"), so a template here would double it up
    // into "X | ALORA — ALORA" in the browser tab and search results.
    title: dict.meta.home.title,
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
      <ExitIntentPopupLoader locale={locale} />
      <WhatsAppButton locale={locale} />
      <ChatbotLoader dict={dict} locale={l} />
    </>
  );
}
