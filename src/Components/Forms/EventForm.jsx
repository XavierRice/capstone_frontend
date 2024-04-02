import React, { useEffect, useState, useContext } from "react";
import { AuthData } from "../../Provider/AuthProv";
import { useParams, useNavigate } from "react-router-dom";
import Select, { components } from "react-select";
import AutoComplete from "../GeoLocation/AutoComplete";
import Is_donation from "../DonationModal.jsx/IsDonation";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./EventForm.css";

const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

const EventForm = () => {
	const { user } = useContext(AuthData);
	let { user_id } = useParams();
	const navigate = useNavigate();

	const [isDonation, setIsDonation] = useState(false);
	const [selectedKeywords, setSelectedKeywords] = useState([]);
	const [location, setLocation] = useState("");
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [stripeId, setStripeId] = useState("");
	const [error, setError] = useState(false);
	const [user_event, setUser_Event] = useState({
		user_id: 1,
		event_title: "",
		event_date: "",
		event_time: "",
		event_location: location,
		lat: lat,
		lng: lng,
		event_details: "",
		event_keyword: [],
		event_photo: "",
		is_virtual: false,
		rsvp: false,
		is_donation: isDonation,
		stripe_id: "",
	});

	const keywordOptions = [
		{ value: "equality", label: "equality" },
		{ value: "politics", label: "politics" },
		{ value: "global issues", label: "global issues" },
		{ value: "lgbt rights", label: "lgbt rights" },
		{ value: "lgbt rights", label: "lgbt rights" },
	];

	const handleKeywords = (selectedOption) => {
		const selectedValues = selectedOption.map((option) => option.value);
		setUser_Event((prev) => ({
			...prev,
			event_keyword: selectedValues,
		}));
		setSelectedKeywords(selectedValues);
	};

	const CreatableSelectInput = (props) => <components.Input {...props} />;

	const handleTextChange = (event) => {
		console.log(
			`Handling text change for ${event.target.id}: ${event.target.value}`
		);
		setUser_Event({ ...user_event, [event.target.id]: event.target.value });
	};

	const handleIsVirtual = (event) => {
		setUser_Event({ ...user_event, is_virtual: event.target.checked });
	};

	const handleRSVP = (event) => {
		setUser_Event({ ...user_event, rsvp: event.target.checked });
	};

	const handleStripeId = (event) => {
		setStripeId(event.target.value);
	};

	const addEvent = (event) => {
		console.log("Submitting Event:", user_event);
		fetch(`${backend}/events`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...user_event, stripe_id: stripeId }), // Ensure stripeId is updated
		})
			.then((res) => {
				if (!res.ok) throw new Error("Network response was not ok");
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error("There was a problem with the fetch operation: ", error);
				setError(true);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Im fetching");
		addEvent(event);
	};

	useEffect(() => {
		setUser_Event((prev) => ({
			...prev,
			event_location: location,
			lat: lat,
			lng: lng,
			stripe_id: stripeId,
		}));
	}, [location, lat, lng, stripeId]);

	useEffect(() => {
		console.log(user_event);
	}, [user_event]);

	return (
		<Form className="custom-text" onSubmit={handleSubmit}>
			<Row className="mb-3">
				{/* <h3>Welcome, {user}! Please fill out the form to create your event.</h3> */}
				<Form.Group className="mb-3" controlId="event_title">
					<Form.Label>Event Title</Form.Label>

					<Form.Control
						type="text"
						placeholder="Enter Title"
						onChange={handleTextChange}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="event_date">
					<Form.Label>Event Date</Form.Label>
					<Form.Control
						type="date"
						placeholder="12/12/2024"
						onChange={handleTextChange}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="event_time">
					<Form.Label>Start Time</Form.Label>

					<Form.Control
						type="time"
						placeholder="???"
						value={user_event.event_time}
						onChange={handleTextChange}
					/>
				</Form.Group>
			</Row>

			<AutoComplete
				setLocation={setLocation}
				setLat={setLat}
				setLng={setLng}
				lat={lat}
				lng={lng}
			/>

			<Form.Group className="mb-3" controlId="event_details">
				<Form.Label>Description</Form.Label>
				<Form.Control
					as="textarea"
					placeholder="Description"
					onChange={handleTextChange}
				/>
			</Form.Group>

			<Row className="mb-3">
				<Form.Group as={Col} controlId="event_keyword">
					<Form.Label>Keywords</Form.Label>
					<Select
						isMulti
						onChange={handleKeywords}
						options={keywordOptions}
						className="basic-mulit-select custom-text-dark"
						classNamePrefix="select"
						components={{ Input: CreatableSelectInput }}
						name="event_keywords"
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="event_photo">
					<Form.Label>Photo</Form.Label>
					<Form.Control
						type="text"
						onChange={handleTextChange}
						name="event_photo"
					/>
				</Form.Group>
			</Row>

			<Form.Group className="mb-3" controlId="is_virtual">
				<Form.Label>Virtual Event</Form.Label>
				<Form.Check
					type="checkbox"
					label="Is this event virtual?"
					onChange={handleIsVirtual}
					checked={user_event.is_virtual}
					name="is_virtual"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="rsvp"
				onChange={handleRSVP}
				checked={user_event.rsvp}
			>
				<Form.Label>Yes,everyone should rsvp!</Form.Label>
				<Form.Check
					type="checkbox"
					label="yes, guests should rsvp!"
					name="rsvp"
				/>
			</Form.Group>

			<Is_donation
				handleStripeId={handleStripeId}
				isDonation={isDonation}
				setIsDonation={setIsDonation}
				stripeId={stripeId}
			/>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default EventForm;
