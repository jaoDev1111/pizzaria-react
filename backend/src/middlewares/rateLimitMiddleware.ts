import rateLimit from "express-rate-limit";
import { success } from "zod";

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de Requisições do IP
  standardHeaders: true,
  legacyHeaders: true,
  message: {
    success: false,
    error: {
      code: "TOO_MANY_REQUESTS_429",
      message: "Too many requests, try again later",
    },
  },
});
