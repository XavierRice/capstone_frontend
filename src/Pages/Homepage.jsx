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
import factsImg from "../assets/facts1.jpg";
import tag1 from '../assets/Tag1.jpg'
import { AuthData } from "../Provider/AuthProv";
import { useAdaptiveTriggers } from "./AdaptiveConfig";

function Homepage({backendEvents}) {
	const { user } = useContext(AuthData);
	const [isResponsive, setIsResponsive] = useState(false);
	const adaptiveWidth = useAdaptiveTriggers({
		onSmallEnter: () =>
			console.log("its small, apply small parallax props now"),
		onExtraSmallEnter: () =>
			console.log("its extra small, apply extra small parallax props now"),
	});

	console.log(adaptiveWidth);

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
					factor={1.1}
					style={{ backgroundColor: "white", borderRadius: "30px" }}
					className=" d-flex justify-content-center"
				>
					<AllEventsBlock backendEvents={backendEvents} />
				</ParallaxLayer>
				<ParallaxLayer
					offset={1.6}
					speed={0}
					factor={1}
					className=" d-flex justify-content-center"
					style={{ background: `white` }}
				>
					<div
						style={{
							height: "92%",
							width: "100%",
							backgroundImage: `url(${tag1})`,
							backgroundSize: '90%',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					></div>
				</ParallaxLayer>
				<ParallaxLayer
					offset={2.55}
					speed={0}
					factor={0.5}
					className=" d-flex justify-content-center"
					style={{ backgroundColor: "white" }}
				>
					<InfoBlock />
				</ParallaxLayer>
				<ParallaxLayer
					offset={3}
					speed={0}
					factor={1.4}
					className=" d-flex justify-content-center"
					style={{ backgroundColor: "white" }}
				>
					<DonationsLayout />
				</ParallaxLayer>

				<ParallaxLayer offset={4.1} factor={1}>
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
