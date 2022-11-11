const ConsolesModel = require("../models/consolesModel");

const findAllConsoles = async (req, res) => {
  try {
    const allConsoles = await ConsolesModel.find();
    res.status(200).json(allConsoles);
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  };
};

const findConsoleById = async (req, res) => {
  try {
    const findConsole = await ConsolesModel.findById(req.params.id);
    res.status(200).json(findConsole);
  } catch (error) {
    console.error(error);
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
    const newConsole = new ConsolesModel({
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
    res.status(500).json(error.message);
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
    const updateConsole = await ConsolesModel.findByIdAndUpdate(req.params.id, {
      name,
      developer,
      releaseDate,
      display,
      storageCapacities,
      numberOfPlayers,
      available,
      description,
    });

    res.status(200).json({ message: "Console successfully updated", updateConsole });
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const deleteConsole = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteConsole = await ConsolesModel.findByIdAndDelete(id);
    const message = `Console with id ${deleteConsole.id }was successfully deleted` ;
    res.status(200).json({ message });
  } catch (error){
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

//Crie uma rota GET que encontre um jogo usando como parametro o *name* (crie a logica na pasta controller);
const findByNameConsole = async (req, res) => {
  
  try {
  
    const findConsole = await ConsolesModel.find({ nome : req.params.name } )
    return res.status(200).json(findConsole);
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

// Crie uma rota **GET** que encontre um console usando como parametro *available* (crie a logica na pasta controller);
const findByAvailableConsole = async (req, res) => {
  try {
    const findConsole = await ConsolesModel.find(req.params.available);
    res.status(200).json(findConsole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};


//GET para *developer* em consoles.
const findConsoleDeveloper = async (req, res) => {
  try {
    
    const findDeveloper = await ConsolesModel.find({ developer : req.params.developer }) 
    res.status(200).json(findDeveloper);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};
// está retrnando uma array vazia, ou seja algo de errado não ta certo




module.exports = {
  findAllConsoles,
  findConsoleById,
  addNewConsole,
  updateConsole,
  deleteConsole,

  findByNameConsole,
  findByAvailableConsole,

  findConsoleDeveloper
};