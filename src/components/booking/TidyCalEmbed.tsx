"use client";

import { useEffect } from "react";

interface Props {
  path: string; // e.g. "alora/20-minutos-reunion"
  label?: string;
}

export function TidyCalEmbed({ path, label }: Props) {
  useEffect(() => {
    // Remove any stale instance
    const existing = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
    if (existing) existing.remove();
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).TidyCal) {
      delete (window as unknown as Record<string, unknown>).TidyCal;
    }

    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }, 60);

    return () => {
      clearTimeout(timer);
      const s = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      if (s) s.remove();
      if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).TidyCal) {
        delete (window as unknown as Record<string, unknown>).TidyCal;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-[20px] opacity-30 blur-xl"
        style={{ background: "linear-gradient(135deg, var(--turquoise), var(--electric), var(--violet))" }}
      />
      <div
        className="relative overflow-hidden rounded-2xl border"
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          background: "linear-gradient(160deg, oklch(0.17 0.02 260), oklch(0.12 0.014 260))",
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
        }}
      >
        {label && (
          <div className="flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
            <span className="ml-2 text-[11px] text-white/40">{label}</span>
          </div>
        )}
        <div className="tidycal-embed" data-path={`${path}?bg-color=111827&text-color=ffffff&link-color=00e5ff&button-color=00b4cc`} />
      </div>
      <style>{`
        /* Force TidyCal iframe to match our dark background */
        .tidycal-embed iframe {
          background: transparent !important;
          color-scheme: dark;
        }
        /* TidyCal injects an <a> tag we don't want visible */
        .tidycal-embed > a { display: none !important; }
      `}</style>
    </div>
  );
}
