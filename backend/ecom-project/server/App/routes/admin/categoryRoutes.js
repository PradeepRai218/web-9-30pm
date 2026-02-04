let express = require("express");
const { categoryCreate, categoryView } = require("../../controllers/admin/categoryController");
let categoryRoutes = express.Router();


const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' }) //MiddleWare

let storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/category')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let upload= multer({ storage: storage })


//upload.single('')
//upload.field('')


categoryRoutes.post("/create", upload.single('categoryImage'), categoryCreate);


categoryRoutes.get("/view", categoryView);
// categoryRoutes.delete("/delete/:id", categoryDelete);

// categoryRoutes.post("/multi-delete", categorymultiDelete);
// categoryRoutes.post("/change-status",changeStatus);

// categoryRoutes.get("/get-category/:id", getcategoryDetails);

// categoryRoutes.put("/update/:id", categoryUpdate);

module.exports = { categoryRoutes };
