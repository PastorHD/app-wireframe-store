const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token requerido');

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    console.log("Token verificado, rol del usuario:", decoded.role); // Muestra el rol aquí
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send('Token inválido');
  }
};

const checkAdminRole = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Acceso denegado: se requiere rol de administrador');
  }
  next();
};

module.exports = { verifyToken, checkAdminRole };