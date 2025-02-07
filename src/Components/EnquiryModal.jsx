import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBCheckbox } from 'mdb-react-ui-kit';


function EnquiryModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
        <Modal.Header closeButton>
          <Modal.Title className='text-center uppercase fw-bold'>Unverbindlich anfragen</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <MDBInput label="Vorname / Name*" className='mt-3' id="typeText" type="text" />

        <MDBInput label="Email input*" className='mt-3' id="typeEmail" type="email" />

        <MDBInput label="Telefon*" className='mt-3' id="typePhone" type="tel" />

        <MDBInput label="Price" className='mt-3' id="typeText" type="text" />
        <MDBInput label="Item name" className='mt-3' id="typeText" type="text" />

        <MDBCheckbox name='flexCheck' className='mt-2' value='' id='flexCheckDefault' label='Ich stimme den Datenschutzbedingungen und der Verarbeitung meiner Daten zu.' />




        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Senden</Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default EnquiryModal