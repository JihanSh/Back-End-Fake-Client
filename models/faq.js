//to code for the faq
const mongoose = require("mongoose");

const FAQSchema = mongoose.Schema({
  questions: {
    type: String,
    require: true,
  },
  answers: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("FAQ", FAQSchema);
