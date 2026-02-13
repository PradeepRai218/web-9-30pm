const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  productName: {
    //T-Shirts
    type: String,
    minLength: [3, "Minimum 3 charater is required"],

    required: [true, "Name is required"],
  },
  parentCategory: {
    //Men - Id
    type: mongoose.Types.ObjectId, //Object Id Store
    ref: "category", //Category Model
  },
  subCategory: {
    //Topwear
    type: mongoose.Types.ObjectId, //Object Id Store
    ref: "subcategory", //Category Model
  },
  subSubCategory: {
    //Topwear
    type: mongoose.Types.ObjectId, //Object Id Store
    ref: "subSubcategory", //Category Model
  },
  productMaterials: [
    {
      //Topwear
      type: mongoose.Types.ObjectId, //Object Id Store
      ref: "materials", //Category Model
    },
  ],
  producColor: [
    {
      //Topwear
      type: mongoose.Types.ObjectId, //Object Id Store
      ref: "colors", //Category Model
    },
  ],
  productShortDescription: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  productImage: {
    type: String,
  },
   productGallery: {
    type: Array,
  },
  productPrice: {
    type: Number,
  },
  productActualPrice: {
    type: Number,
  },
  productOrder: {
    type: Number,
    required: [true, "Order is required"],
    min: [1, "Minimum 1 value is required"],
    max: [100, "Maximum 5 value is allowed"],
  },
  slug: {
    type: String,
  },
  productStatus: {
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

const productModal = mongoose.model("product", schema);

module.exports = productModal;
