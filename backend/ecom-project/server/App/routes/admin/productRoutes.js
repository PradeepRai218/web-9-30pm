let express = require("express");
let productRoutes = express.Router();


const multer  = require('multer');
const { productCreate, productView, parentCategoryData, subCategoryData, subsubCategoryData, getproductColors } = require("../../controllers/admin/productController");
// const upload = multer({ dest: 'uploads/' }) //MiddleWare

let storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/product')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let upload= multer({ storage: storage })


//upload.single('')
//upload.field('')


productRoutes.post("/create", upload.fields(
    [
        {
            name:"productImage",
            maxCount:1
        },
        {
            name:"productGallery",
            maxCount:10
        }
    ]
), productCreate);


productRoutes.get("/view", productView);

//{{BASEURL}}/product/parent-category
productRoutes.get("/parent-category",parentCategoryData);

productRoutes.get("/sub-category/:parentId",subCategoryData);

productRoutes.get("/sub-sub-category/:parentId",subsubCategoryData);

productRoutes.get("/color",getproductColors);

// productRoutes.delete("/delete/:id", subcategoryDelete);

// productRoutes.post("/multi-delete", subcategorymultiDelete);
// productRoutes.post("/change-status",changeStatus);

// productRoutes.get("/get-subcategory/:id", getsubcategoryDetails);

// productRoutes.put("/update/:id", subcategoryUpdate);

module.exports = { productRoutes };
