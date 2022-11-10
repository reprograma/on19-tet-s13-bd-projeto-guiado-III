const mongoose = require('mongoose');

const consoleSchema = new mongoose.Schema(
    {
        _id:{
            type:mongoose.Schema.Types.ObjectId,
            default:mongoose.Types.ObjectId
        },
        name:{
            type:String,
            required:true,
            unique:true
        },
        developer:{
            type:String,
            required:true,
       },
       releaseDate:{
            type:Number,
            required:true,
       },
       display:{
            type:[String],
            require:true,
       },
       storageCapacities:{
            type:[String],
            require:true,
       },
       numberOfPlayers:{
            type:[String],
            require:true,
       },
       available:{
            type:Boolean,
            require:true,
       },
       description:{
            type:String,
            minLenght:0,
            maxLenght:1000,
            default: "no descrition"
       },
    },
    {
        timestampe:true
    }
);

const Model = mongoose.model("Console", consoleSchema);

module.exports = Model;
