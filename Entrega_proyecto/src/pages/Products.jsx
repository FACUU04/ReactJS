import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';


const products = [
  { id: 1, title: 'Producto 1', img: 'https://via.placeholder.com/300x200?text=Producto+1' },
  { id: 2, title: 'Producto 2', img: 'https://via.placeholder.com/300x200?text=Producto+2' },
  { id: 3, title: 'Producto 3', img: 'https://via.placeholder.com/300x200?text=Producto+3' },
  { id: 4, title: 'Producto 4', img: 'https://via.placeholder.com/300x200?text=Producto+4' },
  // Aquí puedes agregar más productos o conectarte a una API real
];

const Products = () => {
  return (
    <Container className="my-5">
      <h2>Lista de Productos</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} md={6} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
