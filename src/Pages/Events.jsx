
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card/Card"; 
import { useNavigate } from "react-router-dom";




const Events = () => {
  const [loading, setLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);
  const [mobilizeEvents, setMobilizeEvents] = useState([]);
  const [virtualEvents, setVirtualEvents] = useState([]);
  
  const navigate = useNavigate();


  const backend = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const fetchBackendEvents = async () => {
      try {
        const response = await axios.get(`${backend}/events`)
        const backendEvents = response.data.data
        setEventsData(backendEvents)
      } catch (error) {
        console.error("Error fetching BackEnd Events:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBackendEvents()
  }, [])


  useEffect(() => {
    const fetchMobilizeEvents = async () => {
      try {
        const response = await axios.get("https://api.mobilize.us/v1/events", {
          params: {
            location: "New York",
          },
        });
        const events = response.data.data;
  
        const virtualEvents = events
          .filter(event => event.is_virtual === true)
          .map(({ id, title, sponsor: { logo_url , created_date:sponsorCreatedDate } = {}, summary, description }) => ({
            id,
            title,
            logo_url, 
           sponsorCreatedDate,
            summary,
            description,
            location:false,
          }));
  
        setMobilizeEvents(events);
        setVirtualEvents(virtualEvents);
      } catch (error) {
        console.error("Error fetching Mobilize Events:", error);
      } finally {
        //finally: This block executes after the try and catch blocks, regardless of the outcome.
        setLoading(false);
      }
    };
    fetchMobilizeEvents();
  }, []);

  const handleCardClick = (event) => {
    navigate("/discover/events-details", { state: { event } });
  };

  console.log (virtualEvents[0]);
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
              <Card
                key={index}
                title={event.event_title}
                imageSrc={event.event_photo}
                text={event.event_details}
                onLoad={handleImageLoad}
                onClick={() => handleCardClick(event)}
              />
            ))}
          </div>
        
          <div>
            {virtualEvents.map((event) => (
              <Card
                key={event.id}
                title={event.title}
                imageSrc={event.logo_url}
                text={event.summary}
                onLoad={handleImageLoad}
                onClick={() => handleCardClick(event)}
              />
            ))}
          </div>
        </>
      )}
    </div>

  );
};

export default Events;
