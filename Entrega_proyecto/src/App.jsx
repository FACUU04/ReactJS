import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList.jsx';
import Navbar from './components/Navbar.jsx';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx'; // importamos el footer
import './App.css'; // importamos los estilos

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, []);

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const itemExists = prev.find(item => item.id === product.id);
      if (itemExists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.max(1, item.quantity + quantity) }
            : item
        );
      }
      if (quantity <= 0) return prev;
      return [...prev, { ...product, quantity }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <div className="app-container">
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={toggleCart}
      />

      <main className="main-content">
        <ProductList
          products={products}
          onAddToCart={(product) => handleAddToCart(product)}
        />

        {isCartOpen && (
          <div className="cart-overlay">
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onAddToCart={handleAddToCart}
              onClose={toggleCart}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
