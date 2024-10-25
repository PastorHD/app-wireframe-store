import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>Correo: {user.email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
