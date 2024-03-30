import React, { useEffect, useRef, useState, useContext } from "react";
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
import DonationsLayout from "../Components/BentoBoxes/DonationsLayout";
import CardLayout from "../Components/BentoBoxes/CardsLayout/Cards";
import Footer from "../Components/Footer/Footer";
import AllEventsBlock from "../Components/AllEventsBlock/AllEventsBlock";
import InfoBlock from "../Components/InfoBlock";
import { AuthData } from '../Provider/AuthProv'


function Homepage() {
	const { user } = useContext(AuthData)
	const [isResponsive, setIsResponsive] = useState(false);

	console.log(user)

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
				pages={4.5}
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
				{/* navigation */}
				<ParallaxLayer
					horizontal
					sticky={{ start: 0, end: 4 }}
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
					factor={2}
					style={{ backgroundColor: "white", borderRadius: "30px" }}
					className=" d-flex justify-content-center"
				>
					{/* <DonationsLayout /> */}

					<AllEventsBlock />
				</ParallaxLayer>
				<ParallaxLayer
					offset={1.7}
					speed={0}
					factor={1}
					className=" d-flex justify-content-center"
					style={{ backgroundColor: "white" }}
				>
					<InfoBlock />
				</ParallaxLayer>
				<ParallaxLayer
					offset={2.2}
					speed={0}
					factor={1}
					className=" d-flex justify-content-center"
					style={{ backgroundColor: "white" }}
				>
					<CardLayout />
				</ParallaxLayer>
				<ParallaxLayer
					offset={3}
					speed={0}
					factor={1.4}
					className=" d-flex justify-content-center"
					style={{ backgroundColor: "white" }}
				>
					<ProofHero />
				</ParallaxLayer>

				<ParallaxLayer offset={4.28} factor={1}>
					<Footer />
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
