require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
mongoose.set("strictQuery", true);
const creators = require("./routes/creators.js");
const multer = require("multer");

connection();
app.use("/creator", creators);
const conn = mongoose.connection;
// app.use("/api/creators", require("./routes/creators"));

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}`));
