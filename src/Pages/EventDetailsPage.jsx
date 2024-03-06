import React from "react";
import './EventDetailsPage.css'
import { useLocation } from "react-router";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import GoogleMap from "../Components/Maps/GoogleMap";

function EventDetailsPage() {
  const location = useLocation();
  const { event } = location.state;
  console.log(event);

  const {
    event_id,
    user_id,
    event_title: title,
    event_date: date,
    event_time: time,
    event_details: description,
    event_location: locationName,
    event_photo: photo,
    lat,
    lng,
    is_virtual: isVirtual = false, 
    mobilize_id: mobilizeId,
    rsvp = true, // Provide a default value in case it's missing
  } = event;

  console.log(event)
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
      <Row className="my-4">
        <Col className="text-center text-white">
          <h1 className="text-custom-color">{event.title}</h1>
          <p>{event.summary || event.event_details}</p>
          <p>Date: {formatDate(event.sponsorCreatedDate)}</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12} md={6} className="mb-3 text-center">
          <Image src={imageSrc} alt="Event" fluid />
        </Col>
        <Col xs={12} md={6} className="text-center text-white">
          <p>{event.description || event.summary}</p>
          <p>{event.location === false ? "Virtual" : "Route Below"}</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          { hasRequiredKeys ? (
            <div className="map-container">
              <GoogleMap location={event.event_location} lat={event.lat} lng={event.lng} />
            </div>
          ):(
            <div className="centered-image-container">
              <Image src={event.logo_url} alt="Event" fluid />
            </div>
          )}
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-center my-3">
      <Button
        size="lg"
        className="rounded-pill py-2 custom-signup-btn"
      >
        Sign Up Now
      </Button>
    </div>
  </div>
  );
}

export default EventDetailsPage;
