const consolesModel = require('../models/consolesModel');

const findAllConsoles = async (req, res) => {

    try {
        const allConsoles = await consolesModel.find();
        res.status(200).json(allConsoles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });

    }
}

const findConsoleById = async (req, res) => {

    try {
        const findConsole = await consolesModel.findById(req.params.id);
        res.status(200).json(findConsole);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });

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

        res.status(201).json({ message: "New console successfully added", savedConsole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

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
        const updateConsole = await consolesModel.findByIdAndUpdate(req.params.id, {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        });
        res.status(200).json({ message: "Console successfully update", updateConsole });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const deleteConsole = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteConsole = await consolesModel.findByIdAndDelete;
        const message = `Console with name ${deleteConsole.name} was successfully deleted`;
        res.status(200).json({ message});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}
const findConsoleByName = async (req, res) => {
    try {
        const {name} = req.params;
        const findConsoleByName = await consolesModel.find(name);
        const message = `Achou esse Console ${findConsoleByName.name}`;
        res.status(200).json({ message});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const findByAvailable = async (req, res) => {
    try {
        const {available} = req.params;
        const findByAvailable = await consolesModel.find(available);
        const message = `Achou por Avaliacao ${findByAvailable.available}`;
        res.status(200).json({ message});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    findAllConsoles,
    findConsoleById,
    addNewConsole,
    updateConsole,
    deleteConsole,
    findConsoleByName,
    findByAvailable

}