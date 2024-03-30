import React, {useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Donation1 from "../Components/Stripe/Donation1";
import UkraineBuy from "../Components/Stripe/UkraineBuy";
import CleanUpBuy from "../Components/Stripe/CleanUpBuy";
import ClimateBuy from "../Components/Stripe/ClimateBuy";
import './Donations.css'

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
    <Container fluid className="donations-container">
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>

        <Card className="grey-card">
          <Row>
            <Col sm={6} className="my-auto">
              <div>
              <Donation1 />
              </div>
            </Col>
            <Col sm={6}>
              {/*  Donation information */}
              {/* progress bar*/}
              <p>User Information</p>
            </Col>
          </Row>
        </Card>
        
        <Card className="grey-card">
          <Row>
            <Col sm={6} className="my-auto">
              <div>
              <ClimateBuy />
              </div>
            </Col>
            <Col sm={6}>
              {/*  Donation information */}
              {/* progress bar*/}
              <p>User Information</p>
            </Col>
          </Row>
        </Card>

        <Card className="grey-card">
          <Row>
            <Col sm={6} className="my-auto">
              <div>

              <UkraineBuy />
              </div>
            </Col>
            <Col sm={6} className="donation_information">
                {/*  Donation information */}
              {/* progress bar*/}
              <p>User Information</p>
            </Col>
          </Row>
        </Card>

       
      </Col>
    </Row>
  </Container>
  );
}

export default Donations;
