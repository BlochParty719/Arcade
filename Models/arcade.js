const mongoose = require('mongoose')

const arcadeSchema = mongoose.Schema({
  Game: {type:String},
  Publisher: {type:String},
  Image: String,
  Year:{type: Number},
  Genre: {type:String},
  Price: {type: Number}
})

const Arcade = mongoose.model('Arcade', arcadeSchema)
module.exports = Arcade
