const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const faqRoutes = require("./routes/faq");
mongoose.set("strictQuery", true);
const cors = require("cors");
const nftRoute=require("./routes/nft-collection")

const creators = require("./routes/creators.js");
const multer = require("multer");


connection();
app.use("/creator", creators);
const conn = mongoose.connection;

app.use(express.json());
app.use(faqRoutes);
app.use(express.urlencoded({extended:false}));


app.use("/nft", nftRoute)
app.use(cors());
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

// /nft/postnft
