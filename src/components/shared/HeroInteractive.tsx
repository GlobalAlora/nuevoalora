"use client";

import { useRef } from "react";

interface Props {
  accent: string;
  accent2: string;
}

export function HeroInteractiveBackground({ accent, accent2 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      aria-hidden
      className="pointer-events-auto absolute inset-0 -z-10 overflow-hidden transition-opacity duration-300"
    >
      {/* cursor-follow spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(420px circle at var(--mx, 70%) var(--my, 35%), color-mix(in oklab, ${accent} 16%, transparent), transparent 70%)`,
        }}
      />
      {/* slow-drifting depth blobs for constant ambient movement */}
      <div
        className="hero-bg-drift-a absolute h-[420px] w-[420px] rounded-full blur-3xl opacity-[0.16]"
        style={{ background: `radial-gradient(closest-side, ${accent}, transparent)`, left: "8%", top: "10%" }}
      />
      <div
        className="hero-bg-drift-b absolute h-[340px] w-[340px] rounded-full blur-3xl opacity-[0.14]"
        style={{ background: `radial-gradient(closest-side, ${accent2}, transparent)`, right: "10%", bottom: "5%" }}
      />
      <div
        className="hero-bg-drift-c absolute h-[260px] w-[260px] rounded-full blur-3xl opacity-[0.10]"
        style={{ background: `radial-gradient(closest-side, ${accent}, transparent)`, right: "35%", top: "45%" }}
      />
    </div>
  );
}

export function HeroGraphic({ accent, accent2 }: Props) {
  const outerNodes = [
    { x: 200, y: 30, r: 6 },
    { x: 320, y: 78, r: 5 },
    { x: 366, y: 200, r: 6.5 },
    { x: 320, y: 322, r: 5 },
    { x: 200, y: 370, r: 6 },
    { x: 80, y: 322, r: 5 },
    { x: 34, y: 200, r: 6.5 },
    { x: 80, y: 78, r: 5 },
  ];
  const innerNodes = [
    { x: 200, y: 110, r: 4 },
    { x: 278, y: 200, r: 4 },
    { x: 200, y: 290, r: 4 },
    { x: 122, y: 200, r: 4 },
  ];
  const particles = [
    { x: 140, y: 60 }, { x: 300, y: 140 }, { x: 260, y: 340 }, { x: 60, y: 260 }, { x: 340, y: 260 },
  ];
  // spokes reused as travel paths for the animated "data flow" dots
  const flowPaths = [0, 2, 4, 6].map((i) => {
    const inner = innerNodes[i % innerNodes.length];
    const outer = outerNodes[i];
    return `M ${inner.x} ${inner.y} L ${outer.x} ${outer.y}`;
  });
  const satellites = [
    { r: 96, size: 3, dur: 18, rev: false, delay: 0 },
    { r: 96, size: 2.4, dur: 18, rev: false, delay: 6 },
    { r: 96, size: 2.4, dur: 18, rev: false, delay: 12 },
    { r: 136, size: 2.6, dur: 26, rev: true, delay: 0 },
    { r: 136, size: 2.6, dur: 26, rev: true, delay: 13 },
  ];

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
      <defs>
        <radialGradient id="heroHubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="120" fill="url(#heroHubGlow)" />

      {/* outer rotating rings */}
      <circle cx="200" cy="200" r="196" fill="none" stroke={accent} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="0.5 7" className="hero-graphic-ring" />
      <circle cx="200" cy="200" r="182" fill="none" stroke={accent2} strokeOpacity="0.18" strokeWidth="1" strokeDasharray="2 6" className="hero-graphic-ring" />
      <circle cx="200" cy="200" r="150" fill="none" stroke={accent} strokeOpacity="0.14" strokeWidth="1" strokeDasharray="1 5" className="hero-graphic-ring-rev" />
      {/* rotating dashed hexagon for extra structure */}
      <polygon
        points="200,52 328,126 328,274 200,348 72,274 72,126"
        fill="none"
        stroke={accent}
        strokeOpacity="0.15"
        strokeWidth="1"
        strokeDasharray="3 5"
        className="hero-graphic-ring-rev"
      />

      {/* orbiting satellite dots */}
      {satellites.map((s, i) => (
        <g
          key={`sat-${i}`}
          className={s.rev ? "hero-graphic-orbit-rev" : "hero-graphic-orbit"}
          style={{ animationDuration: `${s.dur}s`, animationDelay: `-${s.delay}s` }}
        >
          <circle cx={200 + s.r} cy="200" r={s.size} fill={i % 2 === 0 ? accent : accent2} fillOpacity="0.85" />
        </g>
      ))}

      {/* mesh lines between adjacent outer nodes */}
      {outerNodes.map((n, i) => {
        const next = outerNodes[(i + 1) % outerNodes.length];
        return (
          <line
            key={`mesh-${i}`}
            x1={n.x} y1={n.y} x2={next.x} y2={next.y}
            stroke={accent2} strokeOpacity="0.12" strokeWidth="1"
          />
        );
      })}

      {/* hub to inner nodes */}
      {innerNodes.map((n, i) => (
        <line key={`inner-e-${i}`} x1="200" y1="200" x2={n.x} y2={n.y} stroke={accent} strokeOpacity="0.4" strokeWidth="1.3" strokeDasharray="3 4" className="hero-graphic-edge" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}

      {/* inner to outer spokes */}
      {outerNodes.map((n, i) => {
        const inner = innerNodes[i % innerNodes.length];
        return (
          <line
            key={`spoke-${i}`}
            x1={inner.x} y1={inner.y} x2={n.x} y2={n.y}
            stroke={i % 2 === 0 ? accent : accent2}
            strokeOpacity="0.28" strokeWidth="1" strokeDasharray="4 5"
            className="hero-graphic-edge"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        );
      })}

      <circle cx="200" cy="200" r="40" fill="none" stroke={accent} strokeOpacity="0.55" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="8" fill={accent} className="hero-graphic-hub" />

      {innerNodes.map((n, i) => (
        <g key={`in-n-${i}`} className="hero-graphic-node" style={{ animationDelay: `${i * 0.3}s` }}>
          <circle cx={n.x} cy={n.y} r="10" fill={accent2} fillOpacity="0.12" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={accent2} />
        </g>
      ))}

      {outerNodes.map((n, i) => (
        <g key={`out-n-${i}`} className="hero-graphic-node" style={{ animationDelay: `${i * 0.22}s` }}>
          <circle cx={n.x} cy={n.y} r={n.r + 9} fill={i % 2 === 0 ? accent : accent2} fillOpacity="0.1" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={i % 2 === 0 ? accent : accent2} />
        </g>
      ))}

      {/* traveling data-flow dots along spokes */}
      {flowPaths.map((d, i) => (
        <circle
          key={`flow-${i}`}
          r="2.6"
          fill={i % 2 === 0 ? accent : accent2}
          className="hero-graphic-flow"
          style={{ offsetPath: `path('${d}')`, animationDelay: `${i * 0.9}s` } as React.CSSProperties}
        />
      ))}

      {particles.map((p, i) => (
        <circle key={`p-${i}`} cx={p.x} cy={p.y} r="1.6" fill={accent} fillOpacity="0.6" className="hero-graphic-particle" style={{ animationDelay: `${i * 0.7}s` }} />
      ))}
    </svg>
  );
}
