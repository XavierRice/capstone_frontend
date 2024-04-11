import React, { useState } from "react";
import Card from "./Card/Card";
import { Col, Row, Button } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import { useNavigate } from "react-router";

function MainContent({ backendEvents }) {
	const navigate = useNavigate();
	console.log(`This is maincontent:`, backendEvents);

	const [startIndex, setStartIndex] = useState(0);
	const eventsPerPage = 4;

	const handleNext = () => {
		setStartIndex((prevIndex) => prevIndex + eventsPerPage);
	};

	const handlePrev = () => {
		setStartIndex((prevIndex) => Math.max(prevIndex - eventsPerPage, 0));
	};

	const handleContentClick = (event) => {
		console.log("you clicked me", event);
		navigate("/discover/events-details", { state: { event: event } });
	};

	return (
		<div className="mt-5" style={{width: '100vw'}}>
			<div className="m-4">
				<div className="position-relative d-block">
					<div className="d-flex justify-content-between align-items-center m-3">
						<div className="fw-bold fs-4">Most popular events</div>
						<div>
							<Button
								onClick={handlePrev}
								disabled={startIndex === 0}
								className="mx-1"
								style={{ borderRadius: "60px" }}
							>
								<IoIosArrowBack />
							</Button>
							<Button
								onClick={handleNext}
								disabled={startIndex + eventsPerPage >= backendEvents.length}
								className="mx-1"
								style={{ borderRadius: "80px" }}
							>
								<IoIosArrowForward />
							</Button>
						</div>
					</div>

					<Row style={{ paddingRight: "0px", paddingLeft: "0px" }}>
						{backendEvents
							?.slice(startIndex, startIndex + eventsPerPage)
							.map((event) => (
								<Col
									key={event.event_id + "main"}
									xs={3}
									md={3}
									lg={3}
									className=""
								>
									<Card
										title={event.event_title}
										imageSrc={event.event_photo}
										text={event.event_details}
										onClick={() => handleContentClick(event)}
									/>
								</Col>
							))}
					</Row>
				</div>
			</div>
		</div>
	);
}

export default MainContent;
