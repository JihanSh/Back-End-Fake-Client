//to code for the creators
const mongoose= require("mongoose");
const creator=mongoose.Schema({
    creatorName:{
        type:String,
        require:true
    },
    description:{
    type:String,
    require: true
    }

})


module.exports = mongoose.model ("creatorTable" , creator);