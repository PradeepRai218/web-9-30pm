const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  categoryName: {
    type: String,
    minLength: [3, "Minimum 3 charater is required"],
    maxLength: [15, "Maximum 15 charater is allowed"],
    required: [true, "Name is required"],
  },
  categoryImage: {
    type: String,
  },
  categoryOrder: {
    type: Number,
    required: [true, "Order is required"],
    min: [1, "Minimum 1 value is required"],
    max: [100, "Maximum 5 value is allowed"],
  },
  slug:{
      type: String,
  },
  categoryStatus: {
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

const categoryModal = mongoose.model("category", schema);

module.exports = categoryModal;
