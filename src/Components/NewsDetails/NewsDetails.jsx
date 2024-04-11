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
		navigate("/discover/events-details", { state: { event: event } });
	};

	const formatDate = (dateString) => {
		const options = { month: "long", day: "numeric" };
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", options);
	};

	// Function to format the event time
	const formatTime = (timeString) => {
		const options = { hour: "numeric", minute: "2-digit", hour12: true };
		const time = new Date(`1970-01-01T${timeString}`);
		return time.toLocaleTimeString("en-US", options);
	};

	// console.log(article)
	const paragraphs = news?.news_content.split(/\n\n/);
	const articleText = article?.content.repeat(16);
	// console.log(articleText)
	return (
		<div className="d-flex  news-details-container" style={{}}>
			<Row>
				{/* <hr /> */}
				<Col md={6} sm={10} lg={8}>
					<div>
						<h4 className=" d-flex fs-2 mb-2 ">
							{news?.news_title || article.title}
						</h4>
						<div className="my-3">
							<span className="mr-2">Written by</span>
							<span className="mx-3">Published at</span>
						</div>
					</div>
					<div style={{}}>
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
						<div className="share-icons mt-3">
							<Link to="#" style={{ color: "#630f76" }}>
								<FaFacebookF className="mx-2" />
							</Link>
							<Link to="#" style={{ color: "#630f76" }}>
								<FaTwitter className="mx-2" />
							</Link>
							<Link to="#" style={{ color: "#630f76" }}>
								<MdEmail className="mx-2" />
							</Link>
						</div>
						<hr style={{ width: "54vw" }} />

						{!article ? (
							paragraphs.map((paragraph, index) => (
								<p
									key={index}
									className=" my-3"
									style={{ marginRight: "28px" }}
								>
									{paragraph}
								</p>
							))
						) : (
							<p>{articleText}</p>
						)}
					</div>
				</Col>
				<Col md={2} sm={10} lg={3}>
					<div className="" style={{ marginTop: "9.55vh" }}>
						<div className="d-flex justify-content-center fw-semibold fs-4 ">
							Related Events
						</div>
						<div className="purple-underline mb-4" style={{}}></div>

						{relatedEvents?.slice(0, 3).map((event, index) => (
							<div
								key={index}
								className="box mx-4 card mb-3"
								onClick={() => {
									handleReleatedClick(event);
								}}
							>
								<img
									src={event.event_photo}
									alt={`Event ${index + 1}`}
									className="releated-event-image p-3"
									style={{
										borderRadius: "25px",
									}}
								/>

								<div
									key={index}
									className="mx-4 bottom"
									onClick={() => {
										handleReleatedClick(event);
									}}
								>
									<div className="row mb-2">
										<div className="col-6">
											<div className="">{formatDate(event.event_date)}</div>
										</div>
										<div className="col-6">
											<div className="">{formatTime(event.event_time)}</div>
										</div>
									</div>
									<div className="col-12 text-center">
										<div className="pb-3 event-title fw-semibold">
											{event.event_title}
										</div>
									</div>
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
