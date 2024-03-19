
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputField from "./inputField";
import ErrorMessage from "./ErrorMessage";

const SignUpForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !userName || !email || !password) {
      setError("All fields are required");
      return;
    }
    onSubmit({ firstName, lastName, userName, email, password });
  };

  return (
    <Form onSubmit={handleSubmit} className="">
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
        label="User Name"
        type="text"
        placeholder="Enter user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
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
      <div className="m-2 d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;