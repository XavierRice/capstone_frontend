import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
	FacebookShareButton, EmailShareButton, TwitterShareButton
} from 'react-share'
import axios from "axios";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { MdAlternateEmail } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import {
	CiLocationOn,
	CiCalendar,
	CiFacebook,
	CiTwitter,
} from "react-icons/ci";
import StripeBuy from "../../Components/Stripe/StripeBuy";
import GoogleMap from '../../Components/Maps/GoogleMap';
import defaultImage from '../../assets/NoImage.jpg'
import Event4Strip from "../../Components/Stripe/Event4Stripe";
import { IoMegaphoneSharp } from "react-icons/io5";
import { useAuthDataProvider } from '../../Provider/AuthProv'
import loader from "../../Components/LoadingState/LoadingState"


const DetailsTest = () => {
	const [theEvent, setTheEvent] = useState(null)
	const location = useLocation();
	const navigate = useNavigate();
	const { user } = useAuthDataProvider()
	const backend = import.meta.env.VITE_BACKEND_URL;

	const { event } = location.state || { event: {} };
	const eventUserId = event?.user_id;
	const [loading, setLoading] = useState(true);
	const [travelMode, setTravelMode] = useState("DRIVING");
	const [showDonationButton, setShowDonationButton] = useState(false);
	const [showThankYouModal, setShowThankYouModal] = useState(false);
	const [fetchedUser, setFetchedUser] = useState(null);
	const [checked, setChecked] = useState(false);
	const [buyButtonId, setBuyButtonId] = useState(null);
	const [registeredGuest, setRegisteredGuest] = useState({
		firstname: "",
		lastname: "",
		email: "",
		mobile: "",
	});

	const handleTextChange = (event) => {
		const { name, value } = event.target;
		setRegisteredGuest({ ...registeredGuest, [name]: value });
	}


	const handleEventRegister = () => {
		console.log("you've registered");
		setShowThankYouModal(true);
	};

	const handleCloseOut = () => {
		setTimeout(() => {
			setShowThankYouModal(false); // Close the modal
			navigate("/"); // Redirect to another page
		}, 1000);
	};

	const handleCheckboxChange = () => {
		setChecked(!checked);
	};



	console.log("dtailestest", event)


	const {
		event_id,
		user_id,
		event_title: title,
		event_date: date,
		event_time: time,
		event_details,
		event_location: locationName,
		event_photo: image,
		lat,
		lng,
		is_virtual: isVirtual = false,
		stripe_id,
		rsvp = true, // Provide a default value in case it's missing
	} = event;

	useEffect(() => {
		setTheEvent(event)
	}, [])



	useEffect(() => {

		const fetchUser = async () => {
			try {
				const response = await axios.get(`${backend}/users/${event.user_id}`);
				let user = response.data;
				console.log("eventsDetailsPage", user);
				setFetchedUser(user);
				setLoading(true)
			} catch (error) {
				console.error("Error Fetching Backend Events:", error);
			} finally {
				// Step 2: Delay transition to false for loading state

				setLoading(false);
			}
		};
		fetchUser();
	}, []);


	useEffect(() => {
		if (fetchedUser) {
			setRegisteredGuest({
				name: fetchedUser.first_name || "",
				lastname: fetchedUser.last_name || "",
				email: fetchedUser.email || "",
				mobile: "",
			});
		}
	}, []);

	useEffect(() => {
		if (stripe_id) {
			setBuyButtonId(stripe_id);
		}
	}, [stripe_id]);

	const hasRequiredKeys = ["event_location", "lat", "lng"].every((key) =>
		Object.keys(event).includes(key)
	);

	const displayMap = locationName && lat && lng;

	let imageSrc =
		image ||
		event.logo_url ||
		event.event_photo ||
		defaultImage;
	const eventDate = date.slice(0, 10)
	const firstName = fetchedUser?.first_name;
	let eventKeyword = event.event_keywords[0];


	return (

		<>
			<div className="my-4 event-details-container" styles={{}}>
		
			{loading ? (
					<div className="loader-wrapper">
						<div className="loader"></div>
					</div>
				) : (
					<>
						<div className="display-6 d-flex justify-content-center">{title}</div>
						<div className="d-flex justify-content-center my-3"></div>
						<Row className="mx-3 d-flex justify-content-center">
							<Col sm={11} md={6}>
								<Row style={{ height: "30%", marginBottom: "3%" }}>
									<img src={imageSrc} alt="Event" className="image" />
								</Row>
								<Row style={{ height: "12vh" }} className="">
									<Col sm={6} md={6} className="">
										<div className="mx-2 my-4">
											<CiLocationOn className=" " />
											<span className="fw-bold fs-5 mx-2">Location</span>
											<span className="fw-bold fs-6 d-block p-2">
												{locationName || 'unavilable' }
											</span>
											<div className="fs-5 my-1 text-decoration-underline fw-bold text-secondary">
											Map
										</div>
										</div>
									</Col>
									<Col sm={6} md={6}>
										<div className="mx-2 my-4">
											<div className="m-2">
												<CiCalendar className="" />
												<span className="fw-bold fs-5 mx-2">Time</span>
												<span className="fw-bold fs-6 d-block my-2">
													{eventDate}
												</span>
												<span className="fw-bold fs-6 d-block">
													{event.event_time}
												</span>
											</div>
											<div className="fs-5 my-1 text-decoration-underline fw-bold text-secondary">
											Map
										</div>
										</div>
									</Col>
								</Row>
								<Row className="my-2 ">
									<div className="fs-4 fw-bold my-">About this event</div>
									<div className=" my-2">{event_details}</div>
								</Row>
								<hr className="my-4" />
								<Row>
									<div className="m-2">
										<span className="fw-bold fs-5 d-block">Accessibility</span>
										<GoQuestion className="mx-3" />
										<span className="">
											Have accessibility questions? Reply to your registration
											email to confirm your requirements or request more
											information.
										</span>
									</div>
								</Row>
								<hr className="my-4" />
								<Row className="map-row mb-5">
									<div className="map-controls  mb-3">
										<button
											className="rounded-button btn mr-3"
											onClick={() => setTravelMode("DRIVING")}
										>
											Driving
										</button>
										<button
											className="rounded-button btn mx-3"
											onClick={() => setTravelMode("WALKING")}
										>
											Walking
										</button>
									</div>
									<div className="">
									<GoogleMap
										location={locationName}
										lat={lat}
										lng={lng}
										travelMode={travelMode}
									/>
								</div>
								</Row>
							</Col>
							<Col sm={11} md={4} className="">
								<Row
									className="attend-event p-2 m-1 custom-bg justify-content-center"
									style={{ borderRadius: "15px" }}
								>
									{stripe_id != null ? (
										<div className="m-1">
											<StripeBuy buyButtonId={buyButtonId} />
										</div>
									) : (
										<></>
									)}
								</Row>
								<div className="attend-event bg-light">
									<div className="fw-bold fs-5 d-flex justify-content-center mt-2 mb-3 d-block mx-5 p-3">
										REGISTER TO ATTEND THIS EVENT
									</div>
									<div className="forms p-3">
										<Form>
											<div className="d-flex">
												<div className="flex-grow-1 mx-2">
													<Form.Group controlId="firstName">
														<Form.Control
															type="text"
															placeholder="first name"
															value={registeredGuest.firstname}
															name="firstName"
															onChange={handleTextChange}
														/>
													</Form.Group>
												</div>
												<div className="flex-grow-1 mx-2">
													<Form.Group controlId="lastName">
														<Form.Control
															type="text"
															placeholder="last name"
															value={registeredGuest.lastname}
															name="lastName"
															onChange={handleTextChange}
														/>
													</Form.Group>
												</div>
											</div>

											<Form.Group controlId="email">
												<Form.Label></Form.Label>
												<Form.Control
													type="email"
													placeholder="email"
													value={registeredGuest.email}
													name="email"
													onChange={handleTextChange}
												/>
											</Form.Group>

											<Form.Group controlId="mobile">
												<Form.Label></Form.Label>
												<Form.Control
													type="tel"
													placeholder="mobile number"
													value={registeredGuest.mobile}
													name="mobile"
													onClick={() => handleTextChange(event)}
												/>
											</Form.Group>
										</Form>
										<div className="d-flex justify-content-center">
											<button
												className="btn fluid btn-register my-4"
												onClick={handleEventRegister}
											>
												Register
											</button>
										</div>
										<span className="d-block d-flex justify-content-center mb-3">
											Powered by Impactify
										</span>
										<span className="d-block d-flex justify-content-center my-3">
											By clicking the button above, you agree to the Terms of
											Service and Privacy Policy.
										</span>
										<div>
											<Form.Group controlId="smsUpdates">
												<Form.Check
													className="m-4"
													type="checkbox"
													label="I want to receive occasional automated text messages from Impactify with updates about how to stay involved, such as recommended events and other actions. Message and data rates may apply. Message frequency varies. Text STOP to cancel or HELP for help. By opting in you agree to our SMS Shortcode Terms of Service."
													checked={checked}
													onChange={handleCheckboxChange}
												/>
											</Form.Group>
										</div>
										<Modal
											show={showThankYouModal}
											onHide={() => setShowThankYouModal(false)}
										>
											<Modal.Header closeButton>
												<Modal.Title>Thank You!</Modal.Title>
											</Modal.Header>
											<Modal.Body>Thank you for registering!</Modal.Body>
											<Modal.Footer>
												<Button variant="secondary" onClick={handleCloseOut}>
													Close
												</Button>
											</Modal.Footer>
										</Modal>
									</div>
								</div>
								<Row>
									<div className="btn-action btn m-4">
									<IoMegaphoneSharp />
									<span className="mx-3 ">Log in to promote this action</span>
								</div>
								<div className="btn-action btn mx-4">
									<CiFacebook />
									<FacebookShareButton url={`https://impactify.netlify.app/discover/events-details/${user_id}`} className="mx-5 ">
										Share on Facebook
									</FacebookShareButton>
								</div>
								<div className="btn-action btn m-4">
									<CiTwitter />
									<TwitterShareButton url={`https://impactify.netlify.app/discover/events-details/${user_id}`} className="mx-5 ">
										Share on Twitter
									</TwitterShareButton>
								</div>
								<div className="btn-action btn mx-4">
									<MdAlternateEmail />
									<EmailShareButton url={`https://impactify.netlify.app/discover/events-details/${user_id}`} className="mx-5 ">
										Share via email
									</EmailShareButton>
								</div>
								</Row>
								<div className="d-flex justify-content-center my-3 fw-bold link">
									<a href="#">Contact organization</a>
								</div>
							</Col>
						</Row>
					</>
				)}

			</div>
		</>
	);
};

export default DetailsTest;