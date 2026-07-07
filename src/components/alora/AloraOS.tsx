"use client";

import { useEffect, useRef } from "react";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";
import { ICONS } from "@/lib/icons";

type Node = { id: string; label: { es: string; en: string }; icon: string; angle: number };

const NODES: Node[] = [
  { id: "software", label: { es: "Software", en: "Software" }, icon: "code", angle: 270 },
  { id: "web", label: { es: "Sitios Web", en: "Websites" }, icon: "structure", angle: 330 },
  { id: "apps", label: { es: "Aplicaciones", en: "Applications" }, icon: "gears", angle: 30 },
  { id: "ecommerce", label: { es: "Ecommerce", en: "Ecommerce" }, icon: "cart", angle: 90 },
  { id: "chatbots", label: { es: "Chatbots IA", en: "AI Chatbots" }, icon: "chat", angle: 150 },
  { id: "agents", label: { es: "Agentes IA", en: "AI Agents" }, icon: "headset", angle: 210 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
];

interface Props {
  dict: Pick<Dictionary, "hero">;
  locale?: Locale;
}

export function AloraOS({ locale = "es" }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    svg.querySelectorAll<SVGCircleElement>("[data-pulse]").forEach((p, i) => {
      p.style.animationDelay = `${i * 0.9}s`;
    });
  }, []);

  const size = 640;
  const cx = size / 2;
  const cy = size / 2;
  const baseRadius = 250;

  const positions = NODES.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return {
      ...n,
      x: cx + Math.cos(rad) * baseRadius,
      y: cy + Math.sin(rad) * baseRadius,
    };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--electric) 18%, transparent), transparent 62%)",
        }}
      />
      <svg
        ref={ref}
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="ALORA — soluciones digitales"
      >
        <defs>
          <radialGradient id="alora-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="oklch(0.98 0.02 195)" stopOpacity="0.5" />
            <stop offset="55%"  stopColor="oklch(0.72 0.13 195)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="oklch(0.45 0.16 260)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="alora-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="oklch(0.72 0.13 195)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="oklch(0.62 0.18 295)" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="alora-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="oklch(0.85 0.06 220)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="oklch(0.85 0.06 220)" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="alora-bar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"  stopColor="var(--turquoise)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--turquoise)" stopOpacity="0.95" />
          </linearGradient>
          <filter id="alora-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        {/* faint outer ring for depth */}
        <circle cx={cx} cy={cy} r={baseRadius + 40} fill="none" stroke="url(#alora-edge)" strokeWidth={1} strokeDasharray="1 7" className="alora-ring-spin" style={{ transformOrigin: `${cx}px ${cy}px` }} />

        {/* hexagon ring edges between adjacent solution nodes */}
        {EDGES.map(([a, b]) => {
          const A = positions[a];
          const B = positions[b];
          return (
            <line
              key={`e-${a}-${b}`}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="url(#alora-edge)"
              strokeWidth={1}
              className="alora-edge-breathe"
            />
          );
        })}

        {/* center ↔ node spokes: every solution feeds into the core */}
        {positions.map((p) => (
          <line
            key={`l-${p.id}`}
            x1={cx} y1={cy} x2={p.x} y2={p.y}
            stroke="url(#alora-line)"
            strokeWidth={1.1}
            className="alora-line-breathe"
          />
        ))}

        {/* signals traveling from each solution into the core */}
        {positions.map((p) => (
          <circle
            key={`p-${p.id}`}
            data-pulse
            r={2.8}
            fill="oklch(0.88 0.12 195)"
            style={{
              offsetPath: `path('M ${p.x} ${p.y} L ${cx} ${cy}')`,
              animation: "alora-pulse 5s linear infinite",
              opacity: 0.9,
              filter: "drop-shadow(0 0 4px oklch(0.85 0.13 195))",
            } as React.CSSProperties}
          />
        ))}

        {/* CORE — a mini product/output panel: this is what all the solutions become */}
        <circle cx={cx} cy={cy} r={92} fill="url(#alora-core)" filter="url(#alora-soft)" className="alora-core-breathe" style={{ transformOrigin: `${cx}px ${cy}px` }} />
        <rect x={cx - 68} y={cy - 48} width={136} height={96} rx={12} fill="oklch(0.15 0.016 260)" stroke="color-mix(in oklab, var(--turquoise) 45%, transparent)" strokeWidth={1.2} />
        {/* mini window chrome */}
        <circle cx={cx - 56} cy={cy - 34} r={2.6} fill="oklch(0.6 0.16 25)" opacity={0.7} />
        <circle cx={cx - 47} cy={cy - 34} r={2.6} fill="oklch(0.75 0.14 85)" opacity={0.7} />
        <circle cx={cx - 38} cy={cy - 34} r={2.6} fill="oklch(0.7 0.16 150)" opacity={0.7} />
        <line x1={cx - 68} y1={cy - 24} x2={cx + 68} y2={cy - 24} stroke="color-mix(in oklab, white 10%, transparent)" strokeWidth={1} />
        {/* mini ascending bar chart = growth / operational capacity */}
        {[0, 1, 2, 3].map((i) => {
          const barW = 14;
          const gap = 8;
          const startX = cx - 46 + i * (barW + gap);
          const h = 10 + i * 8;
          return (
            <rect
              key={`bar-${i}`}
              x={startX}
              y={cy + 30 - h}
              width={barW}
              height={h}
              rx={2.5}
              fill="url(#alora-bar)"
              className="alora-bar-grow"
              style={{ transformOrigin: `${startX + barW / 2}px ${cy + 30}px`, animationDelay: `${i * 0.15}s` }}
            />
          );
        })}
        {/* trend line over the bars */}
        <path
          d={`M ${cx - 46} ${cy + 6} L ${cx - 24} ${cy - 2} L ${cx - 2} ${cy - 10} L ${cx + 20} ${cy - 20}`}
          fill="none"
          stroke="var(--electric)"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.9}
        />
        <circle cx={cx + 20} cy={cy - 20} r={3} fill="var(--electric)" className="alora-node-pulse-dot" />

        <text
          x={cx} y={cy + 44}
          textAnchor="middle"
          className="fill-white/70"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.24em" }}
        >
          ALORA
        </text>

        {/* solution nodes */}
        {positions.map((p) => (
          <g key={p.id} className="alora-node" style={{ transformOrigin: `${p.x}px ${p.y}px`, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))" }}>
            <rect
              x={p.x - 24} y={p.y - 24} width={48} height={48} rx={11}
              fill="oklch(0.16 0.015 260)"
              stroke="color-mix(in oklab, white 14%, transparent)"
              className="alora-node-rect"
            />
            <foreignObject x={p.x - 12} y={p.y - 12} width={24} height={24}>
              <div className="alora-node-icon" style={{ width: 24, height: 24, color: "color-mix(in oklab, var(--turquoise) 85%, white 15%)" }}>
                {ICONS[p.icon]}
              </div>
            </foreignObject>
            <text
              x={p.x} y={p.y + 42}
              textAnchor="middle"
              className="fill-white/75 alora-node-label"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em" }}
            >
              {locale === "en" ? p.label.en : p.label.es}
            </text>
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes alora-pulse {
          0%   { offset-distance: 0%; opacity: 0; }
          15%  { opacity: 0.9; }
          85%  { opacity: 0.9; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes alora-ring-spin { to { transform: rotate(360deg); } }
        .alora-ring-spin { animation: alora-ring-spin 90s linear infinite; }
        @keyframes alora-bar-grow {
          0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.12); }
        }
        .alora-bar-grow { animation: alora-bar-grow 3.4s ease-in-out infinite; }
        @keyframes alora-node-pulse {
          0%, 100% { r: 2.6; opacity: 0.7; } 50% { r: 4.2; opacity: 1; }
        }
        .alora-node-pulse-dot { animation: alora-node-pulse 2.6s ease-in-out infinite; transform-box: fill-box; }
        @keyframes alora-edge-breathe {
          0%, 100% { opacity: 0.6; } 50% { opacity: 1; }
        }
        .alora-edge-breathe { animation: alora-edge-breathe 7s ease-in-out infinite; }
        @keyframes alora-line-breathe {
          0%, 100% { opacity: 0.55; } 50% { opacity: 1; }
        }
        .alora-line-breathe { animation: alora-line-breathe 6s ease-in-out infinite; }
        @keyframes alora-core-breathe {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50%      { transform: scale(1.05); opacity: 1; }
        }
        .alora-core-breathe { animation: alora-core-breathe 6s ease-in-out infinite; transform-box: fill-box; }
        .alora-node { transition: transform 250ms ease, filter 250ms ease; transform-box: fill-box; cursor: pointer; }
        .alora-node:hover { transform: translateY(-4px); filter: drop-shadow(0 8px 14px rgba(0,0,0,0.6)) drop-shadow(0 0 8px color-mix(in oklab, var(--turquoise) 50%, transparent)); }
        .alora-node:hover .alora-node-label { fill: rgba(255,255,255,1); }
        .alora-node:hover .alora-node-rect { stroke: color-mix(in oklab, var(--turquoise) 75%, transparent); }
      `}</style>
    </div>
  );
}
