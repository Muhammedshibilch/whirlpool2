
import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

function Service() {
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-12 col-md-2"></div>

        <div className="col-12 col-md-8">
          <p className="mt-2">WSG Blog / Reparatur, Wartung & Service</p>
          <hr />

          <MDBCarousel showControls showIndicators>
            <MDBCarouselItem className="text-center" itemId={1}>
              <p style={{ fontStyle: 'italic' }}>März 21, 2023</p>
              <h3 className="uppercase fw-bold">Reparatur, Wartung & Service</h3>

              <img
                src="https://www.whirlpool-handel.de/cdn/shop/articles/4_1024x.jpg?v=1679410061"
                className="d-block w-100"
                alt="..."
              />

              <h1 className="fw-bold mt-3">Wirlpool Wartung vom Fachmann</h1>

              <p className="p-3">
                Jederzeit rundum sichere und sorglose Nutzung Ihres Whirlpools. Ein Whirlpool besteht aus bis zu
                knapp 300 Einzelteilen. Die Zirkulationspumpe ist täglich im Betrieb und wälzt mehrere hundert
                Liter Wasser in Ihrem Spa um. Ob LED Beleuchtung, Massagepumpen oder Durchlauferhitzer. Ihr Whirlpool
                muss ganz schön was leisten. Um den dauerhaften Spaß und Erholungsfaktor zu garantieren, empfehlen wir
                eine regelmäßige Wartung.
              </p>

              <div>
                <center>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/41bab9dc-e4b9-4e7d-b3b3-7dd6060a38b7_480x480.jpg?v=1672672552"
                    alt=""
                  />
                  <img
                    className="mt-4"
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/20220708_114350_480x480.jpg?v=1679488530"
                    alt=""
                  />
                </center>
              </div>

              <h6 className="fw-bold mt-5">
                Wir bieten folgenden Service für jeden Hersteller und jedes Modell eines Whirlpools und SwimSpas an:
              </h6>

              <ul className="mt-3">
                <li>- Wartung</li>
                <li>- Reparatur</li>
                <li>- Dichtigkeitsprüfung</li>
                <li>- Einbau zusätzlicher Isolierung</li>
                <li>- Wärmetauscher Einbau</li>
                <li>- Wärmepumpen Einbau</li>
                <li>- Dosieranlage</li>
                <li>- Einbau eines Soundsystems</li>
                <li>- Service (Polierung und Wannenaufbereitung)</li>
                <li>- Winterfestpaket</li>
                <li>- Inbetriebnahme und Anschluss der Stromzuleitung</li>
                <li>- Wasserpflege und Einweisung in Ihren Whirlpool</li>
                <li>- Installation Coverlifter</li>
                <li>- Einbau von Spa-Frame zur Teilversenkung Ihres Whirlpools</li>
              </ul>

              <div>
                <center>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/ef699178-4127-4753-a635-3ff5d0156cd8_480x480.jpg?v=1679489947"
                    alt=""
                  />
                </center>
              </div>

              <h6 className="fw-bold mt-3 mb-3">
                Bei Interesse erreichen Sie unser Technik Team unter 07306/9579061 oder per Email an:{' '}
                <br /> technik@whirlpool-handel.de.
              </h6>

              <div>
                <center>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/2708cbd7-ac7b-4d60-8b62-623c97671712_480x480.jpg?v=1672672572"
                    alt=""
                  />
                </center>
              </div>

              <p className="mt-5">— Christian Hospodarsch & Stefan Grabinger</p>
              <p style={{ fontStyle: 'italic' }}>
                Tagged: boden, dosieranlage, handwerk, jacuzzi kaufen, outdoor whirlpool, reparatur, service,
                teilversenkt, versenkt, wärmepumpe, wärmetauscher, wartung, whirlpool, whirlpool anschaffungskosten,
                whirlpool guide, Whirlpool kaufen, Whirlpool kosten, whirlpool nürnberg, whirlpool preis, whirlpool
                ulm, wsg
              </p>
            </MDBCarouselItem>

            {/* Second Carousel Item */}
            <MDBCarouselItem className="text-center" itemId={2}>
              <p style={{ fontStyle: 'italic' }}>März 21, 2023</p>
              <h3 className="uppercase fw-bold">Was ist ein SwimSpa?</h3>

              <img
                src="https://www.whirlpool-handel.de/cdn/shop/articles/6_9f316e37-9b57-4846-9bb9-ca9bce138cbc_1024x.jpg?v=1679410964"
                className="d-block w-100"
                alt="..."
              />

              <h6 className="fw-bold mt-5">Swim Spa:</h6>
              <h6 className="fw-bold mt-3">Der ganzjährige Badespaß für die ganze Familie!</h6>

              <p className="p-3">
                Egal ob Sommer oder Winter – ein Swim Spa bietet durch die stromsparende Umwälzpumpe das ganze Jahr
                über perfekte Bedingungen für sportliches Schwimmen oder pure Entspannung. Im Gegensatz zu den
                klassischen Pools, die oft mit hohem Bauaufwand und noch höheren Kosten verbunden sind, passt sich der
                Swim Spa mit unterschiedlichen Längen und Ausführungen jedem Budget an.
              </p>

              <div>
                <center>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Bildschirm_foto2023-03-14um11.03.18_480x480.jpg?v=1678788215"
                    alt=""
                  />
                </center>
              </div>

              <h6 className="fw-bold mt-5">Der Alleskönner:</h6>
              <h6 className="fw-bold mt-3">ein Swim Spa vereint Pool, Fitness und Spa</h6>
              <p className="p-3">
                Das geschlossene System des Swim Spas mit Becken, Technik, Heizung, Düsen, Beleuchtung, Desinfektion,
                Abdeckung und integrierter Gegenstromanlage macht ihn zu einem wahren Alleskönner. Dabei kann er auch
                noch optisch punkten. Denn egal ob einfach aufgestellt, teil- oder vollversenkt, der Swim Spa macht mit
                seinem edlen Gehäuse immer eine gute Figur und spart ganz nebenbei noch Baukosten.
              </p>

              <div>
                <center>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/WELLIS_RioGrande_up_with_water_480x480.jpg?v=1678802843"
                    alt=""
                  />
                </center>
              </div>

              <p className="mt-4">Entdecken Sie jetzt unsere Modelle und vereinbaren Sie einen Termin zum Probeschwimmen in
                unseren Ausstellungen.</p>

              <p>Wir freuen uns auf Ihre Kontaktaufnahme. </p>

              <p>— Christian Hospodarsch & Stefan Grabinger</p>

              <p style={{ fontStyle: 'italic' }}>
                Tagged: artesian, aufbau, Blog, boden, dosieranlage, gegenstromanlage, handwerk, kaufen, lieferung,
                outdoor whirlpool, pool, pool versenkt, schwim, schwimmspa, spa frame, swimspa, Swimspa bayern, swimspa
                kaufen, Swimspa versenkt, versenkt, wärmepumpe, wärmetauscher, wartung, wellis, whirlpool ulm
              </p>
            </MDBCarouselItem>

            {/* Third Carousel Item */}
            <MDBCarouselItem className="text-center" itemId={3}>
              <p style={{ fontStyle: 'italic' }}>März 21, 2023</p>
              <h3 className="uppercase fw-bold">Lieferung, Aufbau und Inbetriebnahme</h3>

              <img
                src="https://www.whirlpool-handel.de/cdn/shop/articles/5_1024x.jpg?v=1679412326"
                className="d-block w-100"
                alt="..."
              />

              <h6 className="fw-bold mt-5">
                Sie haben sich einen Whirlpool geleistet und freuen sich darauf, doch wie kommt der Pool an die Stelle,
                die dafür vorgesehen ist? Viele unserer Kunden warten mit Spannung auf den Tag der Anlieferung.
              </h6>

              <h6 className="fw-bold">Wir haben hier für jeden Anlass die perfekte Lösung für Ihren Traum Whirlpool:</h6>

              <h6 className="mt-5 fw-bold">Mit dem Kran</h6>
              <h6 className="fw-bold p-3">
                Der Whirlpool muss über das Haus gehoben werden oder soll in einen Lichtschacht gesenkt werden? Kein
                Problem. Wir übernehmen auf Kundenwunsch die Organisation, Disposition und Durchführung mit dem
                Kranunternehmer vor Ort und bieten hier den Komplettservice an.
              </h6>

              <div>
                <center>
                  <img
                    className="mt-3"
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/IMG_20200821_093753_480x480.jpg?v=1679411223"
                    alt=""
                  />
                </center>
              </div>

              <h6 className="fw-bold mt-5">Mit einem Hänger</h6>
              <h6 className="fw-bold">
                Wir fahren jeden Whirlpool und SwimSpa mit unseren eigenen Anhängern zum Kunden. So garantieren wir
                eine pünktliche Ankunft und können Ihnen den besten Service versichern. Sie benötigen Zubehör oder
                spezielles Pflegemittel? Kein Problem. Wir bringen es mit.
              </h6>

              <div>
                <center>
                  <img
                    className="mt-5 mb-"
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Haenger_480x480.jpg?v=1679411584"
                    alt=""
                  />
                </center>
              </div>

              <h6 className="mt-5 fw-bold">Mit dem Spa Car</h6>
              <h6 className="mt-3 fw-bold">
                Mit unseren Spa Cars können wir den gewünschten Whirlpool durch so ziemlich jedes Gartentürchen fahren
                und stellen Ihnen ohne zusätzliche Unterstützung Ihren Traumpool am Wunschort auf. Wir benötigen hierfür
                lediglich einen Meter Durchfahrtsbreite. Durch die 4 Vollgummi überzogenen Transporträder wird auch Ihr
                Garten und Terrassenbelag nicht beansprucht.
              </h6>

              <div>
                <center>
                  <img
                    className="mt-5"
                    src="https://cdn.shopify.com/s/files/1/0301/3043/8280/files/Foto_30.03.20_10_35_34_large.jpg?v=1589713525"
                    alt=""
                  />
                </center>
              </div>

              <p className="p-3">
                Sobald der Whirlpool oder SwimSpa am gewünschten Platz steht, wird er ausgerichtet und in Position
                gebracht. Wir nehmen dann den Stromanschluss vor, machen Sie Schritt für Schritt mit dem Thema
                Wasserpflege vertraut und stellen Ihnen Ihr neues Schmuckstück vor. So können Sie anschließende ohne
                Arbeitsaufwand in Ihrem Whirlpool Baden und den Feierabend genießen.
              </p>
              <p>
                Sie wollen wissen, wie wir es in Ihrer neuen Wellness Oase lösen können?
              </p>
              <p>Dann nehmen Sie mit uns Kontakt auf und wir planen Ihre Aufstellung natürlich unverbindlich und kostenlos.
              Jetzt Anfrage starten.</p>

              <p className="mt-5">— Christian Hospodarsch & Stefan Grabinger</p>

              <p style={{ fontStyle: 'italic' }}>
                Tagged: aufbau, boden, handwerk, Inbetriebnahme, kaufen, kran, lieferung, outdoor whirlpool, pool,
                pool versenkt, reparatur, swimspa, Swimspa bayern, teilversenkt, versenkt, whirlpool, whirlpool
                anschaffungskosten, whirlpool guide, Whirlpool kaufen, Whirlpool kosten, whirlpool laufende kosten,
                whirlpool nürnberg, whirlpool preis, whirlpool ratgeber, whirlpool ulm, wsg
              </p>
            </MDBCarouselItem>
          </MDBCarousel>
        </div>

        <div className="col-12 col-md-2"></div>
      </div>

    </div>
  );
}

export default Service;
