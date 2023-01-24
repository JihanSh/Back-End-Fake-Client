//to code for the NFT Collection
const express = require('express');
const multer = require('multer');
const router = express.Router();
const {getNfts}=require("../controllers/nft-collection.js");
const {postNfts}=require("../controllers/nft-collection.js");
const {updateNfts}=require("../controllers/nft-collection.js")
const {deleteNft}=require("../controllers/nft-collection.js")
const {upload}=require("../controllers/nft-collection")
const {find}=require("../controllers/nft-collection")

//get nfts
router.get("/getnft",getNfts)


//set nfts
router.post("/postnft",upload.single("nftImage"),postNfts)

//update nfts
router.put("/updatenft/:id",upload.single("nftImage"),updateNfts)

//delete nfts
router.delete("/deletenft/:id",deleteNft)
module.exports=router;