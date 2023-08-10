import React from 'react'
import { motion ,useScroll } from 'framer-motion';

const Progressbar = () => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div className="fixed w-screen md:h-[0.4rem] bottom-0 left-0 bg-[#fc1065] text-white z-10" style={{ scaleX: scrollYProgress }}></motion.div> 
    )
}

export default Progressbar