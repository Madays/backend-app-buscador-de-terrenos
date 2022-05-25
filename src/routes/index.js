const express = require('express');
const router = express.Router();
const isAuthenticated = require('../auth/isAuthenticated')
const {getPlaces, createTerreno, login, apiStatus} = require('../controllers/index')

router.post('/login', login)
router.get('/terrenos', getPlaces)
router.post('/terrenos',isAuthenticated, createTerreno)
router.get('/status',apiStatus)

module.exports = router;
