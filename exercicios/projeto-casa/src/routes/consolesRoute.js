const controller = require("../controller/consolesController")
const express = require("express")
const router = express.Router();


router.get("/", controller.consoleByAvailable);

module.exports = router