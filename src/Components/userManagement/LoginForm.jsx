import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";


const LoginForm = ({ onSubmit, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ username, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  );
};

export default LoginForm;
