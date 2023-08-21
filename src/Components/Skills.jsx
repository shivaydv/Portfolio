import React from "react";
import { motion } from "framer-motion";
import { skills } from "../Data/data";

const fadein ={
  initial:{
    opacity:0,
    y:100,
  },
  animate:(index)=>({
    opacity:1,
    y:0,

    transition:{
      duration:0.4,
      delay:0.1*index,
    }
  })
} 

const Skills = () => {
  return (
    <div className=" px-6 lg:px-24 space-y-28 mb-28 ">
      <h1 data-scroll data-scroll-speed={0.2} className="w-full text-center text-3xl font-bold my-10">My Skills</h1>

      <div className="flex flex-wrap  w-full max-md:justify-evenly justify-center gap-4 md:gap-10">
        {
          skills.map((item,i)=>{
            return (
              <div data-scroll data-scroll-speed={i%2==0?0.2:0.5} variants={fadein} initial="initial" whileInView="animate" viewport={{once:true}} custom={i} className=" w-36 h-36 px-6 py-4  flex-col gap-2   text-center flex items-center rounded-lg justify-center  bg-white/10 shadow-2xl
              ">
                <img className="w-16 h-16 object-contain" src={item.img}/>
                <p className="font-semibold text-white">{item.name}</p>
              </div>
            )
          })
        }
        
      </div>
    </div>
  );
};

export default Skills;
