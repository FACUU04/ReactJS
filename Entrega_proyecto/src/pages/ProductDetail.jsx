import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useCart } from '../components/CartContext';


// Datos simulados de productos; en un proyecto real podrías obtener esto de una API
const dummyProduct = {
  1: { id: 1, title: 'Producto 1', description: 'Detalles sobre el Producto 1', img: 'https://via.placeholder.com/300x200?text=Producto+1' },
  2: { id: 2, title: 'Producto 2', description: 'Detalles sobre el Producto 2', img: 'https://via.placeholder.com/300x200?text=Producto+2' },
  3: { id: 3, title: 'Producto 3', description: 'Detalles sobre el Producto 3', img: 'https://via.placeholder.com/300x200?text=Producto+3' },
  4: { id: 4, title: 'Producto 4', description: 'Detalles sobre el Producto 4', img: 'https://via.placeholder.com/300x200?text=Producto+4' },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProduct[id];
  const { addToCart } = useCart();
  
  if (!product) {
    return (
      <Container className="my-5">
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }
  
  return (
    <Container className="my-5">
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} className="img-fluid mb-3" />
      <p>{product.description}</p>
      <Button variant="primary" onClick={() => addToCart(product)}>
        Agregar al carrito
      </Button>
    </Container>
  );
};

export default ProductDetail;
