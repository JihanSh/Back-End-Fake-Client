const express = require("express");
const router = express.Router();
const {getCreator} = require('../controllers/creators')
const {setCreator} = require('../controllers/creators')
const {updateCreator} = require('../controllers/creators')
const {deleteCreator} = require('../controllers/creators')


router.get("/", getCreator)
 
router.post("/",setCreator)

router.put("/:id",updateCreator)

router.delete("/:id", deleteCreator)




module.exports = router;
