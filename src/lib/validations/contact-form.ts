import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов")
    .regex(/^[а-яёa-z\s\-']{2,50}$/i, "Имя должно содержать только буквы, пробелы, дефисы и апострофы"),
  
  email: z
    .string()
    .min(1, "Email обязателен")
    .email("Введите корректный email"),
  
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{10,}$/.test(val), {
      message: "Введите корректный номер телефона"
    }),
  
  company: z
    .string()
    .max(100, "Название компании не должно превышать 100 символов")
    .optional(),
  
  budget: z
    .string()
    .optional(),
  
  timeline: z
    .string()
    .optional(),
  
  message: z
    .string()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(1000, "Сообщение не должно превышать 1000 символов")
});

export type ContactFormData = z.infer<typeof contactFormSchema>; 