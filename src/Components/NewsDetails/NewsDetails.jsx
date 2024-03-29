import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RelatedEvents from "../RelatedEvents";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import "./NewsDetails.css";

const NewsDetails = () => {
	const location = useLocation();
	// const location = useLocation();
	const { news } = location.state;

	const paragraphs = news.news_content.split(/\n\n/);

	return (
		<div className="d-flex m-5 news-details-container" style={{}}>
			<Row>
				<h4 className=" d-flex display-6 mb-4 ">{news.news_title}</h4>
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
					<div style={{ margin: "2%" }}>
						<img
							src={news.news_image}
							style={{ borderRadius: "15px" }}
							className="container"
							alt="News"
						/>

						{paragraphs.map((paragraph, index) => (
							<p key={index} className=" mx-5 my-3">
								{paragraph}
							</p>
						))}
						{/* <RelatedEvents /> */}
					</div>
				</Col>
				<Col md={1} sm={10} lg={3}>
					<div className="related-events">
						<div className="d-flex justify-content-center fw-semibold fs-4">
							Related Events
						</div>

						<div className="box mx-4"></div>
						<div className="box mx-4"></div>
						<div className="box mx-4"></div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default NewsDetails;
