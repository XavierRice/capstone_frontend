import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchResultPage from "../Pages/SearchResultPage";
const backend = import.meta.env.VITE_BACKEND_URL 
const newsAPIKey = import.meta.env.VITE_APP_NEWSAPI_KEY;

function SearchBar({onSearch}) {
	const [searchInput, setSearchInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const [fetchedEvents, SetFetchedEvents] = useState()
	const [fetchedNews, SetFetchedNews] = useState()
	const [fetchedNewsApi, SetFetchedNewsApi] = useState()

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
				`${backend}/events/search?keyword=${searchInput}`
			);
			console.log("Events response:", eventsResponse.data);
			SetFetchedEvents(eventsResponse.data);
		} catch (error) {
			console.error("An error occurred while fetching events:", error);
			setError("An error occurred while fetching events.");
			setLoading(false);
			return; // Prevent further execution in case of error
		}
	
		try {
			const newsResponse = await axios.get(
				`${backend}/news/search?keyword=${searchInput}`
			);
			console.log("News response:", newsResponse.data);
			SetFetchedNews(newsResponse.data);
		} catch (error) {
			console.error("An error occurred while fetching news:", error);
			setError("An error occurred while fetching news.");
			setLoading(false);
			return; // Prevent further execution in case of error
		}
	
		try {
			const newsAPIResponse = await axios.get(
				`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${newsAPIKey}`
			);
			console.log("NewsAPI response:", newsAPIResponse.data.articles);
			SetFetchedNewsApi(newsAPIResponse);
		} catch (error) {
			console.error("An error occurred while fetching news from NewsAPI:", error);
			setError("An error occurred while fetching news from NewsAPI.");
			setLoading(false);
			return; // Prevent further execution in case of error
		}
	
		navigate(`/search-results?keyword=${searchInput}`, {
			state: {
				eventsData: fetchedEvents?.data,
				newsData: fetchedNews?.data,
				newsAPIResponse: fetchedNewsApi?.articles,
			},
		});
	
		setLoading(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch();
	};

	return (
		<div className="m-5 d-flex flex-column justify-content-center ">
			<Form onSubmit={handleSubmit} className="">
				<InputGroup className=" ">
					<Col xs={8} md={9} lg={10}>
						<FormControl
							placeholder="Search"
							aria-label="Search"
							onChange={handleChange}
							value={searchInput}
							style={{ width: "110%" }}
						/>
					</Col>
					<Col xs={4} md={3} lg={2} className="d-flex justify-content-center  ">
						<Button
							variant="outline-secondary"
							type="submit"
							disabled={loading}
							style={{ width: "100%", maxWidth: "150px", borderRadius: "10px" }}
						>
							{loading ? "Searching..." : "Search"}
						</Button>
					</Col>
				</InputGroup>
			</Form>

			{error && (
				<div className="text-danger d-flex justify-content-center my-5 fs-5 ">
					{error}
				</div>
			)}
		</div>
	);
}

export default SearchBar;
