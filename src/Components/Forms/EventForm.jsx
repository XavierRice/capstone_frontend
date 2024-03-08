import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";


import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const backend = import.meta.env.VITE_BACKEND_URL

const EventForm = () => {
let { user_id } = useParams();
const naviagte = useNavigate();

const [error, setError] = useState(false)
const [user_event, setUser_Event] = useState({
  event_title:"",
  event_date:"",
  event_time:"",
  lat:0,
  lng:0,
  event_location:"",
  event_details:"",
  event_photo:"",
  is_virtual:false,
  donation_id:0,
  mobilize_id:0,
  rsvp:false,
});


const handleTextChange = (event) => {
  setEvent({...user_event, [event.target.id] : event.target.value } )
}

const handleIsVirtual = (event) => {
  setEvent({...user_event, is_virtual: !user_event.is_virtual})
}

const handleRSVP = (event) => {
  setEvent({...user_event, rsvp: !user_event.rsvp})
}

const addEvent = (event) => {
  fetch(`${backend}/events/${user_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user_event)
  })
  .then((res) => res.json())
  .then((res) => {
    naviagte(`/events/${user_id}`)
  })
}

const handleSubmit = (event) =>{
  event.preventDefault();
  addEvent()
}

useEffect(() => {
  fetch(`${backend}/events/${user_id}`)
  .then((res) => res.json())
  .then((res) =>{
    
  })
})

    return (
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="event_title">
            <Form.Label htmlFor='event_title'>Event Title</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="event_date">
            <Form.Label htmlFor='event_date'>Event Date</Form.Label>
            <Form.Control type="date" placeholder="12/12/2024" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="event_time">
          <Form.Label htmlFor='event_time'>Event Time</Form.Label>
          <Form.Control  type="time" placeholder="12:00pm" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="event_location">
          <Form.Label>Location</Form.Label>
          <Form.Control type='text' placeholder="Other location indicators" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="event_details">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Description" />
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="event_photo">
            <Form.Label>Photo</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
  
        </Row>
  
        <Form.Group className="mb-3" id="is_virtual">
        <Form.Label>is it virtual?</Form.Label>
          <Form.Check type="checkbox" label="is_virtual" />
        </Form.Group>

        <Form.Group className="mb-3" id="rsvp">
        <Form.Label>Should guests RSVP?</Form.Label>
          <Form.Check type="checkbox" label="rsvp" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default EventForm;