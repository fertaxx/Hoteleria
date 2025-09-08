import React, { useState } from 'react';
import Header from '../components/Header';
import Promotions from '../components/Promotions';
import FeaturedHotels from '../components/FeaturedHotels';
import ContactModal from '../components/ContactModal';
import PaymentModal from '../components/PaymentModal';
import '../styles/Home.css';

const PromotionsPage = () => {
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
    setSelectedBooking(bookingData);
    setIsPaymentOpen(true);
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

  return (
    <div className="home-page">
      <Header 
        onContactClick={handleContactClick}
      />
      <Promotions onReservation={handleReservation} />
      <FeaturedHotels onReservation={handleReservation} />
      
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

export default PromotionsPage;
