import { NextRequest, NextResponse } from "next/server";
import { submitLead } from "@/lib/leads";
import { solutionContactSchema } from "@/lib/schemas";

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const parsed = solutionContactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation", issues: parsed.error.flatten() }, { status: 422 });
  }

  const data = parsed.data;
  const extra = raw as Record<string, unknown>;
  const locale = extra.locale === "en" ? "en" : "es";
  const slug = typeof extra.slug === "string" ? extra.slug : "solution";
  const source = typeof extra.source === "string" ? extra.source : "solucion";

  try {
    await submitLead({
      nombre: data.nombre,
      email: data.email,
      pais: data.pais,
      empresa: data.empresa ?? "",
      mensaje: data.mensaje,
      locale,
      formId: "solution-contact-form",
      fuente: `${source}-${slug}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[solution-contact] submitLead failed", err);
    return NextResponse.json({ error: "submit_failed" }, { status: 502 });
  }
}
