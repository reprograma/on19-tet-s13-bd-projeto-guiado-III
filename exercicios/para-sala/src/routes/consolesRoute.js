const controller = require("../controller/consolesController");

const express = require("express");

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/all", controller.findAllConsoles);

router.get("/", controller.findConsoleByavailable);

router.post("/add", controller.addNewConsole);

router.patch("/:id", controller.updateConsole);

router.delete("/:id", controller.deleteConsole);

router.get("/:id", controller.findConsoleById);




module.exports = router;
