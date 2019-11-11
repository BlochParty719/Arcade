const express = require('express')
const router = express.Router()
const Arcade = require('../Models/arcade.js')
const methodOverride = require('method-override')

router.get('/seed', (req, res) => {
  Arcade.create(
    [
      {
        Game: "Space Invaders",
        Publisher: "Midway",
        Image: "https://image.smythstoys.com/original/desktop/174308.jpg",
        Year: 1978,
        Genre: "Shooter",
        Price: 299,
      },
      {
        Game: "NBA Jam",
        Publisher: "Midway",
        Image:"https://cdn11.bigcommerce.com/s-3m2fqnw/images/stencil/500x659/products/8632/16678/NBA-Jam-Arcade-Game__84171.1564102667.jpg?c=2&imbypass=on",
        Year: 1993,
        Genre: "Sports",
        Price: 3495,
      },
      {
        Game: "Pac-Man",
        Publisher: "Midway",
        Image:"https://cdn.shopify.com/s/files/1/0082/4092/2686/products/cabinet-pacman_2048x.png?v=1562774749",
        Year: 1980,
        Genre: "Maze",
        Price: 369,
      },
      {
        Game: "Donkey Kong",
        Publisher: "Nintendo",
        Image:"https://arcadespecialties.com/wp-content/uploads/2016/08/Donkey.Kong_.Arcade.Gamessssss.jpg",
        Year: 1981,
        Genre:"Platform",
        Price: 3295,
      },
      {
        Game: "Street Fighter II",
        Publisher: "Capcom",
        Image:"https://assets1.ignimgs.com/2019/06/17/street-fighter-2-arcade1up1560792115363.jpg",
        Year: 1991,
        Genre: "Fighting",
        Price: 245,
      },
      {
        Game: "Mortal Kombat",
        Publisher:"Midway",
        Image:"https://cdn11.bigcommerce.com/s-3m2fqnw/images/stencil/original/products/8652/16038/Mortal_Kombat_Arcade_Game_Med__12828.1518203481.jpg?c=2&imbypass=on",
        Year: 1992,
        Genre: "Fighting",
        Price: 379,

      },
      {
        Game: "Galaga",
        Publisher: "Midway",
        Image:"https://cdn.shopify.com/s/files/1/0082/4092/2686/products/cabinet-galaga_2048x.png?v=1562772777",
        Year: 1981,
        Genre: "Shooter",
        Price: 369,
      },
      {
        Game: "Mario Bros",
        Publisher: "Nintendo",
        Image:"https://cdn11.bigcommerce.com/s-3m2fqnw/images/stencil/original/products/8633/15778/Mario_brothers__54222.1510605765.jpg?c=2&imbypass=on",
        Year: 1983,
        Genre: "Platform",
        Price: 3495
      }
    ],
    (error, data) => {
      res.redirect('/arcade')
    }
  )
})

// Index Route
router.get('/arcade', (req, res) => {
  if(req.session.username){
    Arcade.find,(error, allArcade) => {
      res.render(
        '/arcade/views/index.ejs',
        {
          arcade:allArcade,
          username:req.session.username
        }
      )
    }
  }else {
    res.redirect('/')
  }

})

// Show Route
router.get('/', (req, res) => {
  Arcade.findById(req.params.id, (error, foundArcade) => {
    res.render(
      'Views/arcade/show.ejs',
      {
        arcade:foundArcade
      }
    )
  })
})

// New Route
router.get('/:id', (req, res) => {
  Arcade.findById(req.params.id, (error, foundArcade) => {

  })
})

// Create Route
router.post('/', (req, res) => {
  Arcade.create(req.body, (error ,createdArcade) => {
    res.redirect('/arcade')
  })
})

// Edit Route
router.get('/:id/edit', (req, res) => {
  Arcade.findById(req.params.id, (error, foundArcade) => {
    res.render(
      'arcade/Views/Arcade/edit.ejs',
      {
        arcade:foundArcade
      })
    })
  })

  // Update Route
  router.put('/:id', (req, res) => {
    Arcade.findByIdAndUpdate(req.params.id, req.body, (error, updatedModel) => {
      res.redirect('/arcade')
    })
  })

  // Delete Route
  router.delete('/:id', (req, res) => {
    Arcade.findByIdAndRemove(req.params.id, (error, deletedArcade) => {
      res.redirect('/arcade')
    })
  })

  module.exports = router
