import React from "react";
import HeroSection from "../Components/HeroSection";
import Project from "../Components/Project";

import GoToTop from "../Components/GoToTop";


const Home = () => {

  return (
    <div className="container mx-auto overflow-x-hidden ">
     
      <GoToTop/>
      <HeroSection/>
      <Project/>
    </div>
  );
};

export default Home;
