import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import Select, { createFilter, components } from "react-select"
import AutoComplete from '../GeoLocation/AutoComplete';
import Is_donation from '../DonationModal.jsx/IsDonation';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./EventForm.css"


const backend = import.meta.env.VITE_BACKEND_URL

const EventForm = () => {
  let { user_id } = useParams();
  const naviagte = useNavigate();

  const [isDonation, setIsDonation] = useState(false)
  const [selectedKeywords, setSelectedKeywords] = useState([])
  const [location, setLocation] = useState("")
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [stripeId, setStripeId] = useState("")
  const [error, setError] = useState(false)
  const [userId, setUserId] = useState(user_id)
  const [user_keywords, setUserKeywords] = useState([])
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
    is_donation: isDonation,
    stripe_id: "",
  });

  const keywordOptions = [

    { value: 'equality', label: 'equality' },
    { value: 'politics', label: 'politics' },
    { value: 'global issues', label: 'global issues'},
    { value: 'lgbt rights', label: 'lgbt rights'},
    { value: 'lgbt rights', label: 'lgbt rights'}

  ]
  function KeywordMaker (){
   for (let word of user_keywords){
    keywordOptions.push({ value: word, label: word})
   }
  }

  const handleKeywords = (selectedOption) => {

   const selectedValues = selectedOption.map(option => option.value)

    setUser_Event(prev => ({
      ...prev,
      event_keyword: selectedValues
    }));
    setSelectedKeywords(selectedValues)
  }
  
  const CreatableSelectInput = (props) => (
    <components.Input {...props} />
  );

  const handleTextChange = (event) => {
    setUser_Event({ ...user_event, [event.target.id]: event.target.value })
  }

  const handleIsVirtual = (event) => {
    setUser_Event({ ...user_event, is_virtual: event.target.checked })
  }

  const handleRSVP = (event) => {
    setUser_Event({ ...user_event, rsvp: event.target.checked })
  }


  console.log(user_event)

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
  useEffect(()=> {
    setUser_Event(prev => ({
      ...prev,
      event_location: location,
      lat:lat,
      lng:lng,
      stripe_id:stripeId
    }))
  },[location, lat, lng, stripeId])



console.log(user_event)
  // useEffect(() => {
  //   fetch(`${backend}/events/${user_id}`)
  //     .then((res) => res.json())
  //     .then((res) => {

  //     })
  // })

  return (
    <Form className='custom-text'>
      <Row className="mb-3">
        <Form.Group className='mb-3' controlId="event_title">
          <Form.Label >Event Title</Form.Label>
         
          <Form.Control type="text" placeholder="Enter Title"  onChange={handleTextChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="event_date">
          <Form.Label >Event Date</Form.Label>
          <Form.Control type="date" placeholder="12/12/2024"   onChange={handleTextChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="event_time">
          <Form.Label >Start Time</Form.Label>
          
          <Form.Control type="time" placeholder="???"  value={user_event.event_time} onChange={handleTextChange}/>
        </Form.Group>

      </Row>
    
      <AutoComplete setLocation={setLocation} setLat={setLat} setLng={setLng} lat={lat} lng={lng}/>

      <Form.Group className="mb-3" controlId="event_details">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Description"  onChange={handleTextChange}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="event_keyword" >
          <Form.Label>Keywords</Form.Label>
          <Select
            isMulti
            onChange={handleKeywords}
            options={keywordOptions}
            className='basic-mulit-select custom-text-dark'
            classNamePrefix="select"
            components={{ Input: CreatableSelectInput }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="event_photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control type='text'  onChange={handleTextChange}/>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="is_virtual">
        <Form.Label>Virtual Event</Form.Label>
        <Form.Check type="checkbox" label="Is this event virtual?"  onChange={handleIsVirtual} checked={user_event.is_virtual}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rsvp"  onChange={handleRSVP} checked={user_event.rsvp}>
        <Form.Label>Yes,everyone should rsvp!</Form.Label>
        <Form.Check type="checkbox" label="yes, guests should rsvp!" />
      </Form.Group>


      <Is_donation setStripeId={setStripeId} isDonation={isDonation} setIsDonation={setIsDonation} stripeId={stripeId}/>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EventForm;