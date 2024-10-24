const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonials');

// Obtener todos los testimoniales
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo testimonial
router.post('/', async (req, res) => {
  const testimonial = new Testimonial({
    name: req.body.name,
    occupation: req.body.occupation,
    description: req.body.description,
  });

  try {
    const newTestimonial = await testimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un testimonial existente
router.put('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial no encontrado' });
    }

    testimonial.name = req.body.name || testimonial.name;
    testimonial.occupation = req.body.occupation || testimonial.occupation;
    testimonial.description = req.body.description || testimonial.description;

    const updatedTestimonial = await testimonial.save();
    res.json(updatedTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un testimonial
router.delete('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial no encontrado' });
    }

    await testimonial.remove();
    res.json({ message: 'Testimonial eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

