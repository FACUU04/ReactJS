import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import buzoFerrari from "../assets/images/buzoFerrariBlanco.jpeg";
import buzoMclaren from "../assets/images/buzoMclaren.jpeg";
import buzoPorsche from "../assets/images/buzoPorsche.jpeg";
import buzoFERRARIR from "../assets/images/buzoFerrari.jpeg";
import buzoFERRARIC from "../assets/images/buzoFerrariCeleste.jpeg";
import buzoMercedes from "../assets/images/buzoMercedes.jpeg";
import '../assets/styles/Home.css';

const products = [
  { id: 1, title: 'Buzo Ferrari Rojo', img: buzoFERRARIR },
  { id: 2, title: 'Buzo Porsche blanco', img:buzoPorsche},
  { id: 3, title: 'Buzo Mercedes blanco', img:buzoMercedes},
  { id: 4, title: 'Buzo Ferrari Celeste limited edition', img: buzoFERRARIC},
];

const Home = () => {
  return (
    <div>
      {/* Banner con Carousel */}
      <Carousel className="custom-carousel">
  <Carousel.Item>
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            className="img-fluid"
            src={buzoFerrari}
            alt="Nunca dejes de ser original"
          />
        </Col>
        <Col md={6}>
          <div className="carousel-text-box">
            <h3>Edición Limitada</h3>
            <p>Descubre productos únicos y exclusivos.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </Carousel.Item>

  <Carousel.Item>
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            className="img-fluid"
            src={buzoMclaren}
            alt="Nuevas Colecciones"
          />
        </Col>
        <Col md={6}>
          <div className="carousel-text-box">
            <h3>Nuevas Colecciones</h3>
            <p>Renová tu estilo con lo último en moda.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </Carousel.Item>
</Carousel>


      {/* Galería de Productos */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Nuestros Productos</h2>
        <Row>
          {products.map(product => (
            <Col key={product.id} xs={12} md={6} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
