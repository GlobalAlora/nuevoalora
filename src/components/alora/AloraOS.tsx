"use client";

import { useEffect, useRef } from "react";
import type { Dictionary } from "@/dictionaries/es";

type Node = { id: string; angle: number; r: number };

const NODES: Node[] = [
  { id: "SOFTWARE",       angle: 270, r: 0.96 },
  { id: "WEB",            angle: 310, r: 0.84 },
  { id: "IA",             angle: 350, r: 1.0  },
  { id: "AUTOMATIZACIÓN", angle: 30,  r: 0.9  },
  { id: "SISTEMAS",       angle: 70,  r: 1.0  },
  { id: "OPERACIONES",    angle: 110, r: 0.86 },
  { id: "MARKETING",      angle: 150, r: 0.98 },
  { id: "CAPTACIÓN",      angle: 190, r: 0.9  },
  { id: "ESTRATEGIA",     angle: 230, r: 1.0  },
];

const EDGES: [string, string][] = [
  ["SOFTWARE", "WEB"],
  ["WEB", "IA"],
  ["IA", "AUTOMATIZACIÓN"],
  ["AUTOMATIZACIÓN", "SISTEMAS"],
  ["SISTEMAS", "OPERACIONES"],
  ["OPERACIONES", "MARKETING"],
  ["MARKETING", "CAPTACIÓN"],
  ["CAPTACIÓN", "ESTRATEGIA"],
  ["ESTRATEGIA", "SOFTWARE"],
  ["SOFTWARE", "AUTOMATIZACIÓN"],
  ["WEB", "SISTEMAS"],
  ["IA", "OPERACIONES"],
  ["MARKETING", "ESTRATEGIA"],
  ["CAPTACIÓN", "SOFTWARE"],
];

interface Props {
  dict: Pick<Dictionary, "hero">;
}

export function AloraOS({ dict }: Props) {
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
  const baseRadius = 247;

  const positions = NODES.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return {
      ...n,
      x: cx + Math.cos(rad) * baseRadius * n.r,
      y: cy + Math.sin(rad) * baseRadius * n.r,
    };
  });

  const byId = Object.fromEntries(positions.map((p) => [p.id, p]));

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
        className="h-full w-full"
        role="img"
        aria-label="ALORA OS — sistema operativo digital"
      >
        <defs>
          <radialGradient id="alora-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="oklch(0.98 0.02 195)" stopOpacity="0.6" />
            <stop offset="55%"  stopColor="oklch(0.72 0.13 195)" stopOpacity="0.34" />
            <stop offset="100%" stopColor="oklch(0.45 0.16 260)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="alora-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="oklch(0.72 0.13 195)" stopOpacity="0.30" />
            <stop offset="100%" stopColor="oklch(0.62 0.18 295)" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="alora-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="oklch(0.85 0.06 220)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="oklch(0.85 0.06 220)" stopOpacity="0.14" />
          </linearGradient>
          <filter id="alora-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        {/* node ↔ node structural edges */}
        {EDGES.map(([a, b]) => {
          const A = byId[a];
          const B = byId[b];
          if (!A || !B) return null;
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

        {/* center ↔ node lines */}
        {positions.map((p) => (
          <line
            key={`l-${p.id}`}
            x1={cx} y1={cy} x2={p.x} y2={p.y}
            stroke="url(#alora-line)"
            strokeWidth={1.1}
            className="alora-line-breathe"
          />
        ))}

        {/* signal pulses traveling outward */}
        {positions.map((p) => (
          <circle
            key={`p-${p.id}`}
            data-pulse
            r={2.8}
            fill="oklch(0.88 0.12 195)"
            style={{
              offsetPath: `path('M ${cx} ${cy} L ${p.x} ${p.y}')`,
              animation: "alora-pulse 6s linear infinite",
              opacity: 0.9,
              filter: "drop-shadow(0 0 4px oklch(0.85 0.13 195))",
            } as React.CSSProperties}
          />
        ))}

        {/* traveling signals along ring edges */}
        {EDGES.slice(0, 6).map(([a, b], i) => {
          const A = byId[a];
          const B = byId[b];
          if (!A || !B) return null;
          return (
            <circle
              key={`s-${a}-${b}`}
              r={1.8}
              fill="oklch(0.92 0.1 195)"
              style={{
                offsetPath: `path('M ${A.x} ${A.y} L ${B.x} ${B.y}')`,
                animation: "alora-edge-signal 7s linear infinite",
                animationDelay: `${i * 0.9}s`,
                opacity: 0.85,
                filter: "drop-shadow(0 0 3px oklch(0.9 0.12 195))",
              } as React.CSSProperties}
            />
          );
        })}

        {/* core glow */}
        <circle
          cx={cx} cy={cy} r={61}
          fill="url(#alora-core)"
          filter="url(#alora-soft)"
          className="alora-core-breathe"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        {/* core disc */}
        <circle
          cx={cx} cy={cy} r={41}
          fill="oklch(0.17 0.018 260)"
          stroke="color-mix(in oklab, var(--turquoise) 45%, transparent)"
          strokeWidth={1}
        />
        <circle
          cx={cx} cy={cy} r={41}
          fill="none"
          stroke="color-mix(in oklab, white 6%, transparent)"
          strokeDasharray="1 4"
        />
        <text
          x={cx} y={cy + 5}
          textAnchor="middle"
          className="fill-white"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.22em" }}
        >
          ALORA
        </text>

        {/* module nodes */}
        {positions.map((p) => (
          <g
            key={p.id}
            className="alora-node"
            style={{ transformOrigin: `${p.x}px ${p.y}px`, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))" }}
          >
            <rect
              x={p.x - 22} y={p.y - 22} width={44} height={44} rx={10}
              fill="oklch(0.16 0.015 260)"
              stroke="color-mix(in oklab, white 14%, transparent)"
              className="alora-node-rect"
            />
            <circle cx={p.x} cy={p.y} r={2.6} fill="oklch(0.88 0.12 195)" data-node-pulse style={{ animationDelay: `${(p.angle / 360) * 4}s` }} />
            <text
              x={p.x} y={p.y + 44}
              textAnchor="middle"
              className="fill-white/75 alora-node-label"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.16em" }}
            >
              {p.id}
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
        @keyframes alora-edge-signal {
          0%   { offset-distance: 0%; opacity: 0; }
          10%  { opacity: 0.9; }
          90%  { opacity: 0.9; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes alora-node-pulse {
          0%, 100% { r: 2.6; opacity: 0.7; }
          50%      { r: 4.2; opacity: 1; }
        }
        [data-node-pulse] { animation: alora-node-pulse 4.5s ease-in-out infinite; transform-box: fill-box; }
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
