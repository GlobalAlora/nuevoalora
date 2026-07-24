"use client";

import { useEffect, useRef } from "react";
import { ICONS } from "@/lib/icons";

interface ChannelNode {
  id: string;
  icon: string;
  label: { es: string; en: string };
  angle: number;
}

const NODES: ChannelNode[] = [
  { id: "web", icon: "portal", label: { es: "Web", en: "Web" }, angle: 270 },
  { id: "whatsapp", icon: "chat", label: { es: "WhatsApp", en: "WhatsApp" }, angle: 30 },
  { id: "phone", icon: "headset", label: { es: "Teléfono", en: "Phone" }, angle: 150 },
];

interface Props {
  accent: string;
  accent2: string;
  locale?: "es" | "en";
}

/** Hub-and-spoke visual: one AI core, the same message pulsing out to every channel at once. */
export function ChannelsHub({ accent, accent2, locale = "es" }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    svg.querySelectorAll<SVGCircleElement>("[data-pulse]").forEach((p, i) => {
      p.style.animationDelay = `${i * 0.7}s`;
    });
  }, []);

  const size = 440;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 168;

  const positions = NODES.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return { ...n, x: cx + Math.cos(rad) * radius, y: cy + Math.sin(rad) * radius };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl opacity-[0.2]"
        style={{ background: `radial-gradient(circle at 50% 50%, color-mix(in oklab, ${accent} 22%, transparent), transparent 62%)` }}
      />
      <svg ref={ref} viewBox={`0 0 ${size} ${size}`} className="h-full w-full overflow-visible" role="img" aria-label="Web, WhatsApp, Teléfono">
        <defs>
          <radialGradient id="ch-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
            <stop offset="60%" stopColor={accent2} stopOpacity="0.22" />
            <stop offset="100%" stopColor={accent2} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ch-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
            <stop offset="100%" stopColor={accent2} stopOpacity="0.12" />
          </linearGradient>
          <filter id="ch-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        <circle cx={cx} cy={cy} r={radius + 34} fill="none" stroke="color-mix(in oklab, white 10%, transparent)" strokeWidth={1} strokeDasharray="1 7" className="ch-ring-spin" style={{ transformOrigin: `${cx}px ${cy}px` }} />

        {/* spokes: core → each channel */}
        {positions.map((p) => (
          <line key={`l-${p.id}`} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="url(#ch-line)" strokeWidth={1.2} className="ch-line-breathe" />
        ))}

        {/* the same message, pulsing out to every channel at once */}
        {positions.map((p) => (
          <circle
            key={`p-${p.id}`}
            data-pulse
            r={3.4}
            fill={accent}
            style={{
              offsetPath: `path('M ${cx} ${cy} L ${p.x} ${p.y}')`,
              animation: "ch-pulse 3.5s linear infinite",
              opacity: 0.95,
              filter: `drop-shadow(0 0 5px ${accent})`,
            } as React.CSSProperties}
          />
        ))}

        {/* core — one AI */}
        <circle cx={cx} cy={cy} r={70} fill="url(#ch-core)" filter="url(#ch-soft)" className="ch-core-breathe" style={{ transformOrigin: `${cx}px ${cy}px` }} />
        <circle cx={cx} cy={cy} r={46} fill="oklch(0.15 0.016 260)" stroke={`color-mix(in oklab, ${accent} 55%, transparent)`} strokeWidth={1.3} />
        <foreignObject x={cx - 15} y={cy - 22} width={30} height={30}>
          <div style={{ width: 30, height: 30, color: accent }}>{ICONS.spark}</div>
        </foreignObject>
        <text x={cx} y={cy + 24} textAnchor="middle" className="fill-white/80" style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em" }}>
          IA
        </text>

        {/* channel nodes */}
        {positions.map((p) => (
          <g key={p.id} className="ch-node" style={{ transformOrigin: `${p.x}px ${p.y}px`, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))" }}>
            <rect x={p.x - 26} y={p.y - 26} width={52} height={52} rx={13} fill="oklch(0.16 0.015 260)" stroke="color-mix(in oklab, white 14%, transparent)" className="ch-node-rect" />
            <foreignObject x={p.x - 13} y={p.y - 13} width={26} height={26}>
              <div style={{ width: 26, height: 26, color: `color-mix(in oklab, ${accent} 85%, white 15%)` }}>{ICONS[p.icon]}</div>
            </foreignObject>
            <text x={p.x} y={p.y + 45} textAnchor="middle" className="fill-white/80 ch-node-label" style={{ fontFamily: "Inter, sans-serif", fontSize: 12.5, fontWeight: 650, letterSpacing: "0.02em" }}>
              {locale === "en" ? p.label.en : p.label.es}
            </text>
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes ch-pulse {
          0%   { offset-distance: 0%; opacity: 0; }
          12%  { opacity: 0.95; }
          88%  { opacity: 0.95; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes ch-ring-spin { to { transform: rotate(360deg); } }
        .ch-ring-spin { animation: ch-ring-spin 70s linear infinite; }
        @keyframes ch-line-breathe { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }
        .ch-line-breathe { animation: ch-line-breathe 5s ease-in-out infinite; }
        @keyframes ch-core-breathe {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50%      { transform: scale(1.06); opacity: 1; }
        }
        .ch-core-breathe { animation: ch-core-breathe 5s ease-in-out infinite; transform-box: fill-box; }
        .ch-node { transition: transform 250ms ease, filter 250ms ease; transform-box: fill-box; }
        .ch-node:hover { transform: translateY(-4px); filter: drop-shadow(0 8px 14px rgba(0,0,0,0.6)) drop-shadow(0 0 8px color-mix(in oklab, ${accent} 50%, transparent)); }
        .ch-node:hover .ch-node-label { fill: rgba(255,255,255,1); }
        .ch-node:hover .ch-node-rect { stroke: color-mix(in oklab, ${accent} 75%, transparent); }
      `}</style>
    </div>
  );
}
