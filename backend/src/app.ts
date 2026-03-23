import express from "express";
import { router } from "./routes/index.js";

export const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas da aplicação
app.use(router);
