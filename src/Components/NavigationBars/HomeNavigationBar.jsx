import React, { useState, useEffect } from "react";
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import useScrollPosition from "../../Hooks/ScrollPositionProvider";
import { Link } from "react-router-dom";

function MainNavigationBar({ scrolling = false }) {
	return (
		<Navbar
			bg="light"
			expand="lg"
			sticky="top"
			className={` navbar-shadow navbar-wrapper ${scrolling ? "scrolling" : "not-scrolling"}`}
			style={{ width: scrolling ? "100%" : "60rem" }}
		>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />

			<Link to="/search">
				<div className="mx-3">
					<FaSearch className="" style={{ marginRight: "2px" }} />
					Search
				</div>
			</Link>

			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown
						title="For Individuals"
						id="basic-nav-dropdown"
						className="mx-3"
					>
						<NavDropdown.Item href="#news">About us</NavDropdown.Item>
						<NavDropdown.Item href="/discover/news">News</NavDropdown.Item>
						<NavDropdown.Item href="/discover/events">
							All Events
						</NavDropdown.Item>
						<NavDropdown.Item href="#donations">Donations</NavDropdown.Item>
						<NavDropdown.Item href="#votingtoolkit">
							Voting Toolkit
						</NavDropdown.Item>
						<NavDropdown.Item href="#aboutus">About Us</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Navbar.Brand className="mx-auto display-2" href="/">
					Impactify
				</Navbar.Brand>

				<Nav className="ml-auto">
					<Nav.Link href="#howitworks" className="mx-3">
						How It Works
					</Nav.Link>
					<Nav.Link href="#signin" className="mx-3">
						Sign In
					</Nav.Link>
					<Button variant="" className="mx-3 btn rounded-pill start-event-btn">
						Start Event
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default MainNavigationBar;
