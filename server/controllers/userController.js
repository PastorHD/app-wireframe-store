const User = require('../models/User');

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Actualizar perfil de usuario
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedUser);
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: 'Usuario eliminado' });
};
