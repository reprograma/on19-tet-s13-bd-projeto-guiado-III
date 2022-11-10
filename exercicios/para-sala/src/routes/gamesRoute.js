const controller = require('../controller/gamesController');
const express = require('express');
const router = express.Router();

router.get("/all", controller.findAllGames); // buscar todos os jogos

router.get("/:id", controller.findGameById); // buscar um jogo pelo ID

router.post("/add", controller.addNewGame); // adicionar um novo jogo

router.patch("/:id", controller.updateGame); // alterar o jogo

router.delete("/:id", controller.deleteGame); // deletar o jogo 

router.get("/", controller.findGameByName); // buscar por nome

module.exports = router;
