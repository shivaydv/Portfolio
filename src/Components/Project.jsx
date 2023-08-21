import React from "react";

import { projects } from "../Data/data";

import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="min-h-screen px-6  space-y-16 mb-16 w-full ">
      <h1 className="w-full text-center text-3xl font-bold my-10">
        My Projects
      </h1>

      <div className="flex flex-wrap  w-full justify-center  gap-16">
        {projects.map((item) => {
          return (
            <div class="max-w-sm   bg-[#fff]/10 shadow-2xl    rounded-xl ">
              
                <img
                  class="rounded-t-lg"
                  src={item.image.src}
                  alt={item.image.alt}
                />
              
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
                   {item.name}
                  </h5>
                  <h5 class="mb-4 text-sm font-semibold tracking-tight text-gray-400">
                   {item.subheading}
                  </h5>
                </div>
                
                <p class="mb-4 font-normal text-gray-400">
                 {item.description}
                </p>
                
                <div className="flex justify-around">
                <button className=" hover:scale-105  duration-100 px-6 py-2 bg-[#fc1056] ease-in-out  border border-[#fc1056] rounded-lg font-semibold "><a href={item.github_link}>Github</a></button>
                <button className="hover:scale-105  duration-100 px-6 py-2 text-[#fc1056] ease-in-out   border border-[#fc1056] rounded-lg font-semibold "><a href={item.live_demo}>Demo</a></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

