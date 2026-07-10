import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect naked domain → www (canonical)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "globalalora.com" }],
        destination: "https://www.globalalora.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Cache static assets aggressively
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Cache images/fonts for 1 year
        source: "/:path(images|fonts|icons|media)/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache static files
        source: "/:path*\\.(ico|png|jpg|jpeg|webp|svg|woff2|woff)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Compress responses
  compress: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
