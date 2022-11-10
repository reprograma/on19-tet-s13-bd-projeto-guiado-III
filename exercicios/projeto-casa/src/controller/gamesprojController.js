const consolesprojModel = require("../models/consolesprojModel");
const gamesprojModel = require("../models/gamesprojModel");

const findAllGames = async (req, res) => {
    try {
      const allGames = await gamesprojModel.find().populate("console");
      res.status(200).json(allGames);
    }catch(error){
      res.status(500).json({message: error.message});
    };
  };

  const findNameGames = async (req, res) => {    
    try {                       
        const filtroNome = await gamesprojModel.find({name:req.query.name});
        if(!filtroNome){
          res.status(404).json({message:'Nome não encontrado.'});
          return 
        }
        res.status(200).json(filtroNome);
        }catch(error){
        console.error(error);
        res.status(400).json({message: error.message})};
  };
  
  const findGameById = async (req, res) => {
    try {
      const findGame = await gamesprojModel.findById(req.params.id).populate("console");
      if(findGame == null) {
        res.status(404).json({message: "Game not available"});
      }
      res.status(200).json(findGame);
      }catch(error){
      res.status(500).json({message: error.message});
    };
  };

  const addNewGame = async (req, res) => {
    try {
      const {
        consoleId,
        name,
        developer,
        releaseDate,
        genre,
        available,
        description,
      } = req.body;  
      if (!consoleId) {
        return res
          .status(400)
          .json({ message: "Required: Enter the Console id." });
      };
  
      const findConsole = await consolesprojModel.findById(consoleId);
  
      if (!findConsole) {
        return res.status(404).json({ message: "Console not found" });
      };
  
      const newGame = new gamesprojModel({
        console: consoleId,
        name,
        developer,
        releaseDate,
        genre,
        available,
        description,
      });
      
      const savedGame = await newGame.save();
      res
        .status(200)
        .json({
          message: "New game added successfully!", savedGame});
     }catch (error){
      console.error(error);
      res.status(500).json({ message: error.message});
    };
  };
  
  const updateGame = async (req, res) => {
    try {
      const {id} = req.params;
      const {
        consoleId,
        name,
        developer,
        releaseDate,
        genre,
        available,
        description,
      } = req.body;
      const findGame = await proj.findById(id);
      if(findGame == null) {
        res.status(404).json({message: "Game not found"});
      };

      if(consoleId) {
        const findConsole = await consolesprojModel.findById(consoleId);
  
        if(findConsole == null) {
          return res.status(404).json({ message: "Console not found"});
        };
      };
      findGame.name = name || findGame.name;
      findGame.developer = developer || findGame.developer;
      findGame.releaseDate = releaseDate|| findGame.releaseDate;
      findGame.genre = genre || findGame.genre;
      findGame.available = available || findGame.available;
      findGame.description = description || findGame.description;
      findGame.console = consoleId || findGame.console;
  
      const savedGame = await findGame.save();
      res.status(200).json({ message: "Game successfully updated", savedGame });
      }catch(error){
      res.status(500).json({ message: error.message });
    };
  };

  const deleteGame = async (req, res) => {
    try {
      const {id} = req.params;
      const findGames = await gamesprojModel.findById(id);
  
      if (findGames == null) {
        return res.status(404).json({message: `Game with id ${id} not found`})
      };
      await findGames.remove();
      res.status(200).json({message: `Game with id ${id} was successfully deleted`});
      }catch(error){
      res.status(500).json({message: error.message });
    };
  };

module.exports = {
    findAllGames,
    findNameGames,
    findGameById,
    addNewGame,
    updateGame,
    deleteGame,
}