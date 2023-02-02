//to code for the creators
const mongoose = require("mongoose");
const creatorSchema = mongoose.Schema(
  {
    creatorName: {
      type: String,
      required: [true, "Please add a creator name value"],
    },

    description: {
      type: String,
      required: [true, "Please add a description value"],
    },
    creatorimg:{
      data:String,
      contentType:String
    },
    bckgrndimg:{
      data:String,
      contentType:String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("creatorTable", creatorSchema);
