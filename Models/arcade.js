const mongoose = require('mongoose')

const arcadeSchema = mongoose.Schema({
  Game: {type:String},
  Publisher: {type:String},
  Year:{type: Number},
  Genre: {type:String},
  Price: {type: Number}
})

module.exports = mongoose.model('Arcade', arcadeSchema)
