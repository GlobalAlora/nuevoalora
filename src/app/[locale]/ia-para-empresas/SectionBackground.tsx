"use client";

/**
 * Per-section animated background. Every element animates continuously (no
 * cursor-reactive static gradients — those read as a motionless "stain" and
 * sit right behind text). Kept low-opacity and mostly edge-weighted so it
 * never fights with copy for legibility.
 */
type Variant = "particles" | "diagonal" | "pulse" | "aurora";

export function SectionBackground({ variant, accent, accent2 }: { variant: Variant; accent: string; accent2: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {variant === "particles" && <ParticlesBg accent={accent} accent2={accent2} />}
      {variant === "diagonal" && <DiagonalBg accent={accent} accent2={accent2} />}
      {variant === "pulse" && <PulseBg accent={accent} accent2={accent2} />}
      {variant === "aurora" && <AuroraBg accent={accent} accent2={accent2} />}
    </div>
  );
}

function ParticlesBg({ accent, accent2 }: { accent: string; accent2: string }) {
  const dots = Array.from({ length: 22 });
  return (
    <>
      <div
        className="absolute inset-[-5%]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(75% 65% at 50% 30%, black 15%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(75% 65% at 50% 30%, black 15%, transparent 70%)",
        }}
      />
      <div className="sb-orb-1 absolute h-[420px] w-[420px] rounded-full blur-3xl opacity-[0.14]" style={{ background: `radial-gradient(closest-side, ${accent}, transparent)`, left: "-8%", top: "-5%" }} />
      <div className="sb-orb-2 absolute h-[360px] w-[360px] rounded-full blur-3xl opacity-[0.12]" style={{ background: `radial-gradient(closest-side, ${accent2}, transparent)`, right: "-6%", bottom: "0%" }} />
      {dots.map((_, i) => (
        <span
          key={i}
          className="sb-particle absolute rounded-full"
          style={{
            left: `${(i * 43) % 100}%`, top: `${(i * 61) % 100}%`,
            width: i % 3 === 0 ? "3px" : "2px", height: i % 3 === 0 ? "3px" : "2px",
            background: i % 2 === 0 ? accent : accent2,
            animationDelay: `${(i % 8) * 0.6}s`, animationDuration: `${8 + (i % 4)}s`,
          }}
        />
      ))}
      <style>{`
        .sb-orb-1 { animation: sb-orb-move-1 20s ease-in-out infinite; }
        .sb-orb-2 { animation: sb-orb-move-2 24s ease-in-out infinite; }
        @keyframes sb-orb-move-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(5%,7%) scale(1.1); } }
        @keyframes sb-orb-move-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-6%,-4%) scale(1.08); } }
        .sb-particle { animation-name: sb-particle-float; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        @keyframes sb-particle-float { 0%,100% { transform: translateY(0); opacity: 0.2; } 50% { transform: translateY(-22px); opacity: 0.75; } }
        @media (prefers-reduced-motion: reduce) { .sb-orb-1,.sb-orb-2,.sb-particle { animation: none; } }
      `}</style>
    </>
  );
}

function DiagonalBg({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <>
      <div
        className="sb-diag absolute inset-[-20%] opacity-[0.09]"
        style={{
          backgroundImage: `repeating-linear-gradient(115deg, ${accent} 0px, ${accent} 1.5px, transparent 1.5px, transparent 90px)`,
        }}
      />
      <div className="sb-beam absolute h-full w-[240px] opacity-[0.08]" style={{ background: `linear-gradient(90deg, transparent, ${accent2}, transparent)`, left: "10%" }} />
      <div className="sb-orb-3 absolute h-[380px] w-[380px] rounded-full blur-3xl opacity-[0.12]" style={{ background: `radial-gradient(closest-side, ${accent2}, transparent)`, right: "-5%", top: "10%" }} />
      <style>{`
        .sb-diag { animation: sb-diag-drift 40s linear infinite; }
        @keyframes sb-diag-drift { 0% { transform: translate(0,0); } 100% { transform: translate(90px, 90px); } }
        .sb-beam { animation: sb-beam-sweep 14s ease-in-out infinite; }
        @keyframes sb-beam-sweep { 0%,100% { left: -10%; } 50% { left: 85%; } }
        .sb-orb-3 { animation: sb-orb-move-1 26s ease-in-out infinite; }
        @keyframes sb-orb-move-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-4%,6%) scale(1.1); } }
        @media (prefers-reduced-motion: reduce) { .sb-diag,.sb-beam,.sb-orb-3 { animation: none; } }
      `}</style>
    </>
  );
}

function PulseBg({ accent, accent2 }: { accent: string; accent2: string }) {
  const rings = [0, 1, 2];
  return (
    <>
      <div className="absolute -right-[10%] top-1/2 -translate-y-1/2">
        {rings.map((i) => (
          <span
            key={i}
            className="sb-ring absolute rounded-full border"
            style={{ borderColor: i % 2 === 0 ? accent : accent2, width: "360px", height: "360px", left: "-180px", top: "-180px", animationDelay: `${i * 1.6}s` }}
          />
        ))}
      </div>
      <div className="sb-orb-4 absolute h-[400px] w-[400px] rounded-full blur-3xl opacity-[0.13]" style={{ background: `radial-gradient(closest-side, ${accent}, transparent)`, left: "-8%", bottom: "-8%" }} />
      <style>{`
        .sb-ring { animation: sb-ring-pulse 5s ease-out infinite; opacity: 0; }
        @keyframes sb-ring-pulse { 0% { transform: scale(0.5); opacity: 0.35; } 100% { transform: scale(1.3); opacity: 0; } }
        .sb-orb-4 { animation: sb-orb-move-2 22s ease-in-out infinite; }
        @keyframes sb-orb-move-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(6%,-5%) scale(1.1); } }
        @media (prefers-reduced-motion: reduce) { .sb-ring,.sb-orb-4 { animation: none; } }
      `}</style>
    </>
  );
}

function AuroraBg({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <>
      <div className="sb-aurora-a absolute h-[500px] w-[700px] rounded-[50%] blur-3xl opacity-[0.11]" style={{ background: `radial-gradient(closest-side, ${accent}, transparent)`, left: "-15%", top: "-20%" }} />
      <div className="sb-aurora-b absolute h-[440px] w-[640px] rounded-[50%] blur-3xl opacity-[0.11]" style={{ background: `radial-gradient(closest-side, ${accent2}, transparent)`, right: "-12%", bottom: "-15%" }} />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "64px 100%" }}
      />
      <style>{`
        .sb-aurora-a { animation: sb-aurora-a-move 18s ease-in-out infinite; }
        .sb-aurora-b { animation: sb-aurora-b-move 22s ease-in-out infinite; }
        @keyframes sb-aurora-a-move { 0%,100% { transform: translate(0,0); } 50% { transform: translate(6%,8%); } }
        @keyframes sb-aurora-b-move { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-7%,-6%); } }
        @media (prefers-reduced-motion: reduce) { .sb-aurora-a,.sb-aurora-b { animation: none; } }
      `}</style>
    </>
  );
}
