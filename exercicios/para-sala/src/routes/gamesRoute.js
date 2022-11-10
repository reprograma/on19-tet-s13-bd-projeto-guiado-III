const controller = require("../controller/gamesController");

const express = require("express");

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/all", controller.findAllGames);

router.post("/add", controller.addNewGame);

router.get("/", controller.findGameByName);


router.patch("/:id", controller.updateGame);

router.delete("/:id", controller.deleteGame);

router.get("/:id", controller.findGameById);



module.exports = router;