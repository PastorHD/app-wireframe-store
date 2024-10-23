import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
  <div className="footer-left">
    <div className="icon-group">
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
    </div>
    <div className="line-group">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  </div>
  <div className="footer-right">
    <div className="footer-section">
      <h4>Síguenos en:</h4>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Tiktok</li>
        <li>Github</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Nuestros servicios</h4>
      <ul>
        <li>Implementación de Proyectos</li>
        <li>Workshop</li>
        <li>Capacitación</li>
        <li>Desarrollo de Aplicaciones</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Próximas aperturas</h4>
      <ul>
        <li>Colombia</li>
        <li>Panamá</li>
        <li>Costa Rica</li>
        <li>Bolivia</li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <hr />
    <p>© 2024 MySite | All Rights Reserved</p>
  </div>
</footer>
  );
};

export default Footer;
