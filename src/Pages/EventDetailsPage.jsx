import React from "react";
import { useLocation } from "react-router";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function EventDetailsPage() {
  const location = useLocation();
  const { event } = location.state;
  console.log(event);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col>
            <h1 className="header">{event.title}</h1>
            <p>{event.summary}</p>
            <p>Date: {formatDate(event.modified_date)}</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={6}>
            <Image src={event.sponsor.logo_url} alt="Event" fluid />
          </Col>
          <Col xs={12} md={6}>
            <p>{event.description}</p>
            <p>Location: Virtual</p>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          size="lg"
          className="rounded-pill py-2 m-3 d-flex"
        >
          Sign Up Now
        </Button>
      </div>
      {/* <Container>
        Map Stuff can go here
      </Container> */}
    </div>
  );
}

export default EventDetailsPage;
