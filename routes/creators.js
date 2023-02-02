const express = require("express");
const router = express.Router();
const { getCreator } = require("../controllers/creators");
const { setCreator } = require("../controllers/creators");
const { updateCreator } = require("../controllers/creators");
const { deleteCreator } = require("../controllers/creators");
const multer = require("multer");
const { uploadss } = require("../controllers/creators.js");

router.get("/", getCreator);

router.post(
  "/",
  uploadss.fields([
    { name: "creatorimg", maxCount: 1 },
    { name: "bckgrndimg", maxCount: 1 },
  ]),
  setCreator
);

router.put("/:id", updateCreator);

router.delete("/:id", deleteCreator);
module.exports = router;