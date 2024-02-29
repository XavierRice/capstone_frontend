import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="d-flex justify-content-around w-100"
    >
      <Navbar.Brand className="mx-auto">
        <img
          src="/" //  logo image
          height="40" // Adjust the height
          alt="Impactify Logo"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#" className="text-light mx-3">
          sign up
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
