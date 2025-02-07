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
    image:'https://www.whirlpool-handel.de/cdn/shop/files/Riverjet_340x.jpg?v=1718177028',
    title:'Danube Riverjet',
    dimensions: '450×235×150 cm',
    price: 'Rs. 1,828,600.00'
  },
  {
    image:'https://www.whirlpool-handel.de/cdn/shop/products/3_b5b18bd9-8a12-4dc1-8dc0-cd51e2d933ea_340x.jpg?v=1678710688',
    title:'EP14 S',
    dimensions: '429x231x137 cm',
    price: 'Rs. 1,851,700.00'
  },
  {
    image: "https://www.whirlpool-handel.de/cdn/shop/products/5_a3ebddf5-dd82-42a9-bb3b-4ebedd7247aa_340x.jpg?v=1678710470",
    title: 'EP12',
    dimensions: '366x231x132 cm',
    price: 'Rs. 1,861,000.00'
  },
  {
    image: 'https://www.whirlpool-handel.de/cdn/shop/products/2_0e5dc416-5196-42b5-820e-d8bfa0518fc1_340x.jpg?v=1678710517',
    title: 'EP14',
    dimensions: '427x231x132 cm',
    price: 'Rs. 2,222,100.00'
  },
  {
    image: 'https://www.whirlpool-handel.de/cdn/shop/products/11_85228129-bb07-426b-9359-0dc98c96e71f_340x.jpg?v=1678711750',
    title: 'Danube W-Flow',
    dimensions: '450×235×150 cm',
    price: 'Rs. 2,313,700.00'
  },
  {
    image: 'https://www.whirlpool-handel.de/cdn/shop/products/1_f20271ac-011f-4b54-822b-1d8eee5c6a95_340x.jpg?v=1678710735',
    title: 'EP15',
    dimensions: '457x231x152 cm',
    price: 'Rs. 2,314,600.00'
  },
  {
    image: 'https://www.whirlpool-handel.de/cdn/shop/products/7_e0b1cfbd-a2d4-4d9f-8908-99aaada18c89_340x.jpg?v=1678711818',
    title: 'Amazon W-Flow',
    dimensions: '550×235×150 cm',
    price: 'Rs. 2,684,100.00'
  },
  {
    image: 'https://www.whirlpool-handel.de/cdn/shop/products/9_5010f939-43e2-41eb-b04f-07fdd387c3b7_340x.jpg?v=1678712089',
    title: 'Rio Grande W-Flow',
    dimensions: '600×235×150 cm',
    price: 'Rs. 3,426,600.00'
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
        <EnquiryModal/>
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