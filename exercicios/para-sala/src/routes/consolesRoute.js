const controller = require('../controller/consolesController');
const express = require('express');
const Router = express.Router();

Router.get('/all', controller.findAllConsoles);

Router.get("/:id", controller.findConsoleById);

Router.post("/add", controller.addNewConsole);

Router.patch("/:id", controller.updateConsole);

Router.delete("/:id", controller.deleteConsole);

Router.get("/:available", controller.findByAvailable);

module.exports = Router;