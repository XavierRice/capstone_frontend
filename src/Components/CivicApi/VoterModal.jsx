import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import VoterTools from './VoterTools'
import CivicInfo from './CivicInfo';

const VoterModal = () => {
    const [userResponse, setUserResponse] = useState(null);
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const handleYes = () => {
        setUserResponse('yes');
        handleClose();
    };
    const handleNo = () => {
        setUserResponse('no');
        handleClose();
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                     Are you Registered to Vote!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>A Powerful Impact</h4>
                    <p>
                    At Impactify, we champion voting as a key tool for change. Every vote shapes our future, so we wanna know: Are you registered to vote? Whether you need to register or are already registered and seeking to connect with local officials, we've got the resources to help you make an impact.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleYes}>
                        Yes
                    </Button>
                    <Button variant="secondary" onClick={handleNo}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
            {userResponse === 'yes' && <CivicInfo />}
            {/* {userResponse === 'no' && <VoterTools />} */}
        </>
    );
};

export default VoterModal;
