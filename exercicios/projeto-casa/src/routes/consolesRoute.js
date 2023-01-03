const controller = require("../controller/consolesController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllConsoles);

router.get("/:id", controller.findConsoleById);

router.post("/add", controller.addNewConsole);

router.patch("/:id", controller.updateConsole);

router.delete("/:id", controller.deleteConsole);

router.get("/:name", controller.findConsoleByName);

router.get("/:available", controller.findGameByAvailable);

router.get("/:releaseDate", controller.findConsoleByReleaseDate);

router.get("/:developer", controller.findConsoleByDeveloper);



module.exports = router;