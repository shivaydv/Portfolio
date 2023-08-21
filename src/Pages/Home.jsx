import React from "react";
import HeroSection from "../Components/HeroSection";
import Project from "../Components/Project";

import GoToTop from "../Components/GoToTop";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";


const Home = () => {

  return (
    <div className="w-full mx-auto overflow-x-hidden pt-4 ">
      <GoToTop/>
      <HeroSection/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
};

export default Home;
