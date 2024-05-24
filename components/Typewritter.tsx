"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typewritter = () => {
  const words = ["Web Developer", "Web Designer", "Freelancer"];
  return (
    <>
      <Typewriter
        cursor
        cursorBlinking
        delaySpeed={1000}
        deleteSpeed={20}
        loop={0}
        typeSpeed={55}
        words={words}
      />
    </>
  );
};

export default Typewritter;
