require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./src/database/dbConnect");
const consolesRoutes = require("./src/routes/consolesRoute");
const gamesRoutes = require("./src/routes/gamesRoute");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/gamestore/consoles",consolesRoutes);
app.use("/gamestore/games",gamesRoutes);

module.exports = app;