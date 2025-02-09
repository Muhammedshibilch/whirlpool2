import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
  } from 'mdb-react-ui-kit';
import EnquiryModal from './EnquiryModal';
  
function SwimCard() {


const products = [
   {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/9_8467167b-ec76-4bdb-a16a-a4fb9c312b5b_340x.jpg?v=1678656388',
      title: 'Pluto Outdoor Whirlpool',
      dimensions: '200 × 200 × 89cm',
      capacity: 5,
      price: 'EUR 6,618.70'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/3_340x.jpg?v=1678656422',
      title: 'Jupiter "Plug and Play" Outdoor Whirlpool',
      dimensions: '200×200×87cm',
      capacity: 6,
      price: 'EUR 6,619.80'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/WebseitenbilderWellis_1024x1024px_340x.jpg?v=1678656843',
      title: 'Mars Plug and Play Outdoor Whirlpool',
      dimensions: '213×160×75cm',
      capacity: 3,
      price: 'EUR 7,028.90'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/Infinitas_Webseite1024x1024-5_340x.jpg?v=1729169808',
      title: 'Blueline 800 Outdoor Whirlpool',
      dimensions: '200×160×86cm',
      capacity: 3,
      price: 'EUR 7,628.50'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/Infinitas_Webseite1024x1024_340x.jpg?v=1729154779',
      title: 'Blueline 500 Outdoor Whirlpool',
      dimensions: '200×200×86cm',
      capacity: 5,
      price: 'EUR 8,137.80'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/WebseitenbilderWellis_1024x1024px_340x.jpg?v=1713681966',
      title: 'Firenze Life Outdoor Whirlpool',
      dimensions: '213×160×75cm',
      capacity: 3,
      price: 'EUR 8,250.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/1_b47d429c-bfdd-4e6b-9150-fd6f6e7bc552_340x.jpg?v=1701948109',
      title: 'Budapest Life Deluxe Outdoor Whirlpool',
      dimensions: '200 × 200 × 89cm',
      capacity: 5,
      price: 'EUR 8,443.60'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/2_01e61e33-765a-40d5-96c7-59a58b546510_340x.jpg?v=1701948320',
      title: 'Prague Life Deluxe Outdoor Whirlpool',
      dimensions: '200 × 200 × 89cm',
      capacity: 6,
      price: 'EUR 8,443.60'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/files/Riverjet_340x.jpg?v=1718177028',
      title: 'Danube Riverjet',
      dimensions: '450×235×150 cm',
      price: 'EUR 20,114.60'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/3_b5b18bd9-8a12-4dc1-8dc0-cd51e2d933ea_340x.jpg?v=1678710688',
      title: 'EP14 S',
      dimensions: '429x231x137 cm',
      price: 'EUR 20,368.70'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/5_a3ebddf5-dd82-42a9-bb3b-4ebedd7247aa_340x.jpg?v=1678710470',
      title: 'EP12',
      dimensions: '366x231x132 cm',
      price: 'EUR 20,471.00'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/2_0e5dc416-5196-42b5-820e-d8bfa0518fc1_340x.jpg?v=1678710517',
      title: 'EP14',
      dimensions: '427x231x132 cm',
      price: 'EUR 24,443.10'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/11_85228129-bb07-426b-9359-0dc98c96e71f_340x.jpg?v=1678711750',
      title: 'Danube W-Flow',
      dimensions: '450×235×150 cm',
      price: 'EUR 25,450.70'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/1_f20271ac-011f-4b54-822b-1d8eee5c6a95_340x.jpg?v=1678710735',
      title: 'EP15',
      dimensions: '457x231x152 cm',
      price: 'EUR 25,460.60'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/7_e0b1cfbd-a2d4-4d9f-8908-99aaada18c89_340x.jpg?v=1678711818',
      title: 'Amazon W-Flow',
      dimensions: '550×235×150 cm',
      price: 'EUR 29,525.10'
    },
    {
      image: 'https://www.whirlpool-handel.de/cdn/shop/products/9_5010f939-43e2-41eb-b04f-07fdd387c3b7_340x.jpg?v=1678712089',
      title: 'Rio Grande W-Flow',
      dimensions: '600×235×150 cm',
      price: 'EUR 37,692.60'
    }
]


  return (
    <div>

<div className="row p-5">
  
  {
    products.map((product, index)=>(
      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
    <MDBCard>
      <MDBCardImage src={product.image} alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
        <h6 className="uppercase fw-bold">{product.title}</h6>
                <p>Maße: {product.dimensions}</p>
                <h6 className="fw-bold">{product.price}</h6>

        </MDBCardText>
        <EnquiryModal itemName={product.title} itemPrice={product.price} />
        </MDBCardBody>
    </MDBCard>
  </div>
    ))
  }

</div>


    </div>
  )
}

export default SwimCard
