const consolesModel = require("../models/consolesModel");

const findAllConsoles = async (req, res) => {
    try {
        const allConsoles = await consolesModel.find();  // GET
        res.satus(200).json(allConsoles);
    } catch (error) {
        console.log(error);
        res.satus(500).json({message: error.massage})
    }
};

const findConsoleById = async (req, res) => {   //GET
    try {
        const findConsole = await consolesModel.findById(req.params.id);
        res.status(200).json(findConsole);
    } catch (error) {
        console.error(error);
        res.status(500).json({massage: error.massage})
    }
}

const addNewConsole = async (req, res) => {  // Informações do Cadastro
    try {
        const {name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        } = req.body;
        const newConsole = new consolesModel({    // Cadastro
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        });
        const savedConsole = await newConsole.save()  // constante para mostrar que foi salvo o consolle
        res.status(200). json({message: "New console successfully added", savedConsole
    });
    } catch (error) {
        console.log(error);
        res.status(500).jason(error.messege);
    }
};

const updateConsole = async (req, res) => {
    try {
        const {name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        } = req.body;
        const updateConsole = await consolesModel.findByAndUpdate(req.params.id, {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        });
        res.status(200).json({menssage: "Console successfully updated", updateConsole
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({massage: error.massage})
    }
}

const findConsolesByAvailable = async (req, res) => {
    try {
      const AvailableConsoles = await consolesModel.find(req.params.available);
      if (consolesModel.available == true ) {
        res.status(404).json({ message: "Consoles not available" });
      }
      res.status(200).json(AvailableConsoles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };

  module.exports = {
    findAllConsoles,
    findConsoleById,
    addNewConsole,
    updateConsole,
    findConsolesByAvailable,
  }