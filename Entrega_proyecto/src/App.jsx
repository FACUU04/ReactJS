import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Carousel,
  Card,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Componente de Navegación
const AppNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Fanaticos</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/productos">Productos</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// Componente Banner con Carousel
const Banner = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://via.placeholder.com/1200x400?text=Banner+Edici%C3%B3n+Limitada"
        alt="Banner Edición Limitada"
      />
      <Carousel.Caption>
        <h3>Edición Limitada</h3>
        <p>Descubre productos únicos y exclusivos.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://via.placeholder.com/1200x400?text=Nuevas+Colecciones"
        alt="Banner Nuevas Colecciones"
      />
      <Carousel.Caption>
        <h3>Nuevas Colecciones</h3>
        <p>Renueva tu estilo con lo último en moda.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

// Componente Galería de Productos
const ProductGallery = () => {
  // Lista simulada de productos
  const products = [
    {
      id: 1,
      title: "Producto 1",
      img: "https://via.placeholder.com/300x200?text=Producto+1",
    },
    {
      id: 2,
      title: "Producto 2",
      img: "https://via.placeholder.com/300x200?text=Producto+2",
    },
    {
      id: 3,
      title: "Producto 3",
      img: "https://via.placeholder.com/300x200?text=Producto+3",
    },
    {
      id: 4,
      title: "Producto 4",
      img: "https://via.placeholder.com/300x200?text=Producto+4",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Button variant="primary" href={`/productos/${product.id}`}>
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Componente Footer con formulario de suscripción
const Footer = () => (
  <footer className="bg-light py-4 mt-auto">
    <Container>
      <Row>
        <Col md={6}>
          <h5>Fanaticos.com</h5>
          <p>
            Encuentra los mejores productos en nuestra tienda online. Calidad y
            exclusividad en cada detalle.
          </p>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formSubscription">
              <Form.Label>Suscríbete a nuestro boletín</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <small>© 2025 Fanaticos. Todos los derechos reservados.</small>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Página de Inicio uniendo Banner y Galería
const Home = () => (
  <div>
    <Banner />
    <ProductGallery />
  </div>
);

// Página de Productos (puedes expandirla según las necesidades)
const Products = () => (
  <Container className="my-5">
    <h2>Lista de Productos</h2>
    <p>Aquí se mostrarán todos los productos disponibles.</p>
  </Container>
);

// Página de Detalle de Producto (puedes conectar datos reales)
const ProductDetail = () => (
  <Container className="my-5">
    <h2>Detalles del Producto</h2>
    <p>Información detallada del producto seleccionado.</p>
  </Container>
);

// Componente Principal App.jsx
const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
