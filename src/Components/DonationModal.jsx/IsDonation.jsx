import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';

function Is_donation({ isDonation, setIsDonation}) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [stripeId, setStripeId] = useState("")
 
    
    const handleClose = () => {
        setShow(false);
        if(!stripeId){
            setIsDonation(false)
        }
    }

    const redirectToStripe = () => {
        navigate("/discover")
        handleClose();
    }

    const handleChange = (event) => {
        setIsDonation(event.target.checked)
        setShow(event.target.checked)
    }

    const handleStripeId = (event) => {
        setStripeId(event.target.value)
    }

    return (
        <>
            <Form.Group className="mb-3" id="is_donation">
                <Form.Label>Are you seeking donations?</Form.Label>
                <Form.Check
                    type="checkbox"
                    checked={isDonation}
                    label="yes, im am seeking donations."
                    onChange={handleChange} />
            </Form.Group>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you have a Stripe ID?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="strip_id">
                            <Form.Label>Stripe Id</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Strip_Id"
                                autoFocus
                                onChange={handleStripeId}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    <Button variant="info" onClick={redirectToStripe}>
                        Create a Stripe ID
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Is_donation;