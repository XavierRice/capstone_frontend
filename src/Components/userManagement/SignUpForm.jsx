import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";

const SignUpForm = ({ onSubmit }) => {
	const [userData, setUserData] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { firstName, lastName, userName, email, password } = userData;

		if (!firstName || !lastName || !userName || !email || !password) {
			setError("All fields are required");
			return;
		}
		setError("");
		onSubmit(userData);
	};

	return (
		<Form onSubmit={handleSubmit}>
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
						<Form.Control type="text" placeholder="last name" name="lastName" />
					</Form.Group>
				</div>
			</div>

			<Form.Group controlId="userName">
				<Form.Label></Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter user name"
					name="userName"
					value={userData.userName}
					onChange={handleInputChange}
				/>
			</Form.Group>

			<Form.Group controlId="email">
				<Form.Label></Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					name="email"
					value={userData.email}
					onChange={handleInputChange}
				/>
			</Form.Group>

			<Form.Group controlId="password">
				<Form.Label></Form.Label>
				<Form.Control
					type="password"
					placeholder="Enter password"
					name="password"
					value={userData.password}
					onChange={handleInputChange}
				/>
			</Form.Group>

			{error && <ErrorMessage message={error} />}

			<div className="text-center my-3">
				<Button variant="primary" type="submit">
					Sign Up
				</Button>
			</div>
		</Form>
	);
};

export default SignUpForm;
