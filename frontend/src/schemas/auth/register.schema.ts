// schemas/registerSchema.ts
import { z } from "zod";

/**
 * Schema de registro com senha forte.
 * Responsável por garantir regras de segurança antes do submit. (Digitando no formulário)
 */

export const registerSchema = z
    .object({
        name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").trim(),

        email: z.email("Email inválido").trim().toLowerCase(),

        password: z
            .string()
            .min(8, "Senha deve ter no mínimo 8 caracteres")
            .regex(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula")
            .regex(/[a-z]/, "Deve conter pelo menos 1 letra minúscula")
            .regex(/[0-9]/, "Deve conter pelo menos 1 número")
            .regex(
                /[^A-Za-z0-9]/,
                "Deve conter pelo menos 1 caractere especial",
            ),

        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"],
    });

export type RegisterFormDataType = z.infer<typeof registerSchema>;
