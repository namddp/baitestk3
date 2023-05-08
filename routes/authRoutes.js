import express from "express";
import authControllers from "../controllers/authControllers.js";

const authRoutes = express.Router();
authRoutes.post("/register", (req, res) => {});

authRoutes.post("/login", authControllers.loginUser);

export default authRoutes;
