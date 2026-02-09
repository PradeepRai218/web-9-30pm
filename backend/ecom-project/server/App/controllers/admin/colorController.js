const colorModal = require("../../model/colorModel");

let colorCreate = async (req, res) => {
  let bodyData = req.body;

  try {
    let color = colorModal(bodyData); //Error
    let colorRes = await color.save();
    res.send({
      _status: true,
      _message: "Color Added New",
      colorRes,
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
};

let colorView = async (req, res) => {
  let filter = {
    deletedAt: null,
  };

  // filter.colorOrder = {
  //   $gte : 3
  // }

  if(req.body != undefined){
    if(req.body.name != undefined && req.body.name != ''){
        filter.colorName = req.body.name;
    }
  }

  var limit = 2;
  var skip = 0;
  var page = 1;

  if(req.body != undefined){
    if(req.body.page != undefined && req.body.page != ''){
      page = req.body.page;
      skip = (page - 1) * limit;
    }
  }

  let total_records = await colorModal.find(filter).countDocuments(); 

  var paginate = {
    total_records : total_records,
    current_page : page,
    total_pages : Math.ceil(total_records/limit) //3.2  //4  3.9 //4
  }


  let data = await colorModal.find(filter)
  .limit(limit).skip(skip)
  .sort({
    colorOrder : 'asc',
    _id : 'desc'
  });
  res.send({
    _status: true,
    _message: "Color View Controller",
    _paginate : paginate,
    data,
  });
};

let colorDelete = async (req, res) => {
  let { id } = req.params;
  let deleteStatus = await colorModal.updateOne(
    { _id: id },
    {
      $set: {
        isDeleted: true,
        deletedAt: Date.now(),
      },
    },
  );
  res.send({
    _status: true,
    _message: "Color Delete",
    deleteStatus,
  });
};

let colormultiDelete = async (req, res) => {
  let { ids } = req.body; // { ids:[id1,id2] }
  let deleteStatus = await colorModal.updateMany(
    { _id: ids }, //Array
    {
      $set: {
        isDeleted: true,
        deletedAt: Date.now(),
      },
    },
  );
  res.send({
    _status: true,
    _message: "Color Delete",
    deleteStatus,
  });
};

let changeStatus = async (req, res) => {
  let { ids } = req.body; // { ids:[id1,id2] }


  

  let changeStatus = await colorModal.updateMany(
    { _id: ids }, //Array //["6980d1ee3ca3b27c59ea9e96","6980d1fc3ca3b27c59ea9e99"]
    [ 
      {
        $set:{
          colorStatus:{
            $not:'$colorStatus' //False
          }
        }
      },
    ],
    {
        updatePipeline:true
    }
  );
  res.send({
    _status: true,
    _message: "Color Status Changed",
    changeStatus
    
  });
};



let colorUpdate =async (req, res) => {
  let { id } = req.params;
  let bodyData = req.body;
  console.log(bodyData);
  try {
    let colorRes =await colorModal.updateOne(
      {
        _id: id,
      },
      {
        $set: bodyData,
      }
    ); //Error
    res.send({
      _status: true,
      _message: "Color Updated",
      colorRes,
    });
  } catch (dbError) {
    console.log(dbError);
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
};

let getcolorDetails=async (req,res)=>{

  let {id}=req.params

  let data = await colorModal.findOne({_id:id});
  res.send({
    _status: true,
    _message: "Color View Controller",
    data,
  });
}


module.exports = {
  colorCreate,
  colorView,
  colorDelete,
  colorUpdate,
  colormultiDelete,
  getcolorDetails,
  changeStatus
};
