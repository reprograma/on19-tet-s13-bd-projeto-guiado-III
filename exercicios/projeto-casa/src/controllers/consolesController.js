const consolesModel = require("../models/consolesModel");

const findAllConsoles = async (req, res) => {
    try {
        const allConsoles = await consolesModel.find({});
        res.status(200).json(allConsoles);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
};

const findConsoleById = async (req, res) => {
    try {
        const findConsole = await consolesModel.findById(req.params.id);
        res.status(200).json(findConsole);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

const findConsoleByAvailableAndDeveloper = async (req, res) => {
    try {
        const { available, developer } = req.query;
        const findConsoleAvailable = await consolesModel.find({ available }).exec();
        const findConsoleDeveloper = await consolesModel.find({ developer }).exec();
        if (!findConsoleAvailable.length && !findConsoleDeveloper.length) {
            return res.status(404).json({ message: "Filter not found" });
        }
        res.status(200).json([findConsoleAvailable, findConsoleDeveloper]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

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
            message: "New console successfully added", savedConsole
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
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
        res
            .status(200)
            .json({
                message: "Console successfully updated", updateConsole
            });
    } catch (error) {
        console.error(error);
        res.status(500).jsom({
            messagem: error.message
        });
    }
};

const deleteConsole = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteConsole = await consolesModel.findByIdAndDelete(id);
        const message = `Console with name ${deleteConsole.name} was successfully deleted`;
        res.status(200).json({
            message
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    findAllConsoles,
    findConsoleById,
    findConsoleByAvailableAndDeveloper,
    addNewConsole,
    updateConsole,
    deleteConsole
}