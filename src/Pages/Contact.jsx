import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div>
<div className="container">
  <div className="row">
    <h3 className="text-center fw-bold text-uppercase mb-5">Kontakt</h3>
    <div className="col-md-1"></div>
    <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
      <h5 className="fw-bold text-uppercase">Roth / Nürnberg</h5>
      <img 
        src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Whirlpool-Showroom-Roth_600x600.jpg?v=1676976908" 
        alt="Showroom Roth" 
        width={'100%'}
        className="img-fluid"
      />
      <p className="mt-3">
        WSG GmbH Showroom Roth <br />
        Ansprechpartner: Stefan Grabinger <br />
        Lösmühle 2g, 91154 Roth (Routenplaner) <br />
        +49 91292957220 <br />
        team@whirlpool-handel.de <br />
        Montag - Freitag 09:00 - 18:00 <br />
        Samstag 10:00 - 14:00 Uhr
      </p>
      <button className="bg-yellow-600 w-100 text-light p-3">Termin vereinbaren</button>
    </div>

    <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
      <h5 className="fw-bold text-uppercase">Vöhringen / Ulm</h5>
      <img 
        src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Whirlpool-Showroom-Voehringen_600x600.jpg?v=1676976951" 
        alt="Showroom Vöhringen" 
        width={'100%'}
        className="img-fluid"
      />
      <p className="mt-3">
        WSG GmbH Showroom Vöhringen <br />
        Ansprechpartner: Christian Winkler <br />
        Untere Hauptstr. 21, 89269 Vöhringen (Routenplaner) <br />
        +49 7306 9579060 <br />
        team@whirlpool-handel.de <br />
        Montag - Freitag 09:00 - 18:00 <br />
        Samstag 10:00 - 14:00 Uhr
      </p>
      <button className="bg-yellow-600 w-100 text-light p-3">Termin vereinbaren</button>
    </div>
  </div>

  <div className="row mt-5">
    <div className="col-12">
      <h3 className="fw-bold text-uppercase mt-5 text-center">Termin Vereinbaren</h3>
    </div>
    <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
      <MDBInput className="mt-3" label="Name (PFLICHTFELD)" id="typeText" type="text" />
      <MDBInput className="mt-3" label="E-Mail (PFLICHTFELD)" id="typeEmail" type="email" />
      <MDBInput className="mt-3" label="Telefonnummer (PFLICHTFELD)" id="typePhone" type="tel" />
      <MDBTextArea className="mt-3" label="Nachricht" id="textAreaExample" rows="4" />
      <button className="bg-sky-900 p-2 text-light w-100 mt-3">Senden</button>
    </div>
  </div>
</div>




    </div>
  )
}

export default Contact