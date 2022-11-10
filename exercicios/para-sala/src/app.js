require("dotenv-safe").config();
const express = require('express');
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const consolesRouter = require("./routes/consolesRoute");
const gamesRouter = require("./routes/gamesRoute");

const app = express();


app.use(express.json())
app.use(cors())
mongoose.connect()


app.use("/gamestore/consoles", consolesRouter)
app.use("/gamestore/games", gamesRouter)


module.exports = app