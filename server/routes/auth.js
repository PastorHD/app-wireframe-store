// routes/auth.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController'); // Asegúrate de importar correctamente

// Ruta para registrar un usuario
router.post('/register', register);

// Ruta para iniciar sesión de un usuario
router.post('/login', login);

module.exports = router;

