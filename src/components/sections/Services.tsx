import Link from "next/link";
import type { Dictionary } from "@/dictionaries/es";
import type { Locale } from "@/lib/i18n";

const SOLUTION_SLUGS = [
  "desarrollo-software",
  "atencion-cliente-ia",
  "chatbots",
  "desarrollo-web",
  "aplicaciones-web",
  "ecommerce",
];

interface Props {
  dict: Dictionary;
  locale: Locale;
}

type VisualKind = "nodes" | "waves" | "messages" | "layout" | "screens" | "checkout";
const VISUALS: VisualKind[] = ["nodes", "waves", "messages", "layout", "screens", "checkout"];

function DarkBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.11 0.012 260) 0%, oklch(0.125 0.018 255) 50%, oklch(0.11 0.012 260) 100%)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[820px] w-[1080px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 12%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute right-[4%] top-[58%] h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-3xl opacity-45"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: "radial-gradient(80% 70% at 50% 50%, black 30%, transparent 80%)",
          maskImage: "radial-gradient(80% 70% at 50% 50%, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
}

function ServiceVisual({ kind }: { kind: VisualKind }) {
  const cyan = "color-mix(in oklab, var(--turquoise) 90%, transparent)";
  const elec = "color-mix(in oklab, var(--electric) 90%, transparent)";
  const soft = "rgba(255,255,255,0.45)";

  if (kind === "nodes") {
    const nodes = [
      { x: 50, y: 55, r: 5 }, { x: 115, y: 30, r: 4 }, { x: 170, y: 60, r: 6 },
      { x: 230, y: 28, r: 4 }, { x: 295, y: 55, r: 5 }, { x: 85, y: 95, r: 3.5 },
      { x: 170, y: 105, r: 4 }, { x: 255, y: 95, r: 3.5 },
    ];
    const edges: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,2],[6,7],[7,4],[2,6]];
    return (
      <svg viewBox="0 0 340 150" className="svc-parallax absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={cyan} />
            <stop offset="100%" stopColor={cyan} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={170} cy={60} r={22} fill="url(#hub)" opacity={0.5} />
        {edges.map(([a, b], i) => (
          <line key={i} className="svc-edge"
            x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke={i % 3 === 0 ? elec : cyan} strokeOpacity={0.45} strokeWidth={1} strokeDasharray="3 4"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r + 3} fill={i === 2 ? cyan : elec} opacity={0.08} />
            <circle className="svc-node" cx={n.x} cy={n.y} r={n.r} fill={i === 2 ? cyan : i % 2 ? elec : cyan} />
          </g>
        ))}
      </svg>
    );
  }

  if (kind === "waves") {
    return (
      <svg viewBox="0 0 340 150" className="svc-parallax absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="wv" x1="0" x2="1">
            <stop offset="0" stopColor={cyan} stopOpacity="0.1" />
            <stop offset="0.5" stopColor={cyan} />
            <stop offset="1" stopColor={elec} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <g className="svc-wave-shift">
          {Array.from({ length: 36 }).map((_, i) => {
            const h = 6 + Math.abs(Math.sin(i * 0.55)) * 28 + (i % 3) * 3;
            return <rect key={i} x={-10 + i * 10} y={55 - h / 2} width={2.5} height={h} rx={1.2} fill="url(#wv)" opacity={0.7} />;
          })}
        </g>
        <circle cx={170} cy={55} r={18} stroke={cyan} strokeOpacity={0.4} fill="none" />
        <circle className="svc-node" cx={170} cy={55} r={4} fill={cyan} />
        <g>
          <rect x={205} y={92} width={110} height={28} rx={14} fill="rgba(0,0,0,0.35)" stroke={cyan} strokeOpacity={0.55} />
          <circle className="svc-typing-dot" cx={222} cy={106} r={2.2} fill={cyan} />
          <circle className="svc-typing-dot" cx={234} cy={106} r={2.2} fill={cyan} />
          <circle className="svc-typing-dot" cx={246} cy={106} r={2.2} fill={cyan} />
        </g>
      </svg>
    );
  }

  if (kind === "messages") {
    return (
      <svg viewBox="0 0 340 150" className="svc-parallax absolute inset-0 h-full w-full">
        <g className="svc-float">
          <rect x={18} y={20} width={150} height={32} rx={14} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
          <rect x={46} y={32} width={104} height={3} rx={1.5} fill={soft} opacity={0.6} />
          <rect x={46} y={40} width={70} height={3} rx={1.5} fill={soft} opacity={0.35} />
        </g>
        <line className="svc-edge" x1={120} y1={92} x2={210} y2={92} stroke={cyan} strokeOpacity={0.5} strokeDasharray="3 4" />
        <g>
          <rect x={210} y={78} width={48} height={28} rx={6} fill="rgba(0,0,0,0.4)" stroke={cyan} strokeOpacity={0.5} />
          <text x={234} y={96} fontSize="9" fill={cyan} textAnchor="middle" fontFamily="monospace" letterSpacing="0.1em">API</text>
        </g>
        <g>
          <rect x={130} y={108} width={180} height={32} rx={14} fill="rgba(0,0,0,0.3)" stroke={cyan} strokeOpacity={0.55} />
          <circle className="svc-node" cx={148} cy={124} r={4} fill={cyan} />
          <rect x={162} y={117} width={130} height={3} rx={1.5} fill={cyan} opacity={0.75} />
          <rect x={162} y={125} width={90} height={3} rx={1.5} fill={cyan} opacity={0.5} />
        </g>
      </svg>
    );
  }

  if (kind === "layout") {
    return (
      <svg viewBox="0 0 340 150" className="svc-parallax absolute inset-0 h-full w-full">
        <g className="svc-float">
          <rect x={28} y={14} width={284} height={122} rx={8} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.18)" />
          <rect x={28} y={14} width={284} height={18} rx={8} fill="rgba(255,255,255,0.05)" />
          <rect x={40} y={42} width={260} height={32} rx={4} fill={cyan} opacity={0.16} stroke={cyan} strokeOpacity={0.5} />
          <rect x={50} y={52} width={90} height={4} rx={2} fill={cyan} opacity={0.8} />
          <rect x={40} y={80} width={82} height={48} rx={4} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
          <rect x={129} y={80} width={82} height={48} rx={4} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
          <rect x={218} y={80} width={82} height={48} rx={4} fill={elec} opacity={0.18} stroke={elec} strokeOpacity={0.55} />
        </g>
        <line className="svc-edge" x1={90} y1={58} x2={260} y2={104} stroke={elec} strokeOpacity={0.6} strokeWidth={1.2} strokeDasharray="3 4" />
        <circle className="svc-node" cx={90} cy={58} r={3.5} fill={cyan} />
        <circle className="svc-node" cx={260} cy={104} r={3.5} fill={elec} />
      </svg>
    );
  }

  if (kind === "screens") {
    return (
      <svg viewBox="0 0 340 150" className="svc-parallax absolute inset-0 h-full w-full">
        <g style={{ transform: "translate(58px, 22px) rotate(-7deg)", transformOrigin: "100px 65px" }}>
          <rect width={78} height={108} rx={10} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" />
          <rect x={10} y={12} width={58} height={6} rx={2} fill={soft} opacity={0.5} />
          <rect x={10} y={38} width={58} height={28} rx={3} fill={cyan} opacity={0.22} />
        </g>
        <g style={{ transformOrigin: "170px 75px" }} className="svc-sync-icon">
          <circle cx={170} cy={75} r={9} fill="none" stroke={cyan} strokeOpacity={0.6} strokeDasharray="4 4" />
          <circle cx={170} cy={75} r={2} fill={cyan} />
        </g>
        <g className="svc-float" style={{ transform: "translate(196px, 14px) rotate(6deg)" }}>
          <rect width={86} height={122} rx={12} fill="rgba(0,0,0,0.4)" stroke={cyan} strokeOpacity={0.55} />
          <rect x={12} y={14} width={62} height={8} rx={2} fill={cyan} opacity={0.75} />
          <polyline points="14,72 22,66 30,68 38,58 46,62 54,52 62,56 70,48" fill="none" stroke={cyan} strokeOpacity={0.9} strokeWidth={1.2} />
          <rect x={12} y={88} width={62} height={8} rx={4} fill={cyan} opacity={0.85} />
        </g>
        <line className="svc-edge" x1={132} y1={75} x2={196} y2={75} stroke={cyan} strokeOpacity={0.5} strokeDasharray="3 4" />
      </svg>
    );
  }

  // checkout
  return (
    <svg viewBox="0 0 340 150" className="svc-parallax absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="ck" x1="0" x2="1">
          <stop offset="0" stopColor={cyan} />
          <stop offset="1" stopColor={elec} />
        </linearGradient>
      </defs>
      <line className="svc-edge" x1={40} y1={58} x2={300} y2={58} stroke="url(#ck)" strokeOpacity={0.55} strokeWidth={1.2} strokeDasharray="3 4" />
      <g>
        <circle cx={56} cy={58} r={18} fill="rgba(0,0,0,0.35)" stroke={cyan} strokeOpacity={0.55} />
        <text x={56} y={90} fontSize="8" fill={soft} textAnchor="middle" letterSpacing="0.1em" fontFamily="monospace">CART</text>
      </g>
      <g>
        <circle cx={170} cy={58} r={20} fill="rgba(0,0,0,0.4)" stroke={elec} strokeOpacity={0.65} />
        <circle className="svc-node" cx={170} cy={58} r={2} fill={elec} />
        <text x={170} y={92} fontSize="8" fill={soft} textAnchor="middle" letterSpacing="0.1em" fontFamily="monospace">PAY</text>
      </g>
      <g>
        <circle cx={284} cy={58} r={18} fill="rgba(0,0,0,0.35)" stroke={cyan} strokeOpacity={0.55} />
        <text x={284} y={90} fontSize="8" fill={soft} textAnchor="middle" letterSpacing="0.1em" fontFamily="monospace">SKU</text>
      </g>
    </svg>
  );
}

export function Services({ dict, locale }: Props) {
  const { services } = dict;

  return (
    <section id="servicios" className="relative isolate overflow-hidden bg-ink text-white">
      <DarkBackground />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-20">
        {/* Header */}
        <div className="mx-auto max-w-[960px] text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em]">
            <span className="text-white/50">{services.sectionIndex}</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-white/80">{services.sectionLabel}</span>
          </div>
          <h2
            className="mt-6 text-white sm:whitespace-nowrap"
            style={{ fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: 720, lineHeight: 1.04, letterSpacing: "-0.035em" }}
          >
            {services.heading}
          </h2>
          <p className="mx-auto mt-5 text-pretty" style={{ maxWidth: "620px", fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.66)" }}>
            {services.body}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, idx) => (
            <article
              key={item.n}
              className="svc-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 ease-out hover:-translate-y-1.5"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 -20px 40px -20px rgba(0,0,0,0.45)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* hover radial */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "radial-gradient(260px circle at var(--mx,50%) var(--my,40%), color-mix(in oklab, var(--turquoise) 24%, transparent), transparent 70%)" }}
              />
              {/* gradient border */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  padding: "1px",
                  background: "linear-gradient(140deg, color-mix(in oklab, var(--turquoise) 60%, transparent), color-mix(in oklab, var(--electric) 35%, transparent) 40%, transparent 70%)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div className="relative">
                {/* Visual */}
                <div className="relative h-[110px] w-full overflow-hidden rounded-xl">
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(120% 100% at 50% 110%, color-mix(in oklab, var(--turquoise) 14%, transparent), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))" }}
                  />
                  <ServiceVisual kind={VISUALS[idx] ?? "nodes"} />
                </div>

                {/* Number / title */}
                <div className="mt-3.5 flex items-center gap-3">
                  <span className="font-mono text-white/45" style={{ fontSize: "11px", letterSpacing: "0.24em" }}>{item.n}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3
                  className="mt-2 text-white/90 transition-colors duration-300 group-hover:text-white"
                  style={{ fontSize: "20px", fontWeight: 620, lineHeight: 1.18, letterSpacing: "-0.02em" }}
                >
                  {item.title}
                </h3>
                <p className="mt-1.5 text-pretty" style={{ fontSize: "14px", lineHeight: 1.5, color: "rgba(255,255,255,0.62)" }}>
                  {item.desc}
                </p>
                <Link
                  href={`/${locale}/soluciones/${SOLUTION_SLUGS[idx] ?? "desarrollo-web"}`}
                  className="svc-cta group/cta mt-4 inline-flex items-center gap-1.5 rounded-full border transition-all duration-300"
                  style={{
                    fontSize: "12.5px",
                    fontWeight: 600,
                    padding: "6px 14px",
                    color: "var(--turquoise)",
                    borderColor: "color-mix(in oklab, var(--turquoise) 35%, transparent)",
                    background: "color-mix(in oklab, var(--turquoise) 10%, transparent)",
                  }}
                >
                  {services.cta}
                  <span className="transition-transform duration-300 group-hover/cta:translate-x-0.5">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes svc-pulse { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.15)} }
        @keyframes svc-dash  { to{stroke-dashoffset:-40} }
        @keyframes svc-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes svc-wave  { 0%{transform:translateX(0)} 100%{transform:translateX(-40px)} }
        @keyframes svc-typing { 0%,100%{opacity:.35} 50%{opacity:1} }
        @keyframes svc-sync  { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(180deg)} }
        .svc-node { animation: svc-pulse 4.5s ease-in-out infinite; }
        .svc-edge { animation: svc-dash 6s linear infinite; }
        .svc-float { animation: svc-float 6s ease-in-out infinite; }
        .svc-wave-shift { animation: svc-wave 8s linear infinite; }
        .svc-typing-dot { animation: svc-typing 1.4s ease-in-out infinite; }
        .svc-typing-dot:nth-child(2) { animation-delay:.2s; }
        .svc-typing-dot:nth-child(3) { animation-delay:.4s; }
        .svc-sync-icon { animation: svc-sync 6s ease-in-out infinite; transform-box:fill-box; transform-origin:center; }
        .svc-cta:hover { background: color-mix(in oklab, var(--turquoise) 20%, transparent); border-color: color-mix(in oklab, var(--turquoise) 60%, transparent); }
        .svc-parallax { transition: transform 700ms cubic-bezier(.2,.7,.2,1); }
        .svc-card:hover .svc-parallax { transform: translate3d(0,-3px,0) scale(1.02); }
        .svc-card:hover {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.10),
            inset 0 -20px 40px -20px rgba(0,0,0,0.5),
            0 30px 60px -28px color-mix(in oklab, var(--turquoise) 45%, transparent),
            0 0 0 1px color-mix(in oklab, var(--turquoise) 12%, transparent);
        }
      `}</style>
    </section>
  );
}
