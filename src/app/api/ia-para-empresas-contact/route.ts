import { NextRequest, NextResponse } from "next/server";
import { submitLead } from "@/lib/leads";
import { getAiLandingContactSchema } from "@/lib/schemas";

function pickLocale(raw: unknown): "es" | "en" {
  if (raw && typeof raw === "object" && (raw as { locale?: unknown }).locale === "en") return "en";
  return "es";
}

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const locale = pickLocale(raw);
  const parsed = getAiLandingContactSchema(locale).safeParse(raw);
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
      locale,
      formId: "ia-para-empresas-contact-form",
      fuente: "formulario",
      landingPage: `/${locale}/ia-para-empresas`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[ia-para-empresas-contact] submitLead failed", err);
    return NextResponse.json({ error: "submit_failed" }, { status: 502 });
  }
}
