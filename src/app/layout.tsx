import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globalalora.com"),
  title: {
    default: "ALORA — Tecnología, Automatización e IA",
    template: "%s — ALORA",
  },
  description:
    "Ecosistemas digitales que integran software, automatización e IA para convertir el crecimiento en capacidad operativa.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "ALORA",
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/logo192.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/logo-icon.png" }],
  },
  manifest: "/manifest.json",
};

const GTM_ID = "GTM-5WGHRRMW";
const GA4_ID = "G-PL2T5CNR10";
const GADS_ID = "AW-17870984533";
const META_PIXEL_ID = "2766179866920622";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value ?? "es";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALORA",
    url: "https://www.globalalora.com",
    logo: "https://www.globalalora.com/logo-nav-white.png",
    description: "Agencia de desarrollo de software, automatización e inteligencia artificial para empresas en Latinoamérica.",
    email: "info@globalalora.com",
    sameAs: [
      "https://www.instagram.com/globalalora",
      "https://www.linkedin.com/company/globalalora",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressLocality: "Buenos Aires",
    },
    areaServed: ["AR", "MX", "CO", "CL", "ES", "UY", "PE"],
    knowsAbout: ["Software Development", "Artificial Intelligence", "Automation", "Ecommerce", "Web Development", "Chatbots"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ALORA",
    url: "https://www.globalalora.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.globalalora.com/es/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>

      <body className="min-h-screen antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Meta Pixel noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {children}

        {/*
          All tracking scripts load afterInteractive — deferred until after
          hydration so they never block first paint / LCP on mobile.
        */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
              gtag('config', '${GADS_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
