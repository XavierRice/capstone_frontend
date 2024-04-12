import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Card from "../Components/Card/Card";
import CardNew from "../Components/Card/CardNew";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import MainContent from "../Components/MainContent";
import CategoriesSection from "../Components/CategoriesSection/CategoriesSection";

const Events = () => {
	const [loading, setLoading] = useState(true);
	const [eventsData, setEventsData] = useState([]);
	const [mobilizeEvents, setMobilizeEvents] = useState([]);
	const [imageEvents, setImageEvents] = useState([]);
	const [clickedEvents, setClickedEvents] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [allEvents, setAllEvents] = useState([]);
	const navigate = useNavigate();

	const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			let fetchEventsData = [];
			let fetchedImageEvents = [];
			try {
				const resposeBackend = await axios.get(`${backend}/events`);
				fetchEventsData = resposeBackend.data.data;
				console.log(resposeBackend);
				setEventsData(fetchEventsData);
			} catch (error) {
				console.error("Error Fetching Backend Events:", error);
			}
			try {
				const responseMoblize = await axios.get(
					"https://api.mobilize.us/v1/events",
					{
						params: {
							location: "New York",
						},
					}
				);
				console.log("mobloize" + responseMoblize);
				const events = responseMoblize.data.data;
				fetchedImageEvents = events
					.filter((event) => event.featured_image_url)
					.map(
						({
							id,
							title,
							sponsor: { logo_url, created_date: sponsorCreatedDate } = {},
							summary,
							description,
							feature_image_url,
						}) => ({
							id,
							title,
							logo_url,
							sponsorCreatedDate,
							summary,
							details: description,
							featureImageUrl: feature_image_url,
							location: false,
						})
					);
				setMobilizeEvents(events);
				setImageEvents(fetchedImageEvents);
			} catch (error) {
				console.error("Error fetching Mobilze events", error);
			} finally {
				setLoading(false);
			}
		};
		fetchEvents();
	}, []);
	console.log(imageEvents);

	useEffect(() => {
		setAllEvents([...eventsData]);
	}, [eventsData]);

	const handleCardClick = (eventData) => {
		console.log("you clicked me", eventData);
		navigate("/discover/events-details", { state: { event: eventData } });
	};

	const handleImageLoad = () => {
		setLoading(false);
	};

	const filteredEvents = selectedCategory
		? allEvents.filter((event) =>
				event.event_keywords.includes(selectedCategory)
			)
		: allEvents;

	return (
		<div className="" style={{ marginLeft: "5%", marginRight: "5%" }}>
			{loading ? (
				<div className="loader-wrapper">
					<div className="loader"></div>
				</div>
			) : (
				<Col>
					<Row className="my-4 pb-4">
						<CategoriesSection />
					</Row>
					<Row className="d-flex justify-content-center">
						{allEvents.map((event, index) => (
							<Col
								key={`${event.id || index + "A"}-events-${index}` || index}
								sm={6}
								md={3}
								className="pb-3"
							>
								<CardNew
									className="border-0"
									cardObj={event}
									tag={"Event"}
									cardClick={() => handleCardClick(event)}
								/>
							</Col>
						))}
					</Row>
				</Col>
			)}
		</div>
	);
};
export default Events;
