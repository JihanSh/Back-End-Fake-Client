//to code for the creators
const asyncHandler = require("express-async-handler");
const Creator = require("../models/creators");

//@desc Get Creator (read=>post)
// @route Get /api/Creators
// @access Private

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
  }
  const theCreator = await Creator.create({
    creatorName: req.body.creatorName,
    description: req.body.description,
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
};
