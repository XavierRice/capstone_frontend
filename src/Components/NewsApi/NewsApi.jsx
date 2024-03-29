import React, { useState, useEffect } from 'react';
import Select from "react-select";
import './NewsApi.css'; 
import { Container, Row, Col, Form } from 'react-bootstrap';

const NewsApi = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedKeyword, setSelectedKeyword] = useState(null); 
  const NewsApiKey = import.meta.env.VITE_APP_NEWSAPI_KEY;

 
  const keywordOptions = [
    { value: 'equality', label: 'equality' },
    { value: 'politics', label: 'politics' },
    { value: 'global issues', label: 'global issues' },
    { value: 'lgbt rights', label: 'lgbt rights' },
    { value: 'global warming', label: 'global warming' }, 
    { value: 'ukraine', label: 'ukraine' }, 
  ];

  useEffect(() => {
    if (selectedKeyword) { 
      fetchNewsArticles(selectedKeyword.value);
    }
  }, [selectedKeyword]); 

  const handleKeywords = (selectedOption) => {
    setSelectedKeyword(selectedOption); // Store the whole option object
  };

  const fetchNewsArticles = async (keyword) => {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${NewsApiKey}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch news articles for keyword: ${keyword}`);
        }
        const data = await response.json();
        
        setNewsArticles(data);
      } catch (error) {
      setError(error.message);
    }finally{

      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
console.log(newsArticles)
  
  return (
    <Container>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="event_keyword">
          <Form.Label>Keywords</Form.Label>
          <Select
            onChange={handleKeywords}
            options={keywordOptions}
            className='basic-select custom-text-dark'
            classNamePrefix="select"
            name="event_keywords"
          />
        </Form.Group>
      </Row>
      {/* News display component here */}
    </Container>
  );
};

export default NewsApi;
