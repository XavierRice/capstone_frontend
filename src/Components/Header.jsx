import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="d-flex justify-content-around w-100"
    >
      <Link to="/discover" className="mx-auto">
        <Navbar.Brand>
          <img src="/" height="40" alt="Impactify Logo" />
        </Navbar.Brand>
      </Link>
      <Nav className="ml-auto">
        <Nav.Link href="#" className="text-light mx-3">
          sign up
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
