import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const logoUrl = new URL("/logo-nav-white.png", req.url).toString();
  const logoData = await fetch(logoUrl).then((r) => r.arrayBuffer());
  const logoSrc = `data:image/png;base64,${Buffer.from(logoData).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Ambient glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -60,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top pill badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 100,
            padding: "10px 24px",
            marginBottom: 48,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00e5ff" }} />
          <span
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 15,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Software · Automatización · IA
          </span>
        </div>

        {/* Logo image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="ALORA" width={380} height={103} style={{ objectFit: "contain" }} />

        {/* Tagline */}
        <div
          style={{
            marginTop: 36,
            fontSize: 26,
            color: "rgba(255,255,255,0.50)",
            letterSpacing: "-0.01em",
            fontFamily: "sans-serif",
            textAlign: "center",
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          Tecnología que convierte el crecimiento en capacidad operativa
        </div>

        {/* Domain */}
        <div
          style={{
            marginTop: 44,
            fontSize: 18,
            color: "#00e5ff",
            letterSpacing: "0.06em",
            fontFamily: "sans-serif",
          }}
        >
          globalalora.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
