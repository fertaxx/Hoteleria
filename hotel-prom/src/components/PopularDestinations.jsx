import React from 'react';
import '../styles/PopularDestinations.css';

const PopularDestinations = ({ onReservation }) => {
  const destinations = [
    {
      id: 1,
      name: "París",
      country: "Francia",
      image: "https://picsum.photos/400/300?random=7",
      hotels: 1250,
      avgPrice: 540,
      description: "La ciudad del amor y la luz"
    },
    {
      id: 2,
      name: "Tokio",
      country: "Japón",
      image: "https://picsum.photos/400/300?random=8",
      hotels: 890,
      avgPrice: 660,
      description: "Futuro y tradición en perfecta armonía"
    },
    {
      id: 3,
      name: "Nueva York",
      country: "USA",
      image: "https://picsum.photos/400/300?random=9",
      hotels: 2100,
      avgPrice: 1050,
      description: "La ciudad que nunca duerme"
    },
    {
      id: 4,
      name: "Santorini",
      country: "Grecia",
      image: "https://picsum.photos/400/300?random=10",
      hotels: 340,
      avgPrice: 840,
      description: "Atardeceres inolvidables en el Egeo"
    },
    {
      id: 5,
      name: "Dubai",
      country: "UAE",
      image: "https://picsum.photos/400/300?random=11",
      hotels: 650,
      avgPrice: 1350,
      description: "Lujo y modernidad en el desierto"
    },
    {
      id: 6,
      name: "Bali",
      country: "Indonesia",
      image: "https://picsum.photos/400/300?random=12",
      hotels: 1200,
      avgPrice: 360,
      description: "Paraíso tropical y espiritualidad"
    }
  ];

  return (
    <section className="popular-destinations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Destinos Populares</h2>
          <p className="section-subtitle">Explora los lugares más buscados del mundo</p>
        </div>
        
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image-container">
                <img src={destination.image} alt={destination.name} className="destination-image" />
                <div className="destination-overlay">
                  <div className="destination-info">
                    <h3 className="destination-name">{destination.name}</h3>
                    <p className="destination-country">{destination.country}</p>
                    <p className="destination-description">{destination.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="destination-stats">
                <div className="stat">
                  <i className="fas fa-hotel"></i>
                  <span>{destination.hotels} hoteles</span>
                </div>
                <div className="stat">
                  <i className="fas fa-dollar-sign"></i>
                  <span>Desde S/ {destination.avgPrice}/noche</span>
                </div>
              </div>
              
              <button 
                className="explore-btn"
                onClick={() => onReservation({
                  hotel: `Hotel en ${destination.name}`,
                  location: `${destination.name}, ${destination.country}`,
                  nights: 2,
                  guests: 2,
                  total: destination.avgPrice,
                  checkIn: new Date().toISOString().split('T')[0],
                  checkOut: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                })}
              >
                <i className="fas fa-calendar-check"></i>
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
