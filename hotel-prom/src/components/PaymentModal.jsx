import React, { useState } from 'react';
import '../styles/PaymentModal.css';

const PaymentModal = ({ isOpen, onClose, onPaymentSuccess, bookingData }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [showYapeVideo, setShowYapeVideo] = useState(false);
  const [showPlinVideo, setShowPlinVideo] = useState(false);

  console.log('PaymentModal render - isOpen:', isOpen, 'bookingData:', bookingData);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Procesando pago...', { paymentMethod, cardData, bookingData });
    // Simular procesamiento de pago
    setTimeout(() => {
      onPaymentSuccess();
      onClose();
    }, 2000);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="payment-modal-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        <div className="payment-header">
          <h3>Método de Pago</h3>
          <button className="payment-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="payment-summary">
          <h4>Resumen de Reserva</h4>
          <div className="summary-item">
            <span>Hotel:</span>
            <span>{bookingData?.hotel || 'Hotel Paradise'}</span>
          </div>
          <div className="summary-item">
            <span>Noches:</span>
            <span>{bookingData?.nights || '2'}</span>
          </div>
          <div className="summary-item">
            <span>Huéspedes:</span>
            <span>{bookingData?.guests || '2'}</span>
          </div>
          <div className="summary-item total">
            <span>Total:</span>
            <span>S/ {bookingData?.total || '450'}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="payment-methods">
            <h4>Selecciona método de pago</h4>
            <div className="method-options">
              <label className="method-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="method-card">
                  <i className="fas fa-credit-card"></i>
                  <span>Tarjeta de Crédito/Débito</span>
                </div>
              </label>

              <label className="method-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="yape"
                  checked={paymentMethod === 'yape'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="method-card">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Yape</span>
                </div>
              </label>

              <label className="method-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="plin"
                  checked={paymentMethod === 'plin'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="method-card">
                  <i className="fas fa-wallet"></i>
                  <span>Plin</span>
                </div>
              </label>
            </div>
          </div>

          {paymentMethod === 'card' && (
            <div className="card-details">
              <h4>Datos de la tarjeta</h4>
              <div className="form-group">
                <label>Número de tarjeta</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardData.number}
                  onChange={(e) => setCardData({...cardData, number: formatCardNumber(e.target.value)})}
                  maxLength="19"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Fecha de vencimiento</label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    value={cardData.expiry}
                    onChange={(e) => setCardData({...cardData, expiry: formatExpiry(e.target.value)})}
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cardData.cvv}
                    onChange={(e) => setCardData({...cardData, cvv: e.target.value.replace(/\D/g, '')})}
                    maxLength="4"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Nombre del titular</label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  value={cardData.name}
                  onChange={(e) => setCardData({...cardData, name: e.target.value})}
                  required
                />
              </div>
            </div>
          )}

          {paymentMethod === 'yape' && (
            <div className="digital-payment">
              <div className="payment-qr">
                <i className="fas fa-qrcode"></i>
                <p>Escanea el código QR con Yape</p>
                {!showYapeVideo ? (
                  <div className="qr-placeholder" onClick={() => setShowYapeVideo(true)} style={{cursor: 'pointer'}}>
                    <div className="fake-qr">
                      <div className="qr-pattern">
                        <div className="qr-corner"></div>
                        <div className="qr-corner"></div>
                        <div className="qr-corner"></div>
                        <div className="qr-corner"></div>
                        <div className="qr-dots">
                          {'█ █ █ █ █'.repeat(5).split('').map((dot, i) => (
                            <span key={i} className="qr-dot">{dot}</span>
                          ))}
                        </div>
                      </div>
                      <p style={{fontSize: '12px', marginTop: '10px', color: '#666'}}>Toca para escanear</p>
                    </div>
                  </div>
                ) : (
                  <div className="video-container">
                    <iframe 
                      width="300" 
                      height="200" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                      title="Yape QR Scanner" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          )}

          {paymentMethod === 'plin' && (
            <div className="digital-payment">
              <div className="payment-qr">
                <i className="fas fa-qrcode"></i>
                <p>Escanea el código QR con Plin</p>
                {!showPlinVideo ? (
                  <div className="qr-placeholder" onClick={() => setShowPlinVideo(true)} style={{cursor: 'pointer'}}>
                    <div className="fake-qr">
                      <div className="qr-pattern">
                        <div className="qr-corner"></div>
                        <div className="qr-corner"></div>
                        <div className="qr-corner"></div>
                        <div className="qr-corner"></div>
                        <div className="qr-dots">
                          {'▓ ▓ ▓ ▓ ▓'.repeat(5).split('').map((dot, i) => (
                            <span key={i} className="qr-dot">{dot}</span>
                          ))}
                        </div>
                      </div>
                      <p style={{fontSize: '12px', marginTop: '10px', color: '#666'}}>Toca para escanear</p>
                    </div>
                  </div>
                ) : (
                  <div className="video-container">
                    <iframe 
                      width="300" 
                      height="200" 
                      src="https://www.youtube.com/embed/NUYvbT6vTPs?autoplay=1" 
                      title="Plin QR Scanner" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="payment-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              <i className="fas fa-times"></i>
              Cancelar
            </button>
            <button type="submit" className="payment-btn">
              <i className="fas fa-lock"></i>
              Confirmar Pago S/ {bookingData?.total || '450'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
