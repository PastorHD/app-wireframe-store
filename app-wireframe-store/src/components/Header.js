import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">MySite</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;