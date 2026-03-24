import { z } from "zod";

// Schema de validação de Usuário
export const userSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    email: z.email(),
});

// Inferência de Tipo com Zod (Contrato)
export type UserType = z.infer<typeof userSchema>;

// Schema de validação de Lista de Usuários
export const userListSchema = z.array(userSchema);

// Inferência de Tipo com Zod (Contrato)
export type UserListType = z.infer<typeof userListSchema>;
