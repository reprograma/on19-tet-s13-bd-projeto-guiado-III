const consolesModel = require("../models/consolesModel");

const findAllConsoles = async (req, res) => {
  try {
    const allConsoles = await consolesModel.find();
    res.status(200).json(allConsoles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const findConsoleById = async (req, res) => {
  try {
    const findConsole = await consolesModel.findById(req.params.id);
    res.status(200).json(findConsole);
  } catch (error) {
    console.error(errir);
    res.status(500).json({ message: error.message });
  }
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
      description
    });

    const savedConsole = await newConsole.save();
    res
      .status(200)
      .json({ message: "New console successfully added", savedConsole });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

const updateConsole = async (req, res) => {
  try {
    const {
      name,
      developer,
      releaseData,
      display,
      storageCapacities,
      numberOfPlayers,
      available,
      description,
    } = req.body;
    const updateConsole = await ConsolesModel.findByIdAndUpdate(req.params.id, {
      name,
      developer,
      releaseData,
      display,
      storageCapacities,
      numberOfPlayers,
      available,
      description,
    });

    res
      .status(200)
      .json({ message: "Console successfully updated", updateConsole });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteConsole = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteConsole = await ConsolesModel.findByIdAndDelete(id);
    const message = `Console with id ${deleteConsole.name} was successfully deleted`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


const findConsoleByavailable = async (req, res) => {
  try {
    const findConsole = await consolesModel.find({ available: req.query.available }) ;
    res.status(200).json(findConsole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  findAllConsoles,
  findConsoleById,
  addNewConsole,
  updateConsole,
  deleteConsole,
  findConsoleByavailable
};
