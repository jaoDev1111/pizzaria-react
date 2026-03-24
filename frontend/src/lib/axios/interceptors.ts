import { api } from "./axios";

// Request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Exemplo: tratar erro global
        if (error.response?.status === 401) {
            console.error("Unauthorized - redirect or logout");
        }

        return Promise.reject(error);
    },
);
