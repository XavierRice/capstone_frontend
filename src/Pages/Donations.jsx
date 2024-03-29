import React, {useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Donation1 from "../Components/Stripe/Donation1";
import UkraineBuy from "../Components/Stripe/UkraineBuy";
import CleanUpBuy from "../Components/Stripe/CleanUpBuy";
import ClimateBuy from "../Components/Stripe/ClimateBuy";


function Donations() {

  const backend = import.meta.env.VITE_BACKEND_URL;
  const [donationsData, setDonationsData] = useState([]);

  useEffect(() => {

		const fetchData = async ( ) => {
			try {
				const response = await axios.get(`${backend}/donations`);
        const donations = response.data
				console.log(donations)
				setDonationsData(donations);
				
			} catch (error) {
				console.error("Error Fetching Backend Events:", error);
			}
    }
    fetchData()
    }, [])
 
  return (
    <Container className="py-5 my-5 donations-container">
    <Row className="g-4 justify-content-center">
      <Col xs={12} >

        <Donation1 />
      </Col>
      <Col xs={12}>
        {/* Replace with <CardTwo /> or similar */}
        <UkraineBuy />
      </Col>
      <Col xs={12} >
        {/* Replace with <CardThree /> or similar */}
        {/* <CleanUpBuy /> */}
      </Col>
      <Col xs={12}>
        {/* Replace with <CardFour /> or similar */}
        <ClimateBuy />
      </Col>
    </Row>
  </Container>
  );
}

export default Donations;
