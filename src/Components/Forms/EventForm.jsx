import React, { useEffect, useState, useContext } from "react";
import { AuthData } from "../../Provider/AuthProv";
import { useParams, Link, useNavigate } from "react-router-dom";
import Select, { createFilter, components } from "react-select";
import AutoComplete from "../GeoLocation/AutoComplete";
import Is_donation from "../DonationModal.jsx/IsDonation";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./EventForm.css";
import KeywordsIcons from "./KeywordsIcons";

const backend = import.meta.env.VITE_BACKEND_URL;

const EventForm = () => {
	const { user } = useContext(AuthData);
	let { user_id } = useParams();
	const naviagte = useNavigate();

	const [isDonation, setIsDonation] = useState(false);
	const [selectedKeywords, setSelectedKeywords] = useState([]);
	const [location, setLocation] = useState("");
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [stripeId, setStripeId] = useState("");
	const [error, setError] = useState(false);
	const [userId, setUserId] = useState(user_id);
	const [user_keywords, setUserKeywords] = useState([]);
	const [user_event, setUser_Event] = useState({
		user_id: userId,
		event_title: "",
		event_date: "",
		event_time: "",
		event_location: location,
		lat: lat,
		lng: lng,
		event_details: "",
		event_keyword: "",
		event_photo: "",
		is_virtual: false,
		rsvp: false,
		is_donation: isDonation,
		stripe_id: "",
	});
	console.log(user);

	const keywordOptions = [
		{ value: "activism", label: "Activism" },
		{ value: "advocacy", label: "Advocacy" },
		{ value: "campaigns", label: "Campaigns" },
		{ value: "civil rights", label: "Civil Rights" },
		{ value: "citizenship", label: "Citizenship" },
		{ value: "community organizing", label: "Community Organizing" },
		{ value: "economic justice", label: "Economic Justice" },
		{ value: "environmental activism", label: "Environmental Activism" },
		{ value: "equality", label: "Equality" },
		{ value: "feminism", label: "Feminism" },
		{ value: "gender equality", label: "Gender Equality" },
		{ value: "global issues", label: "Global Issues" },
		{ value: "grassroots movements", label: "Grassroots Movements" },
		{ value: "gun control", label: "Gun Control" },
		{ value: "human rights", label: "Human Rights" },
		{ value: "inclusion", label: "Inclusion" },
		{ value: "lgbt rights", label: "LGBT Rights" },
		{ value: "peace", label: "Peace" },
		{ value: "political activism", label: "Political Activism" },
		{ value: "politics", label: "Politics" },
		{ value: "protest", label: "Protest" },
		{ value: "racial justice", label: "Racial Justice" },
		{ value: "social change", label: "Social Change" },
		{ value: "social justice", label: "Social Justice" },
		{ value: "solidarity", label: "Solidarity" },
		{ value: "voting rights", label: "Voting Rights" },
	];

	function KeywordMaker() {
		for (let word of user_keywords) {
			keywordOptions.push({ value: word, label: word });
		}
	}

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
		fetch(`${backend}/events`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user_event),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				naviagte("/discover/events");
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addEvent();
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

	console.log(stripeId);

	// console.log(user_event)
	// useEffect(() => {
	//   fetch(`${backend}/events/${user_id}`)
	//     .then((res) => res.json())
	//     .then((res) => {

	//     })
	// })

	return (
		<Form className="custom-text" onSubmit={handleSubmit}>
			<div>
				<KeywordsIcons />
			</div>
			<Row className="mb-3">
				{/* <h3>Welcome, {user}! Please fill out the form to create your event.</h3> */}
				<Form.Group className="mb-3" controlId="event_title">
					<Form.Label>Event Title</Form.Label>

					<Form.Control
						type="text"
						placeholder="enter Title"
						onChange={handleTextChange}
					/>
				</Form.Group>

				<Row>
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

			<Row className="mt-4">
				<Form.Group as={Col} className="mb-3" controlId="is_virtual">
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
					as={Col}
					className=" mx-5"
					controlId="rsvp"
					onChange={handleRSVP}
					checked={user_event.rsvp}
				>
					<Form.Label>RSVP?</Form.Label>
					<Form.Check type="checkbox" label="yes" name="rsvp" />
					<Form.Check type="checkbox" label="no" name="rsvp" />
				</Form.Group>

				<Form.Group as={Col}>
					<Is_donation
						setStripeId={setStripeId}
						isDonation={isDonation}
						setIsDonation={setIsDonation}
						stripeId={stripeId}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Row>
		</Form>
	);
};

export default EventForm;
