//to code for the creators
const asyncHandler = require("express-async-handler");
const Creator = require("../models/creators");
const multer=require('multer');
const fs=require('fs');
const path=require('path');
const { error } = require("console");
//@desc Get Creator (read=>post)
// @route Get /api/Creators
// @access Private

const storage=multer.diskStorage({
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|svg)$/)) {
      return cb(new Error("Unexpected field"), false);
    }
    cb(null, true);
  },
  destination:"creators",
  filename:(req,file,cb)=>{
      cb(null,file.originalname);

}

}
)
const uploadss=multer({
  storage:storage
})


const getCreator = asyncHandler(async (req, res) => {
  const creators = await Creator.find();
  res.status(200).json(creators);
});

//@desc Set Creator
// create (post)
// @route Set /api/Creators
// @access Private

const setCreator = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a set creator");
    console.log(error)
  }
  const theCreator = await Creator.create({
    creatorName: req.body.creatorName,
    description: req.body.description,
    creatorimg: {
      data:req.file.path,
      contentType:"image.jpg" || "image.png" || "image.svg" || "image.jpeg" ,
  },
  bckgrndimg:{
    data:req.file.path,
    contentType:"image.jpg" || "image.png" || "image.svg" || "image.jpeg" ,
  }
  });
  res.status(200).json(theCreator);
});

//@desc Update Creator
// @route Put /api/Creators/id
// @access Private

const updateCreator = asyncHandler(async (req, res) => {
  const theCreator = await Creator.findById(req.params.id)
  if(!theCreator){
    res.status(400)
    throw new Error('Update creator is not found')
  }
  const updatedCreator = await theCreator.findByIdAndUpdate(req.params.id , req.body,{
    new: true,
  })
  res.status(200).json(updateCreator);
});

//@desc Delete Creator
// @route Delete /api/Creators/id
// @access Private

const deleteCreator = asyncHandler(async (req, res) => {
  const theCreator = await theCreator.findById(req.params.id)
   
  if(!goal) {
    res.status(400)
    throw new Error ('Delete goal not found')

  }
  await goal.remove()

  res.status(200).json({ id: req.params.id })
  
})

module.exports = {
  getCreator,
  setCreator,
  updateCreator,
  deleteCreator,
  uploadss,
};
