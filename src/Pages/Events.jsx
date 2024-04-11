import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Card from "../Components/Card/Card";
import CardNew from "../Components/Card/CardNew";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import MainContent from "../Components/MainContent";
import CategoriesSection from "../Components/CategoriesSection/CategoriesSection";

const Events = () => {
	const [loading, setLoading] = useState(true);
	const [eventsData, setEventsData] = useState([]);
	const [mobilizeEvents, setMobilizeEvents] = useState([]);
	const [virtualEvents, setVirtualEvents] = useState([]);
	const [clickedEvents, setClickedEvents] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [allEvents, setAllEvents] = useState([]);
	const navigate = useNavigate();

	const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			let fetchEventsData = [];
			let fetchedVirtualEvents = [];
			try {
				const resposeBackend = await axios.get(`${backend}/events`);
				fetchEventsData = resposeBackend.data.data;
				console.log(resposeBackend);
				setEventsData(fetchEventsData);
			} catch (error) {
				console.error("Error Fetching Backend Events:", error);
			}
			try {
				const responseMoblize = await axios.get(
					"https://api.mobilize.us/v1/events",
					{
						params: {
							location: "New York",
						},
					}
				);
				const events = responseMoblize.data.data;
				fetchedVirtualEvents = events
					.filter((event) => event.is_virtual === true)
					.map(
						({
							id,
							title,
							sponsor: { logo_url, created_date: sponsorCreatedDate } = {},
							summary,
							description,
						}) => ({
							id,
							title,
							logo_url,
							sponsorCreatedDate,
							summary,
							details: description,
							location: false,
						})
					);
				setMobilizeEvents(events);
				setVirtualEvents(fetchedVirtualEvents);
			} catch (error) {
				console.error("Error fetching Mobilze events", error);
			} finally {
				setLoading(false);
			}
		};
		fetchEvents();
	}, []);

	useEffect(() => {
		setAllEvents([...eventsData, ...virtualEvents]);
	}, [eventsData, virtualEvents]);

	const handleCardClick = (eventData) => {
		console.log("you clicked me", eventData);
		navigate("/discover/events-details", { state: { event: eventData } });
	};

	const handleImageLoad = () => {
		setLoading(false);
	};

	const filteredEvents = selectedCategory
		? allEvents.filter((event) =>
				event.event_keywords.includes(selectedCategory)
			)
		: allEvents;

	return (
		<div className="">
			{loading ? (
				<div className="loader-wrapper">
					<div className="loader"></div>
				</div>
			) : (
				<Col>
					<Row className="my-4 pb-4">
						<CategoriesSection />
					</Row>
					<Row className="d-flex justify-content-center">
						{allEvents.map((event, index) => (
							<Col key={event.id || index} sm={6} md={3}>
								<div className="p-3">
									<CardNew
										className="border-0"
										cardObj={event}
										tag={"Event"}
										cardClick={() => handleCardClick(event)}
									/>
								</div>
							</Col>
						))}
					</Row>
				</Col>
			)}
		</div>
	);

	//   const [loading, setLoading] = useState(true);
	//   const [eventsData, setEventsData] = useState([]);
	//   const [mobilizeEvents, setMobilizeEvents] = useState([]);
	//   const [virtualEvents, setVirtualEvents] = useState([]);
	//   const [clickedEvents, setClickedEvents] = useState([])
	//   const [allEvents, setAllEvents] = useState([])

	//   const navigate = useNavigate();
	//   const backend = import.meta.env.VITE_BACKEND_URL

	//   useEffect(()=> {
	//     const fetchEvents = async () => {
	//       setLoading(true);
	//       let fetchEventsData = [];
	//       let fetchedVirtualEvents = [];

	//       try {
	//         const resposeBackend = await axios.get(`${backend}/events`);
	//         fetchEventsData = resposeBackend.data.data;
	//         console.log(resposeBackend)
	//         setEventsData(fetchEventsData)
	//       }catch(error){
	//         console.error('Error Fetching Backend Events:', error)
	//       }

	//       try {
	//         const responseMoblize = await axios.get('https://api.mobilize.us/v1/events', {
	//           params: {
	//             location: "New York",
	//           },
	//         })
	//       const events = responseMoblize.data.data;
	//       fetchedVirtualEvents = events
	//         .filter(event => event.is_virtual === true)
	//         .map(({ id, title, sponsor: { logo_url, created_date: sponsorCreatedDate } = {}, summary, description }) => ({
	//           id,
	//           title,
	//           logo_url,
	//           sponsorCreatedDate,
	//           summary,
	//           details: description,
	//           location: false,
	//         }));
	//         setMobilizeEvents(events);
	//         setVirtualEvents(fetchedVirtualEvents);
	//     }catch(error){
	//       console.error('Error fetching Mobilze events', error)
	//     }finally{
	//       setLoading(false)

	//     }
	//   };
	//   fetchEvents();
	// }, [])

	//   useEffect(()=>{
	//   setAllEvents([...eventsData, ...virtualEvents])
	//   console.log(allEvents)
	//   }, [eventsData, virtualEvents])

	//   const handleCardClick = (eventData) => {
	//     console.log("you clicked me", eventData)
	//      navigate("/discover/events-details", { state: { event: eventData } });
	//   };

	//console.log (virtualEvents)

	//   const handleImageLoad = () => {
	//     setLoading(false);
	//   };

	//     return (
	//       <div className="event-page-background">
	//         {loading ? (
	//           <div className="loader-wrapper">
	//             <div className="loader"></div>
	//           </div>
	//         ) : (
	//           <div>
	//             {allEvents.map((event, index) => (
	//               <div key={event.id || index} className="event-card-container">
	//                 <CardNew
	//                   cardObj={event}
	//                   tag={"Event"}
	//                   imageLoad={handleImageLoad}
	//                   cardClick={() => handleCardClick(event)}
	//                 />
	//               </div>
	//             ))}
	//           </div>
	//         )}
	//       </div>
	//     );
};
export default Events;
