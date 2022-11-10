const mongoose = require ("mongoose");
const { schema } = require("./consolesModel");
const gameSchema =  new mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId 
        },
       name: {
        type: String,
        required: true,
        unique: true
       },
       developer:{
        type: String,
        required: true
       },
       releaseDate:{
        type: Number,
        required: true
       },
       genre:{
        type: [String],
        required: true
       },
       description: String,

       console:{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Console"
       },
    },
    {
        timesTamp: true
    }
);

const Model = mongoose.model("game",gameSchema)

module.exports = Model