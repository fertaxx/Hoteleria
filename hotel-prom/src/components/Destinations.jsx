import React from 'react';
import '../styles/Destinations.css';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Europa",
      image: "https://picsum.photos/400/300?random=13",
      countries: 44,
      description: "Descubre la rica historia y cultura europea",
      highlights: ["París", "Roma", "Londres", "Barcelona"],
      avgPrice: 450
    },
    {
      id: 2,
      name: "Asia",
      image: "https://picsum.photos/400/300?random=14",
      countries: 48,
      description: "Explora la diversidad cultural y paisajes únicos",
      highlights: ["Tokio", "Bangkok", "Singapur", "Seúl"],
      avgPrice: 360
    },
    {
      id: 3,
      name: "América del Norte",
      image: "https://picsum.photos/400/300?random=15",
      countries: 3,
      description: "Desde las grandes ciudades hasta la naturaleza salvaje",
      highlights: ["Nueva York", "Los Ángeles", "Toronto", "Vancouver"],
      avgPrice: 600
    },
    {
      id: 4,
      name: "América del Sur",
      image: "https://picsum.photos/400/300?random=16",
      countries: 12,
      description: "Aventuras tropicales y culturas vibrantes",
      highlights: ["Río de Janeiro", "Buenos Aires", "Lima", "Cartagena"],
      avgPrice: 300
    },
    {
      id: 5,
      name: "África",
      image: "https://picsum.photos/400/300?random=27",
      countries: 54,
      description: "Safaris, desiertos y culturas ancestrales",
      highlights: ["Cape Town", "Marrakech", "Cairo", "Nairobi"],
      avgPrice: 390
    },
    {
      id: 6,
      name: "Oceanía",
      image: "https://picsum.photos/400/300?random=17",
      countries: 14,
      description: "Islas paradisíacas y aventuras extremas",
      highlights: ["Sydney", "Auckland", "Fiji", "Tahití"],
      avgPrice: 540
    }
  ];

  return (
    <section id="destinos" className="destinations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Explora por Continente</h2>
          <p className="section-subtitle">Descubre destinos únicos en cada rincón del mundo</p>
        </div>
        
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image-container">
                <img src={destination.image} alt={destination.name} className="destination-image" />
                <div className="destination-overlay">
                  <div className="destination-info">
                    <h3 className="destination-name">{destination.name}</h3>
                    <p className="destination-countries">{destination.countries} países</p>
                    <p className="destination-description">{destination.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="destination-content">
                <div className="destination-highlights">
                  <h4>Destinos Populares:</h4>
                  <div className="highlights-list">
                    {destination.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="destination-footer">
                  <div className="price-info">
                    <span className="price-label">Desde</span>
                    <span className="price-value">S/ {destination.avgPrice}</span>
                    <span className="price-period">/noche</span>
                  </div>
                  <button className="explore-btn">
                    <i className="fas fa-compass"></i>
                    Explorar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
