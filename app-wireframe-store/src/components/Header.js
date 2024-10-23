import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MySite</h1>
      </div>
      <div className="login-btn">
        <button>Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
