import React from 'react';
import '../styles/Experiences.css';

const Experiences = ({ onReservation }) => {
  const experiences = [
    {
      id: 1,
      title: "Luna de Miel",
      image: "https://picsum.photos/400/300?random=18",
      description: "Románticos resorts y experiencias inolvidables para parejas",
      features: ["Spa para parejas", "Cenas románticas", "Suites con jacuzzi", "Actividades privadas"],
      price: "Desde S/ 900/noche",
      duration: "7-14 días"
    },
    {
      id: 2,
      title: "Aventura Extrema",
      image: "https://picsum.photos/400/300?random=19",
      description: "Adrenalina pura en los destinos más emocionantes del mundo",
      features: ["Paracaidismo", "Bungee jumping", "Escalada", "Rafting"],
      price: "Desde S/ 600/noche",
      duration: "3-7 días"
    },
    {
      id: 3,
      title: "Bienestar & Spa",
      image: "https://picsum.photos/400/300?random=20",
      description: "Relajación total en los mejores centros de bienestar",
      features: ["Masajes terapéuticos", "Yoga", "Meditación", "Tratamientos faciales"],
      price: "Desde S/ 750/noche",
      duration: "5-10 días"
    },
    {
      id: 4,
      title: "Gastronomía",
      image: "https://picsum.photos/400/300?random=21",
      description: "Deléitate con las mejores cocinas del mundo",
      features: ["Clases de cocina", "Degustaciones", "Mercados locales", "Chefs estrella"],
      price: "Desde S/ 540/noche",
      duration: "4-8 días"
    },
    {
      id: 5,
      title: "Cultural",
      image: "https://picsum.photos/400/300?random=22",
      description: "Sumérgete en la historia y tradiciones locales",
      features: ["Museos exclusivos", "Tours históricos", "Arte local", "Festivales"],
      price: "Desde S/ 450/noche",
      duration: "5-12 días"
    },
    {
      id: 6,
      title: "Naturaleza",
      image: "https://picsum.photos/400/300?random=23",
      description: "Conecta con la naturaleza en entornos únicos",
      features: ["Safaris", "Observación de fauna", "Senderismo", "Camping de lujo"],
      price: "Desde S/ 660/noche",
      duration: "3-10 días"
    }
  ];

  return (
    <section id="experiencias" className="experiences">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiencias Únicas</h2>
          <p className="section-subtitle">Vive momentos inolvidables con nuestras experiencias personalizadas</p>
        </div>
        
        <div className="experiences-grid">
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-card">
              <div className="experience-image-container">
                <img src={experience.image} alt={experience.title} className="experience-image" />
                <div className="experience-overlay">
                  <div className="experience-badge">
                    <i className="fas fa-star"></i>
                    <span>Experiencia Premium</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-description">{experience.description}</p>
                </div>
                
                <div className="experience-features">
                  {experience.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="experience-footer">
                  <div className="experience-info">
                    <div className="price-info">
                      <span className="price">{experience.price}</span>
                    </div>
                    <div className="duration-info">
                      <i className="fas fa-clock"></i>
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  <button 
                    className="book-experience-btn"
                    onClick={() => onReservation({
                      hotel: `Experiencia ${experience.title}`,
                      location: 'Destino exclusivo',
                      nights: parseInt(experience.duration.split('-')[0]),
                      guests: 2,
                      total: parseInt(experience.price.match(/\d+/)[0]),
                      checkIn: new Date().toISOString().split('T')[0],
                      checkOut: new Date(Date.now() + parseInt(experience.duration.split('-')[0]) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                    })}
                  >
                    <i className="fas fa-heart"></i>
                    Reservar Experiencia
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="custom-experience">
          <div className="custom-content">
            <h3>¿No encuentras lo que buscas?</h3>
            <p>Creamos experiencias personalizadas según tus gustos y necesidades</p>
            <button 
              className="custom-btn"
              onClick={() => onReservation({
                hotel: 'Experiencia Personalizada',
                location: 'Destino a medida',
                nights: 5,
                guests: 2,
                total: 800,
                checkIn: new Date().toISOString().split('T')[0],
                checkOut: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
              })}
            >
              <i className="fas fa-magic"></i>
              Crear Mi Experiencia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
