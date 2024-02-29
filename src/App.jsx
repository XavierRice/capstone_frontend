import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Discover from "./Pages/Discover";
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header";

import ResultsSection from "./Components/ResultsSection";
import GoogleMap from "./Components/GoogleMap";

import NewsDetails from "./Pages/NewsDetailsPage";
import EventDetails from "./Pages/EventDetailsPage";
import News from "./Pages/News";
import Events from "./Pages/Events";
import "./App.css";



function App() {
  return (
    <div className="" bg="">
      <Router>
        <Header />
        <h1 className="">Welcome to impactify</h1>
        <div className="content">
          <Routes>
            <Route path="/discover" element={<Discover />} />
            <Route path="/discover/news-details" element={<NewsDetails />} />
            <Route path="/discover/events-details" element={<EventDetails />} />
            <Route path="/discover/news" element={<News />} />
            <Route path="/discover/events" element={<Events />} />
          </Routes>
        </div>
        <NavigationBar className="footer" />
      </Router>
    </div>
  );
}

export default App;
