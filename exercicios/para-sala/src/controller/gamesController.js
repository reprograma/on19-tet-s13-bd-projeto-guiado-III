const gamesModel = require("../models/gamesModel");
const consolesModel = require("../models/consolesModel");

const findAllGames = async (req, res) => {
  try {
    const allGames = await gamesModel.find().populate("console");
    res.status(200).json(allGames);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const findGameById = async (req, res) => {
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
  module.exports = {
    findAllGames,
    findGameById,
    addNewGame,
    updateGame,
    deleteGame
  }
   
 


  /*{
  "consoleId":"63680014e8c5b3963b492f9d",
  "name":"God of War",
  "developer":"Santa Monica Studio",
  "releaseDate":2018,
  "genre":["Action-adventure","hack and slash"],
  "mode":["Single-player"],
  "available":true,
  "description":"While the first seven games were loosely based on Greek mythology, this episode is loosely inspired by Norse mythology, taking place several centuries after God of War III (2010). Six of the nine realms of Norse mythology can be explored. Predating the Vikings, most of the game takes place in ancient Scandinavia in the realm of Midgard, which is inhabited by humans and other creatures."
  }*/

  //localhost:1313/gamestore/games/add

/*{
  "name":"PlayStation 4",
  "developer":"Sony Computer Entertainment",
  "releaseDate":2013,
  "display":["480p","720p","1080p","4K"],
  "storageCapacities":["500GB","1TB","2TB"],
  "numberOfPlayers":["1","2","3"],
  "available":true,
  "description":"The PlayStation 4 (PS4) is a home video game console developed by Sony Computer Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013, in North America."
}*/

  //localhost:1313/gamestore/consoles/add
  
  
   
  