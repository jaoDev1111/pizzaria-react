// src/routes/index.ts

import { Router } from "express";

import { rateLimiter } from "../middlewares/rateLimit.middleware.js";
import userRouter from "./user.router.js";

const router = Router();

// Usando o router de userRouter
router.use("/user", userRouter);

router.get("/", (req, res) => {
  res.status(200).json({ teste: "Ok" });
});

export default router;

// Aplicação de Rate Limiter por rota -> Login sempre precisa
// router.post("/login", rateLimiter, loginController);
