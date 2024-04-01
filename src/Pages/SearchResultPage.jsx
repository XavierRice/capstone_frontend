import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card/Card";
import CardNew from "../Components/Card/CardNew";
import { useNavigate } from "react-router-dom";

function SearchResultPage() {
	const location = useLocation();
	const { eventsData, newsData, newsAPIResponse } = location.state;
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleEventCardClick = (eventData) => {
		navigate("/discover/events-details", { state: { event: eventData } });
	};

	const handleNewsCardClick = (id) => {
		const selectedNews = newsData.find((news) => news.news_id === id);
		navigate(`/discover/news-details/${id}`, { state: { news: selectedNews } });
	};

    const handleArticleClick = (article, i) => {
        navigate(`/discover/news-details/${i}`, {state: {article}})
    }

	const handleImageLoad = () => {
		setLoading(false);
	};
console.log(eventsData, newsData, newsAPIResponse)

const selectedArticles = newsAPIResponse?.slice(0, 10)
console.log(selectedArticles)

	return (
		<div>
			<h1>Search Results</h1>
			<h2>Events</h2>
			<ul>
				{eventsData.map((event, index) => (
					<div key={event.id || index} className="event-card-container">
						<CardNew
							cardObj={event}
							tag={"Event"}
							imageLoad={handleImageLoad}
							cardClick={() => handleEventCardClick(event)}
						/>
					</div>
				))}
			</ul>
			<h2>News</h2>
			<ul>
				{newsData.map((news) => (
					<Card
						key={news.news_id}
						id={news.news_id}
						title={news.news_title}
						imageSrc={news.news_image}
						text={news.text}
						onLoad={handleImageLoad}
						onClick={() => handleNewsCardClick(news.news_id)}
					/>
				))}
			</ul>

            <ul>
				{selectedArticles.map((article, i) => (
					<Card
						key={`${i}-${article.author}`}
						id={`${i}`}
						title={article.title}
						imageSrc={article.urlToImage}
						text={article.description}
						onLoad={handleImageLoad}
						onClick={() => handleArticleClick(article, i)}
					/>
				))}
			</ul>
		</div>
	);
}

export default SearchResultPage;
