const mongoose = require('mongoose');

const aboutScheme = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  npm: {
    type: Number,
    required: true,
  },
  pictureUrl: {
    type: String,
    required: false,
  },
  bagian: {
    type: String,
    required: true,
  }
},{collection: 'teams'});

module.exports = mongoose.model("About", aboutScheme);