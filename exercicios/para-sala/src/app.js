require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/dbConnect')
const consoleRoute = require('./routes/consolesRoute')
const gameRoute = require('./routes/gamesRoute')
const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use('/gamestore/consoles', consoleRoute)
app.use('/gamestore/games', gameRoute)

module.exports = app