/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef }  from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Button, Navbar } from "react-bootstrap";
import MainContent from "../Components/MainContent";
import TrustAndSafety from "../Components/TrustAndSafety/TrustAndSafety";
import HeroImage from '../assets/HeroImage.jpg'
import MainNavigationBar from "../Components/MainNavigationBar";
import useScrollPosition from "../Hooks/ScrollPositionProvider";

function Homepage() {

  // try onMouseOver
  const parallaxRef = useRef(null);
  const scrolling = useScrollPosition({
    element: parallaxRef
  });

  console.log({ scrolling })
 

  return (
      
      <div className="d-flex justify-content-center align-items-center parallax-container"   
      style={{
        height: "100vh",
        width: "100vw",
      }}>
        <Parallax pages={2} ref={parallaxRef}  style={{display: "flex", flexDirection: "column", alignItems:"center", 
         backgroundImage:`url(${HeroImage})`, backgroundSize: '100vw 90vh', backgroundRepeat:'no-repeat'
         }} > 
          <ParallaxLayer horizontal sticky={{ start: 0 }} isSticky style={{}}>
         
              <MainNavigationBar scrolling={scrolling} />
        </ParallaxLayer>
        <ParallaxLayer
            offset={0.7}
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

         
        </Parallax>
      </div>
  

  );

}


/**
 * 
 */

export default Homepage;
