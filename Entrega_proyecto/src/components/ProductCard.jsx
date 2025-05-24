import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
      <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain', marginBottom: '0.5rem' }} />
      <h3>{product.title}</h3>
      <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Agregar al carrito
      </button>
    </div>
  );
}
