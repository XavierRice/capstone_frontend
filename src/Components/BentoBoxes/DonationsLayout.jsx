import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./DonationsLayout.css";
import UkraineImg from "../../assets/ImpactifyImgs.jpeg";
import ClimateImg from "../../assets/climate.png";
import DonateCode from "../../assets/DonateEvent1.png";
import FactsImg from "../../assets/factsImg.png";
import { FaArrowRight } from "react-icons/fa";

function DonationsLayout() {
	const navigate = useNavigate();

	const handleDonationNavigate = () => {
		navigate("/discover/donations");
	};

	const handleFundraiseNavigate = () => {
		navigate("/discover/facts");
	};

	return (
		<Container
			fluid
			style={{ width: "85%", height: "100%", marginTop: "40px" }}
		>
			{/* <div className="fw-semibold fs-5 m-3">Featured</div> */}
			<Row xs={1} md={12} lg={8} className="g-4" style={{ width: "100vw" }}>
				<Col>
					<div className="item ">
						<div className="top-box-grid">
							<div className="left-grid">
								<img
									src={UkraineImg}
									alt="Ukraine Image"
									className="top-image"
								/>
							</div>
							<div className="right-grid my-4">
								<div className="title fs-3 fw-bold">
									Crisis in Ukraine: How to help
								</div>
								<div className="body my-2 fs-4">
									You can donate to fundraisers on this page to help fleeing
									families.
								</div>
								<div className="my-3">
									<span className="my-4 " onClick={handleDonationNavigate}>
										Donate now <FaArrowRight />
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
						<div className="top-half">
							<img
								src={ClimateImg}
								alt="Climate Image"
								className="climate-image"
							/>
						</div>
						<div className="bottom-half">
							<div className="fw-bold title fs-4 d-flex justify-content-center">
								Support Sustainability
							</div>
							<span className="m-4  ">
								Donate now <FaArrowRight />
							</span>
						</div>
					</div>
				</Col>
				<Col s={12} md={4} lg={4} className="mb-2">
					<div className="item mid-left  item-small">
						<div className="top d-flex justify-content-center ">
							<img src={FactsImg} alt="factsImg" className="climate-image " />
						</div>
						<div className="d-flex justify-content-center m-2">
							<div className="fs-4 fw-bold title">Fundraising FAQs:</div>
						</div>
						<div className="m-2">Why should we care and participate?</div>
						<span className="m-3 " onClick={handleFundraiseNavigate}>
							Learn more <FaArrowRight />
						</span>
					</div>
				</Col>
				<Col s={12} md={4} lg={4} className="mb-2">
					{/* Replace this with other info */}
					<div className="item item-small ">
						<div className="top-half">
							<img
								src={ClimateImg}
								alt="Climate Image"
								className="climate-image"
							/>
						</div>
						<div className="bottom-half ">
							<div className="fw-bold title fs-4 d-flex justify-content-center">
								Support Sustainability
							</div>
							<span className="m-4  ">
								Donate now <FaArrowRight />
							</span>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default DonationsLayout;
