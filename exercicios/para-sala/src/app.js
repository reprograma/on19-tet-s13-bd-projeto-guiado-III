require("dotenv-safe").config();
const express = require("express"); // importo o express
const cors = require("cors"); // importo o cors
const mongoose = require("./database/dbConnect"); // conecto a pasta do Mongo
const consolesRoute = require("./routes/consolesRoute"); // conecto as rotas
const gamesRoute = require("./routes/gamesRoute");
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/gamestore/consoles", consolesRoute); // crio uma rota raiz
app.use("/gamestore/games", gamesRoute); 

// exportando para usar o server.js
module.exports = app;