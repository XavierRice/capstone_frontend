import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
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

  const handleSearch = () => {
    console.log("Searching for:::", searchInput);
  };

  return (
    <InputGroup className="mb-3 container mt-4 mb-3 d-flex justify-content-around w-100">
      <FormControl
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
        value={searchInput}
      />
      <Button variant="outline-secondary" onClick={handleSearch}>
        Search
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
