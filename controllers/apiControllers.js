import { client } from "../configs/database.js";
import { inventories } from "../configs/database.js";
const apiControllers = {
  getAll: async (req, res) => {
    try {
      await client.connect();
      const items = await inventories.find().toArray();
      res.status(200).json({
        message: " success ",
        data: items,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default apiControllers;
