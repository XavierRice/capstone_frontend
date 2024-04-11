import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import Progressbar from "../Components/Stripe/ProgressBar/Progressbar";
import axios from "axios";
import Donation1 from "../Components/Stripe/Donation1";
import UkraineBuy from "../Components/Stripe/UkraineBuy";
import CleanUpBuy from "../Components/Stripe/CleanUpBuy";
import ClimateBuy from "../Components/Stripe/ClimateBuy";
import climateUser from "../assets/climateUser.jpg";
import guyUser from "../assets/guyUser.jpg";
import ukraineUser from "../assets/ukraineUser.jpg";

import "./Donations.css";

function Donations() {
	const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
	const [donationsData, setDonationsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${backend}/donations`);
				const donations = response.data;
				console.log(donations);
				setDonationsData(donations);
			} catch (error) {
				console.error("Error Fetching Backend Events:", error);
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 6000);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return (
			<Container
				fluid
				className="donations-container d-flex justify-content-center align-items-center"
			>
				<Spinner animation="border" variant="primary" />
			</Container>
		);
	}
	console.log(donationsData);
	const donate1 = donationsData[0]?.donation_description;
	const donate1Amount = donationsData[0]?.donation_amount;
	const donate2 = donationsData[1]?.donation_description;
	const donate2Amount = donationsData[1]?.donation_amount;
	const donate3 = donationsData[2]?.donation_description;
	const donate3Amount = donationsData[2]?.donation_amount;

	return (
		<Container fluid className="donations-container">
			<div className="d-flex justify-content-center display-6 m-2">
				Featured Donations
			</div>
			<p className="d-flex justify-content-center mb-4">
				Get active by supporting causes you resonate with.
			</p>

			<Row className="d-flex justify-content-center">
				<Col xs={12} md={6} lg={4}>
					<Card
						className="card"
						style={{
							borderRadius: "15px",
							marginBottom: "33px",
							alignItems: "center",
						}}
					>
						<Donation1 />
						<div className="donation-info mt-4">
							<p className="fw-semibold mt-2 d-flex justify-content-center ">
								Beatrice Li
							</p>
							<div className="d-flex justify-content-center ">
								<img
									src={climateUser}
									alt="userpic"
									className="img-fluid p-2"
									style={{ width: "85%", height: "auto", borderRadius: "15px" }}
								/>
							</div>
							<div className="m-4 ">
								<p>{donate1}</p>
							</div>
							<div className="d-flex justify-content-center ">
								<div className=" d-flex justify-content-center">
									<Progressbar donateAmount={donate1Amount} />
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xs={12} md={6} lg={4}>
					<Card
						className="card"
						style={{
							borderRadius: "15px",
							marginBottom: "33px",
							alignItems: "center",
						}}
					>
						<ClimateBuy />
						<div className="donation-info">
							<p className="fw-semibold mt-2 d-flex justify-content-center ">
								Luca Grey
							</p>
							<div className=" d-flex justify-content-center">
								<img
									src={guyUser}
									alt="userpic"
									className="img-fluid "
									style={{ width: "80%", borderRadius: "15px" }}
								/>
							</div>
							<div className="m-4 ">
								<p>{donate2}</p>
							</div>
							<div className=" d-flex justify-content-center">
								<Progressbar donateAmount={donate2Amount} />
							</div>
						</div>
					</Card>
				</Col>
				<Col xs={12} md={6} lg={4}>
					<Card
						className="card"
						style={{
							borderRadius: "15px",
							marginBottom: "33px",
							alignItems: "center",
						}}
					>
						<UkraineBuy />
						<div className="donation-info">
							<p className="fw-semibold mt-2 d-flex justify-content-center ">
								Anastasia Melnyk
							</p>
							<div className=" d-flex justify-content-center">
								<img
									src={ukraineUser}
									alt="userpic"
									className="img-fluid p-2"
									style={{ width: "60%", height: "25vh", borderRadius: "15px" }}
								/>
							</div>
							<p className="m-4">{donate3}</p>
							<div className=" d-flex justify-content-center">
								<Progressbar donateAmount={donate3Amount} />
							</div>
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Donations;
