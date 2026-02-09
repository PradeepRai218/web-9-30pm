const { mySlug } = require("../../config/helper");
const categoryModal = require("../../model/categoryModel");
const subcategoryModal = require("../../model/subCategoryModel");





let subcategoryCreate=async (req,res)=>{
    console.log(req.body)
    let obj={...req.body} //{ parentCategory:'698a1160f303679d94539e0d' subcategoryName: 'Topwear', subcategoryOrder: '1' }

    let slug=mySlug(obj.subcategoryName)

    obj['slug']=slug

    if(req.file){
        if(req.file.filename){
            obj['subcategoryImage']=req.file.filename
        }
    }
    
    
      try {
        let subcategory = subcategoryModal(obj); //Error
        let subcategoryRes = await subcategory.save();
        res.send({
          _status: true,
          _message: "sub category Added New",
          subcategoryRes,
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

let subcategoryView = async (req, res) => {
  let filter = {
    deletedAt: null,
  };

  let data = await subcategoryModal.find(filter)
  .populate('parentCategory','categoryName');
  res.send({
    _status: true,
    _message: "category found",
    path:process.env.CATEGORYPATH,
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

module.exports={subcategoryCreate,subcategoryView,parentCategoryData}