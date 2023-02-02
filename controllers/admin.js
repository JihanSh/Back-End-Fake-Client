//to code for the admin login
const Admin = require("../models/admin")
const jwt = require("jsonwebtoken")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
//for singup
const signup_admin = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.status(400)
    throw new Error("please add all fields")
  }
  // check if user exist
  const userExists = await Admin.findOne({ username })
  if (userExists) {
    res.status(400)
    throw new Error("Username already exists")
  }
  const admin = await Admin.create({
    username,
    password
  })
  if (admin) {
    res.status(201).json({
      _id: admin.id,
      username: admin.username,
      token: generateToken(admin._id)
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})


//for login
const login_get = asyncHandler(async (req, res) => {
  const { _id, username, } = await Admin.findById(req.admin.id)
  res.status(200).json({
    id: _id,
    username,
  })
})

const login_admin = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  const admin = await Admin.findOne({ username })

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin.id,
      username: admin.username,
      token: generateToken(admin._id)
    })
  } else {
    res.status(400)
    throw new Error("Invalid credentials")
  }
}
)

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  login_get,
  login_admin,
  signup_admin
}