const GamesModel = require("../models/gamesModel");
const ConsolesModel = require("../models/consolesModel");

/*const findByName = async (req, res) => {
  try {
    const findGame= await GamesModel.find({name:req.query.name}).populate(
      "Console"
    );
    if (!findGame) {
      res.status(404).json({ message: "Game not available" });
    }
    res.status(200).json(findGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};
*/


const findByName = async (req, res) => {
    try {
      const { name } = req.query
      const findGame = await GamesModel.find({ name }).exec(); 
      if (!findGame) {
        res.status(404).json({ message: "Game not found " });
      }
      res.status(200).json(findGame);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };



module.exports ={
    findByName
};
