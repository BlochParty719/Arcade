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
        Price: 299,
        Image:
      },
      {
        Game: "NBA Jam",
        Publisher: "Midway",
        Year: 1993,
        Genre: "Sports",
        Price: 3495,
        Image:
      },
      {
        Game: "Pac-Man",
        Publisher: "Midway",
        Year: 1980,
        Genre: "Maze",
        Price: 369,
        Image:
      }
      {
        Game: "Donkey Kong",
        Publisher: "Nintendo",
        Year: 1981,
        Genre:"Platform",
        Price: 3295,
        Image:
      }
      {
        Game: "Street Fighter II",
        Publisher: "Capcom",
        Year: 1991,
        Genre: "Fighting",
        Price: 245,
        Image:
      }
      {
        Game: "Mortal Kombat",
        Publisher:"Midway",
        Year: 1992,
        Genre: "Fighting",
        Price: 379,
        image:

      }
      {
        Game: "Galaga",
        Publisher: "Midway",
        Year: 1981,
        Genre: "Shooter",
        Price:
        Image:
      }
      {
        Game: "Mario Bros",
        Publisher: "Nintendo",
        Year: 1983,
        Genre: "Platform",
        Price: 3495,
        Image:
      }
    ]
  )
})

router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// Index Route
router.get('/', (req.res) => {
  Arcade.find({}, (error, ) => {
    res.render('index.ejs', {
      arcade:
    })
  })
})

// New Route
router.get('/:id', (req.res) => {
  Arcade.
})

// Create Route
router.post('/Arcade', (req.res) => {
 Arcade.create(req.body, (error ,) => {

 })
})

// Show Route
router.get('/Arcade', (req.res) => {

})

// Edit Route
router.get('/:id/edit', (req.res) => {
  Arcade.findById(req.params.id, (error, ) => {
    res.render('edit.ejs', {
      Arcade:
    })
  })
})

// Update Route
router.put('/Arcade', (req.res) => {

})

// Delete Route
router.delete('/Arcade', (req.res) => {
  Arcade.findByIdAndRemove(req.params.id, (err, deletedArcade) => {
    res.redirect('/project-2')
  })
})

module.exports = router
