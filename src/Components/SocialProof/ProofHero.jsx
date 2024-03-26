import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./ProofHero.css";
import socialProof from "../../assets/socialProof.webp";
import { Row, Col } from "react-bootstrap";
import ImpactVid from "../../assets/ImpactVid.mp4";

const ProofHero = () => {
	const [showVideo, setShowVideo] = useState(false);
	const playerRef = useRef(null);

	const handleButtonClick = (event) => {
		event.stopPropagation(); // Prevent click from bubbling up to the card-container
		setShowVideo(!showVideo);
	};

	const handleCardClick = () => {
		if (showVideo && playerRef.current) {
			playerRef.current.seekTo(0, "seconds"); // Rewind the video
			playerRef.current.getInternalPlayer().pause(); // Pause the video
			setShowVideo(false);
		}
	};

	return (
		<div className="container-fluid p-0" onClick={handleCardClick}>
			<Row
				className="g-0 align-items-center"
				style={{ minHeight: "50vh", justifyContent: "space-between" }}
			>
				<Col lg={6} md={6} className="text-section p-5 ">
					<h2>Amplify Your Influence! With Impactify</h2>
					<p>
						2023 has unveiled a striking shift in charitable giving, with
						figures reaching $319.04 billion—a notable decline of 6.4% from
						2021, Yet, the spirit of giving and volunteerism lives on, with
						approximately 63 million individuals seeking to make a difference.
					</p>
					<p>
						By slicing through the noise, we connect you to local causes and
						events that resonate with your passion for change, simplifying the
						journey from intention to action, offering a centralized space for
						both hands-on volunteering and impactful micro-donations that,
						collectively, fuel larger initiatives.
					</p>
					<h3>
						Together, let's revitalize the culture of community involvement and
						reignite the fire of altruism, even amidst challenging times.
					</h3>
					<button
						className="btn btn-primary impact-button"
						onClick={handleButtonClick}
					>
						Play
					</button>
				</Col>
				<Col lg={5} md={5} className="text-end">
					<img
						src={socialProof}
						alt="Social Proof"
						className="card-image"
						style={{ width: "100%" }}
					/>
					{showVideo && (
						<div className="video-player">
							<ReactPlayer
								ref={playerRef}
								url={ImpactVid}
								playing={showVideo}
								controls
								width="100%"
								height="100%"
							/>
						</div>
					)}
				</Col>
			</Row>
		</div>
	);
};

export default ProofHero;
