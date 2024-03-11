import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import EventForm from "../Components/Forms/EventForm";

function CreateEventPage() {

  const [ testBool, setTestBool] = useState(true)


  return testBool ? (
    <Container className="py-5 d-flex justify-content-center my-5">
      <EventForm/>
    </Container>
  )
  : 
  (
    <Navigate to={'/discover'}/>
  )
}

export default CreateEventPage;
