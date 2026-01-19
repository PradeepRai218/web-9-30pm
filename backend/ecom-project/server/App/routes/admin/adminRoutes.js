
let express=require("express")
const { colorRoutes } = require("./colorRoutes")

let adminRoutes=express.Router() 

adminRoutes.use("/color",colorRoutes)

module.exports={adminRoutes}