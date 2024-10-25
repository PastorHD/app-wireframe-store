require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

// Importar Rutas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/productsRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Servir la carpeta de uploads de manera estática
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Ruta de Prueba de Servidor
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Configuración de Rutas
app.use('/api/auth', authRoutes);           // Rutas de autenticación
app.use('/api/users', userRoutes);           // Rutas de usuarios (aplicamos aquí el control de acceso)
app.use('/api/products', productRoutes);     // Rutas de productos
app.use('/api/testimonials', testimonialRoutes); // Rutas de testimoniales

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
