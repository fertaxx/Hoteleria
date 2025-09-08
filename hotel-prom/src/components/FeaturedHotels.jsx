import React from 'react';
import '../styles/FeaturedHotels.css';

const FeaturedHotels = () => {
  const featuredHotels = [
    {
      id: 1,
      name: "Paradise Beach Resort",
      location: "Cancún, México",
      image: "https://picsum.photos/400/300?random=1",
      rating: 4.8,
      originalPrice: 899,
      discountPrice: 599,
      discount: 33,
      amenities: ["Spa", "Piscina", "WiFi", "Desayuno"],
      description: "Resort de lujo frente al mar con vistas espectaculares al Caribe"
    },
    {
      id: 2,
      name: "Mountain View Lodge",
      location: "Aspen, Colorado",
      image: "https://picsum.photos/400/300?random=2",
      rating: 4.9,
      originalPrice: 1350,
      discountPrice: 945,
      discount: 30,
      amenities: ["Ski", "Chimenea", "Restaurante", "Bar"],
      description: "Cabaña de montaña con acceso directo a las pistas de esquí"
    },
    {
      id: 3,
      name: "Urban Luxury Hotel",
      location: "Nueva York, USA",
      image: "https://picsum.photos/400/300?random=3",
      rating: 4.7,
      originalPrice: 1140,
      discountPrice: 798,
      discount: 30,
      amenities: ["Gym", "Rooftop", "Concierge", "Valet"],
      description: "Hotel boutique en el corazón de Manhattan con vistas a Central Park"
    },
    {
      id: 4,
      name: "Tropical Oasis Resort",
      location: "Bali, Indonesia",
      image: "https://picsum.photos/400/300?random=4",
      rating: 4.9,
      originalPrice: 660,
      discountPrice: 462,
      discount: 30,
      amenities: ["Yoga", "Spa", "Villa", "Playa"],
      description: "Villa privada con piscina infinita y acceso directo a la playa"
    },
    {
      id: 5,
      name: "Historic Palace Hotel",
      location: "París, Francia",
      image: "https://picsum.photos/400/300?random=5",
      rating: 4.8,
      originalPrice: 1560,
      discountPrice: 1092,
      discount: 30,
      amenities: ["Histórico", "Restaurante", "Bar", "Concierge"],
      description: "Palacio del siglo XVIII convertido en hotel de lujo cerca del Louvre"
    },
    {
      id: 6,
      name: "Desert Mirage Resort",
      location: "Dubai, UAE",
      image: "https://picsum.photos/400/300?random=6",
      rating: 4.9,
      originalPrice: 2040,
      discountPrice: 1428,
      discount: 30,
      amenities: ["Burj Khalifa", "Spa", "Piscina", "Golf"],
      description: "Resort de 7 estrellas con vistas panorámicas al desierto y la ciudad"
    }
  ];

  return (
    <section className="featured-hotels">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Hoteles Destacados</h2>
          <p className="section-subtitle">Descubre los mejores hoteles del mundo con descuentos exclusivos</p>
        </div>
        
        <div className="hotels-grid">
          {featuredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <div className="hotel-image-container">
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <div className="hotel-badge">-{hotel.discount}%</div>
                <div className="hotel-rating">
                  <i className="fas fa-star"></i>
                  <span>{hotel.rating}</span>
                </div>
              </div>
              
              <div className="hotel-content">
                <div className="hotel-header">
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <p className="hotel-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {hotel.location}
                  </p>
                </div>
                
                <p className="hotel-description">{hotel.description}</p>
                
                <div className="hotel-amenities">
                  {hotel.amenities.map((amenity, index) => (
                    <span key={index} className="amenity-tag">
                      <i className="fas fa-check"></i>
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="hotel-pricing">
                <div className="price-container">
                  <span className="original-price">S/ {hotel.originalPrice}</span>
                  <span className="discount-price">S/ {hotel.discountPrice}</span>
                  <span className="price-period">/noche</span>
                </div>
                  <button className="book-now-btn">
                    <i className="fas fa-calendar-check"></i>
                    Reservar Ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="view-all-btn">
            Ver Todos los Hoteles
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
