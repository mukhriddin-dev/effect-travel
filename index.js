const express = require("express");

const connectDB = require("./config/db.js");

require("dotenv").config();

//connect to database;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("APP TRAVEL");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
