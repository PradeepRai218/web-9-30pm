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

  let data = await colorModal.find(filter);
  res.send({
    _status: true,
    _message: "Color View Controller",
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

module.exports = {
  colorCreate,
  colorView,
  colorDelete,
  colorUpdate,
  colormultiDelete,
};
