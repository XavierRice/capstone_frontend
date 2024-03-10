import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StripeDonation from "../Components/Stripe/StripeDonation";

function Donations() {
  return (
    <Container className="py-5 d-flex justify-content-center my-5">
     <StripeDonation/>
    </Container>
  );
}

export default Donations;
