import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import axios from "axios";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };


  const handleSearch = async () => {
    setLoading(true);
    setError(null);
  
    console.log("Searching for:", searchInput);
  
    try {
      const eventsResponse = await axios.get(`http://localhost:4000/events/search?keyword=${searchInput}`);
      console.log("Events response:", eventsResponse.data);
      
      const newsResponse = await axios.get(`http://localhost:4000/news/search?keyword=${searchInput}`);
      console.log("News response:", newsResponse.data);
  
      // Check if response data is an array
      const events = Array.isArray(eventsResponse.data) ? eventsResponse.data.map(event => ({ ...event, type: 'event' })) : [];
      const news = Array.isArray(newsResponse.data) ? newsResponse.data.map(newsItem => ({ ...newsItem, type: 'news' })) : [];
  
      setSearchResults([...events, ...news]);
    } catch (error) {
      console.error("An error occurred while fetching search results:", error);
      setError("An error occurred while fetching search results.");
    }
  
    setLoading(false);
  };
  
  

  
  

  return (
    <div>
      <InputGroup className="mb-3 container mt-4 mb-3 d-flex justify-content-around w-100">
        <FormControl
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          value={searchInput}
        />
        <Button variant="outline-secondary" onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </InputGroup>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                {result.type === 'event' ? (
                  <p>{result.event_title}</p>
                ) : (
                  <p>{result.news_title}</p>
                  
                )}
              </li>
            ))}
          </ul>
          
        </div>
      )}

      {error && <div>{error}</div>}
    </div>
  );
}

export default SearchBar;
