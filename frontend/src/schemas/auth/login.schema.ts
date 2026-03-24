// schemas/loginSchema.ts
import { z } from "zod";

/**
 * Schema de validação do login.
 * Responsável por garantir formato correto antes do submit (Digitando no formulário)
 */
export const loginSchema = z.object({
    email: z.email("Email inválido").toLowerCase().trim(),

    password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
});

// Inferindo tipo do schema para uso no formulário
export type LoginFormDataType = z.infer<typeof loginSchema>;
