const express = require('express');
const router = express.Router();
const isAuthenticated = require('../auth/isAuthenticated')
const {getPlaces, createTerreno, login} = require('../controllers/index')

router.post('/login', login)
router.get('/terrenos', getPlaces)
router.post('/terrenos',isAuthenticated, createTerreno)

module.exports = router;
