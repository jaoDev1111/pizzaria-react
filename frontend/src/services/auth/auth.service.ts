import { api } from "../../lib/axios/axios";

import { authResponseSchema, type LoginResponseType } from "./auth.schema";
import {
    loginSchema,
    type LoginFormDataType,
} from "../../schemas/auth/login.schema";

// Chamada: Passar o userService.getUsers dentro do React Query
export const authService = {
    async login(data: LoginFormDataType): Promise<LoginResponseType> {
        // Validar dados antes de enviar a requisição (Crítico)
        const parsed = loginSchema.parse(data);

        const response = await api.post("/login", parsed);

        // Validar dados recebidos da API.
        const parsedResponse = authResponseSchema.parse(response.data);

        console.log(parsedResponse);
        return parsedResponse;
    },
};
