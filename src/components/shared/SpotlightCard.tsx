"use client";

import { useRef } from "react";
import type { ReactNode, CSSProperties, MouseEvent } from "react";

interface Props {
  accent: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function SpotlightCard({ accent, className = "", style, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
      style={{ ...style, ["--accent" as string]: accent }}
    >
      {children}
    </div>
  );
}
