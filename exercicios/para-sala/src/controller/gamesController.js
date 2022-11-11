const GamesModel = require("../models/gamesModel");
const ConsolesModel = require("../models/consolesModel");

const findAllGames = async (req, res) => {
  try {
    const allGames = await GamesModel.find().populate("Console");
    res.status(200).json(allGames);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const findGameById = async (req, res) => {
  try {
    const findGame = await GamesModel.findById(req.params.id).populate(
      "Console"
    );
    if (findGame == null) {
      res.status(404).json({ message: "Game not available" });
    }
    res.status(200).json(findGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findGameByName = async (req, res) => {
  try {
    const findGame = await GamesModel.find(req.query);
    if (findGame == null) {
      res.status(404).json({ message: "Name not available" });
    }

    if (findGame) {
      res.status(200).json(findGame);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewGame = async (req, res) => {
  try {
    const {
      consoleId,
      name,
      developer,
      releaseDate,
      genre,
      mode,
      available,
      description,
    } = req.body;

    if (!consoleId) {
      return res
        .status(400)
        .json({ message: "Required: Enter the Console id." });
    }

    const findConsole = await ConsolesModel.findById(consoleId);

    if (!findConsole) {
      return res.status(404).json({ message: "Console not found" });
    }

    const newGame = new GamesModel({
      console: consoleId,
      name,
      developer,
      releaseDate,
      genre,
      mode,
      available,
      description,
    });
    const savedGame = await newGame.save();
    res
      .status(200)
      .json({ message: "New game added successfully!", savedGame });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
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
      mode,
      available,
      description,
    } = req.body;
    const findGame = await GamesModel.findById(id);
    if (findGame == null) {
      res.status(404).json({ message: "Game not found" });
    }

    if (consoleId) {
      const findConsole = await ConsolesModel.findById(consoleId);

      if (findConsole == null) {
        return res.status(404).json({ message: "Console not found" });
      }
    }
    findGame.name = name || findGame.name;
    findGame.developer = developer || findGame.developer;
    findGame.releaseData = releaseDate || findGame.releaseData;
    findGame.genre = genre || findGame.genre;
    findGame.model = model || findGame.model;
    findGame.available = available || findGame.available;
    findGame.description = description || findGame.description;
    findGame.console = consoleId || findGame.console;

    const savedGame = await findGame.save();
    res.status(200).json({ message: "Game successfully updated", savedGame });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const findGames = await GamesModel.findById(id);

    if (findGames == null) {
      return res.status(404).json({ message: `Game with id ${id} not found` });
    }
    await findGames.remove();
    res
      .status(200)
      .json({ message: `Game with id ${id} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findAllGames,
  findGameById,
  findGameByName,
  addNewGame,
  updateGame,
  deleteGame,
};
