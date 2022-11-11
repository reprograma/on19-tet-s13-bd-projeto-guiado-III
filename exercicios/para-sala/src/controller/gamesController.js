const gamesModel = require("../models/gamesModel")
const consoleModel = require("../models/consolesModel")
const findAllGames = async (req, res) => {
    try {
      const allGames = await gamesModel.find().populate("console");
      res.status(200).json(allGames);
    } catch {
      res.status(500).json({ message: error.message });
    };
  };
  const findGamesById = async (req, res) => {
    try {
      const findGame = await gamesModel.findById(req.params.id).populate(
        "console"
      );
      if (findGame == null) {
        res.status(404).json({ message: "Game not available" });
      }
      res.status(200).json(findGame);
    } catch (error) {
      res.status(500).json({ message: error.message });
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
        avaliable,
        description,
      } = req.body;
  
      if (!consoleId) {
        return res.status(400).json({ message: "Required: Enter the Console id." });
      };
  
      const findConsole = await consolesModel.findById(consoleId);
  
      if (!findConsole) {
        return res.status(404).json({ message: "Console not found" });
      };
  
      const newGame = new gamesModel({
        console: consoleId,
        name,
        developer,
        releaseDate,
        genre,
        avaliable,
        description,
      });
      const savedGame = await newGame.save();
      res.status(200).json({ message: "New game added successfully!", savedGame });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    };
  };
  const updateGame = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        consoleId,
        name,
        developer,
        releaseDate,
        genre,
        avaliable,
        description,
      } = req.body;
      const findGame = await gamesModel.findById(id);
      if (findGame == null) {
        res.status(404).json({ message: "Game not found" });
      };

      if (consoleId) {
        const findConsole = await consolesModel.findById(consoleId);

        if (findConsole == null) {
          return res.status(404).json({ message: "Console not found" });
        };
      };
      findGame.name = name || findGame.name;
      findGame.developer = developer || findGame.developer;
      findGame.releaseDate = releaseDate || findGame.releaseDate;
      findGame.genre = genre || findGame.genre;
      findGame.avaliable = avaliable || findGame.avaliable;
      findGame.description = description || findGame.description;
      findGame.console = consoleId || findGame.console;

      const updateGame = await findGame.save();
      res.status(200).json({ message: "Game successfully updated", updateGame });
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };
    const deleteGame = async (req, res) => {
    try {
      const { id } = req.params;
      const findGames = await gamesModel.findById(id);

      if (findGames == null) {
        return res.status(404).json({ message: `Game with id ${id} not found` })
      };
      await findGames.remove();
      res.status(200).json({ message: `Game with id ${id} was successfully deleted` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };
  const findByName = async (req, res) => {
    try {
      const findName = await gamesModel.find({ name: req.query.name });
      if (!findName) {
        res.status(404).json({ message: "Game not available" });
      }
      res.status(200).json(findByName);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  module.exports = {
    findAllGames,
    findGamesById,
    addNewGame,
    updateGame,
    deleteGame,
    findByName
  }
