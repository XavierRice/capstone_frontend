import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./ProofHero.css";
import socialProof from "../../assets/proofhero.png";
import ImpactVid from "../../assets/ImpactVid.mp4";
import { Button } from "react-bootstrap";

const ProofHero = () => {
	const [showVideo, setShowVideo] = useState(false);
	const playerRef = useRef(null);

	const handleButtonClick = () => {
		setShowVideo(!showVideo);
	};

	return (
		<div className="bg-light">
			<div className="row ">
				{/* Column for Text */}
				<div className=" p-3 ">
					<h4 className="display-6 text-center m-4 ">How Impactify works</h4>
					<p
						className="fs-"
						style={{ paddingLeft: "11%", paddingRight: "11%" }}
					>
						Discover a world of meaningful engagement with Impactify. Here's how
						it works: Dive into a curated collection of news articles to stay
						informed about pressing issues. Then, take action by sharing,
						attending, creating, or donating directly through our platform.
						Impactify is your trusted resource for finding impactful ways to get
						involved and make a difference. Join us in shaping a better
						tomorrow, one step at a time.
					</p>
				</div>

				<div className="row ">
					<div className="col-md-6 p-2">
						<div className="text fs-6 bg-text">
							<p>
								In 2023, we witnessed a significant shift in charitable
								contributions, totaling $319.04 billion, marking a notable
								decrease of 6.4% compared to 2021. However, the essence of
								generosity and volunteerism perseveres, as approximately 63
								million individuals continue to seek avenues for making a
								positive impact.
							</p>
							<p>
								Amidst this backdrop, our platform aims to cut through the
								clutter, connecting you with local causes and events that align
								with your desire for change. We simplify the journey from mere
								intention to tangible action, providing a centralized hub for
								both hands-on volunteering and impactful micro-donations.
								Together, these individual efforts culminate in supporting
								larger-scale initiatives.
							</p>
							<p>
								Let us unite to breathe new life into the spirit of community
								involvement and reignite the flame of altruism, even in the face
								of adversity.
							</p>
						</div>
					</div>
					{/* Column for Video */}
					<div className="col-md-6 p-3" style={{ cursor: "pointer" }}>
						<div className=" p-3" onClick={() => setShowVideo(!showVideo)}>
							{/* <div className="d-flex justify-content-center">
							<Button>Press Play</Button>
						</div> */}
							{showVideo ? (
								<div className="d-flex justify-content-center">
									<ReactPlayer
										ref={playerRef}
										url={ImpactVid}
										playing={showVideo}
										controls
										width="100%"
										height="auto"
									/>
								</div>
							) : (
								<img
									src={socialProof}
									alt="Social Proof"
									className="img-fluid mb-3"
								/>
							)}
						</div>
					</div>
				</div>
			</div>
			{/* <div className="text-center mt-3">
				<button onClick={handleButtonClick}>
					{showVideo ? "Hide Video" : "Show Video"}
				</button>
			</div> */}
		</div>
	);
};

export default ProofHero;
