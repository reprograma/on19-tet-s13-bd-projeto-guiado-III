const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnectproj");
const consolesprojRoutes = require("./routes/consoleprojRoute");
const gamesprojRoutes = require("./routes/gameprojRoute");
require("dotenv-safe").config();
mongoose.connect(process.env.DATABASE_PROJ);

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/gamestore/consolesproj", consolesprojRoutes);
app.use("/gamestore/gamesproj", gamesprojRoutes);

module.exports = app;