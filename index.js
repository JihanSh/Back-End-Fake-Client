const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const cors = require("cors");
const nftRoute=require("./routes/nft-collection")
app.use(cors());
connection();
mongoose.set("strictQuery", true);
app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.use("/nft", nftRoute)

const conn = mongoose.connection;
app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

// /nft/postnft