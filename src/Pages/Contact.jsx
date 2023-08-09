import React from "react";
import me from "../Assets/shiva.jpeg";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex h-96 mt-6 flex-col md:flex-row  ">
        <motion.div initial={{x:"-100px", opacity:0}} animate={{x:"0px",opacity:1}} transition={{duration:1}} className="w-[70%] md:w-1/2 mx-auto ">
          <img className="w-full h-full object-contain " src={me} alt="" />
        </motion.div>

        <motion.div initial={{x:"100px", opacity:0}} animate={{x:"0px",opacity:1}} transition={{duration:1}} className=" w-full  md:w-1/2 h-full  p-12 text-center md:text-left ">
          <h1 className="text-4xl font-semibold md:w-full  ">Contact Me</h1>
          <p className="text-[#8d8d8d] text-lg font-semibold py-2">You can contact me at the places mentioned below. I will try to get back to you as fast as I can.</p>

          <div className="flex my-10 justify-around md:justify-normal md:gap-8   ">
            <a
              className=" hover:text-[#fc1056] ease-in-out duration-200 "
              href="https://github.com/Shivaydv/" target="blank"
            >
              <AiFillGithub size={"2rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] ease-in-out duration-200 "
              href="https://www.linkedin.com/in/shivay1256/" target="blank"
            >
              <AiFillLinkedin size={"2rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] ease-in-out duration-200  "
              href="https://www.instagram.com/shivay1256/" target="blank"
            >
              <AiFillInstagram size={"2rem"} />
            </a>
            <a
              className=" hover:text-[#fc1056] ease-in-out duration-200 "
              href="https://twitter.com/Shivay1256" target="blank"
            >
              <AiFillTwitterCircle size={"2rem"} />
            </a>
          </div>
          <button className=" px-6 py-2 bg-[#fc1056] rounded-lg font-semibold md:self-start mr-8">
          <a href = "mailto: shivaydv1256@gmail.com">Send Email</a>
          </button>
          <button className=" px-6 py-2 bg-[#fc1056] rounded-lg font-semibold md:self-start">
          <a href="tel:726-885-4798">Call</a>
          </button>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
