//to code for the faq
const express = require("express");
const router = express.Router();
const controller = require("../controllers/faq");
router.get("/", controller.getAll);
router.get("/:id", controller.get);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
