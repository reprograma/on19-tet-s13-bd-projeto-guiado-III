const GamesModel = require("../models/gamesModel");
const ConsolesModel = require("../models/consolesModel");

const findAllGames = async (req, res) => {
  try {
    const allGames = await GamesModel.find(req.body).populate("console");
    res.status(200).json(allGames);
  } catch {
    res.status(500).json({ message: error.message });
  };
};
// listar por id do jogo
const findGameById = async (req, res) => {
  try {
    const findGame = await GamesModel.findById(req.params.id).populate(
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
// adiciona um novo jogo
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
    };

    const findConsole = await ConsolesModel.findById(consoleId);

    if (findConsole) {
      return res.status(404).json({ message: "Console not found" });
    };

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
  };
};
//atualiza dados do jogo
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
    };

    if (consoleId) {
      const findConsole = await ConsolesModel.findById(consoleId);

      if (findConsole == null) {
        return res.status(404).json({ message: "Console not found" });
      };
    };
    findGame.name = name || findGame.name;
    findGame.developer = developer || findGame.developer;
    findGame.releaseDate = releaseDate || findGame.releaseDate;
    findGame.genre = genre || findGame.genre;
    findGame.mode = mode || findGame.mode;
    findGame.available = available || findGame.available;
    findGame.description = description || findGame.description;
    findGame.console = consoleId || findGame.console;

    const savedGame = await findGame.save();
    res.status(200).json({ message: "Game successfully updated", savedGame });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};
 // exclui jogo
const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const findGames = await GamesModel.findById(id);

    if (findGames == null) {
      return res.status(404).json({ message: `Game with id ${id} not found` })
    };
    await findGames.remove();
    res.status(200).json({ message: `Game with id ${id} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};
//------------------------------------------------------------------------------------
//* Cadastre no seu banco de dados um novo jogo e/ou um novo console (a sua escolha), tire um print da tela e adicione essa imagem no seu **README.md** isso servirá como comprovante pessoal de que todo seu codigo esta funcionando. 
//seguindo os mesmos passos do que a professora ensinou - funcionou 
const addMyGame = async (req, res) => {
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
    };

    const findConsole = await ConsolesModel.findById(consoleId);

    if (findConsole) {
      return res.status(404).json({ message: "Console not found" });
    };

    const MyGame = new GamesModel({
      console: consoleId,
      name,
      developer,
      releaseDate,
      genre,
      mode,
      available,
      description,
    });
    const savedGame = await MyGame.save();
    res
      .status(200)
      .json({ message: "New game added successfully!", savedGame });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

//* Opicional (não conta como avaliação): Crie uma **rota GET** para *genre* em jogos e uma **rota GET** para *developer* em consoles.
// incompleto, quase funcionando como deveria kkkk, bem ao menos tentei 
const findGameByGenre = async (req, res) => {
  try {
    const findGenre = await GamesModel.find({ genre :req.params.genre})
  
    if (findGenre == null) {
      res.status(404).json({ message: "Game not available" });
    }
    res.status(200).json(findGenre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};


module.exports = {
  findAllGames,
  findGameById,
  addNewGame,
  updateGame,
  deleteGame,

  addMyGame,
  findGameByGenre
  
};