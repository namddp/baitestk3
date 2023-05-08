import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { client } from "./configs/database.js";
import apiRoutes from "./routes/apiroutes.js";
import authRoutes from "./routes/authRoutes.js";

function main() {
  const app = express();

  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use("/api/v1/products", apiRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.get("/", async (req, res) => {
    try {
      await client.connect();
    } catch (error) {
      console.log("connect err");
    }
    res.send("tao ổn");
  });
  app.listen(3000, () => {
    console.log("App is running at 3000");
  });
}

main();
