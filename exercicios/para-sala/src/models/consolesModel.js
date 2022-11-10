const mongoose = require('mongoose')

const consoleSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        nome: {
            type: String,
            required: true,
            unique: true
        }, 
        releaseDate: {
            type: Number,
            required: true
        }, 
        display: {
            type: [String],
            required: true
        },
        storageCapacities: {
            type: [String],
            required: true
        },
        numberOfPlayers: {
            type: [Number],
            required: true
        },
        available: {
            type: Boolean,
            required: true
        },
        description: {
            type: String,
            minlenght: 0,            // controlando o numero de caracteres.
            maxLenght: 1000,
            default: "no description"
        },
    },
    {
        timesTamp:true
    },
);

const Model = mongoose.model("console", consoleSchema);

module.exports = Model;
