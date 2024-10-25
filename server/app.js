const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();


// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());-

// Servir la carpeta de uploads de manera estática
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err));


// Rutas de la API de productos
const productRoutes = require('./routes/productsRoutes');
app.use('/api/products', productRoutes);  // Todas las rutas de productos estarán bajo /api/products


// Prueba de Servidor
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
  });
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

// Rutas Usuarios
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Rutas de la API de testimoniales
const testimonialRoutes = require('./routes/testimonialRoutes');  
app.use('/api/testimonials', require('./routes/testimonialRoutes'));

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));