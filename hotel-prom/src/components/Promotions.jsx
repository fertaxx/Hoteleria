import React from 'react';
import '../styles/Promotions.css';

const Promotions = ({ onReservation }) => {
  const promotions = [
    {
      id: 1,
      badge: '-50%',
      icon: 'fas fa-umbrella-beach',
      title: 'Verano en la Playa',
      description: 'Hoteles de lujo en destinos tropicales con descuentos increíbles',
      price: 'Desde S/ 267/noche',
      originalPrice: 'S/ 534/noche',
      image: 'https://picsum.photos/400/300?random=24',
      features: ['Spa incluido', 'Desayuno buffet', 'WiFi gratis']
    },
    {
      id: 2,
      badge: '-40%',
      icon: 'fas fa-city',
      title: 'Ciudades del Mundo',
      description: 'Explora las mejores metrópolis con ofertas exclusivas',
      price: 'Desde S/ 195/noche',
      originalPrice: 'S/ 324/noche',
      image: 'https://picsum.photos/400/300?random=25',
      features: ['Centro de la ciudad', 'Gym 24/7', 'Concierge']
    },
    {
      id: 3,
      badge: '-60%',
      icon: 'fas fa-mountain',
      title: 'Retiros de Montaña',
      description: 'Escápate a la naturaleza con descuentos espectaculares',
      price: 'Desde S/ 225/noche',
      originalPrice: 'S/ 564/noche',
      image: 'https://picsum.photos/400/300?random=26',
      features: ['Vistas panorámicas', 'Chimenea', 'Actividades outdoor']
    }
  ];

  return (
    <section id="promociones" className="promotions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Promociones Destacadas</h2>
          <p className="section-subtitle">Ofertas limitadas en los mejores destinos del mundo</p>
        </div>
        <div className="promo-grid">
          {promotions.map((promo) => (
            <div key={promo.id} className="promo-card">
              <div className="promo-image-container">
                <img src={promo.image} alt={promo.title} className="promo-image" />
                <div className="promo-badge">{promo.badge}</div>
                <div className="promo-overlay">
                  <i className={promo.icon}></i>
                </div>
              </div>
              <div className="promo-content">
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
                <div className="promo-features">
                  {promo.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      <i className="fas fa-check"></i>
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="promo-pricing">
                  <span className="original-price">{promo.originalPrice}</span>
                  <span className="promo-price">{promo.price}</span>
                </div>
                <button 
                  className="promo-btn"
                  onClick={() => onReservation({
                    hotel: promo.title,
                    location: 'Destino promocional',
                    nights: 3,
                    guests: 2,
                    total: parseInt(promo.price.match(/\d+/)[0]),
                    checkIn: new Date().toISOString().split('T')[0],
                    checkOut: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                  })}
                >
                  <i className="fas fa-calendar-check"></i>
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
