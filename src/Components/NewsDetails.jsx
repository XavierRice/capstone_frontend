import React from "react";
import { useLocation } from "react-router-dom";
import RelatedEvents from "./RelatedEvents";

const NewsDetails = () => {
	const location = useLocation();
	// const location = useLocation();
	const { news } = location.state;

	const paragraphs = news.news_content.split(/\n\n/);

	return (
		<div className="mx-4 ">
			<div style={{ margin: "5%" }}>
				<h2 className="m-3  display-6 d-flex justify-content-center">
					{news.news_title}
				</h2>
				<img
					src={news.news_image}
					style={{ borderRadius: "15px" }}
					className="container"
					alt="News"
				/>

				{paragraphs.map((paragraph, index) => (
					<p key={index} className=" m-4">
						{paragraph}
					</p>
				))}
				<RelatedEvents />
			</div>
		</div>
	);
};

export default NewsDetails;
