
import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import EnquiryModal from './EnquiryModal';

function WhirlpoolCard() {
  // Array containing the product details
  const products = [
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/9_8467167b-ec76-4bdb-a16a-a4fb9c312b5b_340x.jpg?v=1678656388',
      title: 'Pluto Outdoor Whirlpool',
      dimensions: '200 × 200 × 89cm',
      capacity: 5,
      price: 'Rs. 601,700.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/3_340x.jpg?v=1678656422',
      title: 'Jupiter "Plug and Play" Outdoor Whirlpool',
      dimensions: '200×200×87cm',
      capacity: 6,
      price: 'Rs. 601,800.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/WebseitenbilderWellis_1024x1024px_340x.jpg?v=1678656843',
      title: 'Mars Plug and Play Outdoor Whirlpool',
      dimensions: '213×160×75cm',
      capacity: 3,
      price: 'Rs. 638,900.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/Infinitas_Webseite1024x1024-5_340x.jpg?v=1729169808',
      title: 'Blueline 800 Outdoor Whirlpool',
      dimensions: '200×160×86cm',
      capacity: 3,
      price: 'Rs. 693,500.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/Infinitas_Webseite1024x1024_340x.jpg?v=1729154779',
      title: 'Blueline 500 Outdoor Whirlpool',
      dimensions: '200×200×86cm',
      capacity: 5,
      price: 'Rs.  739,800.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/WebseitenbilderWellis_1024x1024px_340x.jpg?v=1713681966',
      title: 'Firenze Life Outdoor Whirlpool',
      dimensions: '213×160×75cm',
      capacity: 3,
      price: 'Rs.  750,000.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/1_b47d429c-bfdd-4e6b-9150-fd6f6e7bc552_340x.jpg?v=1701948109',
      title: 'Budapest Life Deluxe Outdoor Whirlpool',
      dimensions: '200 × 200 × 89cm',
      capacity: 5,
      price: 'Rs. 767,600.00 '
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/2_01e61e33-765a-40d5-96c7-59a58b546510_340x.jpg?v=1701948320',
      title: 'Prague Life Deluxe Outdoor Whirlpool',
      dimensions: '200 × 200 × 89cm',
      capacity: 6,
      price: 'Rs.  767,600.00 '
    }
  ];

  return (
    <div className="row p-5">
      {products.map((product, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
          <MDBCard>
            <MDBCardImage src={product.image} alt={product.title} position="top" />
            <MDBCardBody>
              <MDBCardText>
                <h6 className="uppercase fw-bold">{product.title}</h6>
                <p>Maße: {product.dimensions}</p>
                <p>Personen: {product.capacity}</p>
                <h6 className="fw-bold">{product.price}</h6>
              </MDBCardText>
              <EnquiryModal />
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </div>
  );
}

export default WhirlpoolCard;
