import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    // Puedes agregar lógica para evitar duplicados o incrementar cantidades
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // Función para vaciar el carrito completamente
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para consumir el contexto del carrito
export const useCart = () => useContext(CartContext);
