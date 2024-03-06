import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function CreateEventPage() {
  return (
    <Container className="py-5 d-flex justify-content-center my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center text-light mb-4 display-3">Coming Soon</h2>
          <p className="text-center text-light mb-4">
            We're working hard to bring you a new feature!
          </p>

          <p className="text-center text-light mb-4 display">Creating events</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateEventPage;