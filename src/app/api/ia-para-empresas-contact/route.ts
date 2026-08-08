import { NextRequest, NextResponse } from "next/server";
import { submitLead } from "@/lib/leads";
import { aiLandingContactSchema } from "@/lib/schemas";

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const parsed = aiLandingContactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation", issues: parsed.error.flatten() }, { status: 422 });
  }

  const data = parsed.data;

  try {
    await submitLead({
      nombre: `${data.nombre} ${data.apellido}`,
      email: data.email,
      pais: data.pais,
      empresa: data.empresa,
      companySize: data.companySize,
      mensaje: data.mensaje,
      locale: "es",
      formId: "ia-para-empresas-contact-form",
      fuente: "formulario",
      landingPage: "/ia-para-empresas",
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[ia-para-empresas-contact] submitLead failed", err);
    return NextResponse.json({ error: "submit_failed" }, { status: 502 });
  }
}
