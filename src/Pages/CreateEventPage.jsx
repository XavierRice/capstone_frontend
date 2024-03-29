
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import EventForm from "../Components/Forms/EventForm";
import User_loginMod from "../Components/UserModals/User_loginMod"
import { AuthData } from "../Provider/AuthProv";

function CreateEventPage() {

  const { isAuthenticated } = useContext(AuthData);
  const [showLogin, setShowLogin] = useState(!isAuthenticated)
  const { user, token } = useContext(AuthData)

  const handleClose = () => setShowLogin(false)
  console.log(user, token)


  return (
    <>
      {showLogin && (
        <User_loginMod show={showLogin} onHide={handleClose} />
      )}
      {!showLogin && (
        <Container className="py-5 d-flex justify-content-center my-5">
          <EventForm user={user} />
        </Container>
      )}
    </>
  )
}

export default CreateEventPage;
