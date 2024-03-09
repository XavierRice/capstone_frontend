// LoginForm.jsx
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import InputField from "./inputField";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic
    onSubmit({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        label="Email"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorMessage message={error} />}
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
