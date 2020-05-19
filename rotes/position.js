const ex = require('express')

const control = require('../controllers/position')

const rout = ex.Router()

rout.get('/:categoryId', control.positionGet)

rout.post('/', control.positionCreate)

rout.patch('/:id', control.positionUpdate)
rout.delete('/:id', control.positionDelete)

module.exports = rout
