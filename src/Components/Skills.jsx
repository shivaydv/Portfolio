import React from "react";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoNodejs,
} from "react-icons/bi";
import { skills } from "../Data/data";

const Skills = () => {
  return (
    <div className=" px-6 lg:px-24 space-y-16 mb-16 ">
      <h1 className="w-full text-center text-3xl font-bold my-10">My Skills</h1>

      <div className="flex flex-wrap w-full max-md:justify-evenly justify-center gap-4 md:gap-10">
        {
          skills.map((item)=>{
            return (
              <div className=" w-36 h-36 px-6 py-4  flex-col gap-2   text-center flex items-center rounded-lg justify-center  bg-white/10 shadow-2xl
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
