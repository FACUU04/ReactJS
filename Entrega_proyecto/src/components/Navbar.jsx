import React from 'react';

function Navbar({ cartCount, onCartClick, onLoginClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">Tienda React</a>

      <div className="ms-auto d-flex align-items-center gap-2">
        {/* Botón de Iniciar sesión */}
        <button 
          className="btn btn-outline-light me-2" 
          onClick={onLoginClick}
          aria-label="Iniciar sesión"
        >
          Iniciar Sesión
        </button>

        {/* Botón de carrito */}
        <button 
          className="btn btn-outline-light position-relative" 
          onClick={onCartClick}
          aria-label="Abrir carrito"
        >
          🛒
          {cartCount > 0 && (
            <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: '0.75rem' }}
            >
              {cartCount}
              <span className="visually-hidden">productos en carrito</span>
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
