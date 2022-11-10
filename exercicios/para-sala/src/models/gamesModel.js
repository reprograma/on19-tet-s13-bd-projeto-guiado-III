const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        developer: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Number,
            required: true,

        },
        genre: {
            type: [String],
            required: true,

        },
        description: {
            type: String,
            required: true,

        },
        console: {

            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "Console"
        }

    },
    {
        timestamp: true
    }


);

const Model = mongoose.model("game", gameSchema);

module.exports = Model