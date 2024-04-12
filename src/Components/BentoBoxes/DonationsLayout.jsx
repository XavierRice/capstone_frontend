import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./DonationsLayout.css";
import UkraineImg from "../../assets/nowar1.jpg";
import ClimateImg from "../../assets/vote.svg";
import DonateCode from "../../assets/DonateEvent1.png";
import FactsImg from "../../assets/newfacts.svg";
import { FaArrowRight } from "react-icons/fa";
import ProofHero from "../SocialProof/ProofHero";
import Play from "../../assets/play.svg";
import nowar from "../../assets/nowar.svg";

function DonationsLayout({ backendEvents }) {
	const navigate = useNavigate();
	// console.log("donationeevents", backendEvents);
	const ukraineEvent = backendEvents[7];
	const handleDonationNavigate = () => {
		navigate("/discover/events-details", { state: { event: ukraineEvent } });
	};
	const handleInfoNavigate = () => {
		navigate("/howitworks");
	};

	const handleFundraiseNavigate = () => {
		navigate("/discover/facts");
	};

	return (
		<Container
			fluid
			style={{
				width: "85%",
				height: "60vh",
				marginTop: "0px",
				// padding: "70px",
			}}
			className="donations-container"
		>
			{/* <div className="fw-semibold  d-flex justify-content-center fs-2 my-2 mx-4">
				Make a positive impact in your preferred way
			</div> */}
			<Row xs={1} md={12} lg={8} className="" style={{ width: "95vw" }}>
				<Col>
					<div className="item ">
						<div className="top-box-grid">
							<div className="left-grid">
								<img
									src={ClimateImg}
									alt="Ukraine Image"
									className="top-image"
								/>
							</div>
							<div className="right-grid my-4">
								<div className="title fs-3 fw-bold">Voting Information</div>
								<div className="body my-2 ">
									At Impactify, we champion voting as a key tool for change.
									Whether you need to register to vote or already registered and
									seeking to connect with local officials, we've got the
									resources to help you make an impact.
								</div>
								<div className="my-3">
									<span
										className="my-4 donate-btn"
										onClick={() => {
											navigate("/discover/test");
										}}
									>
										Learn more <FaArrowRight className="mx-3" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4} lg={4} className="mb-2">
					<div className="item mid-right item-small ">
						<div
							className="top-half"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<img src={nowar} alt="Climate Image" className="climate-image" />
						</div>
						<div className="bottom-half">
							<div className="fw-bold title fs-4  d-flex justify-content-center  mx-2 p-1">
								Crisis in Ukraine
							</div>
							<div className="mx-4">
								You can donate to fundraisers on this page to help fleeing
								families.
							</div>
							<div style={{height:"30px"}}></div>
							<span
								className="donate-btn "
								onClick={() => {
									handleDonationNavigate;
								}}
							>
								Donate now <FaArrowRight className="mx-3" />
							</span>
						</div>
					</div>
				</Col>
				<Col s={12} md={4} lg={4} className="mb-2">
					<div className="item mid-left  item-small">
						<div className="top top-half d-flex justify-content-center ">
							<img src={FactsImg} alt="factsImg" className="climate-image " />
						</div>
						<div className="bottom-half">
							<div className="d-flex justify-content-center ">
								<div className="fs-4 fw-bold title pt-2">Fundraising FAQs:</div>
							</div>
							<div className="m-2 d-flex justify-content-center ">
								Why should we care and participate?
							</div>
							<div style={{height:"30px"}}></div>
							<span className=" donate-btn " onClick={handleFundraiseNavigate}>
								Learn more <FaArrowRight className="mx-3" />
							</span>
						</div>
					</div>
				</Col>
				<Col s={12} md={4} lg={4} className="mb-2">
					{/* Replace this with other info */}
					<div className="item item-small ">
						<div
							className="top-half"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<img src={Play} alt="Climate Image" className="climate-image" />
						</div>
						<div className="bottom-half ">
							<div className=" fw-bold title fs-4 d-flex justify-content-center">
								How Impactify works
							</div>
							<div className=" d-flex justify-content-center">
								Watch a video to learn more
							</div>
								<div style={{height:"30px"}}></div>
							<span
								className=" donate-btn d-flex justify-content-center"
								onClick={handleInfoNavigate}
							>
								Play <FaArrowRight className="mx-3" />
							</span>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default DonationsLayout;
