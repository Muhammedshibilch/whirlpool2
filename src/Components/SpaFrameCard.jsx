import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import EnquiryModal from './EnquiryModal';


function SpaFrameCard() {
  const products = [
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/KopievonWebseitenbilder_1024x1024px_-2_340x.jpg?v=1682423567',
      title: 'Einbaurahmen A1 180-205cm',
      price: '$323,300.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/KopievonWebseitenbilder_1024x1024px_-2_340x.jpg?v=1682423567',
      title: 'Einbaurahmen A2 206-225cm',
      price: '$341,800.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/KopievonWebseitenbilder_1024x1024px_-2_340x.jpg?v=1682423567',
      title: 'Einbaurahmen A3 226-240cm',
      price: '$360,200.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/KopievonWebseitenbilder_1024x1024px_-2_340x.jpg?v=1682423567',
      title: 'Einbaurahmen A4 Sondergröße',
      price: '$.00'
    },
  ];

  return (
    <div className="row p-5">
      {products.map((product, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
          <MDBCard>
            <MDBCardImage src={product.image} alt="..." position="top" />
            <MDBCardBody>
              <MDBCardText>
                <h6 className="uppercase fw-bold">{product.title}</h6>
                <h6 className="fw-bold">{product.price}</h6>
              </MDBCardText>
              <EnquiryModal itemName={product.title} itemPrice={product.price} />
              </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </div>
  );
}

export default SpaFrameCard;
