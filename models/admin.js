//code admin
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

  username: {
    type: String,
    required: [true, 'Please enter an Username'],
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: [true, 'Please enter an Password'],
  },
})

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
