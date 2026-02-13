const { mySlug } = require("../../config/helper");
const categoryModal = require("../../model/categoryModel");
const colorModal = require("../../model/colorModel");
const subcategoryModal = require("../../model/subCategoryModel");
const subSubcategoryModal = require("../../model/subSubCategoryModel");



let productCreate=async (req,res)=>{

    let obj={...req.body} //{ parentCategory:'698a1160f303679d94539e0d' subcategoryName: 'Topwear', subcategoryOrder: '1' }

    let slug=mySlug(obj.productName)

    obj['slug']=slug

    if(req.file){
        if(req.file.filename){
            obj['productImage']=req.file.filename
        }
    }
    
    
      try {
        let productRes = productModal(obj); //Error
        let subcategoryFinalResRes = await productRes.save();
        res.send({
          _status: true,
          _message: "sub category Added New",
          subcategoryFinalResRes,
        });
      } catch (dbError) {
        let errors = [];
        let obj = {};
        for (let errorKey in dbError.errors) {
          obj[errorKey] = dbError.errors[errorKey].message;
          errors.push(obj);
          obj = {};
        }
        res.send({
          _status: false,
          _message: "Error Found",
          errors,
        });
      }


    //{ subcategoryName: 'Men', subcategoryOrder: '1',categoryImage:'177022426492401.jpg' }
    // console.log(req.body);
    // console.log(req.file);
    
    
}

let productView = async (req, res) => {
  let filter = {
    deletedAt: null,
  };

  let data = 
  await productModal
  .find(filter)
  .populate('parentCategory','categoryName')
  .populate('subCategory','subcategoryName');
  res.send({
    _status: true,
    _message: "category found",
    path:process.env.productPATH,
    data,
  });
};


let parentCategoryData=async (req,res)=>{
  let filter = {
    deletedAt: null,
    categoryStatus:true,
  };

   let data = await categoryModal.find(filter).select('categoryName')
   res.send({
    _status: true,
    _message: "category found",
   
    data,
  });
}



let subCategoryData=async (req,res)=>{

  let {parentId}=req.params

   let filter = {
    deletedAt: null,
    subcategoryStatus:true,
    parentCategory:parentId
  };

   let data = await subcategoryModal.find(filter).select('subcategoryName')
   res.send({
    _status: true,
    _message: "Sub category found",
   
    data,
  });
}


let subsubCategoryData=async (req,res)=>{

  let {parentId}=req.params

   let filter = {
    deletedAt: null,
    subSubcategoryStatus:true,
    subCategory:parentId
  };

   let data = await subSubcategoryModal.find(filter).select('subSubcategoryName')
   res.send({
    _status: true,
    _message: "Sub Sub category found",
   
    data,
  });
}

let getproductColors=async (req,res)=>{



   let filter = {
    deletedAt: null,
    colorStatus:true,
 
  };

   let data = await colorModal.
   find(filter)
   .select('colorName')
   res.send({
    _status: true,
    _message: "color found",
   
    data,
  });
}

module.exports={productCreate,productView,parentCategoryData,subCategoryData,subsubCategoryData,getproductColors}