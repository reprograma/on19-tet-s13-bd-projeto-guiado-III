const controller = require('../controller/consoleController')
const express = require('express')

const route = express.Router()

route.get('/list', controller.listAllConsoles)
route.get('/:id', controller.findConsoleById)
route.get('/', controller.findConsoleByQuery)
route.post('/new', controller.addNewConsole)
route.patch('/update', controller.updateConsole)

module.exports = route