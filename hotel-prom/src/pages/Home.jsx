import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Promotions from '../components/Promotions';
import FeaturedHotels from '../components/FeaturedHotels';
import PopularDestinations from '../components/PopularDestinations';
import Destinations from '../components/Destinations';
import Experiences from '../components/Experiences';
import BottomBanner from '../components/BottomBanner';
import ContactModal from '../components/ContactModal';
import PaymentModal from '../components/PaymentModal';
import '../styles/Home.css';

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);


  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  const handleReservation = (bookingData) => {
    console.log('handleReservation llamado con:', bookingData);
    setSelectedBooking(bookingData);
    setIsPaymentOpen(true);
    console.log('Modal de pago abierto:', true);
  };

  const handlePaymentSuccess = () => {
    alert('¡Pago procesado exitosamente! Reserva confirmada.');
    setIsPaymentOpen(false);
    setSelectedBooking(null);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Enviar mensaje de contacto');
    setIsContactOpen(false);
  };

  console.log('Home render - isPaymentOpen:', isPaymentOpen, 'selectedBooking:', selectedBooking);

  return (
    <div className="home-page">
      <Header 
        onContactClick={handleContactClick}
      />
      <Hero />
      <Promotions onReservation={handleReservation} />
      <FeaturedHotels onReservation={handleReservation} />
      <PopularDestinations onReservation={handleReservation} />
      <Destinations onReservation={handleReservation} />
      <Experiences onReservation={handleReservation} />
      <BottomBanner />
      
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleContactClose}
        onSubmit={handleContactSubmit}
      />
      
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        onPaymentSuccess={handlePaymentSuccess}
        bookingData={selectedBooking}
      />
    </div>
  );
};

export default Home;
