const DATABASE_MONGO = process.env.DATABASE_MONGO
const mongosse = require("mongoose")
const connect = async() =>{
    try{
        mongosse.connect(DATABASE_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('A database foi conectada');
    }catch(error){
        console.log(error);
    }
}

module.exports = {connect}