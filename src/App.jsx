import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Discover from "./Pages/Discover";
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header";

import EventDetailsPage from "./Pages/EventDetailsPage";
import News from "./Pages/News";
import Events from "./Pages/Events";
import "./App.css";

import NewsDetailsPage from "./Pages/NewsDetailsPage";
import CreateEventPage from "./Pages/CreateEventPage";
import Donations from "./Pages/Donations";

function App() {
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
            <Route
              path="/discover/create-event"
              element={<CreateEventPage />}
            />
          </Routes>
        </div>
        <NavigationBar className="footer" />
      </Router>
    </div>
  );
}

export default App;
