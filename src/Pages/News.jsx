import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import "../App.css";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:4000/news");
      if (!response.ok) {
        throw new Error("Failed to fetch data:");
      }
      const data = await response.json();
      setNewsData(data.data);

      setLoading(false);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  }
  console.log(newsData);
  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleCardClick = (id) => {
    navigate(`/discover/news-details/${id}`);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {newsData.map((news) => (
            <Card
              key={news.news_id}
              title={news.title}
              imageSrc={news.imageSrc}
              text={news.text}
              updatedAt={news.updatedAt}
              onLoad={handleImageLoad}
              onClick={() => handleCardClick(news.news_id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default News;
