import React, { useState } from "react";

function CategoriesSection({ onSelectCategory }) {
  const handleClick = (category) => {
    onSelectCategory(category);
  };
  return (
    <div className="m-4 d-flex justify-content-around">
      <div
        className="btn rounded-pill circle-btn"
        onClick={() => handleClick("Global Issues")}
      >
        Global Issues
      </div>
      <div
        className="btn rounded-pill circle-btn"
        onClick={() => handleClick("Politics")}
      >
        Politics
      </div>
      <div
        className="btn  rounded-pill circle-btn"
        onClick={() => handleClick("Social Causes")}
      >
        Social Causes
      </div>
    </div>
  );
}

export default CategoriesSection;
