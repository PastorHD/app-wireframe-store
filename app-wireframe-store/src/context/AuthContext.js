import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

// Cargar el usuario desde el localStorage si existe
useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    axios
      .get('http://localhost:5000/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar el perfil:', error);
        logout();
      });
  }
  setLoading(false);
}, []);


const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/login', {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem('token', token);
    setUser(response.data.user);
    navigate('/profile'); // Redirigir al perfil después de iniciar sesión
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Usuario o contraseña incorrectos');
  }
};

const logout = () => {
  localStorage.removeItem('token');
  setUser(null);
  navigate('/login');
};


return (
  <AuthContext.Provider value={{ user, login, logout, loading }}>
    {children}
  </AuthContext.Provider>
);

};

export default AuthContext;
