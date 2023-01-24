//to code for the NFT Collection
const mongoose=require ("mongoose");

const nftsCollection=mongoose.Schema({
    designerName:{
        type:String
    },
    nftName:{
        type:String
    },
    currentBid:{
        type:Number
    },
    category:{
        type:String,
        
    },
    image:{
        type:String
    }
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("collectionNFT", nftsCollection);