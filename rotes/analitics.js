const ex = require('express')

const control = require('../controllers/analitics')

const rout = ex.Router()

rout.get('/overview', control.overview)

rout.get('/analitics', control.analitics)

module.exports = rout
