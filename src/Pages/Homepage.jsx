// eslint-disable-next-line no-unused-vars
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Button } from "react-bootstrap";
// import HeroImage from "./assets/HeroImage.jpg";

function Homepage() {
  return (
    <div
      className="homepage" 
    >
      <Container
        fluid
        className="text-white position-relative"
        style={{
          height: "70vh",
          width: "100vw",
        }}
      >
        <Button
          variant="primary"
          className="position-absolute top-50 start-50 translate-middle my-5"
        >
          Start Event
        </Button>
      </Container>

      <div className="hero-content d-flex justify-content-around "></div>

      {/* Content to scroll over the container above */}
      <Parallax pages={1}>
        <ParallaxLayer
          offset={0} 
          style={{ backgroundColor: "white", borderRadius: "30px" }}
          className="navbar-shadow"
        >
          <div
            style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
          >
            Components
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Homepage;
