//to code for the creators
const asyncHandler = require("express-async-handler");
const Creator = require("../models/creators");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { error } = require("console");
//@desc Get Creator (read=>post)
// @route Get /api/Creators
// @access Private

// const storage = multer.diskStorage({
//   destination: "uploadss/",
//   filename: (req, file, cb) => {
//     console.log("zeinab ", req.files);
//     cb(null, file);
//   },
// });
// const upload = multer({
//   storage: storage,
// });

const storage = multer.diskStorage({
destination: function(req, file, cb) {
  cb(null, "./uploadss");
},
filename: function(req, file, cb) {
  cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
}
});

const uploadss = multer({
  storage: storage
});

const getCreator = asyncHandler(async (req, res) => {
  const creators = await Creator.find();
  res.status(200).json(creators);
});

//@desc Set Creator
// create (post)
// @route Set /api/Creators
// @access Private

const setCreator = asyncHandler(async (req, res) => {
  console.log("req ", req.files);
  if (!req.body) {
    res.status(400);
    console.log("error123", error);
    throw new Error("Please add a set creator");
  }

  console.log("ALOOOO ",req.files.creatorimg[0].path)

  const theCreator = await Creator.create({
    creatorName: req.body.creatorName,
    description: req.body.description,
    creatorimg:  req.files.creatorimg[0].path,
   bckgrndimg: req.files.bckgrndimg[0].path,
     
  });

  res.status(200).json(theCreator);
});

//@desc Update Creator
// @route Put /api/Creators/id
// @access Private

const updateCreator = asyncHandler(async (req, res) => {
  const theCreator = await Creator.findById(req.params.id);
  if (!theCreator) {
    res.status(400);
    throw new Error("Update creator is not found");
  }
  const updatedCreator1 = await theCreator.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedCreator1);
});

//@desc Delete Creator
// @route Delete /api/Creators/id
// @access Private

const deleteCreator = asyncHandler(async (req, res) => {
  const theCreator = await Creator.findById(req.params.id);

  if (!theCreator) {
    res.status(400);
    throw new Error("Delete goal not found");
  }
  await theCreator.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCreator,
  setCreator,
  updateCreator,
  deleteCreator,
  uploadss,
};
