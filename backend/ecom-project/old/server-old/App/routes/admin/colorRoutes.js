let express = require("express");
const { colorController } = require("../../controllers/admin/colorController");
// const { colorCreate, colorView, colorDelete, colorUpdate } = require("../../controllers/admin/colorController")
let colorRoutes = express.Router();

colorRoutes.post("/create",colorController.colorCreate);
colorRoutes.get("/view", colorController.colorView);
colorRoutes.delete("/delete/:id", colorController.colorDelete);
colorRoutes.put("/update/:id", colorController.colorUpdate);

module.exports = { colorRoutes };
