import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalalora.com"),
  title: {
    default: "ALORA — Tecnología, Automatización e IA",
    template: "%s — ALORA",
  },
  description:
    "Ecosistemas digitales que integran software, automatización e IA para convertir el crecimiento en capacidad operativa.",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read locale from cookie for correct html[lang] attribute
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value ?? "es";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALORA",
    url: "https://globalalora.com",
    logo: "https://globalalora.com/logo-nav-white.png",
    description: "Agencia de desarrollo de software, automatización e inteligencia artificial para empresas en Latinoamérica.",
    email: "hola@globalalora.com",
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

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
