let express = require("express");
const { dbConnection } = require("./config/dbConnection");
const { ObjectId } = require("mongodb");
var cors = require("cors");
require("dotenv").config();
let App = express();
App.use(cors());
App.use(express.json());

App.post("/enquiry/save", async (req, res) => {
  let db = await dbConnection(); //Call DB return
  let enquiryTable = db.collection("enquiry");

  let { studentName, studentEmail, studentPhone } = req.body;

  //Check Email or Phone

  let checkEmail = await enquiryTable.findOne({ studentEmail }); //Single Ans- >Object
  let obj;
  if (checkEmail) {
    obj = {
      _status: false,
      _message: "Email Already Exist...",
    };
    return res.send(obj);
  }

  let checkPhone = await enquiryTable.findOne({ studentPhone });
  if (checkPhone) {
    obj = {
      _status: false,
      _message: "Phone Number Already Exist...",
    };
    return res.send(obj);
  }

  let insertObj = {
    studentName,
    studentEmail,
    studentPhone,
  };

  let insertRes = await enquiryTable.insertOne(insertObj);
  obj = {
    _status: true,
    _message: "Enquiry Added",
    insertRes,
  };
  res.send(obj);
});

App.get("/enquiry/view", async (req, res) => {
  let db = await dbConnection();
  let enquiryTable = db.collection("enquiry");
  let data = await enquiryTable.find().toArray();
  let obj = {
    _status: true,
    _message: "Enquiry Found",
    data,
  };
  res.send(obj);
});

App.delete("/enquiry/delete/:id", async (req, res) => {
  let { id } = req.params; //Object Id
  let db = await dbConnection();
  let enquiryTable = db.collection("enquiry");
  let delRes = await enquiryTable.deleteOne({ _id: new ObjectId(id) });
  let obj = {
    _status: true,
    _message: "Enquiry Delete",
    delRes,
  };
  res.send(obj);
});

App.get("/enquiry/view/:id", async (req, res) => {
  let { id } = req.params; //Object Id //696e6cd9f3d1cd3352da96db
  let db = await dbConnection();
  let enquiryTable = db.collection("enquiry");
  let data = await enquiryTable.findOne({ _id: new ObjectId(id) });
  let obj = {
    _status: true,
    _message: "Enquiry Found",
    data,
  };
  res.send(obj);
});

App.put("/enquiry/update/:id", async (req, res) => {
  let { id } = req.params; //Object Id
  let db = await dbConnection();
  let enquiryTable = db.collection("enquiry");
  let { studentName, studentEmail, studentPhone } = req.body;
  let updObj = {
    studentName,
    studentEmail,
    studentPhone,
  };

  let updRes = await enquiryTable.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: updObj,
    },
  );
  let obj = {
    _status: true,
    _message: "Enquiry Delete",
    updRes,
  };
  res.send(obj);
});

App.listen(process.env.PORT || 8000, () => {
  console.log("Server Start");
});
