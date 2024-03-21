/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Card from "./Card/Card";
import { Container, Col, Row, Button } from "react-bootstrap";
import FilterBtn from "./FilterBtn";

function MainContent() {
	const mockEventData = [
		{
			id: 1,
			event_title: "Conference on Technology",
			event_photo: "https://picsum.photos/id/1015/200/300",
			event_details:
				"Join us for an exciting conference on the latest technology trends.",
		},
		{
			id: 2,
			event_title: "Art Exhibition",
			event_photo: "https://picsum.photos/id/1016/200/300",
			event_details: "Experience the beauty of art in our upcoming exhibition.",
		},
		{
			id: 3,
			event_title: "Music Concert",
			event_photo: "https://picsum.photos/id/1018/200/300",
			event_details:
				"Get ready for an electrifying music concert with top artists.",
		},
		{
			id: 4,
			event_title: "Food Festival",
			event_photo: "https://picsum.photos/id/1019/200/300",
			event_details:
				"Satisfy your taste buds with delicious cuisines at our food festival.",
		},
		{
			id: 5,
			event_title: "Fitness Workshop",
			event_photo: "https://picsum.photos/id/1021/200/300",
			event_details:
				"Join us to learn and practice various fitness techniques.",
		},
		{
			id: 6,
			event_title: "Book Launch",
			event_photo: "https://picsum.photos/id/1023/200/300",
			event_details:
				"Discover new books and meet the authors at our book launch event.",
		},
		{
			id: 7,
			event_title: "Conference on Technology",
			event_photo: "https://picsum.photos/id/1015/200/300",
			event_details:
				"Join us for an exciting conference on the latest technology trends.",
		},
		{
			id: 8,
			event_title: "Art Exhibition",
			event_photo: "https://picsum.photos/id/1016/200/300",
			event_details: "Experience the beauty of art in our upcoming exhibition.",
		},
		{
			id: 9,
			event_title: "Music Concert",
			event_photo: "https://picsum.photos/id/1018/200/300",
			event_details:
				"Get ready for an electrifying music concert with top artists.",
		},
		{
			id: 10,
			event_title: "Food Festival",
			event_photo: "https://picsum.photos/id/1019/200/300",
			event_details:
				"Satisfy your taste buds with delicious cuisines at our food festival.",
		},
		{
			id: 11,
			event_title: "Fitness Workshop",
			event_photo: "https://picsum.photos/id/1021/200/300",
			event_details:
				"Join us to learn and practice various fitness techniques.",
		},
		{
			id: 12,
			event_title: "Book Launch",
			event_photo: "https://picsum.photos/id/1023/200/300",
			event_details:
				"Discover new books and meet the authors at our book launch event.",
		},
	];

	const [startIndex, setStartIndex] = useState(0);

	const eventsPerPage = 4;

	const handleNext = () => {
		setStartIndex((prevIndex) => prevIndex + eventsPerPage);
	};

	const handlePrev = () => {
		setStartIndex((prevIndex) => Math.max(prevIndex - eventsPerPage, 0));
	};

	return (
		<Container className="m-5">
			<div className="fs-4 my-4  fw-bold text-dark">
				Discover events inspired by what you care about
			</div>
			<div className="btn rounded-pill my-4">
				<FilterBtn />
			</div>

			<div className=" ">
				<Row>
					{mockEventData
						.slice(startIndex, startIndex + eventsPerPage)
						.map((event) => (
							<Col key={event.id} xs={9} md={3} className="mb-3">
								<Card
									title={event.event_title}
									imageSrc={event.event_photo}
									text={event.event_details}
								/>
							</Col>
						))}
				</Row>
				<div className="d-flex justify-content-center ">
					<Button
						onClick={handlePrev}
						disabled={startIndex === 0}
						className="me-2"
					>
						Prev
					</Button>
					<Button
						onClick={handleNext}
						disabled={startIndex + eventsPerPage >= mockEventData.length}
					>
						Next
					</Button>
				</div>
			</div>
		</Container>
	);
}

export default MainContent;
