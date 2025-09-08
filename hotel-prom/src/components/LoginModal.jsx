import React from 'react';
import '../styles/Modal.css';

const LoginModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Iniciar Sesión</h3>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" required />
          </div>
          <button type="submit" className="btn-primary">Iniciar Sesión</button>
          <p className="modal-footer">
            ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
