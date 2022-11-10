const controller = require("../controller/consolesController");
const express = require("express");
const router = express.Router();

router.get("/all", controller.findAllConsoles);
router.get("/available", controller.findConsoleByAvailable);
router.post("/add", controller.addNewConsole);

router.get("/:id", controller.findConsoleById);
router.patch("/:id", controller.updateConsole);
router.delete("/:id", controller.deleteConsole);

module.exports = router;
