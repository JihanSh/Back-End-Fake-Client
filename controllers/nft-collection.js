//to code for the NFT Collection
const express = require('express');
const multer = require('multer');
const nfts = require('../models/nft-collection.js');
const fs = require('fs');
const path = require('path');




const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null,file.originalname);

    }

}
)
const upload = multer({
    storage: storage
})



//viewing the nfts
// /nft/getnft
const getNfts = async (req, res) => {
    try {
        const nftss = await nfts.find();
        
        res.status(200).json(nftss)
    }
    catch (err) {
        res.json({ message: err })
    }
}
const getNftsCat = async (req, res) => {
    try {
        
            const nftss = await nfts.findById(req.params.id);
        
        
        res.status(200).json(nftss)
    }
    catch (err) {
        res.json({ message: err })
    }
}

//inserting nft to mongo

//@desc postNfts
// create (post)
// @route Set /nft/postnft
// @access Private

const postNfts = async (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: "Error" })

    }
    else {
        // let uploaded_img = await cloudinary.uploader.upload(req.file.path);

console.log("reqFILE ",req.file.path)
        const postNftss = await nfts.create(
            {
                designerName: req.body.designerName,
                nftName: req.body.nftName,
                currentBid: req.body.currentBid,
                category: req.body.category,
                // uploaded_img.url
                image: req.file.path
            })
            res.status(200).json(postNftss)
   
   
}
}





//updating specific info from the name
// /updatenft/:id


const updateNfts = async (req, res) => {

    const nftUpdate = await nfts.findById(req.params.id);
    if (!nftUpdate) {

        res.status(400)
    }
    else {

        
        nftUpdate.designerName = req.body.designerName,
            nftUpdate.nftName = req.body.nftName,
            nftUpdate.currentBid = req.body.currentBid,
            nftUpdate.category = req.body.category
          
             nftUpdate.image =req.file.path
           
        
        const u1 = await nftUpdate.save()

        res.status(200).json(u1);
    }
}

//delete nfts
// /deletenft/:id

const deleteNft = async (req, res) => {
    const nftDeleted = await nfts.findById(req.params.id);
    if (!nftDeleted) {
        // console.log("eror in update")
        res.status(400)
    }
    else {
        await nftDeleted.remove();
        res.status(200).json({ id: req.params.id });
    }

}





module.exports = {
    getNfts,
    postNfts,
    updateNfts,
    deleteNft,
    upload,
    getNftsCat
}
