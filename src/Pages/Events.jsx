// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../Components/Card/Card";
// import CardNew from "../Components/Card/CardNew";
// import { useNavigate } from "react-router-dom";
// import './Events.css'

// const Events = () => {
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

//   //console.log (virtualEvents)

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
// };

// export default Events;

// Events.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import CardNew from "../Components/Card/CardNew";
import { useNavigate } from "react-router-dom";
import FilterBtn from "../Components/FilterBtn";
import "./Events.css";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);
  const [mobilizeEvents, setMobilizeEvents] = useState([]);
  const [virtualEvents, setVirtualEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [selectFilter, setSelectFilter] = useState();
  const navigate = useNavigate();
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      let fetchEventsData = [];
      let fetchedVirtualEvents = [];
      try {
        const resposeBackend = await axios.get(`${backend}/events`);
        fetchEventsData = resposeBackend.data.data;
        setEventsData(fetchEventsData);
      } catch (error) {
        console.error("Error Fetching Backend Events:", error);
      }
      try {
        const responseMobilize = await axios.get(
          "https://api.mobilize.us/v1/events",
          {
            params: {
              location: "New York",
            },
          }
        );
        const events = responseMobilize.data.data;
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
        console.error("Error fetching Mobilize events", error);
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
    navigate("/discover/events-details", { state: { event: eventData } });
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  function userSelectedState(state) {
    setSelectFilter(state);
  }

  const handleFilter = (keyword) => {
    switch (keyword) {
      case "Nearby":
        // Filter logic for Nearby events
        break;
      case "Online":
        setAllEvents(virtualEvents);
        break;
      case "All Events":
        setAllEvents([...eventsData, ...virtualEvents]);
        break;
      case "News":
        // Filter logic for News events
        break;
      case "Donations":
        // Filter logic for Donations events
        break;
      default:
        setAllEvents([...eventsData, ...virtualEvents]);
    }
  };

  return (
    <div className="event-page-background">
      {selectFilter || "empty"}
      <FilterBtn
        // handleFilter={handleFilter}
        userSelectedState={userSelectedState}
      />
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {allEvents.map((event, index) => (
            <div key={event.id || index} className="event-card-container">
              <CardNew
                cardObj={event}
                tag={"Event"}
                imageLoad={handleImageLoad}
                cardClick={() => handleCardClick(event)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
