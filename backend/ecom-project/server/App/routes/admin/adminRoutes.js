
let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")

let adminRoutes=express.Router() 

adminRoutes.use("/color",colorRoutes)
adminRoutes.use("/material",materialRoutes)
module.exports={adminRoutes}