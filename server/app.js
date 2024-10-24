const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rutas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err));

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));