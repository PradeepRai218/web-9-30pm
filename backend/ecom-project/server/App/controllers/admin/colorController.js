let colorController = {

  colorCreate: (req, res) => {
    res.send({
      _status: true,
      _message: "Color Added New",
    });
  },


  colorView: (req, res) => {
    res.send({
      _status: true,
      _message: "Color View",
    });
  },

  colorDelete: (req, res) => {
    res.send({
      _status: true,
      _message: "Color Delete",
    });
  },


  colorUpdate: (req, res) => {
    res.send({
      _status: true,
      _message: "Color Delete",
    });
  },


};

module.exports={colorController}
// let colorCreate=(req,res)=>{

//      res.send({
//         _status:true,
//         _message:"Color Added New"
//     })
// }

// let colorView=(req,res)=>{
//      res.send({
//         _status:true,
//         _message:"Color View Controller"
//     })
// }

// let colorDelete=(req,res)=>{
//      res.send({
//         _status:true,
//         _message:"Color Delete"
//     })
// }

// let colorUpdate=(req,res)=>{
//      res.send({
//         _status:true,
//         _message:"Color Update"
//     })
// }

// module.exports={colorCreate,colorView,colorDelete,colorUpdate}
