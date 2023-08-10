import React from "react";
import HeroSection from "../Components/HeroSection";
import Project from "../Components/Project";
import Progressbar from "../Components/Progressbar";
import GoToTop from "../Components/GoToTop";


const Home = () => {

  return (
    <div className="container mx-auto overflow-x-hidden ">
      <Progressbar/>
      <GoToTop/>
      <HeroSection/>
      <Project/>
    </div>
  );
};

export default Home;
