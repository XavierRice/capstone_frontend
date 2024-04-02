import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import RelatedEvents from "../RelatedEvents";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import "./NewsDetails.css";

const NewsDetails = () => {
	const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
	const [relatedEvents, setReleatedEvents] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();
	const { news, article } = location.state;

	useEffect(() => {
		const fetchEvents = async () => {
			let fetchEventsData = [];

			try {
				const resposeBackend = await axios.get(`${backend}/events`);
				fetchEventsData = resposeBackend.data.data;
				console.log(resposeBackend);
				setReleatedEvents(fetchEventsData);
			} catch (error) {
				console.error("Error Fetching Backend Events:", error);
			}
		};
		fetchEvents();
	}, [news, article]);

	console.log(relatedEvents);

	const handleReleatedClick = (event) => {
		console.log("you clicked me", event);
		navigate("/discover/events-details", { state: { event: event } });
	};

	// console.log(article)
	const paragraphs = news?.news_content.split(/\n\n/);
	const articleText = article?.description;
	// console.log(articleText)
	return (
		<div className="d-flex m-5 news-details-container" style={{}}>
			<Row>
				<h4 className=" d-flex display-6 mb-4 ">
					{news?.news_title || article.title}
				</h4>
				<div className="icons">
					<Link to="#">
						<FaFacebookF className="m-2" />
					</Link>
					<Link to="#">
						<FaTwitter className="m-2" />
					</Link>
					<Link to="#">
						<MdEmail className="m-2" />
					</Link>
				</div>
				<hr />
				<Col md={6} sm={10} lg={8}>
					<div style={{ marginLeft: "15%" }}>
						<div className="">
							<img
								src={news?.news_image || article.urlToImage}
								style={{
									borderRadius: "15px",
									maxWidth: "100%",
									maxHeight: "100%",
								}}
								className=""
								alt="News"
							/>
						</div>

						{!article ? (
							paragraphs.map((paragraph, index) => (
								<p key={index} className=" my-3" style={{ marginRight: "10%" }}>
									{paragraph}
								</p>
							))
						) : (
							<p>{articleText}</p>
						)}
						{/* <RelatedEvents /> */}
					</div>
				</Col>
				<Col md={2} sm={10} lg={3}>
					<div className="related-events">
						<div className="d-flex justify-content-center fw-semibold fs-4">
							Related Events
						</div>

						{relatedEvents?.slice(0, 3).map((event, index) => (
							<div
								key={index}
								className="box mx-4"
								onClick={() => {
									handleReleatedClick(event);
								}}
							>
								<img
									src={event.event_photo}
									alt={`Event ${index + 1}`}
									className="releated-event-image"
								/>

								<div
									key={index}
									className="box mx-4"
									onClick={() => {
										handleReleatedClick(event);
									}}
								>
									<img
										src={event.event_photo}
										alt={`Event ${index + 1}`}
										className="releated-event-image"
									/>

									<div className="releated-image-text">{event.event_title}</div>
								</div>
							</div>
						))}
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default NewsDetails;
