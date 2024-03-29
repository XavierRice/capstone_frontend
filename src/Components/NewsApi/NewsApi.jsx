import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'; // Import the Card component
import './NewsApi.css'; // Import CSS for styling
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col from react-bootstrap

const NewsApi = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keywords, setKeywords] = useState(['ukraine', 'palestine', 'global warming', 'global issues', 'donations']); // Default keywords

  useEffect(() => {
    fetchNewsArticles();
  }, [keywords]); 

  const fetchNewsArticles = async () => {
    try {
      let allArticles = [];
      for (const keyword of keywords) {
        const response = await fetch(`https://newsapi.org/v2/everything?q=everything&apiKey=${import.meta.env.VITE_APP_NEWSAPI_KEY}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch news articles for keyword: ${keyword}`);
        }
        const data = await response.json();
        allArticles = allArticles.concat(data.articles);
      }
      setNewsArticles(allArticles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={4} className="g-4">
        {newsArticles.map(article => (
          <Col key={article.url}>
            <Card
              title={article.title}
              imageSrc={article.urlToImage}
              text={article.description}
              updatedAt={article.publishedAt}
              onClick={() => window.open(article.url, '_blank')} // Open the article link in a new tab
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsApi;
