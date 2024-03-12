// SignUpPage.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUpForm from "./components/users/SignUpForm";

const SignUpPage = () => {
  const handleSignUp = (userData) => {
    // Handle sign up logic, e.g., make API call to register user
    console.log("Signing up with:", userData);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Sign Up</h2>
          <SignUpForm onSubmit={handleSignUp} />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
