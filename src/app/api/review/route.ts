import { NextRequest, NextResponse } from "next/server";
import { reviewSchema } from "@/lib/schemas";

const REVIEWS_ENDPOINT = "https://alora-crm.vercel.app/api/reviews/submit";

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const parsed = reviewSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation", issues: parsed.error.flatten() }, { status: 422 });
  }

  const data = parsed.data;
  const extra = raw as Record<string, unknown>;
  const locale = extra.locale === "en" ? "en" : "es";

  try {
    const res = await fetch(REVIEWS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: data.nombre,
        empresa: data.empresa ?? "",
        rating: data.rating,
        resena: data.resena,
        locale,
      }),
    });
    if (!res.ok) throw new Error(`reviews endpoint returned ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[review] submit failed", err);
    return NextResponse.json({ error: "submit_failed" }, { status: 502 });
  }
}
