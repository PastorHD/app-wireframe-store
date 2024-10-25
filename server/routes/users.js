const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User');
const { verifyToken, checkAdminRole } = require('../middlewares/auth');

// Ruta para obtener todos los usuarios, solo accesible para admin
router.get('/', verifyToken, checkAdminRole, userController.getAllUsers);

// Ejemplo de una ruta PUT que requiere autenticación
router.put('/:id', verifyToken, userController.updateUser);

module.exports = router;
