require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const AdminRoute = require("./routes/admin")
const nftRoute=require("./routes/nft-collection")
const creatorRoute=require("./routes/creators")
const cors = require('cors');
const { upload } = require("./controllers/nft-collection");
const path=require ('path');
mongoose.set("strictQuery", true);

app.use(cors());

connection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(AdminRoute);
app.use("/nft",nftRoute);
app.use("/creators",creatorRoute);
app.use("/nft/nfts/uploads",express.static('uploads'));
app.use("/creators/uploadss",express.static('uploadss'))
const conn = mongoose.connection;

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));