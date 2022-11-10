const controller = require("../controller/consolesController");
const express = require("express");

const router = express.Router();

<<<<<<< HEAD
router.get("/get", controller.getAvailable);
=======
>>>>>>> 6a1fd3b56602aaf232ee4894ab2130300e29d25a
router.get("/all", controller.findAllConsoles);

router.get("/:id", controller.findConsoleById);

router.post("/add", controller.addNewConsole);

router.patch("/:id", controller.updateConsole);

router.delete("/:id", controller.deleteConsole);

module.exports = router;