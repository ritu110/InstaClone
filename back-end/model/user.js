const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
