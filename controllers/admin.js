//to code for the admin login
const Admin = require("../models/admin")

//handel errors
const handelErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { username: "", password: "" };

  // duplicate error code 

  if (err.code === 11000) {
    errors.username = " that username is already taken";
    return errors;
  }

  //validation errors

  if (err.message.includes('Admin validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    })
  }
  return errors;
}

//for login
module.exports.login_get = (req, res) => {
  res.send("login")
}

module.exports.login_post = (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  res.send("user login")
}

//for singup
module.exports.signup_get = (req, res) => {
  res.send("signup")
}

module.exports.signup_post = async (req, res) => {
  const { username, password } = req.body
  try {
    const admin = await Admin.create({ username, password })
    res.status(201).json(admin);

  }

  catch (err) {
    const errors = handelErrors(err);
    res.status(400).json({ errors })
  }
}