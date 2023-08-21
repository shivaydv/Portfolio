import React, { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>

      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<div className='h-[75vh] flex justify-center items-center text-2xl'>404 : Page Not Found</div>} />
      </Routes>
     
    </Router>
    
  )
}

export default App