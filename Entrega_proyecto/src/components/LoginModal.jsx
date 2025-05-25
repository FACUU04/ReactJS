import React from 'react';
import './LoginModal.css';

function LoginModal({ onClose }) {
  return (
    <div className="modal-backdrop-custom">
      <div className="modal-content-custom">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="mb-3">
            <label>Email:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Contraseña:</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Entrar</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
