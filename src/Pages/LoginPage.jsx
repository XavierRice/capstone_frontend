// LoginPage.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./components/users/LoginForm";

const LoginPage = () => {
  const handleLogin = (userData) => {
    // Handle login logic, e.g., make API call to authenticate user
    console.log("Logging in with:", userData);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Login</h2>
          <LoginForm onSubmit={handleLogin} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
