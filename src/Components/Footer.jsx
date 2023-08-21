import React from 'react'
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
  } from "react-icons/ai";

const Footer = () => {
  return (
   <footer className=" w-full text-white px-4 md:px-24 py-6 flex max-md:flex-col-reverse max-md:gap-4 max-md:items-center justify-between">
    <div className='flex gap-2 items-center'>
        <h1 className='font-semibold text-lg'>Shiva Yadav</h1>
        <p className='text-sm text-slate-400'> | © 2023</p>
    </div>
    <div className="flex gap-8   ">
            <a
              className=" hover:text-[#fc1056] hover:scale-125 ease-in-out duration-200   "
              href="https://github.com/Shivaydv/" target="blank"
            >
              <AiFillGithub size={"1.6rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] hover:scale-125 ease-in-out duration-200 "
              href="https://www.linkedin.com/in/shivaydv/" target="blank"
            >
              <AiFillLinkedin size={"1.6rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] hover:scale-125 ease-in-out duration-200  "
              href="https://www.instagram.com/shivay1256/" target="blank"
            >
              <AiFillInstagram size={"1.6rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] hover:scale-125 ease-in-out duration-200 "
              href="https://twitter.com/Shivay1256" target="blank"
            >
              <AiFillTwitterCircle size={"1.6rem"} />
            </a>
            
          </div>
</footer>
  )
}

export default Footer