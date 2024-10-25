const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: { // Nuevo campo para almacenar la URL de la imagen
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Testimonials', testimonialSchema);
