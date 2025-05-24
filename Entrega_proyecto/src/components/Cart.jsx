import React from 'react';

function Cart({ cartItems, onRemoveFromCart, onAddToCart, onClose }) {
  const handleDecrease = (item) => {
    // solo disminuir si quantity > 1
    if (item.quantity > 1) {
      onAddToCart(item, -1);
    }
  };

  const handleIncrease = (item) => {
    onAddToCart(item, 1);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <h2>Tu Carrito</h2>
        {cartItems.length === 0 && <p>El carrito está vacío</p>}
        {cartItems.map(item => (
          <div key={item.id} style={styles.item}>
            <img src={item.image} alt={item.title} style={{ width: 50 }} />
            <div style={{ flex: 1 }}>
              <h4>{item.title}</h4>
              <p>Precio unitario: ${item.price}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 5 }}>
                <button 
                  onClick={() => handleDecrease(item)} 
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item)}>+</button>
                <button 
                  onClick={() => onRemoveFromCart(item.id)} 
                  style={{ marginLeft: 'auto', color: 'red' }}
                  title="Eliminar del carrito"
                >
                  🗑️
                </button>
              </div>
              <p><strong>Subtotal: ${(item.price * item.quantity).toFixed(2)}</strong></p>
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <div style={{ marginTop: 20, borderTop: '1px solid #ccc', paddingTop: 10 }}>
            <h3>Total: ${total}</h3>
          </div>
        )}
        <button onClick={onClose} style={{ marginTop: 20 }}>Cerrar</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    background: '#fff', padding: 20, borderRadius: 8, width: '90%', maxWidth: 500,
    maxHeight: '80%', overflowY: 'auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
  },
  item: { display: 'flex', gap: 10, marginBottom: 15, alignItems: 'center' }
};

export default Cart;
