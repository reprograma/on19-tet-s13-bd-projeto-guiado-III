const controller = require('../controller/consolesController')

const express = require('express')

const router = express.Router()

router.get('/all', controller.findAllConsoles)
router.get("/console/:available", controller.findConsoleByAvailable)
router.get("/search/:developer", controller.findDeveloper)
router.get("/:id", controller.findConsoleById)
router.post("/add", controller.addNewConsole)
router.patch("/:id", controller.updateConsole); 
router.delete("/:id", controller.deleteConsole); 

module.exports = router