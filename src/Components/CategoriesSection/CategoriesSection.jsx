import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiWorld } from "react-icons/gi";
import { BiDonateHeart } from "react-icons/bi";
import { MdOutlinePolicy, MdAllInbox } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
import "./Categories.css";

function CategoriesSection({ onSelectCategory }) {
	const handleClick = (category) => {
		onSelectCategory(category);
	};
	return (
		<div className="">
			<Row className=" d-flex justify-content-center">
				<div className="py-4 mb-3 fs-3 d-flex justify-content-center ">
					Explore what's popular
				</div>

				<Col sm={10} xs={7} className="text-center">
					<div className="categories-container d-flex justify-content-center">
						<Row>
							<div className=" mx-3">
								<IoLocationOutline
									style={{ fontSize: "44px", color: "#630f76" }}
								/>
								<div>Local</div>
							</div>
						</Row>
						<Row>
							<div className=" mx-3">
								<IoCalendarOutline
									style={{ fontSize: "44px", color: "#630f76" }}
								/>
								<div>Coming Up</div>
							</div>
						</Row>
						<Row>
							<div className=" mx-3">
								<GiWorld style={{ fontSize: "44px", color: "#630f76" }} />
								<div>Global Issues</div>
							</div>
						</Row>
						<Row>
							<div className=" mx-3">
								<MdOutlinePolicy
									style={{ fontSize: "44px", color: "#630f76" }}
								/>
								<div>Politics</div>
							</div>
						</Row>
						<Row>
							<div className=" mx-3">
								<FaPeopleGroup style={{ fontSize: "44px", color: "#630f76" }} />
								<div>Community</div>
							</div>
						</Row>
						<Row>
							<div className=" mx-3">
								<BiDonateHeart style={{ fontSize: "44px", color: "#630f76" }} />
								<div>Donation</div>
							</div>
						</Row>
						<Row>
							<div className=" mx-3">
								<MdAllInbox style={{ fontSize: "44px", color: "#630f76" }} />
								<div>All</div>
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default CategoriesSection;
