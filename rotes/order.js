const ex = require('express')


const control = require('../controllers/order')

const rout = ex.Router()

const passport = require('passport')

rout.get('/',passport.authenticate('jwt',{session:false}) , control.getOrder)

rout.post('/',passport.authenticate('jwt',{session:false}) , control.createOrder)

module.exports = rout
