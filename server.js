const express = require('express')
const methodOverride  = require('method-override')
const mongoose = require ('mongoose')
const db = mongoose.connection;
const app = express ()
const bcrypt = require('bcrypt')
require('dotenv').config()

const PORT = process.env.PORT || 3003

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false}),
  () => {
    console.log('Connected to mongoose')
  }

const arcadeController = require('./controllers/arcade.js')
  app.use('/arcade', arcadeController)

const sessionsController = require('./controllers/sessions.js')
  app.use('/sessions', sessionsController)

const usersController = require('./controllers/users.js')
  app.use('/users', usersController)

db.on('error', (error) => console.log(error.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.listen(PORT, () => console.log('Listening on port:', PORT))
