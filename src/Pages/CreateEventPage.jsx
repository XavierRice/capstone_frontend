import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import EventForm from "../Components/Forms/EventForm";

function CreateEventPage() {
  return (
    <Container className="py-5 d-flex justify-content-center my-5">
      <EventForm/>
    </Container>
  );
}

export default CreateEventPage;
