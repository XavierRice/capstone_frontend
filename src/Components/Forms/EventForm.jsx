import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import Select, { createFilter, components } from "react-select"
import AutoComplete from '../GeoLocation/AutoComplete';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./EventForm.css"


const backend = import.meta.env.VITE_BACKEND_URL

const EventForm = () => {
  let { user_id } = useParams();
  const naviagte = useNavigate();

  const [selectedKeywords, setSelectedKeywords] = useState([])
  const [location, setLocation] = useState("")
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [error, setError] = useState(false)
  const [userId, setUserId] = useState(user_id)
  const [user_event, setUser_Event] = useState({
    user_id: userId,
    event_title: "",
    event_date: "",
    event_time: "",
    event_location: location,
    lat: lat,
    lng: lng,
    event_details: "",
    event_keyword: "",
    event_photo: "",
    is_virtual: false,
    rsvp: false,
    is_donation: false,
    stripe_id: "",
  });

  const keywordOptions = [

    { value: 'equality', label: 'equality' },
    { value: 'politics', label: 'politics' },

  ]

  const handleKeywords = (selectedOption) => {
    setSelectedKeywords(selectedOption)
  }
  
  const CreatableSelectInput = (props) => (
    <components.Input {...props} />
  );

  const handleTextChange = (event) => {
    setEvent({ ...user_event, [event.target.id]: event.target.value })
  }

  const handleIsVirtual = (event) => {
    setEvent({ ...user_event, is_virtual: !user_event.is_virtual })
  }

  const handleRSVP = (event) => {
    setEvent({ ...user_event, rsvp: !user_event.rsvp })
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

  const handleSubmit = (event) => {
    event.preventDefault();
    addEvent()
  }



  useEffect(() => {
    fetch(`${backend}/events/${user_id}`)
      .then((res) => res.json())
      .then((res) => {

      })
  })

  return (
    <Form className='custom-text'>
      <Row className="mb-3">
        <Form.Group className='mb-3' controlId="event_title">
          <Form.Label >Event Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>

        <Form.Group as={Col} controlId="event_date">
          <Form.Label >Event Date</Form.Label>
          <Form.Control type="date" placeholder="12/12/2024" />
        </Form.Group>

        <Form.Group as={Col} controlId="event_time">
          <Form.Label >Start Time</Form.Label>
          <Form.Control type="time" placeholder="???" />
        </Form.Group>

      </Row>
    
      <AutoComplete setLocation={setLocation} setLat={setLat} setLng={setLng} />

      <Form.Group className="mb-3" controlId="event_details">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Description" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="event_keyword">
          <Form.Label>Keywords</Form.Label>
          <Select
            isMulti
            onChange={handleKeywords}
            options={keywordOptions}
            className='basic-mulit-select'
            classNamePrefix="select"
            components={{ Input: CreatableSelectInput }}
          />
        </Form.Group>

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


      <Form.Group className="mb-3" id="is_donation">
        <Form.Label>Are you seeking donations?</Form.Label>
        <Form.Check type="checkbox" label="is_donation" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EventForm;