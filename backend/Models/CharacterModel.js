const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Types.ObjectId,
      ref: "web-Admin",
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photos: {
      type: [],
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("Characters", CharacterSchema);
module.exports = Character;
