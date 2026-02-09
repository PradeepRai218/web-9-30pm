let express = require("express");
let subcategoryRoutes = express.Router();


const multer  = require('multer');
const { subcategoryCreate, subcategoryView,  parentCategoryData } = require("../../controllers/admin/subcategoryController");
// const upload = multer({ dest: 'uploads/' }) //MiddleWare

let storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/subcategory')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let upload= multer({ storage: storage })


//upload.single('')
//upload.field('')


subcategoryRoutes.post("/create", upload.single('subcategoryImage'), subcategoryCreate);


subcategoryRoutes.get("/view", subcategoryView);

subcategoryRoutes.get("/parent-category",parentCategoryData);

// subcategoryRoutes.delete("/delete/:id", subcategoryDelete);

// subcategoryRoutes.post("/multi-delete", subcategorymultiDelete);
// subcategoryRoutes.post("/change-status",changeStatus);

// subcategoryRoutes.get("/get-subcategory/:id", getsubcategoryDetails);

// subcategoryRoutes.put("/update/:id", subcategoryUpdate);

module.exports = { subcategoryRoutes };
