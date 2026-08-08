"use client";

/** Page-wide ambient tech background: drifting grid, glow orbs and a slow scan sweep. Fixed, behind everything, decorative only. */
export function TechBackground({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Drifting grid */}
      <div
        className="tech-bg-grid absolute inset-[-10%]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(80% 70% at 50% 20%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(80% 70% at 50% 20%, black 20%, transparent 75%)",
        }}
      />
      {/* Drifting glow orbs */}
      <div
        className="tech-bg-orb-a absolute h-[560px] w-[560px] rounded-full blur-3xl opacity-[0.16]"
        style={{ background: `radial-gradient(closest-side, ${accent}, transparent)`, left: "-10%", top: "0%" }}
      />
      <div
        className="tech-bg-orb-b absolute h-[480px] w-[480px] rounded-full blur-3xl opacity-[0.13]"
        style={{ background: `radial-gradient(closest-side, ${accent2}, transparent)`, right: "-8%", top: "28%" }}
      />
      <div
        className="tech-bg-orb-c absolute h-[420px] w-[420px] rounded-full blur-3xl opacity-[0.11]"
        style={{ background: `radial-gradient(closest-side, ${accent}, transparent)`, left: "20%", top: "68%" }}
      />
      {/* Slow vertical scan sweep */}
      <div
        className="tech-bg-scan absolute inset-x-0 h-[240px] opacity-[0.06]"
        style={{ background: `linear-gradient(180deg, transparent, ${accent}, transparent)` }}
      />
      {/* Fine noise/particles */}
      <div className="tech-bg-particles absolute inset-0 opacity-[0.5]">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="tech-bg-particle absolute rounded-full"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: i % 3 === 0 ? "3px" : "2px",
              height: i % 3 === 0 ? "3px" : "2px",
              background: i % 2 === 0 ? accent : accent2,
              animationDelay: `${(i % 9) * 0.7}s`,
              animationDuration: `${9 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        .tech-bg-grid { animation: tech-grid-drift 34s linear infinite; }
        @keyframes tech-grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(56px, 56px); }
        }
        .tech-bg-orb-a { animation: tech-orb-a 22s ease-in-out infinite; }
        .tech-bg-orb-b { animation: tech-orb-b 26s ease-in-out infinite; }
        .tech-bg-orb-c { animation: tech-orb-c 30s ease-in-out infinite; }
        @keyframes tech-orb-a { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(4%, 6%) scale(1.08); } }
        @keyframes tech-orb-b { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-5%, 4%) scale(1.06); } }
        @keyframes tech-orb-c { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(3%, -5%) scale(1.1); } }
        .tech-bg-scan { animation: tech-scan-sweep 12s ease-in-out infinite; }
        @keyframes tech-scan-sweep {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        .tech-bg-particle { animation-name: tech-particle-drift; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        @keyframes tech-particle-drift {
          0%, 100% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(-26px); opacity: 0.7; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-bg-grid, .tech-bg-orb-a, .tech-bg-orb-b, .tech-bg-orb-c, .tech-bg-scan, .tech-bg-particle { animation: none; }
        }
      `}</style>
    </div>
  );
}
