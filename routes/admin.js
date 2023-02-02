//to code for the admin login
const express = require("express");
const router = express.Router();
const { login_get, login_admin, signup_admin } = require("../controllers/admin");
const {protect} = require("../middleware/admin")


// routes for signup....
router.post("/signup", signup_admin);

//routes for login......

router.post("/login", login_admin);
router.get("/login", protect, login_get);

module.exports = router;