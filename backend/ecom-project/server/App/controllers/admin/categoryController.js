const { mySlug } = require("../../config/helper");
const categoryModal = require("../../model/categoryModel");


let categoryCreate=async (req,res)=>{
    let obj={...req.body} //{ categoryName: 'Men', categoryOrder: '1' }

    let slug=mySlug(obj.categoryName)

    obj['slug']=slug

    if(req.file){
        if(req.file.filename){
            obj['categoryImage']=req.file.filename
        }
    }
    
    
      try {
        let category = categoryModal(obj); //Error
        let categoryRes = await category.save();
        res.send({
          _status: true,
          _message: "category Added New",
          categoryRes,
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


    //{ categoryName: 'Men', categoryOrder: '1',categoryImage:'177022426492401.jpg' }
    // console.log(req.body);
    // console.log(req.file);
    
    
}

let categoryView = async (req, res) => {
  let filter = {
    deletedAt: null,
  };

  let data = await categoryModal.find(filter);
  res.send({
    _status: true,
    _message: "category found",
    path:process.env.CATEGORYPATH,
    data,
  });
};


module.exports={categoryCreate,categoryView}