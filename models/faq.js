//to code for the faq
const mongoose = require("mongoose");

const FAQSchema = mongoose.Schema({
  questions: {
    type: String,
    required: true,
  },
  answers: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("FAQ", FAQSchema);
