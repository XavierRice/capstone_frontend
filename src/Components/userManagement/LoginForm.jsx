import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import "./LoginForm.css";

const LoginForm = ({ onSubmit, loginError }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ username, password });
	};

	return (
		<div className="">
			<div className="">
				<Form onSubmit={handleSubmit} className="login-form">
					<div className="d-flex">
						<div className="flex-grow-1 mx-2">
							<Form.Group controlId="firstName">
								<Form.Control
									type="text"
									placeholder="first name"
									name="firstName"
								/>
							</Form.Group>
						</div>
						<div className="flex-grow-1 mx-2">
							<Form.Group controlId="lastName">
								<Form.Control
									type="text"
									placeholder="last name"
									name="lastName"
								/>
							</Form.Group>
						</div>
					</div>
					{loginError && <ErrorMessage message={loginError} />}
					<div className="m-3 justify-content-center d-flex">
						<Button variant="primary" type="submit">
							Login
						</Button>
					</div>
					<div className="mt-4">
						Don't have an account?{" "}
						<a href="/discover/users/signup" style={{ color: "#630F76" }}>
							Register
						</a>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default LoginForm;
