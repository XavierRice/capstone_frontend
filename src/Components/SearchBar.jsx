
import React, { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [userLocation, setUserLocation] = useState(null)

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

      navigate(`/search-results?keyword=${searchInput}`, {
        state: {
          eventsData: eventsResponse.data.data, 
          newsData: newsResponse.data.data,
        },
      });
    } catch (error) {
      console.error(
        "An error occurred while fetching search results:",
        error
      );
      setError("An error occurred while fetching search results.");
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3 container mt-4 mb-3 d-flex justify-content-around w-100">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
            value={searchInput}
          />
          <Button variant="outline-secondary" type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </InputGroup>
      </Form>

      {error && <div>{error}</div>}
    </div>
  );
}

export default SearchBar;
