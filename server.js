import express from "express";
import bcrypt from "bcrypt";
import publicRoutes from "./routes/public.js";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express()
app.use(express.json())

app.use("/users", publicRoutes)



app.listen(3000, () => console.log("Servidor rodando!"));
