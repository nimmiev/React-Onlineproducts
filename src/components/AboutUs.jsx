import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="mt-5">
      <h1 className="text-center">About Us</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Image 
            src="https://conceptboard.com/wp-content/uploads/About-us-Team-collaboration-1200x798.png" // Replace with your image URL
            alt="About Us"
            fluid
            className="mb-4"
          />
        </Col>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            We are committed to providing our customers with the best products and services. Our goal is to exceed expectations and deliver exceptional quality in everything we do.
          </p>
          <h2>Our Vision</h2>
          <p>
            To be the leading provider of high-quality products in our industry, known for our dedication to customer satisfaction and innovation.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Satisfaction</li>
            <li>Teamwork</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
