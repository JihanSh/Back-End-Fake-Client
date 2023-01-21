//to code for the NFT Collection
const mongoose=require ("mongoose");

const nftsCollection=mongoose.Schema({
    designerName:{
        type:String,
        require:true
    },
    nftName:{
        type:String,
        require:true
    },
    currentBid:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("collectionNFT", nftsCollection);