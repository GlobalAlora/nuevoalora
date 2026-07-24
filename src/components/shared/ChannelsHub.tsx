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

/** Hub-and-spoke visual: one AI core broadcasting the same message to every channel at once. */
export function ChannelsHub({ accent, accent2, locale = "es" }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    svg.querySelectorAll<SVGGElement>("[data-pulse]").forEach((p, i) => {
      p.style.animationDelay = `${i * 0.9}s`;
    });
    svg.querySelectorAll<SVGCircleElement>("[data-ring]").forEach((p, i) => {
      p.style.animationDelay = `${i * 1.3}s`;
    });
  }, []);

  const size = 460;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 172;
  // Rounded so the server- and client-rendered markup match exactly — raw
  // floating-point trig output can serialize with a different last digit
  // between Node and the browser, which React flags as a hydration mismatch.
  const round = (n: number) => Math.round(n * 100) / 100;

  const positions = NODES.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return { ...n, x: round(cx + Math.cos(rad) * radius), y: round(cy + Math.sin(rad) * radius) };
  });

  const meshEdges: [number, number][] = [[0, 1], [1, 2], [2, 0]];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl opacity-[0.22]"
        style={{ background: `radial-gradient(circle at 50% 50%, color-mix(in oklab, ${accent} 25%, transparent), transparent 60%)` }}
      />
      <svg ref={ref} viewBox={`0 0 ${size} ${size}`} className="h-full w-full overflow-visible" role="img" aria-label="Web, WhatsApp, Teléfono">
        <defs>
          <radialGradient id="ch-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
            <stop offset="55%" stopColor={accent2} stopOpacity="0.25" />
            <stop offset="100%" stopColor={accent2} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ch-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
            <stop offset="100%" stopColor={accent2} stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="ch-mesh" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={accent2} stopOpacity="0.18" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.18" />
          </linearGradient>
          <filter id="ch-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <filter id="ch-soft-lg" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* outer decorative rings + tick marks, for depth */}
        <circle cx={cx} cy={cy} r={radius + 56} fill="none" stroke="color-mix(in oklab, white 6%, transparent)" strokeWidth={1} />
        <circle cx={cx} cy={cy} r={radius + 34} fill="none" stroke="color-mix(in oklab, white 10%, transparent)" strokeWidth={1} strokeDasharray="1 9" className="ch-ring-spin" style={{ transformOrigin: `${cx}px ${cy}px` }} />
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const r1 = radius + 56;
          const r2 = i % 3 === 0 ? r1 + 8 : r1 + 4;
          return (
            <line
              key={`tick-${i}`}
              x1={round(cx + Math.cos(a) * r1)} y1={round(cy + Math.sin(a) * r1)}
              x2={round(cx + Math.cos(a) * r2)} y2={round(cy + Math.sin(a) * r2)}
              stroke="color-mix(in oklab, white 12%, transparent)"
              strokeWidth={1}
            />
          );
        })}

        {/* radar sweep from the core */}
        <g className="ch-sweep" style={{ transformOrigin: `${cx}px ${cy}px` }}>
          <path d={`M ${cx} ${cy} L ${cx + radius + 50} ${cy} A ${radius + 50} ${radius + 50} 0 0 1 ${round(cx + Math.cos(Math.PI / 5) * (radius + 50))} ${round(cy + Math.sin(Math.PI / 5) * (radius + 50))} Z`} fill="url(#ch-sweep-grad)" opacity={0.5} />
        </g>
        <defs>
          <linearGradient id="ch-sweep-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* mesh: the three channels are also aware of each other, not isolated */}
        {meshEdges.map(([a, b]) => (
          <line key={`m-${a}-${b}`} x1={positions[a].x} y1={positions[a].y} x2={positions[b].x} y2={positions[b].y} stroke="url(#ch-mesh)" strokeWidth={1} strokeDasharray="3 5" className="ch-mesh-breathe" />
        ))}

        {/* spokes: core → each channel */}
        {positions.map((p) => (
          <line key={`l-${p.id}`} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="url(#ch-line)" strokeWidth={1.4} className="ch-line-breathe" />
        ))}

        {/* concentric broadcast rings expanding from the core */}
        {[0, 1, 2].map((i) => (
          <circle key={`ring-${i}`} data-ring cx={cx} cy={cy} r={46} fill="none" stroke={accent} strokeWidth={1.3} className="ch-broadcast-ring" />
        ))}

        {/* the same message packet, traveling out to every channel at once */}
        {positions.map((p) => (
          <g
            key={`p-${p.id}`}
            data-pulse
            className="ch-packet"
            style={{
              offsetPath: `path('M ${cx} ${cy} L ${p.x} ${p.y}')`,
              animation: "ch-pulse 3.2s linear infinite",
            } as React.CSSProperties}
          >
            <circle r={7} fill={accent} opacity={0.16} filter="url(#ch-soft)" />
            <circle r={3.6} fill={accent} style={{ filter: `drop-shadow(0 0 6px ${accent})` }} />
          </g>
        ))}

        {/* core — one AI */}
        <circle cx={cx} cy={cy} r={78} fill="url(#ch-core)" filter="url(#ch-soft-lg)" className="ch-core-breathe" style={{ transformOrigin: `${cx}px ${cy}px` }} />
        <circle cx={cx} cy={cy} r={50} fill="oklch(0.15 0.016 260)" stroke={`color-mix(in oklab, ${accent} 60%, transparent)`} strokeWidth={1.4} />
        <circle cx={cx} cy={cy} r={57} fill="none" stroke={`color-mix(in oklab, ${accent2} 35%, transparent)`} strokeWidth={1} strokeDasharray="2 4" className="ch-inner-ring-spin" style={{ transformOrigin: `${cx}px ${cy}px` }} />
        <foreignObject x={cx - 16} y={cy - 24} width={32} height={32}>
          <div style={{ width: 32, height: 32, color: accent }}>{ICONS.spark}</div>
        </foreignObject>
        <text x={cx} y={cy + 26} textAnchor="middle" className="fill-white/85" style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em" }}>
          IA
        </text>

        {/* channel nodes */}
        {positions.map((p) => (
          <g key={p.id} className="ch-node" style={{ transformOrigin: `${p.x}px ${p.y}px`, filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.5))" }}>
            <circle cx={p.x} cy={p.y} r={34} fill="none" stroke={`color-mix(in oklab, ${accent} 25%, transparent)`} strokeWidth={1} className="ch-node-orbit" />
            <rect x={p.x - 27} y={p.y - 27} width={54} height={54} rx={14} fill="oklch(0.16 0.015 260)" stroke="color-mix(in oklab, white 16%, transparent)" className="ch-node-rect" />
            <foreignObject x={p.x - 14} y={p.y - 14} width={28} height={28}>
              <div style={{ width: 28, height: 28, color: `color-mix(in oklab, ${accent} 88%, white 12%)` }}>{ICONS[p.icon]}</div>
            </foreignObject>
            <circle cx={p.x + 19} cy={p.y - 19} r={4.5} fill="#28c840" className="ch-node-status" />
            <text x={p.x} y={p.y + 47} textAnchor="middle" className="fill-white/80 ch-node-label" style={{ fontFamily: "Inter, sans-serif", fontSize: 12.5, fontWeight: 650, letterSpacing: "0.02em" }}>
              {locale === "en" ? p.label.en : p.label.es}
            </text>
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes ch-pulse {
          0%   { offset-distance: 0%; opacity: 0; }
          10%  { opacity: 1; }
          88%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes ch-ring-spin { to { transform: rotate(360deg); } }
        .ch-ring-spin { animation: ch-ring-spin 60s linear infinite; }
        @keyframes ch-inner-ring-spin-anim { to { transform: rotate(-360deg); } }
        .ch-inner-ring-spin { animation: ch-inner-ring-spin-anim 22s linear infinite; }
        @keyframes ch-sweep-anim { to { transform: rotate(360deg); } }
        .ch-sweep { animation: ch-sweep-anim 8s linear infinite; }
        @keyframes ch-line-breathe { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }
        .ch-line-breathe { animation: ch-line-breathe 5s ease-in-out infinite; }
        @keyframes ch-mesh-breathe { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        .ch-mesh-breathe { animation: ch-mesh-breathe 6s ease-in-out infinite; }
        @keyframes ch-core-breathe {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50%      { transform: scale(1.07); opacity: 1; }
        }
        .ch-core-breathe { animation: ch-core-breathe 5s ease-in-out infinite; transform-box: fill-box; }
        @keyframes ch-broadcast-ring-anim {
          0%   { r: 46; opacity: 0.55; stroke-width: 1.5; }
          100% { r: 168; opacity: 0; stroke-width: 0.3; }
        }
        .ch-broadcast-ring { animation: ch-broadcast-ring-anim 3.9s ease-out infinite; transform-box: fill-box; }
        .ch-node { transition: transform 250ms ease, filter 250ms ease; transform-box: fill-box; }
        .ch-node:hover { transform: translateY(-4px); filter: drop-shadow(0 10px 16px rgba(0,0,0,0.65)) drop-shadow(0 0 10px color-mix(in oklab, ${accent} 55%, transparent)); }
        .ch-node:hover .ch-node-label { fill: rgba(255,255,255,1); }
        .ch-node:hover .ch-node-rect { stroke: color-mix(in oklab, ${accent} 75%, transparent); }
        @keyframes ch-node-orbit-spin { to { transform: rotate(360deg); } }
        .ch-node-orbit { animation: ch-node-orbit-spin 14s linear infinite; stroke-dasharray: 2 6; transform-box: fill-box; }
        @keyframes ch-node-status-pulse { 0%, 100% { opacity: 0.6; r: 4; } 50% { opacity: 1; r: 5; } }
        .ch-node-status { animation: ch-node-status-pulse 2s ease-in-out infinite; transform-box: fill-box; }
      `}</style>
    </div>
  );
}
