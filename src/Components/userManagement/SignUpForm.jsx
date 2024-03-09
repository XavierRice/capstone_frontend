// SignUpForm.jsx
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import InputField from "./inputField";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

const SignUpForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic
    onSubmit({ firstName, lastName, email, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        label="First Name"
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <InputField
        label="Last Name"
        type="text"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
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
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
