const consolesModel = require("../models/consolesModel");

const findAllConsoles = async (req, res) => {
    try {
        const allConsoles = await consolesModel.find();
        res.status(200).json(allConsoles);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            messege: error.messege
        })
    }
}

const findConsoleById = async (req, res) => {
    try {
        const findConsole = await consolesModel.findById(req.params.id);
        res.status(200).json(findConsole)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            messege: error.messege
        })
    }
}

const addNewConsole = async (req, res) => {
    try {
        const {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        } = req.body;

        const newConsole = new consolesModel({
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,

        });

        const savedConsole = await newConsole.save();
        res.status(200).json({
            messege: "New console successfully added", savedConsole
        })

    } catch (error) {
        console.log(error);
        res.status.json(error.messege);
    }
}

const updateConsole = async (req, res) => {
    try {
        const {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        } = req.body;
        const updateConsole = await consolesModel.findByIdAndUpdate(req.params.name, {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        });
        res.status(200).json({
            message: "Console successfully updated", updateConsole
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

const deleteConsole = async (req, res) => {
    try {
        const {name} = req.params;
        deleteConsole = await consolesModel.findByIdAndRemove(name);
        const message = `Console with name ${deleteConsole.name} was successfully deleted`
        res.status(200).json({message});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    findAllConsoles,
    findConsoleById,
    addNewConsole,
    updateConsole,
    deleteConsole
}