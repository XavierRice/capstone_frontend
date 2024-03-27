import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import './LoginForm.css'

const LoginForm = ({ onSubmit, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
      <div className="login-page">
        <div className="login-form-container">
          <Form onSubmit={handleSubmit} className="login-form">
            <InputField
              label="Username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {loginError && <ErrorMessage message={loginError} />}
            <div className="m-3 justify-content-center d-flex">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
};

export default LoginForm;
