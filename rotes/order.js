const ex = require('express')

const control = require('../controllers/order')

const rout = ex.Router()

rout.get('/', control.getOrder)

rout.post('/', control.createOrder)

module.exports = rout
