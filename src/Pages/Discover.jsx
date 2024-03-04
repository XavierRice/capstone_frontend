import React, { useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import CategoriesSection from "../Components/CategoriesSection";
import ResultsSection from "../Components/ResultsSection";
import Box from "@mui/joy/Box";
import SearchBar from "../Components/SearchBar";

function Discover() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="d-flex justify-content-center">
      <Box sx={{ padding: "16px", display: "flex", flexDirection: "column" }}>
        <SearchBar />

        <div
          style={{ flex: "1 0 auto", overflow: "none" }}
          className="text-light"
        >
          <div className="d-flex justify-content-center m-3">
            {" "}
            Featured Events
          </div>
          <Carousel />
        </div>

        <CategoriesSection
          onSelectCategory={handleSelectCategory}
          sx={{ marginBottom: "16px" }}
        />

        <div className="">
          <ResultsSection selectedCategory={selectedCategory} />
        </div>
      </Box>
    </div>
  );
}

export default Discover;
