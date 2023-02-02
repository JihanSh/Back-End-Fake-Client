require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const AdminRoute = require("./routes/admin")
const cors = require('cors')
mongoose.set("strictQuery", true);
app.use(cors());

connection();

app.use(express.json());

app.use(AdminRoute);

const conn = mongoose.connection;

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));