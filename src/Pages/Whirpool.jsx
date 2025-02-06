import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import WhirlpoolCard from '../Components/WhirlpoolCard';

function Whirpool() {
  return (
    <div>


<p className='px-3'> Alle Kollektionen   /   Outdoor Whirlpools</p>
<div className="row">
    <div className="col-12 p-2" id='whirlpoolbg'>

      <h2 className='text-light p-5 uppercase'>Outdoor Whirlpools <br /> für den Garten</h2>
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
      <h6>Kategorie wählen:</h6>
      <ul className="list-inline d-flex px-5 flex-wrap">
        <li className="list-inline-item mx-2"><a href="">USSPA</a></li>
        <li className="list-inline-item mx-2"><a href="">Wellis</a></li>
        <li className="list-inline-item mx-2"><a href="">Artesian Spa</a></li>
        <li className="list-inline-item mx-2"><a href="">Villeroy & Bochfür</a></li>
        <li className="list-inline-item mx-2"><a href="">2-3 Personenfür</a></li>
        <li className="list-inline-item mx-2"><a href="">4-6 Personen</a></li>
      </ul>
    </div>

    {/* Dropdown - Right Section */}
    <div className="col-lg-4 col-md-5 col-12 text-md-end text-center mt-3 mt-md-0">
      <MDBDropdown>
        <MDBDropdownToggle className='btn btn-light'>Select Item</MDBDropdownToggle>
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
  </div>
</div>




    </div>
  )
}

export default Whirpool


  
