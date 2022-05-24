const cors = require('cors');
const corsConfig = require('./corsConfig');
const express = require('express')
const app = express()
const routes = require('./routes/index')

// const bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


//app.get('/', (req, res) => res.send('App is working'))
app.use(express.json());
app.use(cors())
app.use('/api',routes);

module.exports = app;



