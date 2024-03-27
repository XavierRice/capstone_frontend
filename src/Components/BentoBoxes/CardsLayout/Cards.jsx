import React from "react";
import "./Cards.css";
import CardComponent from "../../Card/Card";

function Cards() {
	const donationCards = [
		{
			title: "Donate to Education Fund",
			imageSrc: "education.jpg",
			text: "Help children access quality education.",
		},
		{
			title: "Support Clean Water Initiative",
			imageSrc: "clean-water.jpg",
			text: "Provide clean and safe drinking water to communities in need.",
		},
		{
			title: "Donate to Animal Welfare",
			imageSrc: "animal-welfare.jpg",
			text: "Support animal shelters and rescue efforts.",
		},
		{
			title: "Help Fight Hunger",
			imageSrc: "fight-hunger.jpg",
			text: "Provide meals to those facing food insecurity.",
		},
		{
			title: "Support Healthcare Initiatives",
			imageSrc: "healthcare.jpg",
			text: "Provide medical care and supplies to those in need.",
		},
	];

	return (
		<div
			style={{ height: "100%", width: "100%" }}
			className="d-flex justify-content-center "
		>
			<div className="bento-box ">
				<div className="full-size-square">
					{/* <CardComponent
						title={donationCards[0].title}
						imageSrc={donationCards[0].imageSrc}
						text={donationCards[0].text}
					/> */}
				</div>
				<div className="little-squares-container">
					<div className="little-square">
						{/* <CardComponent
							title={donationCards[1].title}
							imageSrc={donationCards[1].imageSrc}
							text={donationCards[1].text}
						/> */}
					</div>
					<div className="little-square"></div>
				</div>
				<div className="little-squares-container">
					<div className="little-square"></div>
					<div className="little-square"></div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
