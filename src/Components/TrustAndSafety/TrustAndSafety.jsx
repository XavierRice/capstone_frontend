/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useScrollPosition from "/src/Hooks/ScrollPositionProvider";

function TrustAndSafety() {
  // const scrolling = useScrollPosition();

  return (
    <Container className="">
     
      <Row className="">
        <Col xs={12} className="">
          <p className="display-3">We got you covered.</p>
          <br />
          <p className="display-6">
            <span>Impactify is a trusted online fundraising for small scale events. </span>
            <span>With <a href="/c/pricing#US">simple use</a> and a team of <a href="/c/safety">Trust & Safety</a> experts in your corner, you can create an event, raise money, or simply attend events and donate. Find ways to get active with peace of mind, Impactify got your back.</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}


export default TrustAndSafety;

