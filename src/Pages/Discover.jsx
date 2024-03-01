import React, { useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import CategoriesSection from "../Components/CategoriesSection";
import ResultsSection from "../Components/ResultsSection";



function Discover() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (

    <div>
      <Carousel />
      <CategoriesSection onSelectCategory={handleSelectCategory} />
      <ResultsSection selectedCategory={selectedCategory} />
    </div>
  );
}

export default Discover;
