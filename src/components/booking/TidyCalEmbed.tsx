"use client";

import { useEffect, useRef } from "react";

interface Props {
  path: string; // e.g. "alora/20-minutos-reunion"
}

export function TidyCalEmbed({ path }: Props) {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

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
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        minHeight: "580px",
      }}
    >
      <div className="tidycal-embed" data-path={path} />
    </div>
  );
}
