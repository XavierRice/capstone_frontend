import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Button, Navbar } from "react-bootstrap";
import MainContent from "../Components/MainContent";
import TrustAndSafety from "../Components/TrustAndSafety/TrustAndSafety";
import HeroImage from "../assets/HeroImage.jpg";
import MainNavigationBar from "../Components/NavigationBars/HomeNavigationBar";
import useScrollPosition from "../Hooks/ScrollPositionProvider";
import TrustBlock from "../Components/Midsection/TrustBlock";
import MobileNavigation from "../Components/NavigationBars/MainNavigationBar";
import ProofHero from "../Components/SocialProof/ProofHero";

function Homepage() {
	const [isResponsive, setIsResponsive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsResponsive(window.innerWidth <= 991);
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// try onMouseOver for animations
	const parallaxRef = useRef(null);
	const scrolling = useScrollPosition({
		element: parallaxRef,
	});

	return (
		<div className="d-flex justify-content-center align-items-center parallax-container">
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
				<div className="btn top-50 start-50 translate-middle my-5 btn-class">
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
						display: !isResponsive ? "flex" : null,
						justifyContent: "center",
					}}
				>
					{isResponsive ? (
						<MobileNavigation scrolling={scrolling} />
					) : (
						<MainNavigationBar scrolling={scrolling} />
					)}
				</ParallaxLayer>

				<ParallaxLayer
					offset={0.7}
					speed={0}
					factor={1}
					style={{ backgroundColor: "white", borderRadius: "30px" }}
					className=" d-flex justify-content-center"
				>
					<MainContent />
				</ParallaxLayer>
				<ParallaxLayer
					offset={1.7}
					speed={0.5}
					factor={2}
					className=" d-flex justify-content-center"
					style={{ backgroundColor: "white" }}
				>
					<TrustBlock />
					{/* <ProofHero /> */}
				</ParallaxLayer>
			</Parallax>
			{isResponsive && (
				<div className="sticky-footer">
					<Button
						className="btn"
						variant=""
						style={{
							color: "#ffffff",
							cursor: "pointer",
						}}
					>
						Start Event
					</Button>
				</div>
			)}
		</div>
	);
}

export default Homepage;
