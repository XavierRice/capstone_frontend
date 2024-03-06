import React from "react";
import './EventDetailsPage.css'
import { useLocation } from "react-router";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import GoogleMap from "../Components/Maps/GoogleMap";

function EventDetailsPage() {
  const location = useLocation();
  const { event } = location.state;
  console.log(event);


  const { } = event

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };


  
  const hasRequiredKeys = ['event_location', 'lat', 'lng'].every(key => Object.keys(event).includes(key));
  const imageSrc = event.logo_url || event.event_photo || "path/to/default/image.png";
  
  console.log(event)

  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col className="">
            <h1 className="text-custom-color">{event.title}</h1>
            <p>{event.summary}</p>
            <p>Date: {formatDate(event.sponsorCreatedDate)}</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={6}>
            <Image src={imageSrc} alt="Event" fluid />
          </Col>
          <Col xs={12} md={6}>
            <p>{event.description}</p>
            <p>{event.location === false ? "Virtual" : "Route Below"}</p>
          </Col>
        </Row>
      </Container>
      <Container>
        { hasRequiredKeys ? (
          <GoogleMap location={event.event_location} lat={event.lat} lng={event.lng} />
        ):(
          <Image src={event.logo_url} alt="Event" fluid />
        )}
      </Container>
      <div className="d-flex justify-content-center">
        <Button
          size="lg"
          className="rounded-pill py-2 m-3 d-flex custom-signup-btn"
        >
          Sign Up Now
        </Button>
      </div>
    </div>
  );
}

export default EventDetailsPage;
