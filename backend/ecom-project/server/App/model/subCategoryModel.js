const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  subcategoryName: {
    type: String,
    minLength: [3, "Minimum 3 charater is required"],
  
    required: [true, "Name is required"],
  },
  parentCategory:{
    type:mongoose.Types.ObjectId, //Object Id Store
    ref:"category" //Category Model
  },
  subcategoryImage: {
    type: String,
  },
  subcategoryOrder: {
    type: Number,
    required: [true, "Order is required"],
    min: [1, "Minimum 1 value is required"],
    max: [100, "Maximum 5 value is allowed"],
  },
  slug:{
      type: String,
  },
  subcategoryStatus: {
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

const subcategoryModal = mongoose.model("subcategory", schema);

module.exports = subcategoryModal;
