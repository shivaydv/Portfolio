import React from 'react'
import crypto_p from "../Assets/crypto-p.png"
import tvj_p from "../Assets/tvj-p.png"
import solvemind_p from "../Assets/solvemind-p.png"
import tesla_p from "../Assets/tesla-p.png"
import todolist_p from "../Assets/todolist-p.png"
import weather_p from "../Assets/weather-p.png"
import chat_p from "../Assets/chat-p.png"

import { motion } from 'framer-motion'

const Project = () => {

    const projects=[{
        id:1,
        name:'Chat App',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:chat_p,alt:"Chat App"},
        github_link:"https://github.com/shivaydv",
        live_demo:""
    },
    {
        id:2,
        name:'Crypto App',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:crypto_p,alt:"Crypto App"},
        github_link:"https://github.com/shivaydv",
        live_demo:""
    },{
        id:3,
        name:'To Do List',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:todolist_p,alt:"To Do List App"},
        github_link:"https://github.com/shivaydv",
        live_demo:""
    },
    {
        id:4,
        name:'Tesla Clone',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:tesla_p,alt:"Tesla"},
        github_link:"https://github.com/shivaydv",
        live_demo:""
    },
    {
        id:5,
        name:'TVJ Store',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:tvj_p,alt:"TVJ Store"},
        github_link:"https://github.com/shivaydv",
        live_demo:""
    },
    {
        id:6,
        name:'Weather App',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:weather_p,alt:"Weather App"},
        github_link:"https://github.com/shivaydv",
        live_demo:""
    },
    {
        id:7,
        name:'Solve Mind',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus ex saepe.",
        image:{src:solvemind_p,alt:"Solve Mind"},
        github_link:"https://github.com/shivaydv",
        live_demo:""
    }]




  return (
    <div className='min-h-screen px-6 md:px-24 space-y-16 mb-16'>
        <h1  className='w-full text-center text-3xl font-bold my-10'>My Projects</h1>

    {
        projects.map((item,i)=>{
            return(
                <div className={`flex flex-col md:${i%2!==0 ? "flex-row-reverse":"flex-row"} px-3 md:px-8 py-3 md:py-8 bg-[#ffffff1f] rounded-2xl   gap-6  items-center `} key={item.id}>
            <div className={`w-full md:w-1/2  flex justify-center items-center `}>
                <img className='rounded-lg object-cover' src={item.image.src} alt={item.image.alt} />
            </div>
            <div className=' w-full md:w-1/2 space-y-6  justify-center flex flex-col '>
                <h1 className='text-3xl font-semibold'>{item.name}</h1>
                <p className='text-lg text-[#8d8d8d]'>{item.description}</p>
                <div className='space-x-4'>
                <button className=" px-6 py-2 bg-[#fc1056] rounded-lg font-semibold md:self-start">
                    <a href={item.github_link}>View Demo</a>
                </button>
                <button className=" px-6 py-2 border text-[#fc1056] border-[#fc1056] rounded-lg font-semibold md:self-start">
                    <a href={item.live_demo}>View Demo</a>
                </button>
                </div>
            </div>
        </div>
            )
        })
    }
        


        

       
    </div>
  )
}

export default Project