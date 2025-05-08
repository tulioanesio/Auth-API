import express from "express";
import dotenv from "dotenv"
import privateRoutes from "./routes/private.js";
import publicRoutes from "./routes/public.js";
import cors from "cors"

import auth from "./middlewares/auth.js";

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config()

app.use("/", publicRoutes);
app.use("/", auth, privateRoutes);

app.listen(3000, () => console.log("Servidor rodando!"));
