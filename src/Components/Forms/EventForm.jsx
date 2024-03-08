import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
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
          <Form.Label htmlFor='event_time'>Location</Form.Label>
          <Form.Control  type="time" placeholder="12:00pm" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Other location indicators" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Description" />
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default EventForm;