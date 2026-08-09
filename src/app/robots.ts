import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/es/thank-you", "/en/thank-you",
        "/es/call-booked", "/en/call-booked",
        "/es/gracias-ia-empresas", "/en/gracias-ia-empresas",
        "/es/auditoria-ia-empresas-reservada", "/en/auditoria-ia-empresas-reservada",
        "/es/reservar-auditoria-ia-empresas", "/en/reservar-auditoria-ia-empresas",
      ],
    },
    sitemap: "https://www.globalalora.com/sitemap.xml",
  };
}
