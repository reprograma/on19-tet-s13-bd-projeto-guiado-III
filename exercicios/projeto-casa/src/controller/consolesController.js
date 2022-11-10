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
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const findByAvailable = async (req, res) => {
  try {
    const requestAvailable = req.query.available;

    const searchAvailable = await consolesModel.find({
      available: requestAvailable,
    });
    res.status(200).json(searchAvailable);
  } catch (error) {
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
      avaliable,
      description,
    } = req.body;

    const newConsole = new consolesModel({
      name,
      developer,
      releaseDate,
      display,
      storageCapacities,
      numberOfPlayers,
      avaliable,
      description,
    });

    const savedConsole = await newConsole.save();

    res
      .status(201)
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
      avaliable,
      description,
    } = req.body;
    const updateConsole = await consolesModel.findByIdAndUpdate(req.params.id, {
      name,
      developer,
      releaseData,
      display,
      storageCapacities,
      numberOfPlayers,
      avaliable,
      description,
    });

    res
      .status(200)
      .json({ message: "Console successfully updated", updateConsole });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const deleteConsole = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteConsole = await consolesModel.findByIdAndDelete(id);
    const message = `Console with name ${deleteConsole.name} was successfully deleted`;
    res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findAllConsoles,
  findConsoleById,
  addNewConsole,
  updateConsole,
  deleteConsole,
  findByAvailable,
};
