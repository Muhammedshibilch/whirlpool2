import React from 'react'
import { Link } from 'react-router-dom'

function Shop() {
  return (
    <div>

<div className="row justify-content-center text-center">
  <h3 className="uppercase fw-bold mt-3 mb-3">Kategorien</h3>

  {/* Left Column */}
  <div className="col-12 col-md-5 p-5">
    <Link to={'/whirlpool'}>
      <button className="bg-sky-900 text-white p-3 w-100">Outdoor Whirlpools</button>
    </Link>

    <Link to={'/sale'}>
      <button className="bg-sky-900 mt-3 text-white p-3 w-100">Sale %</button>
    </Link>

  <Link to={'/spaframe'}>
  <button className="bg-sky-900 mt-3 text-white p-3 w-100">Spa-Frame</button>
  </Link>
  </div>

  {/* Right Column */}
  <div className="col-12 col-md-5 p-5">
    <Link to={'/swimspa'}>
      <button className="bg-sky-900 text-white p-3 w-100">SwimSpa</button>
    </Link>

<Link to={'/contact'}>
<button className="bg-sky-900 mt-3 text-white p-3 w-100">Saunen und Infrarotkabinen</button>

</Link>
   

<button className="bg-sky-900 mt-3 text-white p-3 w-100">Zubehör</button>


  </div>
</div>


    </div>
  )
}

export default Shop