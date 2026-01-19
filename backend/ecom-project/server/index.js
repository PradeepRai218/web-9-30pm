let express=require("express")
const { adminRoutes } = require("./App/routes/admin/adminRoutes")
require("dotenv").config()
let App=express()



App.use("/admin",adminRoutes) //Index page adminRoutes http://localhost:8000/admin
// App.use("/web",webRoutes) //Index page adminRoutes http://localhost:8000/admin
// App.use("/app",appRoutes) //Index page adminRoutes http://localhost:8000/admin

App.listen(process.env.PORT || 8000,()=>{ //http://localhost:8000/
    console.log("Server Start",process.env.PORT);
    
})