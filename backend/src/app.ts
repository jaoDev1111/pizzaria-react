import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { corsConfig } from "./config/cors.js";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

// Middleware para proteger requisições (headers HTTP)
app.use(helmet());

// aplica CORS com regras
app.use(cors(corsConfig));

// Middleware para JSON
app.use(express.json());

// Extender a capacidade do Express para pegar o Body da requisição em qualquer tipo de requisição
app.use(express.urlencoded({ extended: true }));

// Habilitar os arquivos de Public aos usuários
app.use("/public", express.static(path.join(__dirname, "../public")));

// Rotas da aplicação
app.use("/api", router);

// 404
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    error: {
      code: "NOT_FOUND",
      message: "Route not found",
    },
  });
});
