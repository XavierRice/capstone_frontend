import React, { useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthData } from "../Provider/AuthProv";
import { Container, Row, Col, Card } from "react-bootstrap";
import SignUpForm from "../Components/userManagement/SignUpForm";

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { API, setUser, setToken } = useContext(AuthData);

  const handleSignUp = async (userData) => {
    try {
      const response = await API.post("/users/register", userData);
      console.log("Sign-up response:", response.data);
      const { user, token } = response.data;
      setUser(user);
      setToken(token);
      // Storing token in da localStorage
      localStorage.setItem('token', token);
      
      const from = location.state?.from || '/'
      navigate(from)
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };


  return (
    <Container className="">
      <Card className="d-flex justify-content-center m-5 p-4">
        <Row className="">
          <Col className="">
            <h2>Sign Up</h2>
            <SignUpForm onSubmit={handleSignUp} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SignUpPage;
