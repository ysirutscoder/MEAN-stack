const ex = require('express')

const control = require('../controllers/category')

const rout = ex.Router()
const passport = require('passport')

rout.get('/', passport.authenticate('jwt',{session:false}) , control.getAll)

rout.get('/:id', control.getById)

rout.delete('/:id', control.removeCategory)

rout.post('/', control.createCategory)

rout.patch('/:id', control.updateCategory)

module.exports = rout
