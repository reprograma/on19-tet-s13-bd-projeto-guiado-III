<<<<<<< HEAD
const controller = require("../controller/gamesController");
const express = require("express");
const router = express.Router();

router.get("/all", controller.findAllGames);
router.get("/get", controller.getName)

router.get("/:id", controller.findGameById);

router.post("/new", controller.addNewGame);
=======
const controller = require('../controller/gamesController');
const express = require('express');

const router = express.Router();

router.get("/all", controller.findAllGames);

router.get("/:id", controller.findGameById);

router.post("/add", controller.addNewGame);
>>>>>>> 6a1fd3b56602aaf232ee4894ab2130300e29d25a

router.patch("/:id", controller.updateGame);

router.delete("/:id", controller.deleteGame);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router
>>>>>>> 6a1fd3b56602aaf232ee4894ab2130300e29d25a
