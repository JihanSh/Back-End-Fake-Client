//to code for the NFT Collection
const express = require('express');

const router = express.Router();
const {getNfts}=require("../controllers/nft-collection.js");
const {postNfts}=require("../controllers/nft-collection.js");
const {updateNfts}=require("../controllers/nft-collection.js")
const {deleteNft}=require("../controllers/nft-collection.js")
//get nfts
router.get("/getnft",getNfts)

//set nfts
router.post("/postnft",postNfts)

//update nfts
router.put("/updatenft/:id",updateNfts)

//delete nfts
router.delete("/deletenft/:id",deleteNft)
module.exports=router;