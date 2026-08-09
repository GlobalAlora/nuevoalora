import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  pais: z.string().min(1, "Campo requerido"),
  telefono: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, "Teléfono inválido")
    .min(6, "Teléfono inválido"),
  website: z
    .string()
    .optional()
    .refine(
      (v) =>
        !v ||
        /^https?:\/\/.+|^www\..+|^[a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z]+/.test(v),
      "URL inválida"
    ),
  mensaje: z
    .string()
    .min(10, "Mínimo 10 caracteres")
    .max(2000, "Máximo 2000 caracteres"),
  privacy: z.literal(true, { message: "Debes aceptar la política de privacidad" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const solutionContactSchema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  empresa: z.string().optional(),
  pais: z.string().min(1, "Campo requerido"),
  mensaje: z.string().min(10, "Mínimo 10 caracteres").max(2000, "Máximo 2000 caracteres"),
  privacy: z.literal(true, { message: "Debes aceptar para continuar" }),
});

export type SolutionContactFormData = z.infer<typeof solutionContactSchema>;

export const reviewSchema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  cargo: z.string().min(2, "Mínimo 2 caracteres"),
  empresa: z.string().optional(),
  rating: z.number({ message: "Elegí una calificación" }).int().min(1, "Elegí una calificación").max(5),
  resena: z.string().min(300, "¡Epa! Nos encantaría saber un poco más — te faltan algunas palabritas 😊").max(1500, "Máximo 1500 caracteres"),
  privacy: z.literal(true, { message: "Debes aceptar para continuar" }),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;

export const COMPANY_SIZE_BANDS = [
  "Menos de 10 personas",
  "10 a 50 personas",
  "50 a 200 personas",
  "Más de 200 personas",
] as const;

// Stored value stays Spanish in both locales (CRM/webhook automations key
// off these exact strings via tamano_empresa) — only the dropdown's visible
// label is translated.
export const COMPANY_SIZE_LABELS: Record<"es" | "en", Record<(typeof COMPANY_SIZE_BANDS)[number], string>> = {
  es: {
    "Menos de 10 personas": "Menos de 10 personas",
    "10 a 50 personas": "10 a 50 personas",
    "50 a 200 personas": "50 a 200 personas",
    "Más de 200 personas": "Más de 200 personas",
  },
  en: {
    "Menos de 10 personas": "Fewer than 10 people",
    "10 a 50 personas": "10 to 50 people",
    "50 a 200 personas": "50 to 200 people",
    "Más de 200 personas": "More than 200 people",
  },
};

// Free consumer email providers — this landing is B2B-only, so these are
// rejected with a dedicated message rather than a generic "invalid email".
export const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com",
  "hotmail.com", "hotmail.com.ar", "hotmail.es", "hotmail.com.mx",
  "outlook.com", "outlook.es", "outlook.com.ar",
  "live.com", "live.com.ar", "live.es",
  "yahoo.com", "yahoo.com.ar", "yahoo.es", "yahoo.com.mx",
  "icloud.com", "me.com", "mac.com",
  "aol.com",
  "protonmail.com", "proton.me",
  "gmx.com", "gmx.es",
  "mail.com",
  "yandex.com",
  "zoho.com",
  "hey.com",
  "fastmail.com",
]);

const AI_LANDING_MESSAGES = {
  es: {
    minChars2: "Mínimo 2 caracteres",
    invalidEmail: "Email inválido",
    freeEmail: "Este es un servicio para empresas, no aceptamos solicitudes de servicios de correo gratuitos.",
    required: "Campo requerido",
    chooseOption: "Elegí una opción",
    mensajeMin: "Contanos un poco más — mínimo 100 caracteres",
    mensajeMax: "Máximo 2000 caracteres",
    privacy: "Debes aceptar para continuar",
  },
  en: {
    minChars2: "Must be at least 2 characters",
    invalidEmail: "Invalid email",
    freeEmail: "This is a service for companies — we don't accept requests from free email providers.",
    required: "Required field",
    chooseOption: "Choose an option",
    mensajeMin: "Tell us a bit more — minimum 100 characters",
    mensajeMax: "Maximum 2000 characters",
    privacy: "You must accept to continue",
  },
} as const;

export function getAiLandingContactSchema(locale: "es" | "en" = "es") {
  const t = AI_LANDING_MESSAGES[locale];
  const businessEmail = z
    .string()
    .email(t.invalidEmail)
    .refine((v) => !FREE_EMAIL_DOMAINS.has(v.split("@")[1]?.toLowerCase() ?? ""), { message: t.freeEmail });

  return z.object({
    nombre: z.string().min(2, t.minChars2),
    apellido: z.string().min(2, t.minChars2),
    email: businessEmail,
    empresa: z.string().min(2, t.required),
    companySize: z.enum(COMPANY_SIZE_BANDS, { message: t.chooseOption }),
    pais: z.string().min(1, t.required),
    mensaje: z.string().min(100, t.mensajeMin).max(2000, t.mensajeMax),
    privacy: z.literal(true, { message: t.privacy }),
  });
}

export type AiLandingContactFormData = z.infer<ReturnType<typeof getAiLandingContactSchema>>;
