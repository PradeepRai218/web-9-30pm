let express = require("express");
const { colorCreate, colorView, colorDelete, colorUpdate, colormultiDelete } = require("../../controllers/admin/colorController")
let colorRoutes = express.Router();

colorRoutes.post("/create",colorCreate);
colorRoutes.get("/view", colorView);
colorRoutes.delete("/delete/:id", colorDelete);

colorRoutes.post("/multi-delete", colormultiDelete);
colorRoutes.put("/update/:id", colorUpdate);

module.exports = { colorRoutes };
