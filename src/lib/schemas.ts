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
