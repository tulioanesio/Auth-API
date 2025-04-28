import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/list-users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({ omit: { password: true } });

    res.status(200).json({ message: "Usuários listados com sucesso", users });
  } catch (err) {
    res.status(500).json({ message: "Falha no servidor" });
  }
});

export default router;
