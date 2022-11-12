const mongoose = require('mongoose') // chamar o mongoose

// agora fazer a schema do console

const gameSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    developer: {
      type: String,
      required: true
    },
    releaseDate: {
      type: Number,
      required: true
    },
    genre: {
      type: [String],
      required: true
    },
    mode: {
      type: [String],
      required: true,
  },
    available: {
      type: Boolean,
      required: true,
  },
    description: String, // se tiver só um item não precisa de { }
    console: {
      type: mongoose.Schema.Types.ObjectId, // conexar os dois models pelo id
      required: true,
      ref: 'Console' // valor de referencia da outra coleção
    }
  },
  {
    timestamp: true
  }
)

const Model = mongoose.model('game', gameSchema)

module.exports = Model
