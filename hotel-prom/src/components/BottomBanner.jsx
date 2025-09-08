import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BottomBanner.css';

const BottomBanner = () => {
  const navigate = useNavigate();

  const handleViewOffers = () => {
    navigate('/promotions');
  };

  return (
    <div className="bottom-banner">
      <div className="container">
        <p>Descubre nuestros mejores precios y ofertas inigualables</p>
        <button className="btn-banner" onClick={handleViewOffers}>
          Ver Ofertas
        </button>
      </div>
    </div>
  );
};

export default BottomBanner;
