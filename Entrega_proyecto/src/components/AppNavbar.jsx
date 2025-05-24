import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';


const AppNavbar = () => {
  const { cartItems } = useCart();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Fanaticos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/carrito">
              Carrito {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
