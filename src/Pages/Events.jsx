import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card/Card"; 
import CardNew from "../Components/Card/CardNew";
import { useNavigate } from "react-router-dom";
import DCTrip from "../Components/Stripe/DCTrip";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);
  const [mobilizeEvents, setMobilizeEvents] = useState([]);
  const [virtualEvents, setVirtualEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([])

  const navigate = useNavigate();
  const backend = import.meta.env.VITE_BACKEND_URL
  

  useEffect(()=> {
    const fetchEvents = async () => {
      setLoading(true);

      try {
        const resposeBackend = await axios.get(`${backend}/events`);
        const backendEvents = resposeBackend.data.data;
        setEventsData(backendEvents)
      }catch(error){
        console.error('Error Fetching Backend Events:', error)
      }

      try {
        const responseMoblize = await axios.get('https://api.mobilize.us/v1/events', {
          params: {
            location: "New York",
          },
        })
      const events = responseMoblize.data.data;
      const filteredVirtualEvents = events
        .filter(event => event.is_virtual === true)
        .map(({ id, title, sponsor: { logo_url, created_date: sponsorCreatedDate } = {}, summary, description }) => ({
          id,
          title,
          logo_url,
          sponsorCreatedDate,
          summary,
          details: description,
          location: false,
        }));
        setMobilizeEvents(events);
        setVirtualEvents(filteredVirtualEvents);
    }catch(error){
      console.error('Error fetching Mobilze events')
    }finally{
      setAllEvents([...virtualEvents,...eventsData])
      setLoading(false)
    }
  };
  fetchEvents();
}, [])

  const handleCardClick = (event) => {
    navigate("/discover/events-details", { state: { event } });
  };

  
  console.log (eventsData[0])

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <>
        <div>
            {eventsData.map((event, index) => (
              <div key={event.id || index} style={{marginBottom: "20px"}}>
              <CardNew
              cardObj={event}
              tag={"Event"}
              imageLoad={handleImageLoad}
              cardClick={handleCardClick}
              />
             {index === 2 && <div style={{marginTop: "0px"}}><DCTrip /></div>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>

  );
};

export default Events;



/* */