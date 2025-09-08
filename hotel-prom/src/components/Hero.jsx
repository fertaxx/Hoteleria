import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero = ({ onLoginClick }) => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Búsqueda:', searchData);
    // Aquí iría la lógica de búsqueda
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">¿A dónde quieres ir?</h1>
          <p className="hero-subtitle">Descubre destinos increíbles con nuestras promociones exclusivas</p>
          
            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-inputs">
                <div className="input-group destination-group">
                  <input
                    type="text"
                    placeholder="¿Adónde quieres ir?"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                  />
                </div>
                
                <div className="date-group">
                  <div className="input-group">
                    <label className="input-label">Check-in</label>
                    <input
                      type="date"
                      value={searchData.checkIn}
                      onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                    />
                  </div>
                  
                  <div className="input-group">
                    <label className="input-label">Check-out</label>
                    <input
                      type="date"
                      value={searchData.checkOut}
                      onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="input-group guests-group">
                  <select
                    value={searchData.guests}
                    onChange={(e) => setSearchData({...searchData, guests: parseInt(e.target.value)})}
                  >
                    <option value={1}>1 persona</option>
                    <option value={2}>2 personas</option>
                    <option value={3}>3 personas</option>
                    <option value={4}>4 personas</option>
                    <option value={5}>5+ personas</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="btn-search">
                Buscar Hoteles
              </button>
            </form>
        </div>

        {/* Login Promo Card */}
        <div className="login-promo">
          <h3>Inicia sesión y ahorra desde un 10%</h3>
          <p>en más de 100,000 hoteles en el mundo por ser socio</p>
          <button className="btn-promo" onClick={onLoginClick}>
            Iniciar Sesión
          </button>
          <a href="#" className="link-register">Registrarme gratis</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
