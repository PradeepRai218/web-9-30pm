
let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { categoryRoutes } = require("./categoryRoutes")

let adminRoutes=express.Router() 

adminRoutes.use("/color",colorRoutes)
adminRoutes.use("/material",materialRoutes)
adminRoutes.use("/category",categoryRoutes)
module.exports={adminRoutes}