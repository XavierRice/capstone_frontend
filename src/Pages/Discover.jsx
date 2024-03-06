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
      <Box sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
        <SearchBar />

        <div
          style={{ flex: "1 0 auto", overflow: "none" }}
          className="text-light"
        >
          <div className=" fs-2 m-1 d-flex justify-content-center display-2">
            Top ways to get involved
          </div>
          <div className="mt-3">
            <Carousel />
          </div>
        </div>

        <CategoriesSection onSelectCategory={handleSelectCategory} />

        <div className="">
          <ResultsSection selectedCategory={selectedCategory} />
        </div>
      </Box>
    </div>
  );
}

export default Discover;
