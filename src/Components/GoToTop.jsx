import React, { useEffect, useState } from "react";

import {AiOutlineArrowUp} from "react-icons/ai"
import { motion } from "framer-motion"

const GoToTop = () => {

    const gototop =()=>{
        window.scrollTo({top : 0,left:0,behavior:"smooth"})
      }
      
      const [scrollPosition,setScrollPosition] = useState(window.scrollY)
      
      useEffect(() => {
        window.addEventListener("scroll",()=>{
          setScrollPosition(window.scrollY)
       })
       return(
        window.removeEventListener('scroll',()=>{})
       )
      } )



  return (
    <div>
        {
        scrollPosition >500 && 
        <motion.button initial={{opacity:0,translateY:"80px"}} animate={{opacity:1,translateY:0}}  transition={{duration:1}} onClick={gototop} className="fixed bottom-5 right-10 bg-[#fc1065] p-2 rounded-full z-10">
          <div >

        <AiOutlineArrowUp size={25}/> 
          </div>
      </motion.button>
      }
    </div>
  )
}

export default GoToTop