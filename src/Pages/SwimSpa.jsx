import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import SwimCard from '../Components/SwimCard';


function SwimSpa() {

  return (
    <div>



<p className='px-3'>Alle Kollektionen   /   SwimSpa</p>
<div className="row">
    <div className="col-12 p-2" id='swimspabg'>
    <h2 className='text-light p-5 uppercase'>SwimSpa: der All in One <br /> Pool für das ganze <br /> Jahr</h2>
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
        <li className="list-inline-item mx-2"><a href="">Swim Spa by USSPA</a></li>
        <li className="list-inline-item mx-2"><a href="">Wellis SwimSpa</a></li>
        <li className="list-inline-item mx-2"><a href="">Artesian Spa SwimSpa</a></li>
        <li className="list-inline-item mx-2"><a href="">SwimSpa Zubehör</a></li>
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
<SwimCard/>
  </div>
</div>


<div className="row">
  <div className="col-1"></div>

<div className="col-10 text-center">

  <h5 className='fw-bold'>WAS IST EIN SWIM SPA?</h5>
  <h6 className='fw-bold'>Swim Spa: Der ganzjährige Badespaß für die ganze Familie!</h6>
  <p className='mt-3'>
  Egal ob Sommer oder Winter – ein Swim Spa bietet durch die stromsparende Umwälzpumpe das ganze Jahr über perfekte Bedingungen für sportliches Schwimmen oder pure Entspannung. Im Gegensatz zu den klassischen Pools, die oft mit hohem Bauaufwand und noch höheren Kosten verbunden sind, passt sich der Swim Spa mit unterschiedlichen Längen und Ausführungen jedem Budget an.
  </p>
  

<center>
<img className='p-4' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto2023-03-14um11.03.18_480x480.jpg?v=1678788215" alt="" />

  </center>


  <h6 className='fw-bold mt-5'>Der Alleskönner: ein Swim Spa vereint Pool, Fitness und Spa</h6>
  <p className='mt-3'>
  Das geschlossene System des Swim Spas mit Becken, Technik, Heizung, Düsen, Beleuchtung, Desinfektion, Abdeckung und integrierter Gegenstromanlage macht ihn zu einem wahren Alleskönner. Dabei kann er auch noch optisch punkten. Denn egal ob einfach aufgestellt, teil- oder vollversenkt, der Swim Spa macht mit seinem edlen Gehäuse immer eine gute Figur und spart ganz nebenbei noch Baukosten.

</p>


<center>
<img className='p-4' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/USSPA_1035-tisk_480x480.jpg?v=1678788341" alt="" />

  </center>
  

  <h6 className='fw-bold mt-5'>GANZJÄHRIG SCHWIMMEN</h6>
  <p className='mt-3'>
  Sehen Sie sich selbst als jemanden, der ganz genau weis, was er will? Sind Sport und ein aktiver Lebensstill eine Priorität für Sie? Falls ja, werden in unserem warmern Swim Spa Ihre Träume wahr. Eine Gegenstromanlage, um Sie in perfekte Form zu bringen, ausreichend Platz zum schwimmen und Hydrotherapie oder Wasser-Aerobic. Eine Wassertemperatur genau auf Ihre Bedürfnisse angepasst. Abkühlung im Sommer, im Winter kann das Wasser bei einer Temperatur bis zu 38 °C genossen werden. Ein Swim Spa ist ideal als Outdoor-Spa, in dem Sie das ganze Jahr über ein Bad genießen können. Temperaturen unter Null sind keine Thema. Mit einem Swim Spa werden Sie nicht Sklave Ihres Pools, sondern ein begeisterter Nutzer.
</p>


<h2 className='fw-bold uppercase mt-5'>Semi Inground</h2>
<h5 className='fw-bold uppercase mt-3'>die teilversenkte Variante ohne Wartungsschacht</h5>
  <h6 className='fw-bold mt-3'>Sparen Sie Baukosten und Zeit!</h6>
  <p className='mt-3'>
  Ohne kostspielige Bauarbeiten und Baukosten wird Ihr Swim Spa einfach und schnell teilweise im Boden versenkt. Dabei ermöglicht die formstabile Grundkonstruktion eine Vielfalt an Installations- und Gestaltungsmöglichkeiten. Schalungen und Stützbauten sind bei dieser Einbauweise nicht notwendig.  </p>


<ul>
  <li>Einfacher Einstieg durch niedrige Höhe</li>
  <li>Ästhetische Integration in Ihre Gartenanlage</li>
  <li>Schneller Zugang zur Technik und allen Komponenten</li>
</ul>




<center>
<img className='p-4' src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirmfoto_2020-12-02_um_22.12.25_480x480.jpg?v=1606943566" alt="" />

  </center>



  </div>

  <div className="col-1"></div>
</div>




    </div>
  )
}

export default SwimSpa