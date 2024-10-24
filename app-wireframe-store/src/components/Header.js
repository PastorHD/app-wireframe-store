import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src="/logo192.png" alt="Logo" className="logo-image" />
        <h1>ByteWorld</h1>  
      </div>
      <div className="login-btn">
        <button>Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
