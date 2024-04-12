/* eslint-disable no-unused-vars */
import React from "react";
import "./Card.css";
import { Card as BootstrapCard } from "react-bootstrap";

const Card = ({ title, imageSrc, text, updatedAt, onLoad, onClick }) => {
	return (
		<div onClick={onClick} style={{ cursor: "pointer" }}>
			<div className="card border-0  bg-light border-none ">
				<img
					className=" p-2 card-img"
					src={imageSrc}
					alt="Card image"
					onLoad={onLoad}
					style={{ borderRadius: "15px" }}
				/>
				<div className="card-body bg-light">
					<h5 className="card-title ">{title}</h5>
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
