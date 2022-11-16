const consoleModel = require('../models/consolesModel')

const consoleByAvailable = async (req,res)=>{
    try{
        const findConsole = consoleModel.find(req.params.available).populate;
        res.status(200).json(findConsole)
    } catch (error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
}




module.exports = {
    consoleByAvailable
}