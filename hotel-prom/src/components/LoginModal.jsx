import React, { useState } from 'react';
import '../styles/Modal.css';

const LoginModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Verificar credenciales de admin
    if (formData.username === 'admin' && formData.password === '1234') {
      onSubmit({ success: true, user: { username: 'admin', role: 'admin' } });
      setFormData({ username: '', password: '' });
    } else {
      setError('Credenciales incorrectas. Use admin/1234 para acceso completo.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label>Usuario</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Ingrese su usuario"
              required 
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Ingrese su contraseña"
              required 
            />
          </div>
          <button type="submit" className="btn-primary">Iniciar Sesión</button>
          <p className="modal-footer">
            <small>Credenciales de prueba: admin / 1234</small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
