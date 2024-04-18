import express from "express";
import authRoutes from "./auth.js";
import tournamentRoutes from "./tournament.js";

const app = express();


app.use("/auth/user", authRoutes);
app.use("/tournament/", tournamentRoutes);

export default app;
