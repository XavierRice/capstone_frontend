// eslint-disable-next-line no-unused-vars
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Button } from "react-bootstrap";
import MainContent from "../Components/MainContent";

function Homepage() {
  return (
    <div
      className="homepage " 
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "130vh",
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

      <div className=" d-flex justify-content-center align-items-center ">
     
      <Parallax pages={1}>
        <ParallaxLayer
          offset={0} 
          speed={0}
          style={{ backgroundColor: "white", borderRadius: "30px" }}
          className="navbar-shadow d-flex justify-content-center "
        >
          <div
            style={{ color: "white", }}
          >
            <MainContent />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
      </div>

  );
}

export default Homepage;
