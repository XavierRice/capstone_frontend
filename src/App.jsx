/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EventDetailsPage from "./Pages/EventDetailsPage";
import News from "./Pages/News";
import Events from "./Pages/Events";
import "./App.css";
import NewsDetailsPage from "./Pages/NewsDetailsPage";
import CreateEventPage from "./Pages/CreateEventPage";
import Donations from "./Pages/Donations";
import StripeDonation from "./Components/Stripe/StripeDonation";
import MainNavigationBar from "./Components/NavigationBars/MainNavigationBar";
import Homepage from "./Pages/Homepage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/*" element={<MainNavigationBar />} />
			</Routes>
			<div className="">
				<Routes>
					<Route
						path="/discover/news-details/:id"
						element={<NewsDetailsPage />}
					/>
					<Route
						path="/discover/events-details"
						element={<EventDetailsPage />}
					/>
					<Route path="/discover/news" element={<News />} />
					<Route path="/discover/events" element={<Events />} />
					<Route path="/discover/donations" element={<Donations />} />
					<Route path="/discover/create-event" element={<CreateEventPage />} />
					<Route
						path="/discover/create-event/donation"
						element={<StripeDonation />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
