import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import EventForm from "../Components/Forms/EventForm";
import User_loginMod from "../Components/UserModals/User_loginMod"

function CreateEventPage() {

  const [showLogin, setShowLogin] = useState(true)
  const handleClose = () => setShowLogin(false)

  return (
    <>
      {showLogin && (
        <User_loginMod show={showLogin} onHide={handleClose} />
      )}
      {!showLogin && (
        <Container className="py-5 d-flex justify-content-center my-5">
          <EventForm />
        </Container>
      )}
    </>
  )
}

export default CreateEventPage;
