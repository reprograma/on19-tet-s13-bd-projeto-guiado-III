const controller = require("../controller/gamesprojController"); 

const express = require("express"); 

const router = express.Router();


router.get("/all", controller.findAllGames);
router.get("/name", controller.findNameGames);
router.get("/:id", controller.findGameById);
router.post("/add", controller.addNewGame);
router.patch("/:id", controller.updateGame);
router.delete("/:id", controller.deleteGame);


module.exports = router;