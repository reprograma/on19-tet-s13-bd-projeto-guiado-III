const controller = require("../controller/gamesController");
const express = require("express");
const router = express.Router();

router.get("/all", controller.findAllGames);
router.get("/get", controller.getName)

router.get("/:id", controller.findGameById);

router.post("/new", controller.addNewGame);

router.patch("/:id", controller.updateGame);

router.delete("/:id", controller.deleteGame);

module.exports = router;