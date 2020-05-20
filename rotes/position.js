const ex = require('express')

const rout = ex.Router()

const control = require('../controllers/position')

const passport = require('passport')



rout.get('/:categoryId',passport.authenticate('jwt',{session:false}), control.positionGet)

rout.post('/',passport.authenticate("jwt",{session:false}) , control.positionCreate)

rout.patch('/:id',passport.authenticate('jwt',{session:false}) , control.positionUpdate)
rout.delete('/:id',passport.authenticate('jwt',{session:false}) , control.positionDelete)

module.exports = rout
