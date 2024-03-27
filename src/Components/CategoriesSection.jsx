import React, { useState } from "react";

function CategoriesSection({ onSelectCategory }) {
  const handleClick = (category) => {
    onSelectCategory(category);
  };
  return (
    <div className="mt-4 d-flex justify-content-center">
      <div
        className="btn rounded-pill circle-btn mx-1 "
        onClick={() => handleClick("Global Issues")}
      >
        Global Issues
      </div>
      <div
        className="btn rounded-pill circle-btn mx-1 "
        onClick={() => handleClick("Politics")}
      >
        Politics
      </div>
      <div
        className="btn  rounded-pill circle-btn mx-1 "
        onClick={() => handleClick("Social Causes")}
      >
        Social Causes
      </div>
    </div>
  );
}

export default CategoriesSection;
