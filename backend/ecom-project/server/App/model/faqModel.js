const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  faqQuestion: {
    type: String,
    required: [true, "Name is required"],
  },
  faqAnswer: {
    type: String,
    required: [true, "Answer is required"],
  },
  faqOrder: {
    type: Number,
    required: [true, "Order is required"],
    min: [1, "Minimum 1 value is required"],
    max: [5, "Maximum 5 value is allowed"],
  },
  faqStatus: {
    type: Boolean,
    default: true,
  },
});

let faqModel = mongoose.model("faqs", schema);
module.exports = faqModel;
