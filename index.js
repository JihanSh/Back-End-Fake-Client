require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const faqRoutes = require("./routes/faq");
mongoose.set("strictQuery", true);

connection();

const conn = mongoose.connection;
app.use(express.json());
app.use(faqRoutes);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
