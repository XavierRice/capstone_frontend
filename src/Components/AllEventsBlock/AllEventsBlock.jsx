import React from "react";
import MainContent from "../MainContent";
import Categories from "../CategoriesSection/CategoriesSection";

function AllEventsBlock() {
	return (
		<div className="mt-5">
			<Categories />
			<MainContent />
		</div>
	);
}

export default AllEventsBlock;
