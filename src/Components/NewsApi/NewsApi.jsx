import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'; // Import the Card component
import './NewsApi.css'; // Import CSS for styling

const NewsApi = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=politics&apiKey=${import.meta.env.VITE_APP_NEWSAPI_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news articles');
        }
        const data = await response.json();
        setNewsArticles(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNewsArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Latest News</h1>
      <div className="news-container">
        {newsArticles.map(article => (
          <Card
            key={article.url}
            title={article.title}
            imageSrc={article.urlToImage}
            text={article.description}
            updatedAt={article.publishedAt}
            onClick={() => window.open(article.url, '_blank')} // Open the article link in a new tab
          />
        ))}
      </div>
    </div>
  );
};

export default NewsApi;
