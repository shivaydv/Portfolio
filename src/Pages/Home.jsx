import React from "react";
import HeroSection from "../Components/HeroSection";
import Project from "../Components/Project";

import GoToTop from "../Components/GoToTop";
import Skills from "../Components/Skills";


const Home = () => {

  return (
    <div className="container mx-auto overflow-x-hidden ">
     
      <GoToTop/>
      <HeroSection/>
      <Project/>
      <Skills/>
    </div>
  );
};

export default Home;
