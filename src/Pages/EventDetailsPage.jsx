import React, {useState} from "react";
import './EventDetailsPage.css'
import { useLocation } from "react-router";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import GoogleMap from "../Components/Maps/GoogleMap";
import defaultImage from "../assets/NoImage.jpg"
import DCTrip from "../Components/Stripe/DCTrip";

function EventDetailsPage() {
  const location = useLocation();
  const [travelMode, setTravelMode] = useState("DRIVING")
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
  
  const displayMap = locationName && lat && lng;
  let imageSrc = event.logo_url || event.event_photo || defaultImage;
  const eventDate = formatDate(date);
  
  


  return (
<Container fluid className="my-4">
      <Row>
        {/* Image Section */}
        <Col md={6} className="mb-3">
          <Image src={imageSrc} alt="Event" fluid className="image-border"/>
        </Col>

        {/* Details Section */}
        <Col md={6} className="text-center text-white">
          <h1 className="text-custom-color mb-3">{title}</h1>
          <p className="mb-2">{description}</p>
          {date && <p className="mb-4">Date: {eventDate}</p>}
          <p className="mb-4">{isVirtual ? "This event is virtual." : "See route below."}</p>
          <Button size="lg" className="rounded-pill py-2 custom-signup-btn">Sign Up Now</Button>
        </Col>
      </Row>

      {/* Optionally Display Map */}
      {displayMap && (
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 6 }}>
            <div className="map-container">
              <GoogleMap location={locationName} lat={lat} lng={lng} travelMode={travelMode} />
            </div>
          <div className="map-controls">
                <button onClick={() => setTravelMode("DRIVING")}>Driving</button>
                <button onClick={() => setTravelMode("WALKING")}>Walking</button>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default EventDetailsPage;
