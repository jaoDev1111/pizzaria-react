import axios from "axios";

// Instância centralizada
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // padrão moderno com Vite
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
