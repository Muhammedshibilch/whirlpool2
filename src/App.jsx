
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import SwimSpa from './Pages/SwimSpa'
import Whirpool from './Pages/Whirpool'
import Sale from './Pages/Sale'
import Shop from './Pages/Shop'
import SpaFrame from './Pages/SpaFrame'
import CubePools from './Pages/CubePools'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Counselor from './Pages/Counselor'

function App() {

  return (
    <>
  <Header/>

<Routes>

<Route path='/' element={<LandingPage/>}/>
<Route path='/swimspa' element={<SwimSpa/>} />
<Route path='/whirlpool' element={<Whirpool/>} />
<Route path='/sale' element={<Sale/>} />
<Route path='/shop' element={<Shop/>} />
<Route path='/spaframe' element={<SpaFrame/>} />
<Route path='/cubepools' element={<CubePools/>} />
<Route path='/contact' element={<Contact/>} /> 
<Route path='/service' element={<Service/>} />
<Route path='/counselor' element={<Counselor/>} />

</Routes>

  <Footer/>
    </>
  )
}

export default App
