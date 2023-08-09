import React from 'react'
import Typewriter from "typewriter-effect";
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
  } from "react-icons/ai";
  import { Link } from "react-router-dom";
  import { motion } from "framer-motion";
  import Heroimg from "./Heroimg";
import Particle from './Particle';
const HeroSection = () => {
  return (
    <div className="flex flex-col  p-4  md:flex-row justify-center items-center h-[82vh]  ">
      <Particle/>

        <motion.div 
        initial={{ x:"-100px",opacity:0 }}
        animate={{ x:"0px",opacity:1 }}
        transition={{ duration: 1 }}
        className=" w-full  md:w-1/2 h-full  items-center flex flex-col md:pl-24 md:pb-24  justify-center">

          <h1 className="text-4xl font-bold  md:w-full">Hi  ,</h1>
          <h1 className="text-4xl font-semibold md:w-full  ">
            I'm Shiva Yadav
          </h1>
          <div className="flex gap-2 text-3xl md:w-full font-semibold text-[#fc1056]">
            <h1 className="text-white ">A </h1>
            <Typewriter
              options={{
                strings: [" Frontend Developer", " MERN Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex gap-8 mt-12 mb-6  md:mt-10 md:mb-10 md:self-start  ">
            <a
              className=" hover:text-[#fc1056] hover:scale-125 ease-in-out duration-200   "
              href="https://github.com/Shivaydv/" target="blank"
            >
              <AiFillGithub size={"2rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] hover:scale-125 ease-in-out duration-200 "
              href="https://www.linkedin.com/in/shivaydv/" target="blank"
            >
              <AiFillLinkedin size={"2rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] hover:scale-125 ease-in-out duration-200  "
              href="https://www.instagram.com/shivay1256/" target="blank"
            >
              <AiFillInstagram size={"2rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] hover:scale-125 ease-in-out duration-200 "
              href="https://twitter.com/Shivay1256" target="blank"
            >
              <AiFillTwitterCircle size={"2rem"} />
            </a>
            
          </div>
          <button className=" px-6 py-2 bg-[#fc1056] rounded-lg font-semibold md:self-start ease-in-out  hover:bg-[#fc105792]">
            <Link to={"/contact"}>Contact Me</Link>
          </button>


        </motion.div>

        <motion.div 
        initial={{ x:"100px",opacity:0 }}
        animate={{ x:"0px",opacity:1 }}
        transition={{ duration: 1 }}
        className="w-full  md:w-1/2 h-full flex justify-center items-center "
        >
         <Heroimg/>    
        </motion.div>

        {/* -----------------------HERO END ---------------  */}
      </div>
  )
}

export default HeroSection