import express from "express";
import apiControllers from "../controllers/apiControllers.js";
const apiRoutes = express.Router();
apiRoutes.get("/", (req, res) => {
  res.status(200).json({
    message: " bố mày ok",
  });
});
apiRoutes.get("/getall", apiControllers.getAll);

export default apiRoutes;
