import React, {useState} from "react";
import './EventDetailsPage.css'
import { useLocation } from "react-router";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import GoogleMap from "../Components/Maps/GoogleMap";
import defaultImage from "../assets/NoImage.jpg"
import DCTrip from "../Components/Stripe/DCTrip";

function EventDetailsPage() {
  const location = useLocation();
  
  const [showDonationButton, setShowDonationButton] = useState(false)

  const { event } = location.state;
  console.log(event)

  const {
    event_id,
    user_id,
    event_title: title,
    event_date: date,
    event_time: time,
    event_details: description,
    event_location: locationName,
    event_photo,
    lat,
    lng,
    is_virtual: isVirtual = false, 
    mobilize_id: mobilizeId,
    rsvp = true, // Provide a default value in case it's missing
  } = event;

  let imageSrc = event.logo_url || event.event_photo || defaultImage;

  console.log(event)
  const formatDate = (timestamp) => {

    if (typeof timestamp === 'number'){
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString();
    } else {
      const cleanedupTimeStamp = timestamp.toString().slice(0, -14)
      return cleanedupTimeStamp
    } 


  };
  
  const hasRequiredKeys = ['event_location', 'lat', 'lng'].every(key => Object.keys(event).includes(key));
  const eventDate = date || event.sponsorCreatedDate
  ;
  


  return (
    <div>
    <Container>
      <Row className="my-4">
        <Col className="text-center text-white">
          <h1 className="text-custom-color">{title}</h1>
          <p>{description}</p>
          <p>Date: {formatDate(eventDate)}</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12} md={6} className="mb-3 text-center">
          <Image src={imageSrc} alt="Event" fluid className="image-border"/>
        </Col>
        <Col xs={12} md={6} className="text-center text-white">
          <p>{description}</p>
          <p>{isVirtual ? " Your event is Virtual" : "Route Below"}</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          { hasRequiredKeys ? (
            <div className="map-container">
              <GoogleMap location={locationName} lat={lat} lng={lng} />
            </div>
          ):(
            <div className="centered-image-container">
              <Image src={imageSrc} alt="Event" fluid />
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
