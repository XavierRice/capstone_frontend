import React, { useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import CarouselComponent from "../Components/Carousel2";
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
          <div className=" fs-2 m-3 d-flex justify-content-center display-2">
            Top ways to get involved
          </div>
          <div className="m-2">
            <CarouselComponent />
          </div>
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
