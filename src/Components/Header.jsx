import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/ImpactifySSLogoNB.png"
import "./Header.css"

function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="d-flex justify-content-around w-100 "
    >
      <Link to="/discover" className="mx-auto">
        <Navbar.Brand>
          <img src={Logo} height="80" alt="Impactify Logo" />
          <span className="custom-header">Impactify</span>
        </Navbar.Brand>
      </Link>
      <Nav className="ml-auto">
        <Nav.Link href="#" className="text-light mx-3 ">
          <p className="signup-custom-color">sign up</p>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
