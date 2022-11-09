const mongoose = require('mongoose');
const MONGODB = process.env.MONGODB;
const connect = async () => {
    try {
        mongoose.connect(MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Database tá na pista, caminhoneira.`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    connect
}