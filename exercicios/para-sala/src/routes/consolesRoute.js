const controller = require("../controller/consolesController");
const express = require("express");

const router = express.Router();

router.get("/avaliable", controller.findAllConsoles);
router.get("/:name", controller.findConsoleById);
router.get("/:name", controller.findConsoleById);
router.post("/name", controller.addNewConsole);
router.patch("/:name", controller.updateConsole);
router.delete("/:name", controller.deleteConsole);


module.exports = router;
