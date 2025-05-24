import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../components/CartContext';


const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  
  return (
    <Container className="my-5">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No has agregado productos al carrito.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={item.img} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button variant="secondary" onClick={clearCart}>
            Vaciar Carrito
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
