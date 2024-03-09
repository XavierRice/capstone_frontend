import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';

function Is_donation() {
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const redirectToStripe = () => {
        navigate("/discover")
    }

    const handleChange = (event) => {
        setShow(event.target.checked)

    }

    return (
        <>
            <Form.Group className="mb-3" id="is_donation">
                <Form.Label>Are you seeking donations?</Form.Label>
                <Form.Check
                    type="checkbox"
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