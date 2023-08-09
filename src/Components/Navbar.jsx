import React from 'react'
import { NavLink ,Link } from 'react-router-dom'
import {motion} from "framer-motion"

const Navbar = () => {
  return (

    <motion.nav 
    // animate={{translateY:"25px"}}
    initial={{ y:"-40px",opacity:0 }}
    animate={{ y:"0px",opacity:1 }}
    transition={{ duration: 1 }}
    className='container mx-auto p-6 flex items-center text-white justify-between  '>
        
            <h1 className=' p-2 font-semibold text-2xl '><Link to={"/"}>Shiva</Link></h1>
        
        <div className='hidden  md:flex gap-24 font-semibold '>
            <NavLink className={({ isActive }) =>isActive ? 'text-[#fc1056] ' : ''} to={"/"}>Home</NavLink>
            <NavLink className={({ isActive }) =>isActive ? 'text-[#fc1056]' : ''}  to={"/about"}>About</NavLink>
            <NavLink className={({ isActive }) =>isActive ? 'text-[#fc1056]' : ''}  to={"/contact"}>Contact</NavLink>
            <NavLink className={({ isActive }) =>isActive ? 'text-[#fc1056]' : ''}  to={"/services"}>Services</NavLink>
        </div>
        <div><button className=' p-2 bg-[#fc1056] rounded-lg font-semibold'>Resume</button></div>
    </motion.nav>
  
  )
}

export default Navbar