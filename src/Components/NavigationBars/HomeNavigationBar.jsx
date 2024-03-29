/* eslint-disable no-unused-vars */
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

// eslint-disable-next-line react/prop-types
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
			<FaSearch className="mx-3" style={{ marginRight: "5px" }} />

			<Form
			// inline="true"
			>
				<FormControl
					type="text"
					placeholder="Search"
					className="mr-sm-2 "
					style={{ width: "110px" }}
				/>
			</Form>

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
					<Nav.Link href="/discover/users/signup" className="mx-3">
						Sign In
					</Nav.Link>
					<Button variant="" href="/discover/create-event" className="mx-3 btn rounded-pill start-event-btn">
						Start Event
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default MainNavigationBar;
