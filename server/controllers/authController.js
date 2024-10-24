const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de usuarios
exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      username,
      password: hashedPassword,
      role
    });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario' });
  }
};

// Login de usuarios
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Contraseña incorrecta' });

    // Generar token JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, 'SECRET_KEY', { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(400).json({ error: 'Error en el login' });
  }
};
