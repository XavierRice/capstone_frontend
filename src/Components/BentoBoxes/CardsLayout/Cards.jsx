import React from "react";
import "./Cards.css"; // Import CSS file

function Cards() {
	return (
		<div className="bento-box">
			<div className="full-size-square"></div>
			<div className="little-squares-container">
				<div className="little-square"></div>
				<div className="little-square"></div>
			</div>
			<div className="little-squares-container">
				<div className="little-square"></div>
				<div className="little-square"></div>
			</div>
		</div>
	);
}

export default Cards;
