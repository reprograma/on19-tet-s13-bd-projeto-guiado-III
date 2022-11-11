const controller = require("../controller/consolesController");
const express = require("express");

const router = express.Router();
router.get("/:name", controller.findByNameConsole);

router.get("/:available", controller.findByAvailableConsole);
router.get("/:developer", controller.findConsoleDeveloper)
//-------------------------------------------------------------

router.get("/all", controller.findAllConsoles);

router.get("/:id", controller.findConsoleById);

router.post("/add", controller.addNewConsole);

router.patch("/:id", controller.updateConsole);

router.delete("/:id", controller.deleteConsole);



module.exports = router;