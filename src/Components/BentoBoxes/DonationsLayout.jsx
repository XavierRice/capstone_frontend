import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./DonationsLayout.css";
import UkraineImg from "../../assets/ImpactifyImgs.jpeg";
import ClimateImg from "../../assets/climate.png";
import DonateCode from "../../assets/DonateEvent1.png";
import FactsImg from "../../assets/factsImg.png";
import { FaArrowRight } from "react-icons/fa";

function DonationsLayout() {
	return (
		<div
			className=""
			style={{ width: "85%", height: "50%", marginTop: "40px" }}
		>
			<div className="fw-semibold fs-5 m-3">Featured donations</div>
			<div className="container">
				<div className="item top-box">
					<div className="top-box-grid">
						{" "}
						<div className="left-grid">
							<img src={UkraineImg} alt="Ukraine Image" className="top-image" />
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
								<span className="my-4 ">
									Donate now <FaArrowRight />
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="item mid-right sm-bx item-small ">
					<div className="top-half">
						<img
							src={ClimateImg}
							alt="Climate Image"
							className="climate-image"
						/>
					</div>
					<div className="bottom-half">
						<div className="fw-bold title fs-4 m-3 d-flex justify-content-center">
							{" "}
							Support Sustainability
						</div>
						<span className="m-4 ">
							Donate now <FaArrowRight />
						</span>
					</div>
				</div>
				<div className="item mid-left item-small ">
					<div className="top d-flex justify-content-center ">
						<img src={FactsImg} alt="factsImg" className="climate-image " />
					</div>
					<div className="bottom d-flex justify-content-center m-2">
						<div className="fs-4 fw-bold title">Fundraising FAQs:</div>
					</div>
					<div className="m-2">Why should we care and participate?</div>
					<span className="m-3">
						Learn more <FaArrowRight />
					</span>
				</div>

				<div className="item right item-small ">
					<img src={DonateCode} alt="Donate Card" className="donate-card" />
				</div>
			</div>
		</div>
	);
}

export default DonationsLayout;
