import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero bg-dark text-light d-flex align-items-center" style={{ height: '70vh' }}>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-3 text-warning">MOORETEC</h1>
            <p>Leading the Future of Private Military Technology</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;