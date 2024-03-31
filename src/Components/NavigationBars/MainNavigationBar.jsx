import React, { useState, useEffect } from "react";
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Row,
	Col,
	NavLink,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Logo";



function MainNavigationBar() {
	const [isResponsive, setIsResponsive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsResponsive(window.innerWidth <= 991);
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const regularNavbar = (
		<>
			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				className="outline-none"
			/>
			<Link to="/">
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
						<NavDropdown.Item href="/discover/donations">Donations</NavDropdown.Item>
						<NavDropdown.Item href="#votingtoolkit">
							Voting Toolkit
						</NavDropdown.Item>
						<NavDropdown.Item href="#aboutus">About Us</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Navbar.Brand className="mx-auto display-2" href="/">
					<Logo/>
				</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="#howitworks" className="mx-3">
						How It Works
					</Nav.Link>
					<Nav.Link href="#signin" className="mx-3">
						Sign In
					</Nav.Link>
					<Link to="/discover/create-event">
						<Button
							variant=""
							className="mx-3 btn rounded-pill start-event-btn"
						>
							Start Event
						</Button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</>
	);

	const mobileNavbar = (
		<>
			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				className="outline-none"
			/>
			<Navbar.Brand className="mx-auto display-2" href="/">
				<Logo/>
			</Navbar.Brand>
			<Link to="/">
				<div className="mx-3">
					<FaSearch className="" style={{ marginRight: "2px" }} />
					Search
				</div>
			</Link>
			<Navbar.Collapse id="basic-navbar-nav">
				<Row className="w-100">
					<Col md={6}>
						<Nav className="ml-auto">
							<Nav.Link href="#howitworks" className="mx-3 mt-3">
								How It Works
							</Nav.Link>
							<Nav.Link href="#signin" className="mx-3">
								Sign In
							</Nav.Link>

							<Nav.Link className="mx-3 " href="#news">
								About us
							</Nav.Link>
						</Nav>
					</Col>
					<Col md={6}>
						<Nav>
							<Nav.Link href="/discover/news">News</Nav.Link>
							<Nav.Link href="/discover/events">All Events</Nav.Link>

							<Nav.Link href="#donations">Donations</Nav.Link>
							<Nav.Link href="#votingtoolkit">Voting Toolkit</Nav.Link>
						</Nav>
					</Col>
				</Row>
				<Button
					variant=""
					className="w-100 m-3 btn rounded-pill start-event-btn"
				>
					Start Event
				</Button>
			</Navbar.Collapse>
		</>
	);

	return (
		<Navbar
			bg="light"
			expand="lg"
			sticky="top"
			className="navbar-shadow scrolling"
		>
			{isResponsive ? mobileNavbar : regularNavbar}
		</Navbar>
	);
}

export default MainNavigationBar;
