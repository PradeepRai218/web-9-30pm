let express=require("express")
let authRoutes=express.Router()
const { register, login, changePassword, forgotPassword, resetPassword, updateProfile } = require("../../controllers/web/authController")
const { checkToken } = require("../../middleware/checkToken")
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' }) //MiddleWare

let storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/users')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})


let upload= multer({ storage: storage })
authRoutes.post('/create',register)

authRoutes.post('/login',login)

authRoutes.post('/forgot-password',forgotPassword)
authRoutes.put('/reset-password/:id',resetPassword)

authRoutes.post('/update-profile/',upload.single('image'),checkToken,updateProfile)

authRoutes.post('/change-password', checkToken,  changePassword)

module.exports={authRoutes}