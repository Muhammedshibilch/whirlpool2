import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
function CubePools() {
  return (
    <div>


<p className='px-3'> Alle Kollektionen   /     CubePools</p>
<div className="row">
    <div className="col-12 p-5" id='cubepoolsbg'>

      <h2 className='text-light p-5 uppercase mt-5'>CubePools</h2>
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
     <center className='mt-5'><h6>Diese Kollektion enthält leider keine Produkte.</h6></center>
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


<div className="row">
  <div className="col-1"></div>


<div className="col-10 text-center">
<center>
  <img src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto_2024-05-05_um_13.23.10.jpg?v=1714908292" alt="" />
</center>


<h3 className='uppercase fw-bold mt-5'>Cubepools - setzen Sie auf Qualität!</h3>
<p className='uppercase fw-bold mt-3'>Cubepools sind europaweit führend im Bau von Schwimmbädern aus Seecontainern. Jeder Containerpool steht für erstklassige Qualität und Langlebigkeit, die selbst den anspruchsvollsten Kunden gerecht wird. Darüber hinaus bestechen sie durch Mobilität, eine schnelle Montage und einem Minimum an Baumassnahmen und Zusatzkosten. Der perfekte Pool für Ihren Garten.</p>

<center><img className='p-5' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto_2024-05-05_um_13.20.09.jpg?v=1714908047" alt="" />
</center>



<p className='uppercase fw-bold '>Die Pools können ebenerdig stehen, teilweise und komplett eingelassen werden. Wählbar in allen RAL Farbtönen, 6 Farben für die Innenfolie und 3 WPC Farben für das Pooldeck. Lieferbar mit Gegenstromanlage, Salzanlage und Poolfenster.
</p>


<center>
<img className='p-5' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto_2024-05-05_um_13.23.43.jpg?v=1714908337" alt="" />
  <img className='p-5' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto_2024-05-05_um_13.11.25.jpg?v=1714907503" alt="" />

</center>

<p>Zahlreiche Varianten ermöglichen es Ihnen, den Pool praktisch an jedes Gelände und Bedürfnisanzupassen. Hier einige Beispiele.

</p>


<center><img className='p-5' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto_2024-05-05_um_12.47.10.jpg?v=1714906296" alt="" /></center>


<p>Wir freuen uns auf Ihre Kontaktaufnahme und stellen Ihnen ihren Wunschpool individuell zusammen.</p>

<center>
  <img className='p-5' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto_2024-05-05_um_13.03.54.jpg?v=1714907763" alt="" />
  <img src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto_2024-05-05_um_13.10.08.jpg?v=1714907426" width={'90%'} alt="" />
  <img className='mt-3' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/21303.jpg?v=1714906871" width={'90%'} alt="" />
  <img className='mt-3' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto_2024-05-05_um_13.19.41.jpg?v=1714908159" width={'90%'} alt="" />
  </center>


</div>


  <div className="col-1"></div>
</div>




    </div>
  )
}

export default CubePools