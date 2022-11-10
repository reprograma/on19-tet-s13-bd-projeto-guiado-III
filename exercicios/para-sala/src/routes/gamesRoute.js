const controller = require("../controller/gamesController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllGames);
router.get("/name", controller.findGameByName);
router.post("/add", controller.addNewGame);

router.get("/:id", controller.findGameById);
router.patch("/:id", controller.updateGame);

router.delete("/:id", controller.deleteGame);

module.exports = router;
