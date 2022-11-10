const mongoose = require('mongoose')
const ConsoleSchema = new mongoose.Schema (
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        name:{
            type: String,
            required: true, 
            unique: true
        },
        developer:{
            type: String,
            required: true
        },
       ReleaseDate:{
        type: Number,
        required: true
       },
       display:{
        type: [String],
        required: true
       },
       storagecapacities: {
        type: [String],
        required: true
       },
       NumberOfPlayers:{
         type:{Number},
         required: true
       },
       availabe:{
        type: Boolean,
        required: true
       },
       description:{
        type: String,
        minLenght:0,
        maxLenght:100,
        default:"noo deion"
       }
      
       
    },
    { timestamp: true }
)


const Model = mongoose.model("console", ConsoleSchema)
module.exports = Model;