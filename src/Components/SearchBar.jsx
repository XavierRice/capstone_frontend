import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  // const handleChange = (e) => {
  //   setSearchInput(e.target.value);
  // };

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
