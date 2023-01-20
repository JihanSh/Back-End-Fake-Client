const express = require("express");

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/creators");
const connectDB = require("./config/db");
const port = process.env.PORT || 8080;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/creators", require("./routes/creators"));

app.listen(port, () => console.log(`Server started on port ${port}`));
