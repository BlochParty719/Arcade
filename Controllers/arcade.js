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
    (error, data) => {
      res.redirect('/arcade')
    }
  )
})

router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// Index Route
router.get('/', (req.res) => {
  Arcade.find({}, (error, allArcade) => {
    res.render(
      'index.ejs',
      {
        arcade:
      }
    })
  })
})

// New Route
router.get('/:id', (req.res) => {
  Arcade.
})

// Create Route
router.post('/arcade', (req.res) => {
 Arcade.create(req.body, (error ,createdArcade) => {
   res.redirect('/arcade')
 })
})

// Show Route
router.get('/arcade', (req.res) => {
  Arcade.findById(req.params.id, (error, foundArcade) => {

  })
})

// Edit Route
router.get('/:id/edit', (req.res) => {
  Arcade.findById(req.params.id, (error, foundArcade) => {
    res.render('arcade/views/edit.ejs', {
      arcade:
    })
  })
})

// Update Route
router.put('/:id', (req.res) => {
  Arcade.findByIdAndUpdate(req.params.id, req, body, () => {
    res.redirect('/arcade')
  })
})

// Delete Route
router.delete('/arcade', (req.res) => {
  Arcade.findByIdAndRemove(req.params.id, (error, deletedArcade) => {
    res.redirect('/arcade')
  })
})

module.exports = router
