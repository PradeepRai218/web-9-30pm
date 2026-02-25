let express=require("express")
const { authRoutes } = require("./AuthRoutes")

let webRoutes=express.Router() 

webRoutes.use("/user",authRoutes)

module.exports={webRoutes}