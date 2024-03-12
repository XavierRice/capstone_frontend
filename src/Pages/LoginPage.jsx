import React, { useContext } from "react";
import { AuthData } from "../Provider/AuthProv";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoginForm from "../Components/userManagement/LoginForm";

const LoginPage = () => {
  const { API, setUser, setToken } = useContext(AuthData);

  const handleLogin = async (userData) => {
    try {
      const response = await API.post("/users/login", userData);
      console.log("Login response:", response.data);
      const { user, token } = response.data;
      setUser(user);
      setToken(token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container className="">
      <Card className="d-flex justify-content-center m-5">
        <Row className=" d-flex justify-content-center m-5">
          <Col md={6}>
            <h2>Login</h2>
            <LoginForm onSubmit={handleLogin} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default LoginPage;
