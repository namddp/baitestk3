import bscypt from "bcrypt";
import { users } from "../configs/database.js";
import jwt from "jsonwebtoken";

const authControllers = {
  loginUser: async (req, res) => {
    try {
      const user = await users.findOne({
        username: req.body.username,
      });

      if (!user) {
        res.status(404).json("sai tên đăng nhập");
      } else if (user) {
        if (user.password === req.body.password) {
          const token = jwt.sign(
            {
              id: user._id,
              password: user.password,
            },
            "key",
            {
              expiresIn: "30000s",
            }
          );
          res.status(200).json({ user, token });
        } else {
          res.status(404).json("sai mk");
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default authControllers;
