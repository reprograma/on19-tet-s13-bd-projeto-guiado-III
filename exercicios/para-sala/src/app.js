const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const consolesRoutes = require("./routes/consolesRoute");
const gamesRoutes = require("./routes/gamesRoute");
require("dotenv-safe").config();
mongoose.connect(process.env.DATABASE_MONGO);

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/gamestore/consoles", consolesRoutes);
app.use("/gamestore/games", gamesRoutes);

module.exports = app;
