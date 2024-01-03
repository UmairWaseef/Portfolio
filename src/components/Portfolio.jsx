import React from 'react'
import Section from './common/Section'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import chat from '../assets/chat.jpg'
import onlineshop from '../assets/onlineshop.jpg'
import auth from '../assets/auth.png'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'


const Portfolio = () => {

    const project = [
        {
            id : 1,
            Image : chat,
            title : "Chatting App (SayHi)",
            about : "Technology Used : React.JS, Springboot, WebSocket",
            github : "https://github.com/UmairWaseef/SayHii.git",
            demo : "/"
        },
        {
            id : 2,
            Image : onlineshop,
            title : "Shopping App",
            about : "Technology Used : Springboot, Spring Security, JWT",
            github : "https://github.com/UmairWaseef/Shopping-Application-Springboot.git",
            demo : "/"
        },
        {
            id : 3,
            Image : auth,
            title : "Role Based Authentication",
            about : "Technology Used : Springboot, Spring Security, JWT",
            github : "https://github.com/UmairWaseef/SpringSecurity-User-Authentication-and-Authorization.git",
            demo : "https://google.com"
        },
        {
            id : 4,
            Image : p4,
            title : "CEM-System(Associated with University Of Moratuwa)",
            about : "Technology Used : React,Springboot, Spring Security, JWT",
            github : "https://google.com",
            demo : "https://google.com"
        },
        
        /*{
            id : 5,
            Image : p5,
            title : "Best App",
            about : "Technology Used : Springboot, Spring Security, JWT",
            github : "https://google.com",
            demo : "https://google.com"*
        },*/
        {
            id : 6,
            Image : p6,
            title : "E-MART(On Going)",
            about : "Technology Used : MERN Stack",
            github : "https://google.com",
            demo : "https://google.com"
        }
        
    ]

  return (
    <div name="portfolio">
    <Section title="Portfolio 💼" subtitle="These are all the project that i have worked on. Some of them I have worked before i gained experience. So go gentle on them"
    >

    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
        {project.map(({id, Image, title,about, github, demo })=>(
            <div key={id} 
                className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden hover:scale-110'>

                <img src={Image} alt={title} className='w-2/3 '  />
                
                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2>{title}</h2>
                    <p className=' max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base'>{about}</p>

                    <a  className = 'text-3xl cursor-pointer duration-150 hover:scale-110' href={github} target='_blank' rel='noopener noreferrer'>
                        <FaGithub />
                    </a>

                    
                </div>
            </div>
        ))}
    </div>

    </Section>
    </div>
  )

  
}

export default Portfolio