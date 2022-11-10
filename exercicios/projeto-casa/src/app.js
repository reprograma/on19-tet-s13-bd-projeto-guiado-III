require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const consolesRoute = require("./routes/consolesRoute");
const gamesRoute = require("./routes/gamesRoute");
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/gamestore/consoles", consolesRoute);
app.use("/gamestore/games", gamesRoute);

module.exports = app;
