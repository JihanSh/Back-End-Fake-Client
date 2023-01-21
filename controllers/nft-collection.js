//to code for the NFT Collection
const express = require('express');
const nfts = require('../models/nft-collection.js');



//viewing the nfts
// /nft/getnft
 const getNfts=async(req,res)=>{
    try{
    const nftss=await nfts.find();
    res.status(200).json(nftss)
    }
    catch(err){
        res.json({message:err})
    }
}


//inserting nft to mongo

//@desc postNfts
// create (post)
// @route Set /nft/postnft
// @access Private

const postNfts=async(req,res)=>{
    
    if(!req.body){

        // console.log("hello")
        res.status(400).json({message:"Error"})
        
    }
    else{
        const postNftss=await nfts.create(
            {
            
        designerName:req.body.designerName,
        nftName:req.body.nftName,
        currentBid:req.body.currentBid,
        category:req.body.category,
            })
             
    //    console.log("hi")
       res.status(200).json(postNfts)
    
    
    }

}

//updating specific info from the name
// /updatenft/:id


const updateNfts=async(req,res)=>{

    const nftUpdate= await nfts.findById(req.params.id);
    if(!nftUpdate){
        // console.log("eror in update")
        res.status(400)
    }
    else{
        // console.log("done update")
        const updatedNfts= await nfts.findByIdAndUpdate(req.params.id,req.body,
            {
                new:true,
            })
            res.status(200).json(updatedNfts);
    }
}

//delete nfts
// /deletenft/:id

const deleteNft=async(req,res)=>{
    const nftDeleted= await nfts.findById(req.params.id);
    if(!nftDeleted){
        // console.log("eror in update")
        res.status(400)
    }
    else{
        await nftDeleted.remove();
        res.status(200).json({id:req.params.id});
    }

}


  
module.exports = {
    getNfts,
    postNfts,
    updateNfts,
    deleteNft
}