import { api } from "../../lib/axios/axios";
import {
    userListSchema,
    type UserListType,
} from "../../schemas/user/user.schema";

/**
 * userService -> Responsável por comunicar com determinado Endpoint da API.
 * Dados em Lista: Passar o userService.getUsers dentro do React Query para Cache.
 */
export const userService = {
    async getUsers(): Promise<UserListType> {
        const response = await api.get("/users");

        // Validação dos dados recebidos da API.
        const parsedData = userListSchema.parse(response.data);

        // Dados validados.
        return parsedData;
    },
};
