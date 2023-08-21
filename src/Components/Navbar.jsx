import React, { useState } from 'react'
import { NavLink ,Link } from 'react-router-dom'
import resume from "../Assets/Resume.pdf"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

  const [menu,setMenu]=useState(false)

  const toggleMenu=()=>{
    setMenu(!menu);
  }

  return (

    <nav 
    className='w-full mx-auto p-6 flex items-center text-white justify-between  '>
        
        <h1 className=' p-2 font-semibold text-2xl '><Link to={"/"}>Shiva</Link></h1>
        
        <div onClick={toggleMenu}  className={`flex font-semibold lg:flex lg:gap-24  ${menu?"max-lg:absolute max-lg:flex-col max-lg:text-center max-lg:bg-white max-lg:text-[#1d1d1d] max-lg:rounded-lg max-lg:p-4 max-lg:z-20 max-lg:shadow-xl max-lg:gap-2 right-6 top-[10%]":"hidden"} `}>
            <NavLink className={({ isActive }) =>isActive ? 'text-[#fc1056]' : ''} to={"/"}>Home</NavLink>
            <NavLink className={({ isActive }) =>isActive ? 'text-[#fc1056]' : ''}  to={"/contact"}>Contact</NavLink>
        </div>
        <div className='flex justify-between items-center gap-4'>
        <a  href={resume} download><button className=' py-1 px-2 bg-[#fc1056] rounded-lg font-semibold  hover:bg-transparent hover:text-[#fc1056] ease-in-out duration-75 border border-[#fc1056]'>Resume</button></a>
        
          <button className='lg:hidden' onClick={toggleMenu}>{menu?<AiOutlineClose size={24}/>:<AiOutlineMenu size={24} />}</button>

        </div>
    </nav>
  
  )
}

export default Navbar