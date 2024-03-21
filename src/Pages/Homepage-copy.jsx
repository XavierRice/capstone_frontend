/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef }  from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Button } from "react-bootstrap";
import MainContent from "../Components/MainContent";
import TrustAndSafety from "../Components/TrustAndSafety/TrustAndSafety";


function Homepage() {

  // try onMouseOver
  const parallaxRef = useRef(null);

  // const scrollToSecondPage = () => {
  //   if (parallaxRef.current) {
  //     parallaxRef.current.scrollTo(1);
  //   }
  // };

  return (
    <div className="homepage">
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
          // onClick={scrollToSecondPage}
        >
          Start Event
        </Button>
      </Container>

      <div className="d-flex justify-content-center align-items-center">
        <Parallax pages={1} ref={parallaxRef} >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            factor={2}
            style={{ backgroundColor: "white", borderRadius: "30px" }}
            className=" d-flex justify-content-center"
          >
            <div >
              <MainContent />
              <TrustAndSafety />
            </div>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={1} speed={3}style={{ backgroundColor: "white"}}>
            <div>
              <TrustAndSafety />
            </div>
          </ParallaxLayer> */}
        </Parallax>
      </div>
    </div>

  );

}


/**
 * 
 */

export default Homepage;
