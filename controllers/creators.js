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
  res.status(200).json({ message: `Update Creator ${req.params.id}` });
});

//@desc Delete Creator
// @route Delete /api/Creators/id
// @access Private

const deleteCreator = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Creator ${req.params.id}` });
});

module.exports = {
  getCreator,
  setCreator,
  updateCreator,
  deleteCreator,
};
