import express from "express";
import { randomUUID } from "crypto";

const router = express.Router();

router.get("/", (req, res) => {
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

export default router;
