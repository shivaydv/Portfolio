import React from 'react'
import crypto_p from "../Assets/crypto-p.png"
import tvj_p from "../Assets/tvj-p.png"
import solvemind_p from "../Assets/solvemind-p.png"
import tesla_p from "../Assets/tesla-p.png"
import todolist_p from "../Assets/todolist-p.png"
import weather_p from "../Assets/weather-p.png"
import chat_p from "../Assets/chat-p.png"

import {  motion } from 'framer-motion'

const Project = () => {

    const projects=[{
        id:1,
        name:'Chat App',
        subheading:"MERN Stack Project",
        description: "User Authentication & Authorization, WebSockets, RealTime Chatting",
        image:{src:chat_p,alt:"Chat App"},
        github_link:"https://github.com/shivaydv/Chat-app",
        live_demo:"https://shivaydv-chat-app.netlify.app/"
    },
    {
        id:2,
        name:'Crypto App',
        subheading:"API Based Project",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:crypto_p,alt:"Crypto App"},
        github_link:"https://github.com/shivaydv/Crypto-App",
        live_demo:"https://sy-crypto.netlify.app/"
    },{
        id:3,
        name:'To Do List',
        subheading:"React Project",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:todolist_p,alt:"To Do List App"},
        github_link:"https://github.com/shivaydv/To-Do-List",
        live_demo:"https://shivaydv-to-do-list.netlify.app/"
    },
    {
        id:4,
        name:'Tesla Clone',
        subheading:"Basic Project",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:tesla_p,alt:"Tesla"},
        github_link:"https://github.com/shivaydv/Tesla",
        live_demo:"https://shivaydv.github.io/Tesla/"
    },
    {
        id:5,
        name:'TVJ Store',
        subheading:"React Project",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:tvj_p,alt:"TVJ Store"},
        github_link:"https://github.com/shivaydv/TVJ-Store",
        live_demo:"https://shivaydv-ecom.netlify.app/"
    },
    {
        id:6,
        name:'Weather App',
        subheading:"API Based Project",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:weather_p,alt:"Weather App"},
        github_link:"https://github.com/shivaydv/weather-app",
        live_demo:"https://sy-weather-app.netlify.app/"
    },
    {
        id:7,
        name:'Solve Mind',
        subheading:"React Project",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:solvemind_p,alt:"Solve Mind"},
        github_link:"https://github.com/shivaydv/SolveMind",
        live_demo:"https://solvemind.netlify.app/"
    }]




  return (
    <div className='min-h-screen px-6 lg:px-24 space-y-16 mb-16'>
        <h1  className='w-full text-center text-3xl font-bold my-10'>My Projects</h1>

    {
        projects.map((item,i)=>{
            return(
                <motion.div
                initial={{opacity:0,translateX:`${i%2===0?"600px":"-600px"}`}}
                whileInView={{opacity:1,translateX:0,scrollBehavior:"smooth"}}
            
                transition={{ease:"easeInOut",duration:1,type:"spring"}}
                 className={`flex flex-col  ${i%2===0 ? "lg:flex-row ":"lg:flex-row-reverse"} px-3 lg:px-8 py-3 lg:py-8 shadow-2xl bg-[#ffffff1f] rounded-2xl   gap-6  items-center `} key={item.id}>
            <div className={`w-full lg:w-1/2  flex justify-center items-center shadow-2xl `}>
                <img className='rounded-lg object-cover' src={item.image.src} alt={item.image.alt} />
            </div>
            <div className=' w-full lg:w-1/2 space-y-6  justify-center flex flex-col  '>
                <div className='space-y-1'>
                <h1 className='text-3xl font-semibold'>{item.name}</h1>
                <p className='text-sm text-[#8d8d8d]'>{item.subheading}</p>
                </div>
                <p className='text-lg text-[#8d8d8d]'>{item.description}</p>
                <div className='lg:space-x-4 flex justify-evenly w-full lg:justify-start '>
                <button className=" px-6 py-2 bg-[#fc1056] ease-in-out  hover:bg-[#fc105792] border border-[#fc1056] rounded-lg font-semibold lg:self-start">
                    <a href={item.github_link}>GitHub</a>
                </button>
                <button className=" px-6 py-2 border text-[#fc1056] ease-in-out hover:text-[#fff] hover:border-[#fff] border-[#fc1056] rounded-lg font-semibold lg:self-start">
                    <a href={item.live_demo}>Preview</a>
                </button>
                </div>
            </div>
        </motion.div>
            )
        })
    }
        


        

       
    </div>
  )
}

export default Project