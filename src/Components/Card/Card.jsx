/* eslint-disable no-unused-vars */
import React from "react";
import "./Card.css";
import { Card as BootstrapCard } from "react-bootstrap";

const Card = ({ title, imageSrc, text, updatedAt, onLoad, onClick }) => {
	return (
		<div onClick={onClick} style={{ cursor: "pointer" }}>
			<div className="card m-5">
				<img
					className="card-img-top"
					src={imageSrc}
					alt="Card image"
					onLoad={onLoad}
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
					{/* <p className="card-text">
						<small className="text-muted">Last updated {updatedAt}</small>
					</p> */}
				</div>
			</div>
		</div>
	);
};
export default Card;
