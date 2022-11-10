require("dotenv-safe").config()
const DATABASE_URL = process.env.DATABASE_URL
const mongoose = require('mongoose')
const connect = async ()=>{
    try {
        mongoose.Connection(DATABASE_URL, {
            useNewUrlParser: true,
      useUnifiedTopology: true,
        })
        console.log('Database foi conectada com sucesso')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {connect}