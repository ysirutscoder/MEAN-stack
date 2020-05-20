const ex = require('express')

const control = require('../controllers/category')
const upload = require('../middleware/upload')

const rout = ex.Router()
const passport = require('passport')

rout.get('/', passport.authenticate('jwt',{session:false}) , control.getAll)

rout.get('/:id',passport.authenticate('jwt',{session:false}) , control.getById)

rout.delete('/:id',passport.authenticate('jwt',{session:false}) , control.removeCategory)

rout.post('/',passport.authenticate('jwt',{session:false}) , upload.single('image'), control.createCategory)

rout.patch('/:id',passport.authenticate('jwt',{session:false}) ,upload.single('image'), control.updateCategory)

module.exports = rout
