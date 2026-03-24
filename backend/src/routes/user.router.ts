import express from "express";

import { prisma } from "../lib/prisma.js";

const router = express.Router();

router.get("/", async (req, res) => {
  // Retorna a lista de usuários
  const userList = await prisma.user.findMany();

  res.status(200).json(userList);
});

export default router;
