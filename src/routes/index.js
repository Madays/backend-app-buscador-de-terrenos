const express = require('express');
const router = express.Router();
//const isAuthenticated = require('../auth/isAuthenticate')
const {getPlaces} = require('../controllers/index')



//router.post('/login', login)
router.get('/terrenos', getPlaces)
//router.post('/terrenos',isAuthenticated, createTerreno)
//router.get("/buscaTerrenos/:id",isAuthenticated, oneFav)
//router.delete("/buscaTerrenos/:id",isAuthenticated, deleteFav)

module.exports = router;
