import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();
  // const location = useLocation();
  const { news } = location.state;

  const paragraphs = news.news_content.split(/\n\n/);

  return (
    <div className="container mt-4">
      <h2 className="m-3 text-light display-6">{news.news_title}</h2>
      <img src={news.news_image} className="img-fluid my-3" alt="News" />

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-light m-3">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default NewsDetails;
