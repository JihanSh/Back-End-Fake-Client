//to code for the creators
const asyncHandler = require('express-async-handler')


//@desc Get Creator
// @route Get /api/Creators
// @access Private


const getCreator = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Get goals'})
})

    

//@desc Set Creator
// @route Set /api/Creators
// @access Private


const setCreator = asyncHandler(async(req,res) => {
  if(!req.body.text) {
 res.status(400)
 throw new Error('Please add a text field')

  }
  res.status(200).json('Please add a text field')
})

//@desc Update Creator
// @route Put /api/Creators/id
// @access Private


const updateCreator = asyncHandler(async(req, res) => {
    res.status(200).json({ message:`Update goal ${req.params.id}`  });
  })
  

//@desc Delete Creator
// @route Delete /api/Creators/id
// @access Private


const deleteCreator = asyncHandler(async(req, res) => {
    res.status(200).json({ message:`Delete goal ${req.params.id}`  });
  })
  







module.exports = {
    getCreator,
    setCreator,
    updateCreator,
    deleteCreator
}