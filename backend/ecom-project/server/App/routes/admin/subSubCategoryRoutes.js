let express = require("express");
let subSubcategoryRoutes = express.Router();


const multer  = require('multer');
const { subSubcategoryCreate, subSubcategoryView, parentCategoryData, subCategoryData } = require("../../controllers/admin/subSubcategoryController");
// const upload = multer({ dest: 'uploads/' }) //MiddleWare

let storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/subsubcategory')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let upload= multer({ storage: storage })


//upload.single('')
//upload.field('')


subSubcategoryRoutes.post("/create", upload.single('subSubcategoryImage'), subSubcategoryCreate);


subSubcategoryRoutes.get("/view", subSubcategoryView);

//{{BASEURL}}/subsubcategory/parent-category
subSubcategoryRoutes.get("/parent-category",parentCategoryData);

subSubcategoryRoutes.get("/sub-category/:parentId",subCategoryData);


// subSubcategoryRoutes.delete("/delete/:id", subcategoryDelete);

// subSubcategoryRoutes.post("/multi-delete", subcategorymultiDelete);
// subSubcategoryRoutes.post("/change-status",changeStatus);

// subSubcategoryRoutes.get("/get-subcategory/:id", getsubcategoryDetails);

// subSubcategoryRoutes.put("/update/:id", subcategoryUpdate);

module.exports = { subSubcategoryRoutes };
