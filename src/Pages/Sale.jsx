import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import WhirlpoolCard from '../Components/WhirlpoolCard';
import SwimCard from '../Components/SwimCard';

function Sale() {
  return (
    <div>


<p className='px-3'>Alle Kollektionen   /   Sale %</p>
<div className="row">
    <div className="col-12 p-2" id='salebg'>

      <h2 className='text-light p-5 uppercase'>Sale - Aktionsmodelle <br /> sofort verfügbar!</h2>
    </div>
</div>


<div className="features-container mt-3">
      <div className="feature-item">
        <img src="/advice.png" alt="Expert Advice" />
        <p>KOSTENLOSE <br /> FACHBERATUNG</p>
      </div>

      <div className="separator"></div>

      <div className="feature-item">
        <img src="/testbath.png" alt="Showroom" />
        <p>SHOWROOM <br /> MIT PROBEDADEN</p>
      </div>

      <div className="separator"></div>

      <div className="feature-item">
        <img src="/submersion.png" alt="Whirlpool" />
        <p>WHIRLPOOL <br /> TEILVERSENKUNG</p>
      </div>

      <div className="separator"></div>

      <div className="feature-item">
        <img src="/delivery.png" alt="Delivery" />
        <p>LIEFERUNG & <br /> AUFBAU</p>
      </div>
    </div>


    <div className="container p-3">
  <div className="row align-items-center">
    
    {/* Category List - Left Section */}
    <div className="col-lg-8 col-md-7 col-12">
     
    </div>

    {/* Dropdown - Right Section */}
    <div className="col-lg-4 col-md-5 col-12 text-md-end text-center mt-3 mt-md-0">
      <MDBDropdown>
        <MDBDropdownToggle className='btn btn-light border'>Select Item</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Vorgestellt</MDBDropdownItem>
          <MDBDropdownItem link>Pries: Niedrig bis Hoch</MDBDropdownItem>
          <MDBDropdownItem link>Pries: Hoch bis Niedrig</MDBDropdownItem>
          <MDBDropdownItem link>A-Z</MDBDropdownItem>
          <MDBDropdownItem link>Z-A</MDBDropdownItem>
          <MDBDropdownItem link>Älteste bis Neueste</MDBDropdownItem>
          <MDBDropdownItem link>Neueste bis Alteste</MDBDropdownItem>
          <MDBDropdownItem link>Beliebt</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>

  </div>
</div>


<div className="container">
  <div className="row">
     <WhirlpoolCard/>

    <SwimCard/>
  </div>
</div>

<div className="row">
    <div className="col-1"></div>

<div className="col-10 text-center">
    <p className='mt-3'>Aktionsmodelle und Aussteller für kurze Zeit reduziert!</p>
    <p>Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin und sprechen uns gerne auf Ihr Wunschmodell an.</p>
    <p className='mt-5'>Wellis Outdoor Whirlpools als Abverkaufsmodelle sofort verfügbar! Alle Whirlpools am Lager vorrätig! </p>
</div>

    <div className="col-1"></div>
</div>


        
    </div>
  )
}

export default Sale