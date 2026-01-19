let express=require("express")
const { dbConnection } = require("./config/dbConnection")
const { ObjectId } = require("mongodb")
var cors = require('cors')
require("dotenv").config()
let App=express()
App.use(cors())
App.use(express.json())

App.post('/enquiry/save',async (req,res)=>{
    let db= await dbConnection() //Call DB return
    let enquiryTable= db.collection("enquiry")

    let {studentName,studentEmail,studentPhone}=req.body
    let insertObj={
        studentName,
        studentEmail,
        studentPhone
    }
   
    let insertRes=await enquiryTable.insertOne(insertObj)
    let obj={
        _status:true,
        _message:"Enquiry Added",
        insertRes
    }
    res.send(obj)
})

App.get("/enquiry/view",async (req,res)=>{
    let db=await dbConnection()
    let enquiryTable=db.collection("enquiry")
    let data=await enquiryTable.find().toArray()
    let obj={
        _status:true,
        _message:"Enquiry Found",
        data
    }
    res.send(obj)
})

App.delete("/enquiry/delete/:id",async (req,res)=>{
    let {id}=req.params //Object Id
    let db=await dbConnection()
    let enquiryTable=db.collection("enquiry")
    let delRes=await enquiryTable.deleteOne({_id:new ObjectId(id)})
    let obj={
        _status:true,
        _message:"Enquiry Delete",
        delRes
    }
    res.send(obj)
})

App.put("/enquiry/update/:id",async (req,res)=>{
    let {id}=req.params //Object Id
    let db=await dbConnection()
    let enquiryTable=db.collection("enquiry")
    let {studentName,studentEmail,studentPhone}=req.body
    let updObj={
        studentName,
        studentEmail,
        studentPhone
    }

    let updRes=await enquiryTable.updateOne(
        {
            _id:new ObjectId(id)
        },
        {
            $set:updObj
        }
    )
    let obj={
        _status:true,
        _message:"Enquiry Delete",
        updRes
    }
    res.send(obj)
})





App.listen(process.env.PORT || 8000 ,()=>{
    console.log("Server Start");
    console.log(process.env.DBNAME);
    
    
})