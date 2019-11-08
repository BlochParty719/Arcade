const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
  res.render('sessions/new.ejs')
})

router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    if (foundUser === null){
      res.redirect'/sessions/new')
    } else {
      const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password)
      if(doesPasswordMatch) {
        req.session.username = foundUser.username
        res.redirect('/arcade')
      } else {
        res.redirect('/sessions/new')
      }
    }
  })
})

module.exports = router