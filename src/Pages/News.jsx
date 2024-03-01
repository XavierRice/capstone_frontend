import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "../App.css"; // Adjust the path as needed

const News = () => {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          title: "New Discoveries in Space",
          imageSrc: "https://source.unsplash.com/random/800x600/?space",
          text: "Scientists have made groundbreaking discoveries in the field of astrophysics, shedding new light on the mysteries of the universe. Recent observations from telescopes around the world have revealed...",
          updatedAt: "Just now",
        },
        {
          id: 2,
          title: "Climate Change Summit Recap",
          imageSrc: "https://source.unsplash.com/random/800x600/?climate",
          text: "World leaders gathered for the annual Climate Change Summit to address the pressing issues facing our planet. Discussions ranged from renewable energy initiatives to...",
          updatedAt: "1 hour ago",
        },
      ];
      setNewsData(mockData);
      setLoading(false);
    }, 3000);
  }

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div>
          {newsData.map((news) => (
            <Card
              key={news.id}
              title={news.title}
              imageSrc={news.imageSrc}
              text={news.text}
              updatedAt={news.updatedAt}
              onLoad={handleImageLoad}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default News;
