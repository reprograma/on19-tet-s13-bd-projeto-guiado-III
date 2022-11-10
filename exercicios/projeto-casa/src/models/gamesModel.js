const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    developer: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Number,
      required: true,
    },
    genre: {
      type: [String],
      required: true,
    },
    mode: {
      type: [String],
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    description: String,

    console: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "console",
    },
  },
  { timestamp: true }
);

const Model = mongoose.model("Game", gameSchema);

module.exports = Model;