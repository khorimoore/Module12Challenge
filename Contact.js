import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-light py-5">
      <Container>
        <h2 className="section-title text-center text-warning mb-4">Contact Us</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>

          <Button variant="warning" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;