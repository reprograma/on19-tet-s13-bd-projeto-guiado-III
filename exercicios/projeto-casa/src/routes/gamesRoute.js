const controller = require('../controller/gamesController');
const express = require('express');

const router = express.Router();



router.get("/name", controller.findByName);

module.exports = router

