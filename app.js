const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const RoutesAuth = require('./rotes/auth')
const RoutesAnalitics = require('./rotes/analitics')
const RoutesOrder = require('./rotes/order')
const RoutesPosition = require('./rotes/position')
const RoutesCategory = require('./rotes/category')


const app = express()


//registration
mongoose.connect(keys.MONGO_URI)
    .then(() => console.log("mongo connected"))
    .catch(error => console.log(error))

app.use(passport.initialize())

require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/api/auth', RoutesAuth)
app.use('/api/analitics', RoutesAnalitics)
app.use('/api/order', RoutesOrder)
app.use('/api/position', RoutesPosition)
app.use('/api/category', RoutesCategory)


module.exports = app
