import React from "react";
import { useState, useEffect } from "react";
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
import useScrollPosition from "./Hooks/ScrollPositionProvider";
import StripePaymentEvent from "./Components/Stripe/StripePaymentEvent";
import StripeBuy from "./Components/Stripe/StripeBuy";
import ProofHero from "./Components/SocialProof/ProofHero";
import ThankYou from "./Pages/ThankYou/ThankYou";
import CardNew from "./Components/Card/CardNew";
// import SearchResultPage from "./Pages/Search/SearchResultPage";
import Footer from "./Components/Footer/Footer";
import SignUpPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import SearchResultPage from "./Pages/Search/SearchPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />

				<Route path="/*" element={<MainNavigationBar />} />
			</Routes>
			<div>
				<Routes>
					<Route
						path="/discover/news-details/:id"
						element={<NewsDetailsPage />}
					/>
					<Route
						path="/discover/events-details"
						element={<EventDetailsPage />}
					/>
					<Route path="/search-results" element={<SearchResultPage />} />
					<Route path="/discover/news" element={<News />} />
					<Route path="/discover/events" element={<Events />} />
					<Route path="/discover/donations" element={<Donations />} />
					<Route path="/discover/users/login" element={<LoginPage />} />
					<Route path="/discover/users/signup" element={<SignUpPage />} />
					<Route path="/discover/thankyou" element={<ThankYou />} />
					<Route path="/discover/create-event" element={<CreateEventPage />} />
					<Route
						path="/discover/create-event/donation"
						element={<StripeDonation />}
					/>
					<Route path="/search" element={<SearchResultPage />} />
				</Routes>
			</div>
		</Router>
	);










}

export default App;
