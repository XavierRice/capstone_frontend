import React from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import NoImage from "../../assets/NoImage.jpg";
import { useNavigate } from "react-router";
import "./NewsCar.css";

const NewsCar = ({ newsArticles }) => {
    const navigate = useNavigate();

    const handleArticleClick = (article, i) => {
        navigate(`/discover/news-details/${i}`, { state: { article } });
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {newsArticles &&
                newsArticles.map((article, i) => (
                    <div
                        className="bg-light"
                        key={`${i}-${article.source?.id}`}
                        onClick={() => handleArticleClick(article, i)}
                    >
                        <Card className="border-0">
                            <Card.Img
                                className="bg-light"
                                variant="top"
                                style={{ padding: "5%" }}
                                src={article.urlToImage || NoImage}
                                alt={article.title}
                            />
                            <Card.Body className="bg-light">
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                                {/* <Card.Text>{article.content}</Card.Text> */}
                            </Card.Body>
                        </Card>
                    </div>
                ))}
        </Slider>
    );
};

export default NewsCar;
