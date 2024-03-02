import React from "react";
import { useLocation } from "react-router";

function EventDetailsPage() {
  const location = useLocation()
  const { event } = location.state;



  return (
    <div>
      <h2>{event.title}</h2>
      <img src={event.sponsor.logo_url} alt="Event" />
      <p>{event.description}</p>
    </div>
  )
}

export default EventDetailsPage;
