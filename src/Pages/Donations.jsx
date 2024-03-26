import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import StripeBuy from "../Components/Stripe/StripeBuy";
import UkraineBuy from "../Components/Stripe/UkraineBuy";
import CleanUpBuy from "../Components/Stripe/CleanUpBuy";
import ClimateBuy from "../Components/Stripe/ClimateBuy";

function Donations() {


  
  return (
    <Container className="py-5 my-5 donations-container">
    <Row className="g-4 justify-content-center">
      <Col xs={12} >
        <StripeBuy />
      </Col>
      <Col xs={12}>
        {/* Replace with <CardTwo /> or similar */}
        <UkraineBuy />
      </Col>
      <Col xs={12} >
        {/* Replace with <CardThree /> or similar */}
        <CleanUpBuy />
      </Col>
      <Col xs={12}>
        {/* Replace with <CardFour /> or similar */}
        <ClimateBuy />
      </Col>
    </Row>
  </Container>
  );
}

export default Donations;
