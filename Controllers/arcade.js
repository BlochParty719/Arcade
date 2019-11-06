const express = require('express')
const Arcade = require('../Models/arcade.js')
const router = express.Router()

router.get('/seed', (req, res) => {
  Arcade.create(
    [
      {
        Game: "Space Invaders",
        Publisher: "Midway",
        Year: 1978,
        Genre: "Shooter",
        Price:
      },
      {
        Game: "NBA Jam",
        Publisher: "Midway",
        Year: 1993,
        Genre: "Sports",
        Price:
      },
      {
        Game: "Pac-Man",
        Publisher: "Midway",
        Year: 1980,
        Genre: "Maze",
        Price:
      }
      {
        Game: "Donkey Kong",
        Publisher: "Nintendo",
        Year: 1981,
        Genre:"Platform",
        Price:
      }
      {
        Game: "Street Fighter II: The World Warrior",
        Publisher: "Capcom",
        Year: 1991,
        Genre: "Fighting",
        Price:
      }
      {
        Game: "Mortal Kombat",
        Publisher:"Midway",
        Year: 1992,
        Genre: "Fighting",
        Price:
      }
      {
        Game: "DigDug",
        Publisher: "Atari",
        Year: 1982,
        Genre: "Maze",
        Price:
      }
      {
        Game: "Mario Bros",
        Publisher: "Nintendo",
        Year: 1983,
        Genre: "Platform",
        Price:
      }
    ]
  )
})

router.get('/new', (req, res) => {
  res.render('Models/new.ejs')
})

// Index Route
router.get('/Arcade', (req.res) => {
  
})

// New Route
router.get('/Arcade', (req.res) => {

})

// Create Route
router.post('/Arcade', (req.res) => {

})

// Show Route
router.get('/Arcade', (req.res) => {

})

// Edit Route
router.get('/Arcade', (req.res) => {

})

// Update Route
router.put('/Arcade', (req.res) => {

})

// Delete Route
router.delete('/Arcade', (req.res) => {

})
