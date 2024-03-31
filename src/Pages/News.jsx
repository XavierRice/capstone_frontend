import React, { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import "../App.css";
import NewsApi from "../Components/NewsApi/NewsApi"; // Import NewsApi component
import { Col, Row } from "react-bootstrap";


const News = () => {
	const [loading, setLoading] = useState(true);
	const [newsData, setNewsData] = useState([]);
	const navigate = useNavigate();
	const backend = import.meta.env.VITE_BACKEND_URL
	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		try {
			const response = await fetch(`${backend}/news`);
			if (!response.ok) {
				throw new Error("Failed to fetch data:");
			}
			const data = await response.json();
			setNewsData(data.data);

			setLoading(false);
		} catch (e) {
			console.error("Error etching data:", e);
		}

		
	}
	console.log(newsData);
  
  const handleImageLoad = () => {
    setLoading(false);
  };

	const handleCardClick = (id) => {
		const selectedNews = newsData.find((news) => news.news_id === id);
		navigate(`/discover/news-details/${id}`, { state: { news: selectedNews } });
	};

	console.log(newsData[0]);


	return (
		<div>
			{loading ? (
				<div className="loader-wrapper">
					<div className="loader"></div>
				</div>
			) : (
				<Row className="d-flex justify-content-center">
					{newsData.map((news) => (
						<Col key={news.news_id} sm={6} md={3}>
							<Card
								id={news.news_id}
								title={news.news_title}
								imageSrc={news.news_image}
								text={news.text}
								onLoad={handleImageLoad}
								onClick={() => handleCardClick(news.news_id)}
							/>
						</Col>
					))}
					<Col><NewsApi/></Col>
					<Col></Col>
				</Row>

			)}
		</div>
	);
					}

export default News;
