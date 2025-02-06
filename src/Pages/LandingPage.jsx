import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

function LandingPage() {
  return (
    <div className="container-fluid p-0">
      {/* Carousel Section */}
      <div className="row">
        <MDBCarousel showControls fade className="w-100">
          <MDBCarouselItem itemId={1}>
            <img 
              src='https://www.whirlpool-handel.de/cdn/shop/files/Webseitenbilder_Banner_Webseite_1024_x_1024_px_2000_x_900_px_-11_2560x.jpg?v=1738319477' 
              className='d-block w-100 img-fluid' 
              alt='...' 
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img 
              src='https://www.whirlpool-handel.de/cdn/shop/files/19_2560x.jpg?v=1678718157' 
              className='d-block w-100 img-fluid' 
              alt='...' 
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img 
              src='https://www.whirlpool-handel.de/cdn/shop/files/18_2560x.jpg?v=1678717942' 
              className='d-block w-100 img-fluid' 
              alt='...' 
            />
          </MDBCarouselItem>
        </MDBCarousel>
      </div>

      {/* Title Section */}
      <div className="row text-center mt-4">
        <div className="col-12">
          <h3 className="display-6 display-md-4 display-lg-3 mt-5" style={{fontSize:'30px'}}>
            WHIRPOOLS, SWIMSPAS, SAUNEN IN NÜRNBERG & ULM
          </h3>
<p className='mt-3' style={{fontSize:'20px'}}>Mit den Whirlpools, Swim Spas und Saunen von WSG Whirlpool Handel wird Ihr Wunsch nach Entspannung und Erholung erfüllt. Gönnen Sie <br />
sich eine Auszeit und genießen Sie wertvolle Momente zu zweit, mit der Familie oder mit Freunden. Unsere breite Palette bietet eine Vielzahl <br />
von Whirlpool-Modellen, gefragte Swim Spas und attraktive Gartensaunen. Setzen Sie mit unseren Wellness-Produkten stilvolle Akzente und <br />
gestalten Sie Ihren Garten zu Ihrer eigenen Wellnessoase.</p>

        </div>
      </div>


      <div className="features-container">
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

    <div className="container">
      <div className="row justify-content-center px-3 px-md-5">
        <div className="col-12 col-sm-6 custom-gap">
          <img className="gallery-img" src="https://www.whirlpool-handel.de/cdn/shop/files/12_1100x.jpg?v=1678715281" alt="Gallery 1" />
        </div>
        <div className="col-12 col-sm-6">
          <img className="gallery-img" src="https://www.whirlpool-handel.de/cdn/shop/files/15_b69a9713-6cc0-4a8f-a3bf-4f886f609dd3_1100x.jpg?v=1729250117" alt="Gallery 2" />
        </div>
      </div>

      <div className="row justify-content-center px-3 px-md-5 mt-3">
        <div className="col-12 col-sm-6 custom-gap">
          <img className="gallery-img" src="https://www.whirlpool-handel.de/cdn/shop/files/13_1100x.jpg?v=1678715442" alt="Gallery 3" />
        </div>
        <div className="col-12 col-sm-6">
          <img className="gallery-img" src="https://www.whirlpool-handel.de/cdn/shop/files/15_1100x.jpg?v=1678715833" alt="Gallery 4" />
        </div>
      </div>
    </div>

    <div className="row text-center mt-4">
        <div className="col-12">
          <h3 className="display-6 display-md-4 display-lg-3 mt-5" style={{fontSize:'30px'}}>
          VERWIRKLICHEN SIE IHRE WHITLPOOL-TRÄUME
          </h3>
<p className='mt-3' style={{fontSize:'20px'}}>Erfüllen Sie sich den Traum vom eigenen Whirlpool, Swim Spa oder einer Sauna mit den hochwertigen Produkten von WSG Whirlpool <br />
Handel. Wir stehen Ihnen zur Seite und helfen Ihnen, das perfekte Wellnessprodukt für Ihre Bedürfnisse zu finden.</p>

        </div>
      </div>




      <div className="row mt-3">
  <div className="col-12">
    <div className="ratio ratio-16x9">
      <iframe 
        src="https://www.youtube.com/embed/ssEUGl0VLp8?si=hisubqUiPacJjiAy" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>


<div className="row text-center mt-4">
        <div className="col-12">
          <h3 className="display-6 display-md-4 display-lg-3 mt-5" style={{fontSize:'30px'}}>
          EXKLUSIVE HERSTELLER

          </h3>
<p className='mt-3' style={{fontSize:'20px'}}>Bei WSG finden Sie nur ausgewählte Premium Brands</p>

        </div>
      </div>



      <div className="container p-3">
      <div className="row justify-content-center px-3 px-md-5">
        <div className="col-12 col-sm-6 custom-gap">
          <img className="gallery-img" src="https://www.whirlpool-handel.de/cdn/shop/files/5_91c8ffce-b9ee-4530-95fb-2ca1fb396230_1100x.jpg?v=1679492276" alt="Gallery 1" />
        </div>
        <div className="col-12 col-sm-6">
          <img className="gallery-img" src="https://www.whirlpool-handel.de/cdn/shop/files/7_f55bed8d-9794-4078-a324-f03c63ad54be_1100x.jpg?v=1679492315" alt="Gallery 2" />
        </div>
      </div>

      <div className="row justify-content-center px-3 px-md-5 mt-3">
        <div className="col-12 col-sm-6 custom-gap">
          <img className="gallery-img" src="https://www.whirlpool-handel.de/cdn/shop/files/2024_Webseite_1024_x_1024_px_-2_1100x.jpg?v=1729251587" alt="Gallery 3" />
        </div>
        <div className="col-12 col-sm-6">
          <img className="gallery-img" src="https://www.whirlpool-handel.de/cdn/shop/files/6_765e8482-86c1-49a6-9cbe-4a758e272caa_1100x.jpg?v=1679492231" alt="Gallery 4" />
        </div>
      </div>
    </div>



    <div className="row text-center mt-4">
        <div className="col-12">
          <h3 className="display-6 display-md-4 display-lg-3 mt-5" style={{fontSize:'30px'}}>
          BENÖTIGEN SIE HILFE BEI DER SUCHE?

          </h3>
<p className='mt-3' style={{fontSize:'20px'}}>Wir beraten Sie gerne persönlich in einem unserer Showrooms.</p>

        </div>
      </div>


      <div className="row mt-5">
  <div className="col-12 d-flex justify-content-center align-items-center" id="appointment">
    <div className="text-center text-light">
      <h5 className="mt-5">BERATUNGSTERMIN</h5>
      <p style={{fontWeight:'900'}}>Wir beraten Sie gerne persönlich in einem unserer Showrooms</p>
      <button className="bg-blue-900 text-white px-4 py-2">Termin vereinbaren</button>
    </div>
  </div>
</div>

    </div>
  );
}

export default LandingPage;











