import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./ProofHero.css";
import socialProof from "../../assets/socialProof.webp";
import ImpactVid from "../../assets/ImpactVid.mp4";

const ProofHero = () => {
	const [showVideo, setShowVideo] = useState(false);
	const playerRef = useRef(null);

	const handleButtonClick = () => {
		setShowVideo(!showVideo);
	};

	return (
		<div>
			<div
				style={{ height: "70%", width: "100%" }}
				className="proof-container"
				onClick={() => setShowVideo(!showVideo)}
			>
				<span className="m-3 " style={{ height: "50%", width: "70%" }}>
					<h4 className="display-6">Amplify Your Influence with Impactify</h4>
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
					<p>
						Together, let's revitalize the culture of community involvement and
						reignite the fire of altruism, even amidst challenging times.
					</p>
				</span>
				<span className="m-2">
					{showVideo ? (
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
					) : (
						<img
							src={socialProof}
							alt="Social Proof"
							className="card-image my-5"
							style={{ width: "100%" }}
						/>
					)}
					<div className="d-flex justitfy-content-center">
						<button className="btn impact-button" onClick={handleButtonClick}>
							Play
						</button>
					</div>
				</span>
			</div>
		</div>
	);
};

export default ProofHero;
