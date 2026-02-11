const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  subSubcategoryName: {  //T-Shirts
    type: String,
    minLength: [3, "Minimum 3 charater is required"],
  
    required: [true, "Name is required"],
  },
  parentCategory:{  //Men - Id
    type:mongoose.Types.ObjectId, //Object Id Store
    ref:"category" //Category Model
  },
  subCategory:{ //Topwear
    type:mongoose.Types.ObjectId, //Object Id Store
    ref:"subcategory" //Category Model
  },
  subSubcategoryImage: {
    type: String,
  },
  subSubcategoryOrder: {
    type: Number,
    required: [true, "Order is required"],
    min: [1, "Minimum 1 value is required"],
    max: [100, "Maximum 5 value is allowed"],
  },
  slug:{
      type: String,
  },
  subSubcategoryStatus: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

const subSubcategoryModal = mongoose.model("subSubcategory", schema);

module.exports = subSubcategoryModal;
