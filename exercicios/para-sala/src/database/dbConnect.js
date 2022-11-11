const DATABASE_MONGO = process.env.DATABASE_MONGO
const mongoose = require("mongoose");
const connect = async() => {
    try {
        mongoose.connect(DATABASE_MONGO, 
        {useNewUrlParser: true,
        useUnifiedTopology: true,})
        console.log("CONECTOU, GATÍSSIMA, TÁ RODANDO");

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect}