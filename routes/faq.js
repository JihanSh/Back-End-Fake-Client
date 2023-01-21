//to code for the faq
const express = require("express");
const router = express.Router();
const controller = require("../controllers/faq");
router.get("/", controller.getAll);
