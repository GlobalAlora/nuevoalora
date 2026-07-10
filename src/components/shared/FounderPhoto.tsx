"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  initials: string;
  accent: string;
  accent2: string;
  className?: string;
}

export function FounderPhoto({ src, alt, initials, accent, accent2, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})` }}
      >
        <span className="text-[34px] font-bold text-white/90">{initials}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 30%, transparent), color-mix(in oklab, ${accent2} 20%, transparent))` }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 320px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
