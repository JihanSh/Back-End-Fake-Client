//code admin
const mongoose = require('mongoose');


const AdminSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model(`Admin`, AdminSchema);