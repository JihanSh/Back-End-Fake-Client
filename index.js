require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
mongoose.set("strictQuery", true);


connection();


const conn = mongoose.connection;

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));