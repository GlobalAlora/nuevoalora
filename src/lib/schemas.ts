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

export const FREE_EMAIL_ERROR = "Este es un servicio para empresas, no aceptamos solicitudes de servicios de correo gratuitos.";

const businessEmail = z
  .string()
  .email("Email inválido")
  .refine((v) => !FREE_EMAIL_DOMAINS.has(v.split("@")[1]?.toLowerCase() ?? ""), { message: FREE_EMAIL_ERROR });

export const aiLandingContactSchema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  apellido: z.string().min(2, "Mínimo 2 caracteres"),
  email: businessEmail,
  empresa: z.string().min(2, "Campo requerido"),
  companySize: z.enum(COMPANY_SIZE_BANDS, { message: "Elegí una opción" }),
  pais: z.string().min(1, "Campo requerido"),
  mensaje: z.string().min(10, "Mínimo 10 caracteres").max(2000, "Máximo 2000 caracteres"),
  privacy: z.literal(true, { message: "Debes aceptar para continuar" }),
});

export type AiLandingContactFormData = z.infer<typeof aiLandingContactSchema>;
