import { z } from "zod";

/**
 * Schema da resposta do endpoint de Login
 * Responsável por validar os dados recebidos da API.
 */
export const authResponseSchema = z.object({
    user: z.object({
        id: z.uuid(),
        name: z.string(),
        email: z.email(),
        cep: z.string(),
        password: z.string(),
        // role: z.enum(["ADMIN", "USER"]),
    }),
});

// Inferindo tipo da resposta do endpoint de Login
export type LoginResponseType = z.infer<typeof authResponseSchema>;
