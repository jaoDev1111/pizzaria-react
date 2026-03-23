// src/routes/index.ts

import { Router } from "express";
import { randomUUID } from "node:crypto";
import { rateLimiter } from "../middlewares/rateLimitMiddleware.js";

export const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ teste: "Ok" });
});

router.get("/user", (req, res) => {
  const user = {
    id: randomUUID(),
    name: "João Guilherme Avelino Gonçalves",
    email: "joao@example.com",
    profilePic: "https://i.pravatar.cc/150?img=3",
    role: "ADMIN",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  res.status(200).json(user);
});

// Aplicação de Rate Limiter por rota -> Login sempre precisa
// router.post("/login", rateLimiter, loginController);
