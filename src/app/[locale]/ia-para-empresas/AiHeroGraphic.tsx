"use client";

// Math.cos/sin can differ in their last decimal digits between the server
// and client JS engines, which fails hydration on SVG coordinates. Round to
// a fixed precision so server and client always emit the same string.
const r2 = (n: number) => Math.round(n * 100) / 100;

const LAYERS = [
  { x: 96, nodes: [130, 170, 210, 250, 290] },
  { x: 200, nodes: [110, 155, 200, 245, 290] },
  { x: 304, nodes: [130, 190, 250] },
];

const TOKENS = ["softmax", "∇θ", "0.947", "attn", "tanh", "[EOS]", "GPT", "λ"];

/** Bespoke hero visual — a live neural network doing a forward pass, wrapped in an attention-grid HUD and drifting token chips. Not the shared site HeroGraphic. */
export function AiHeroGraphic({ accent, accent2 }: { accent: string; accent2: string }) {
  const links: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
  for (let l = 0; l < LAYERS.length - 1; l++) {
    LAYERS[l].nodes.forEach((y1, i) => {
      LAYERS[l + 1].nodes.forEach((y2, j) => {
        links.push({ x1: LAYERS[l].x, y1, x2: LAYERS[l + 1].x, y2, delay: (i + j + l * 4) * 0.12 });
      });
    });
  }

  const gridCells = Array.from({ length: 36 }, (_, i) => i);
  const outerTicks = Array.from({ length: 32 }, (_, i) => i);

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
      <defs>
        <radialGradient id="aiCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="55%" stopColor={accent2} stopOpacity="0.14" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="aiTraceGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accent2} />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#aiCoreGlow)" />

      {/* Outer scanner ring with tick marks */}
      <g className="ai-hero-scan-ring">
        <circle cx="200" cy="200" r="196" fill="none" stroke={accent} strokeOpacity="0.12" strokeWidth="1" />
        {outerTicks.map((i) => {
          const angle = (i / outerTicks.length) * Math.PI * 2;
          const inner = 190, outer = i % 4 === 0 ? 200 : 195;
          return (
            <line
              key={i}
              x1={r2(200 + inner * Math.cos(angle))} y1={r2(200 + inner * Math.sin(angle))}
              x2={r2(200 + outer * Math.cos(angle))} y2={r2(200 + outer * Math.sin(angle))}
              stroke={accent2} strokeOpacity="0.3" strokeWidth="1.2"
            />
          );
        })}
        <path d="M 200 4 A 196 196 0 0 1 396 200" fill="none" stroke="url(#aiTraceGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </g>

      {/* Neural network — forward pass */}
      <g>
        {links.map((ln, i) => (
          <line key={`ln-${i}`} x1={ln.x1} y1={ln.y1} x2={ln.x2} y2={ln.y2} stroke={accent} strokeOpacity="0.1" strokeWidth="1" />
        ))}
        {links.map((ln, i) => (
          <circle key={`pulse-${i}`} r="2.4" fill={i % 3 === 0 ? accent2 : accent} className="ai-hero-synapse"
            style={{ offsetPath: `path('M${ln.x1},${ln.y1} L${ln.x2},${ln.y2}')`, animationDelay: `${ln.delay}s` } as React.CSSProperties} />
        ))}
        {LAYERS.map((layer, li) =>
          layer.nodes.map((y, ni) => (
            <g key={`node-${li}-${ni}`} className="ai-hero-neuron" style={{ animationDelay: `${(li * 5 + ni) * 0.15}s` }}>
              <circle cx={layer.x} cy={y} r="9" fill={li === 1 ? accent2 : accent} fillOpacity="0.14" />
              <circle cx={layer.x} cy={y} r="4" fill={li === 1 ? accent2 : accent} />
            </g>
          ))
        )}
      </g>

      {/* Attention-grid HUD panel, floating top-right */}
      <g transform="translate(258, 44) rotate(-6)" opacity="0.92">
        <rect x="-6" y="-6" width="104" height="104" rx="6" fill="oklch(0.14 0.02 260)" fillOpacity="0.55" stroke={accent} strokeOpacity="0.35" strokeWidth="1" />
        {gridCells.map((i) => {
          const row = Math.floor(i / 6), col = i % 6;
          return (
            <rect
              key={i}
              x={col * 16} y={row * 16} width="13" height="13" rx="2"
              fill={(i * 37) % 5 === 0 ? accent2 : accent}
              className="ai-hero-cell"
              style={{ animationDelay: `${((i * 53) % 24) * 0.09}s` }}
            />
          );
        })}
      </g>
      <text x="258" y="34" fontSize="8" fontFamily="ui-monospace, monospace" fill={accent} opacity="0.55" letterSpacing="1">ATTENTION</text>

      {/* Drifting token chips */}
      {TOKENS.map((t, i) => {
        const angle = (i / TOKENS.length) * Math.PI * 2 + 0.4;
        const rad = 168;
        const x = r2(200 + rad * Math.cos(angle));
        const y = r2(200 + rad * Math.sin(angle));
        return (
          <g key={t} className="ai-hero-token" style={{ animationDelay: `${i * 0.9}s` }}>
            <rect x={x - (t.length * 3.6 + 8)} y={y - 9} width={t.length * 7.2 + 16} height="18" rx="9" fill="oklch(0.14 0.02 260)" fillOpacity="0.7" stroke={i % 2 === 0 ? accent : accent2} strokeOpacity="0.4" strokeWidth="1" />
            <text x={x} y={y + 4} fontSize="9.5" fontFamily="ui-monospace, monospace" fill={i % 2 === 0 ? accent : accent2} textAnchor="middle">{t}</text>
          </g>
        );
      })}

      {/* Core hub at the center of the middle layer */}
      <circle cx="200" cy="200" r="15" fill="oklch(0.14 0.02 260)" stroke="url(#aiTraceGrad)" strokeWidth="1.8" className="ai-hero-core-ring" />

      <style>{`
        .ai-hero-scan-ring { animation: ai-hero-rotate 50s linear infinite; transform-origin: 200px 200px; }
        @keyframes ai-hero-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .ai-hero-synapse { animation-name: ai-hero-synapse-move; animation-duration: 1.8s; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        @keyframes ai-hero-synapse-move { 0% { offset-distance: 0%; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
        .ai-hero-neuron { animation: ai-hero-neuron-pulse 2.6s ease-in-out infinite; transform-origin: center; }
        @keyframes ai-hero-neuron-pulse { 0%, 100% { opacity: 0.65; transform: scale(1); } 50% { opacity: 1; transform: scale(1.18); } }
        .ai-hero-cell { animation: ai-hero-cell-blink 3s ease-in-out infinite; }
        @keyframes ai-hero-cell-blink { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.9; } }
        .ai-hero-core-ring { animation: ai-hero-rotate 10s linear infinite; transform-origin: 200px 200px; }
        .ai-hero-token { animation: ai-hero-token-drift 9s ease-in-out infinite; }
        @keyframes ai-hero-token-drift { 0%, 100% { opacity: 0.55; transform: translateY(0px); } 50% { opacity: 1; transform: translateY(-7px); } }
        @media (prefers-reduced-motion: reduce) {
          .ai-hero-scan-ring, .ai-hero-synapse, .ai-hero-neuron, .ai-hero-cell, .ai-hero-core-ring, .ai-hero-token { animation: none; }
        }
      `}</style>
    </svg>
  );
}
