import express from "express";
import { prisma } from "../lib/prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
  // Dados vindos do frontend, vindas do Body da requisição
  const { email, password } = req.body;

  // Busca usuário no Banco de dados
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Retorna o status code da requisição e os dados de login
  res.status(200).json({ user: user });
});

export default router;
