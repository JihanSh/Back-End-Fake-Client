//to code for the admin login
const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin");


// routes for signup....
router.get("/signup", controller.signup_get);
router.post("/signup", controller.signup_post);

//routes for login......
router.get("/login", controller.login_get);
router.post("/login", controller.login_post);

module.exports = router;