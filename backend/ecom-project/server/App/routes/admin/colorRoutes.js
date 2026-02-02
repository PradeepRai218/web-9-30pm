let express = require("express");
const { colorCreate, colorView, colorDelete, colorUpdate, colormultiDelete, changeStatus, getcolorDetails } = require("../../controllers/admin/colorController")
let colorRoutes = express.Router();

colorRoutes.post("/create",colorCreate);
colorRoutes.get("/view", colorView);
colorRoutes.delete("/delete/:id", colorDelete);

colorRoutes.post("/multi-delete", colormultiDelete);
colorRoutes.post("/change-status",changeStatus);

colorRoutes.get("/get-color/:id", getcolorDetails);

colorRoutes.put("/update/:id", colorUpdate);

module.exports = { colorRoutes };
