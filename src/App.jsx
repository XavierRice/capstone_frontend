import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Discover from "./Pages/Discover";
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header/Header";

import EventDetailsPage from "./Pages/EventDetailsPage";
import News from "./Pages/News";
import Events from "./Pages/Events";
import "./App.css";

import NewsDetailsPage from "./Pages/NewsDetailsPage";
import CreateEventPage from "./Pages/CreateEventPage";
import Donations from "./Pages/Donations";

import StripeDonation from "./Components/Stripe/StripeDonation";
import StripePaymentEvent from './Components/Stripe/StripePaymentEvent';
import StripeBuy from './Components/Stripe/StripeBuy';

import ProofHero from './Components/SocialProof/ProofHero';
import ThankYou from './Pages/ThankYou';
import CardNew from './Components/Card/CardNew';


function App() {

  const [usersId, setUsersId] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="" bg="">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/discover" element={<Discover />} />
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
              path="/discover/test"
              element={<CardNew />}
            />
            <Route
              path="/discover/thankyou"
              element={<StripeBuy />}
            />
            <Route
              path="/discover/create-event"
              element={<CreateEventPage />}
            />
            <Route
              path="/discover/create-event/donation"
              element={<StripeDonation />}
            />
          </Routes>
        </div>
        <NavigationBar className="footer" />
      </Router>
    </div>
  );
}

export default App;
