import { NextRequest, NextResponse } from "next/server";
import { submitLead } from "@/lib/leads";
import { contactSchema } from "@/lib/schemas";

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation", issues: parsed.error.flatten() }, { status: 422 });
  }

  const data = parsed.data;
  const locale = (raw as Record<string, unknown>).locale === "en" ? "en" : "es";

  try {
    await submitLead({
      nombre: data.nombre,
      email: data.email,
      pais: data.pais,
      telefono: data.telefono,
      website: data.website ?? "",
      mensaje: data.mensaje,
      locale,
      formId: "contact-form",
      fuente: "contact-form",
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] submitLead failed", err);
    return NextResponse.json({ error: "submit_failed" }, { status: 502 });
  }
}
