
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EventDetailsPage from "./Pages/EventDetailsPage";
import News from "./Pages/News";
import Events from "./Pages/Events";
import "./App.css";
import NewsDetailsPage from "./Pages/NewsDetailsPage";
import CreateEventPage from "./Pages/CreateEventPage";
import Donations from "./Pages/Donations";
// import SignUpPage from "./Pages/SignupPage";
// import LoginPage from "./Pages/LoginPage";
import HeroImage from "./assets/HeroImage.jpg";
import StripeDonation from "./Components/Stripe/StripeDonation";

import MainNavigationBar from "./Components/MainNavigationBar";
import Homepage from "./Pages/Homepage";
import useScrollPosition from "./Hooks/ScrollPositionProvider";
import StripePaymentEvent from './Components/Stripe/StripePaymentEvent';
import StripeBuy from './Components/Stripe/StripeBuy';
import ProofHero from './Components/SocialProof/ProofHero';
import ThankYou from './Pages/ThankYou';
import CardNew from './Components/Card/CardNew';



function App() {
	// const [usersId, setUsersId] = useState("")
	// const [loggedIn, setLoggedIn] = useState(false)

	return (
		<div className="">
			<Router>
				{/* <MainNavigationBar /> */}
				<div>
					<Routes>
						<Route path="/" element={<Homepage />} />
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

						{/* { protected route w/ boolen } */}
						<Route
							path="/discover/create-event"
							element={<CreateEventPage />}
						/>

						{/* <Route path="/user/signup" element={<SignUpPage />} /> */}
						{/* <Route path="/user/login" element={<LoginPage />} /> */}
            <Route
              path="/discover/test"
              element={<ProofHero />}
            />
            <Route
              path="/discover/thankyou"
              element={<ThankYou/>}
            />
             <Route
              path="/discover/create-event/donation"
              element={<StripeDonation />}
            />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
