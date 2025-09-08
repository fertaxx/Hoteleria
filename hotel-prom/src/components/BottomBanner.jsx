import React from 'react';
import '../styles/BottomBanner.css';

const BottomBanner = ({ onLoginClick }) => {
  return (
    <div className="bottom-banner">
      <div className="container">
        <p>Inicia sesión para descubrir nuestros mejores precios y ofertas inigualables</p>
        <button className="btn-banner" onClick={onLoginClick}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default BottomBanner;
