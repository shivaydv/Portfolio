import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Progressbar from "./Components/Progressbar"

const App = () => {
  return (
    <Router>
      {/* <Progressbar/> */}
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
    
  )
}

export default App