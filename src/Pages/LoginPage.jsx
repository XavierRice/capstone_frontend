import React, { useContext, useState } from "react";
import { AuthData } from "../Provider/AuthProv";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoginForm from "../Components/userManagement/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const { API, setUser, setToken } = useContext(AuthData);
  const [loginError, setLoginError] = useState("")

  const handleLogin = async (userData) => {
    try {
      const response = await API.post("/users/login", userData);
      console.log("Login response:", response.data);

      const { user, token } = response.data;
      setUser(user);
      setToken(token);
      localStorage.setItem('token', token)
      setLoginError("")
      navigate("/")
    } catch (error) {
      setLoginError("Failed to log in. Please check your username and password.")
      console.error("Login error:", error);
    }
  };

  return (
    <Container className="">
      <Card className="d-flex justify-content-center m-5">
        <Row className=" d-flex justify-content-center m-5">
          <Col md={6}>
            <h2>Login</h2>
            <LoginForm onSubmit={handleLogin} loginError={loginError} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default LoginPage;
