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
  cargo: z.string().optional(),
  empresa: z.string().optional(),
  rating: z.number({ message: "Elegí una calificación" }).int().min(1, "Elegí una calificación").max(5),
  equipo: z.string().min(10, "Mínimo 10 caracteres").max(500, "Máximo 500 caracteres"),
  loQueMasGusto: z.string().min(10, "Mínimo 10 caracteres").max(500, "Máximo 500 caracteres"),
  recomendaria: z.string().min(10, "Mínimo 10 caracteres").max(500, "Máximo 500 caracteres"),
  privacy: z.literal(true, { message: "Debes aceptar para continuar" }),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;
