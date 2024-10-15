import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-light py-5">
      <Container>
        <h2 className="section-title text-center text-warning mb-5">Our Portfolio</h2>
        <Row>
          <Col md={4}>
            <Card className="portfolio-item shadow">
              <Card.Img variant="top" src="image1.jpg" />
              <Card.Body>
                <Card.Title>Project Title 1</Card.Title>
                <Card.Text>Description of the project.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="portfolio-item shadow">
              <Card.Img variant="top" src="image2.jpg" />
              <Card.Body>
                <Card.Title>Project Title 2</Card.Title>
                <Card.Text>Description of the project.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="portfolio-item shadow">
              <Card.Img variant="top" src="image3.jpg" />
              <Card.Body>
                <Card.Title>Project Title 3</Card.Title>
                <Card.Text>Description of the project.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;