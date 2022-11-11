const controller = require('../controller/gamesController');
const express = require('express');
const router = express.Router();

router.get("/all", controller.findAllGames);

router.get("/:id", controller.findGamesById);

router.post("/add", controller.addNewGame);

router.patch("/:id", controller.updateGame);

router.delete("/:id", controller.deleteGame);

router.get("/:name", controller.findByName)

module.exports = router;
