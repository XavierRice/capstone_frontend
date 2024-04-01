import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBar({ onSearch }) {

  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const newsAPIKey = import.meta.env.VITE_APP_NEWSAPI_KEY
  const navigate = useNavigate();


	const [userLocation, setUserLocation] = useState(null);

	//getting users location
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setUserLocation({ lat: latitude, lng: longitude });
				},
				(error) => {
					console.error("Error obtaining user location", error);
				}
			);
		} else {
			console.log("Geolocation is not working.");
		}
	}, []);

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleSearch = async () => {
		setLoading(true);
		setError(null);

		console.log("Searching for:", searchInput);

		try {
			const eventsResponse = await axios.get(
				`http://localhost:4000/events/search?keyword=${searchInput}`
			);
			console.log("Events response:", eventsResponse.data);

			const newsResponse = await axios.get(
				`http://localhost:4000/news/search?keyword=${searchInput}`
			);
			console.log("News response:", newsResponse.data);


	  const newsAPIResponse = await axios.get(
		`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${newsAPIKey}`
	  );
	  console.log("NewsAPI response:", newsAPIResponse.data.articles )

      navigate(`/search-results?keyword=${searchInput}`, {
        state: {
          eventsData: eventsResponse.data.data,
          newsData: newsResponse.data.data,
		  newsAPIResponse: newsAPIResponse.data.articles,
        },
      });
    } catch (error) {
      console.error("An error occurred while fetching search results:", error);
      setError("An error occurred while fetching search results.");
    }


		setLoading(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch();
	};

	return (
		<div className="m-5 d-flex justify-content-center">
			<Form onSubmit={handleSubmit}>
				<InputGroup className=" ">
					<Col xs={8} md={9} lg={10}>
						<FormControl
							placeholder="Search"
							aria-label="Search"
							onChange={handleChange}
							value={searchInput}
							style={{ width: "80vw" }}
						/>
					</Col>
					<Col xs={4} md={3} lg={2}>
						<Button
							variant="outline-secondary"
							type="submit"
							disabled={loading}
							style={{ width: "10vw", borderRadius: "10px", height: "1005" }}
						>
							{loading ? "Searching..." : "Search"}
						</Button>
					</Col>
				</InputGroup>
			</Form>

			{error && <div>{error}</div>}
		</div>
	);
}

export default SearchBar;
