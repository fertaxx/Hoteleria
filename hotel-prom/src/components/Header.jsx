import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ onLoginClick, onContactClick }) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="nav-brand">
          <i className="fas fa-hotel"></i>
          <span>Hotel Paradise</span>
        </Link>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/promociones" className="nav-link">Ofertas Especiales</Link>
          <Link to="/destinos" className="nav-link">Lugares para Viajar</Link>
          <Link to="/experiencias" className="nav-link">Actividades</Link>
          <button className="nav-link" onClick={onContactClick}>
            Contáctanos
          </button>
        </nav>

        <div className="nav-actions">
          <div className="currency-selector">
            <span>PEN</span>
            <i className="fas fa-flag"></i>
          </div>
          <button className="btn-login" onClick={onLoginClick}>
            <i className="fas fa-user"></i>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
