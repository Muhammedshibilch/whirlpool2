import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';

function EnquiryModal({ itemName, itemPrice }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      phone,
      itemName,
      itemPrice,
      consent
    };

    try {
      const response = await axios.post('https://cardealers-cxu7.onrender.com/client/enquiry3', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        alert('Enquiry submitted successfully!');
        handleClose();
      } else {
        alert('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Angebot anfordern
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title className='text-center uppercase fw-bold'>Unverbindlich anfragen</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MDBInput
              label="Vorname / Name*"
              className='mt-3'
              id="typeText"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <MDBInput
              label="Email input*"
              className='mt-3'
              id="typeEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              label="Telefon*"
              className='mt-3'
              id="typePhone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <MDBInput
              label="Price"
              className='mt-3'
              id="typeText"
              type="text"
              value={itemPrice}
              readOnly
            />
            <MDBInput
              label="Item name"
              className='mt-3'
              id="typeText"
              type="text"
              value={itemName}
              readOnly
            />
            <MDBCheckbox
              name='flexCheck'
              className='mt-2'
              value={consent}
              onChange={(e) => setConsent(e.target.checked)}
              id='flexCheckDefault'
              label='Ich stimme den Datenschutzbedingungen und der Verarbeitung meiner Daten zu.'
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">Senden</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default EnquiryModal;
