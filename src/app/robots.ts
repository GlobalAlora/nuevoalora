import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/es/thank-you", "/en/thank-you", "/es/call-booked", "/en/call-booked", "/ia-para-empresas/gracias", "/ia-para-empresas/gracias-llamada", "/ia-para-empresas/reservar-llamada"],
    },
    sitemap: "https://www.globalalora.com/sitemap.xml",
  };
}
