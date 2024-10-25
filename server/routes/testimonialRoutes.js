const express = require('express');
const multer = require('multer');
const router = express.Router();
const Testimonial = require('../models/Testimonials');

// Configuración de Multer para guardar las imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Carpeta donde se almacenarán las imágenes
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Nombre único para evitar colisiones
    }
  });

  const upload = multer({ storage: storage });


// Obtener todos los testimoniales
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo testimonial con imagen
router.post('/', upload.single('image'), async (req, res) => {
    // Verifica si todos los campos requeridos están presentes
    if (!req.body.name || !req.body.occupation || !req.body.description) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
  
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''; // Si se subió una imagen, usar la URL
  
    const testimonial = new Testimonial({
      name: req.body.name,
      occupation: req.body.occupation,
      description: req.body.description,
      imageUrl: imageUrl
    });
  
    try {
      const newTestimonial = await testimonial.save();
      res.status(201).json(newTestimonial);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });   

// Actualizar un testimonial existente
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
      const testimonial = await Testimonial.findById(req.params.id);
      if (!testimonial) {
        return res.status(404).json({ message: 'Testimonial no encontrado' });
      }
  
      testimonial.name = req.body.name || testimonial.name;
      testimonial.occupation = req.body.occupation || testimonial.occupation;
      testimonial.description = req.body.description || testimonial.description;
  
      // Si se ha subido una nueva imagen, actualiza la URL de la imagen
      if (req.file) {
        testimonial.imageUrl = `/uploads/${req.file.filename}`;
      }
  
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

