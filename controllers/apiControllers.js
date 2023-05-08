import { client } from "../configs/database.js";
import { inventories } from "../configs/database.js";
const apiControllers = {
  getAll: async (req, res) => {
    try {
      await client.connect();
      const items = await inventories.find().toArray();
      if (req.query.quantity === "low") {
        res.status(200).json({
          message: " success ",
          data: items.filter((i) => Number(i.instock) < 100),
        });
      } else {
        res.status(200).json({
          message: " success ",
          data: items,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default apiControllers;
