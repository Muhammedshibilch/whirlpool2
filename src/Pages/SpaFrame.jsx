import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import SpaFrameCard from '../Components/SpaFrameCard';

function SpaFrame() {
  return (
    <div>
<div className="row">
    <div className="col-1"></div>

<div className="col-10">



<p className='px-3 mt-3'> Alle Kollektionen   /   Spa-Frame</p>  <hr />
<h3 className='uppercase fw-bold px-3'>Spa-Frame</h3>  <hr />





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
    <SpaFrameCard/>
    </div>
</div>

<div className="row mt-3">
    <div className="col text-center">

        <center><img src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/logo_spa-frame_480x480.jpg?v=1672752560" width={'180px'} alt="" /></center>

        <p className='fw-bold mt-5'>Spa-Frame: die einzigartige Whirlpool Teilversenkung made in Germany</p>

        <div className="ratio ratio-16x9 mt-3">
        <iframe 
          src="https://www.youtube.com/embed/uIU3TrEwGsY?si=8Fev0gSeP1bFoKvs" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
      </div>
        <p className='mt-5 uppercase fw-bold'>SpaFrame ist das einzigartige Steckkastensystem, das zugleich Stützwand und Rahmen <br /> für die Teilversenkung von Whirlpools bildet.</p>

        <ul className='mt-3'>
            <li>Ersetzt das Mauern oder Betonieren einer Stützwand.</li>
            <li>Macht den Bau von Holz- oder Stahlkonstrukten überflüssig.</li>
            <li>Ermöglicht die Einrahmung von Bodenbelagsplatten.</li>
            <li>Werkzeugloser Aufbau in weniger als 60 Minuten</li>
        </ul>


        <p className='mt-5 uppercase fw-bold'>PREISWERT: Schalungen, Mauern oder Stützwand um den Pool herum sowie Maß- <br /> Konstruktionen, um den Revisionsschacht zugänglich zu halten, entfallen.</p>
        <ul className='mt-3'>
            <li>GERINGER BAUAUFWAND: Loch ausheben, Stellfläche begradigen, SpaFrame in weniger als 60 Minuten aufbauen, Erde aufschütten - fertig!</li>
            <li>OHNE SPEZIALWERKZEUG: Für den Aufbau von SpaFrame sind weder Spezialwissen, noch Spezialwerkzeug nötig. </li>
            <li>MODULARE BAUWEISE: SpaFrame besteht aus steckbaren Kunststoffteilen. Im Set befinden sich Rahmenteile für den Außen- und Innenrahmen sowie Quer- und Verbindungsstücke.</li>
            <li>LEICHTES MATERIAL: Durch das leichte Kunststoffmaterial lässt sich SpaFrame einfach transportieren und tragen.</li>
            <li>HOHE STABILITÄT: Die modularen Steckteile sind mit einer Edelstahlschiene verbunden und so konstruiert, dass sie absolute Stabilität bieten - auch nach mehrmaligem Auf- und Abbau.</li>
        </ul>


<center><img src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/whirlpool_versenkung_480x480.jpg?v=1672750060" alt="" /></center>

<p className='mt-3'>Bei Interesse stehen wir Ihnen gerne zur Verfügung:  <br />
07306/9579060 oder per Email an: team@whirlpool-handel.de.</p>



    </div>
</div>




</div>


    <div className="col-1"></div>
</div>



    </div>
  )
}

export default SpaFrame