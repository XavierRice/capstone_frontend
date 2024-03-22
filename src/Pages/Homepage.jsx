/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Button, Navbar } from "react-bootstrap";
import MainContent from "../Components/MainContent";
import TrustAndSafety from "../Components/TrustAndSafety/TrustAndSafety";
import HeroImage from "../assets/HeroImage.jpg";
import MainNavigationBar from "../Components/MainNavigationBar";
import useScrollPosition from "../Hooks/ScrollPositionProvider";

function Homepage() {
	// try onMouseOver for animations
	const parallaxRef = useRef(null);
	const scrolling = useScrollPosition({
		element: parallaxRef,
	});

	return (
		<div
			className="d-flex justify-content-center align-items-center parallax-container"
			style={
				{
					// height: "100vh",
					// width: "100vw",
				}
			}
		>
			<Parallax
				pages={2}
				ref={parallaxRef}
				className="parallax-container"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					backgroundImage: `url(${HeroImage})`,
					backgroundSize: "100vw 90vh",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div
					className="btn top-50 start-50 translate-middle my-5 btn-class"
					style={
						{
							// zIndex: 1,
						}
					}
				>
					<Button
						variant=""
						style={{
							color: "#ffffff",
							cursor: "pointer",
						}}
					>
						Start Event
					</Button>
				</div>
				<ParallaxLayer
					horizontal
					sticky={{ start: 0 }}
					style={{
						height: "unset",
						display: "flex",
						justifyContent: "center",
						marginTop: scrolling ? 0 : 20,
					}}
				>
					<MainNavigationBar scrolling={scrolling} />
				</ParallaxLayer>

				{/* <ParallaxLayer offset={0.5}
            speed={0}
            factor={2}  
            scrolling={false}  >
              <div className="d-flex justify-content-center " >
              <Button
          variant="primary">
          Start Event
        </Button>
              </div>
        
        </ParallaxLayer> */}

				<ParallaxLayer
					offset={0.7}
					speed={0.5}
					factor={2}
					style={{ backgroundColor: "white", borderRadius: "30px" }}
					className=" d-flex justify-content-center"
				>
					{/* <div> */}
					<MainContent />
					{/* </div> */}
				</ParallaxLayer>
				<ParallaxLayer
					offset={1}
					speed={1}
					factor={2}
					className=" d-flex justify-content-center"
				>
					<div>
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
