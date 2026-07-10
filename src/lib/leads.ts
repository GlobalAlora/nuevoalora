/**
 * Lead submission hub.
 * All form destinations are wired here — to add/remove a CRM or webhook,
 * edit only this file without touching any form component.
 */

export interface LeadData {
  nombre: string;
  email: string;
  pais?: string;
  telefono?: string;
  website?: string;
  empresa?: string;
  mensaje: string;
  formId: string;
  fuente?: string;
  locale?: string;
}

const CLAY_WEBHOOK =
  "https://api.clay.com/v3/sources/webhook/pull-in-data-from-a-webhook-1956ddca-17b9-4362-b085-82b125bb6ad8";

const MAKE_WEBHOOK =
  "https://hook.us2.make.com/j5ybsgnp5mapyotxu57fsxcfufce8ktc";

const ALORA_CRM = "https://alora-crm.vercel.app/api/embed/submit";

// MailerLite form IDs (account 2070356)
const MAILERLITE_FORMS: Record<string, string> = {
  es: "177855257628378295",
  en: "178060668159657324",
};

async function sendToClay(data: LeadData): Promise<void> {
  await fetch(CLAY_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: data.nombre,
      email: data.email,
      pais: data.pais ?? "",
      telefono: data.telefono ?? "",
      empresa: data.empresa ?? "",
      consulta: data.mensaje,
      fecha_ingreso: new Date().toISOString(),
    }),
  });
}

async function sendToMake(data: LeadData): Promise<void> {
  await fetch(MAKE_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: data.nombre,
      email: data.email,
      pais: data.pais ?? "",
      telefono: data.telefono ?? "",
      empresa: data.empresa ?? "",
      consulta: data.mensaje,
      fuente: data.fuente ?? data.formId,
    }),
  });
}

async function sendToAloraCRM(data: LeadData): Promise<void> {
  await fetch(ALORA_CRM, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: data.nombre,
      email: data.email,
      website: data.website ?? "",
      pais: data.pais ?? "",
      telefono: data.telefono ?? "",
      empresa: data.empresa ?? "",
      mensaje: data.mensaje,
      formId: data.formId,
      fuente: data.fuente ?? data.formId,
    }),
  });
}

async function sendToMailerLite(data: LeadData): Promise<void> {
  const locale = data.locale ?? "es";
  const formId = MAILERLITE_FORMS[locale] ?? MAILERLITE_FORMS.es;
  const endpoint = `https://assets.mailerlite.com/jsonp/2070356/forms/${formId}/subscribe`;

  const payload = new URLSearchParams({
    "fields[name]": data.nombre,
    "fields[email]": data.email,
    "fields[country]": data.pais ?? "",
    "fields[phone]": data.telefono ?? "",
    "fields[website]": data.website ?? "",
    "fields[company]": data.empresa ?? "",
    "fields[consulta]": data.mensaje,
    "ml-submit": "1",
  });

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload.toString(),
  });

  if (!res.ok) throw new Error(`MailerLite error: ${res.status}`);
}

/**
 * Submit a lead to all active destinations in parallel.
 * All destinations are fire-and-forget: MailerLite's subscribe endpoint is
 * a browser-facing JSONP form (not a server-to-server API) and returns 403
 * when called directly from the server, so it can't be the thing gating
 * whether the user sees a successful submission.
 */
export async function submitLead(data: LeadData): Promise<void> {
  void Promise.allSettled([
    sendToClay(data),
    sendToMake(data),
    sendToAloraCRM(data),
    sendToMailerLite(data),
  ]);
}
