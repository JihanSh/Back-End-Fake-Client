//code admin
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

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


//fire a function before doc saved to db

AdminSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt)
  next();
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
