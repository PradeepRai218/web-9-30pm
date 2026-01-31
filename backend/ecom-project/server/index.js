let express=require("express")
const { adminRoutes } = require("./App/routes/admin/adminRoutes")
require("dotenv").config()
let cors=require("cors")
let App=express()
const mongoose = require('mongoose');

App.use(cors())
App.use(express.json());





App.use("/admin",adminRoutes) //Index page adminRoutes http://localhost:8000/admin
// App.use("/web",webRoutes) //Index page adminRoutes http://localhost:8000/admin
// App.use("/app",appRoutes) //Index page adminRoutes http://localhost:8000/admin

App.listen(process.env.PORT || 8000,()=>{ //http://localhost:8000/

    mongoose.connect('mongodb://127.0.0.1:27017/onlineShop')
    .then(() => console.log('Connected!'));
    console.log("Server Start",process.env.PORT);
    
})