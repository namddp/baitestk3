import bscypt from "bcrypt";
import { connectToDb, db } from "../db";

const authControllers = {
  registerUser: async (req, res) => {
    try {
      const salt = await bscypt.genSalt(10);
      const hashed = await bscypt.hash(req.body.password, salt);
    } catch (error) {
      res.status(500).json(err);
    }
  },
};
