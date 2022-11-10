const consolesModel = require("../models/consolesModel");

const findAllConsoles = async (req, res) => {
  try {
    const allConsoles = await consolesModel.find();
    res.status(200).json(allConsoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findDeveloper = async (req, res) => {
  try {
    const findDeveloper = req.query.developer
    const findByDeveloper = await consolesModel.find({ developer: findDeveloper })
    if (!findByDeveloper) {
      res.status(404).json({ message: "Game not available" })
    }
    res.status(200).json(findByDeveloper)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const findConsoleById = async (req, res) => {
  try {
    const findConsole = await consolesModel.findById(req.params.id);
    res.status(200).json(findConsole);
  } catch (error) {
    console.error(error);
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
      description,
    });
    const savedConsole = await newConsole.save();
    res.status(200).json({ "New console successfully added": savedConsole });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const findConsoleByAvailable = async (req, res) => {
  try {
    const availableConsole = req.query.available

    const findByAvailable = await consolesModel.find({ available: availableConsole })
    if (findByAvailable == false) {
      res.status(404).json({ message: "Console not available" })
    }
    res.status(200).json(findByAvailable)
  } catch (error) {
    res.status(500).json({ message: error.message })
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
      .json({ message: "Console successfully updated", updateConsole});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteConsole = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteConsole = await consolesModel.findByIdAndDelete(id);
    const message = `Console with name ${deleteConsole.name} was successfully deleted`;
    res.status(200).json({ message })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
};

module.exports = {
  findAllConsoles,
  findConsoleById,
  addNewConsole,
  findConsoleByAvailable,
  findDeveloper,
  updateConsole,
  deleteConsole
}
