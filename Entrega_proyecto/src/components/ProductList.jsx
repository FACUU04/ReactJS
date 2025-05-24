import React, { useState } from 'react';

function ProductList({ products, onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-list container">
      <h2>Productos</h2>
      <div className="row">
        {products.length === 0 && <p>Cargando productos...</p>}
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={product.image} 
                alt={product.title} 
                className="card-img-top" 
                style={{ objectFit: 'contain', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <button 
                    className="btn btn-primary"
                    onClick={() => onAddToCart(product)}
                  >
                    Agregar al carrito
                  </button>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {selectedProduct && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          role="dialog" 
          onClick={() => setSelectedProduct(null)}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div 
            className="modal-dialog" 
            role="document" 
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  aria-label="Close" 
                  onClick={() => setSelectedProduct(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  className="img-fluid mb-3" 
                  style={{ objectFit: 'contain', maxHeight: '200px' }} 
                />
                <p>{selectedProduct.description}</p>
                <p><strong>Precio:</strong> ${selectedProduct.price.toFixed(2)}</p>
              </div>
              <div className="modal-footer">
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    onAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  Agregar al carrito
                </button>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setSelectedProduct(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
