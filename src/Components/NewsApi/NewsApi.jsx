import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Container, Row, Col, Form } from "react-bootstrap";
import NewsCar from "./NewsCar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsApi = ({ onLoad }) => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedKeyword, setSelectedKeyword] = useState("lgbt");
    const NewsApiKey = import.meta.env.VITE_APP_NEWSAPI_KEY 

    const keywordOptions = [
        { value: "equality", label: "equality" },
        { value: "politics", label: "politics" },
        { value: "global issues", label: "global issues" },
        { value: "lgbt rights", label: "lgbt rights" },
        { value: "global warming", label: "global warming" },
        { value: "ukraine", label: "ukraine" },
        { value: "palestine", label: "palestine" },
        { value: "israel", label: "israel" },

    ];

    useEffect(() => {
        if (selectedKeyword) {
            fetchNewsArticles(selectedKeyword);
        }
    }, [selectedKeyword]);

    const handleKeywords = (selectedOption) => {
        setSelectedKeyword(selectedOption.value);
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
            // Filter out articles with no image
            const filteredArticles = data.articles.filter(article => article.urlToImage);
            setNewsArticles(filteredArticles);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Container className=" mx-auto align-items-center  justify-content-center" >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="event_keyword mx-3">
                        <Form.Label className="mt-4 fs-4 d-flex justify-content-center ml-4">
                            Filter by Category
                        </Form.Label>
                        <Select
                            onChange={handleKeywords}
                            options={keywordOptions}
                            className="py-4"
                            classNamePrefix="select"
                            name="event_keywords"
                        />
                    </Form.Group>
                </Row>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {!loading && !error && <NewsCar newsArticles={newsArticles} />}
            </Container>
        </div>
    );

};

export default NewsApi;














