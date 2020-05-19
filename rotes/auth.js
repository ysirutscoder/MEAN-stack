const ex = require('express')

const control = require('../controllers/auth')

const rout = ex.Router()

rout.post('/login', control.login)

rout.post('/register', control.register)

module.exports = rout
