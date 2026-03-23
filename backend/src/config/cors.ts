import type { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: [`${process.env.FRONTEND_ALLOWED}`], // frontend permitido
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // necessário para cookies httpOnly
};
