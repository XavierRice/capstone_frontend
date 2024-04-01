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
import hand from '../../assets/hand.png'
import Logo from "../Logo";

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
					<FaSearch className="" style={{ marginRight: "4px" }} />
					Search
				</div>
			</Link>

			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown
						title="Get Involved"
						id="basic-nav-dropdown"
						className="mx-3"
					>
						<NavDropdown.Item href="/discover/news">News</NavDropdown.Item>
						<NavDropdown.Item href="/discover/events">
							All Events
						</NavDropdown.Item>
						<NavDropdown.Item href="/discover/donations">
							Donations
						</NavDropdown.Item>
						<NavDropdown.Item href="#votingtoolkit">
							Voting Toolkit
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Navbar.Brand className="mx-auto display-2" href="/">
					<Logo/>
				</Navbar.Brand>

				<Nav className="ml-auto">
					<NavDropdown
						title="About us"
						id="basic-nav-dropdown"
						className="mx-3"
					>
						<NavDropdown.Item href="#howitworks" className="mx-3">
							How It Works
						</NavDropdown.Item>
						<NavDropdown.Item href="#howitworks" className="mx-3">
							About us
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="/discover/users/signup" className="mx-3">
						Sign In
					</Nav.Link>
					<Button
						variant=""
						href="/discover/create-event"
						className="mx-3 btn rounded-pill start-event-btn"
					>
						Start Event
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default MainNavigationBar;
