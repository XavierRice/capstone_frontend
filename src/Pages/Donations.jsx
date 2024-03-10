import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Stripe_Provider from "../Components/Stripe/Stripe_Provider";

function Donations() {
  return (
    <Container className="py-5 d-flex justify-content-center my-5">
     <Stripe_Provider/>
    </Container>
  );
}

export default Donations;
