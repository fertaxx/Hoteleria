import React, { useState } from 'react';
import Header from '../components/Header';
import PopularDestinations from '../components/PopularDestinations';
import Destinations from '../components/Destinations';
import LoginModal from '../components/LoginModal';
import ContactModal from '../components/ContactModal';
import '../styles/Home.css';

const DestinationsPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión');
    setIsLoginOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Enviar mensaje de contacto');
    setIsContactOpen(false);
  };

  return (
    <div className="home-page">
      <Header 
        onLoginClick={handleLoginClick}
        onContactClick={handleContactClick}
      />
      <PopularDestinations />
      <Destinations />
      
      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleLoginClose}
        onSubmit={handleLoginSubmit}
      />
      
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleContactClose}
        onSubmit={handleContactSubmit}
      />
    </div>
  );
};

export default DestinationsPage;
