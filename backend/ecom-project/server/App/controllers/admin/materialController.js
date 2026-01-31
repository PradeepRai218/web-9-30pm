const materialModal = require("../../model/materialModel");

let materialCreate = async (req, res) => {
  let bodyData = req.body;

  try {
    let material = materialModal(bodyData); //Error
    let materialRes = await material.save();
    res.send({
      _status: true,
      _message: "material Added New",
      materialRes,
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

let materialView = async (req, res) => {
  let filter = {
    deletedAt: null,
  };

  let data = await materialModal.find(filter);
  res.send({
    _status: true,
    _message: "material View Controller",
    data,
  });
};

let materialDelete = async (req, res) => {
  let { id } = req.params;
  let deleteStatus = await materialModal.updateOne(
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
    _message: "material Delete",
    deleteStatus,
  });
};

let materialmultiDelete = async (req, res) => {
  let { ids } = req.body; // { ids:[id1,id2] }
  let deleteStatus = await materialModal.updateMany(
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
    _message: "material Delete",
    deleteStatus,
  });
};

let materialUpdate =async (req, res) => {
  let { id } = req.params;
  let bodyData = req.body;
  console.log(bodyData);
  try {
    let materialRes =await materialModal.updateOne(
      {
        _id: id,
      },
      {
        $set: bodyData,
      }
    ); //Error
    res.send({
      _status: true,
      _message: "material Updated",
      materialRes,
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
  materialCreate,
  materialView,
  materialDelete,
  materialUpdate,
  materialmultiDelete,
};
