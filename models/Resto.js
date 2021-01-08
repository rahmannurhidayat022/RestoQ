const mongoose = require('mongoose');

const restoScheme = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  favoriteMenu: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Resto", restoScheme)