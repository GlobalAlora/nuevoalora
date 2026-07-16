import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/es/thank-you", "/en/thank-you", "/es/call-booked", "/en/call-booked"],
    },
    sitemap: "https://www.globalalora.com/sitemap.xml",
  };
}
