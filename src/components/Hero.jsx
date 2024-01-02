import React from 'react'
import {FaFacebook, FaLinkedin, FaGithub, FaMedium, FaArrowDown} from 'react-icons/fa'
import avatar from "../assets/avatar.png"

const Hero = () => {

    const SOCIAL = [
        {
            id: 1,
            link : "https://www.linkedin.com/in/mohamed-umair-a31436250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYwrMwsBdQpCzMnkgs4B2DQ%3D%3D",
            icon : <FaLinkedin />
        },
        {
            id: 2,
            link : "linkedin.com/in/mohamed-umair-a31436250",
            icon : <FaGithub />
        },
        {
            id: 3,
            link : "linkedin.com/in/mohamed-umair-a31436250",
            icon : <FaFacebook />
        },
        {
            id: 4,
            link : "linkedin.com/in/mohamed-umair-a31436250",
            icon : <FaMedium />
        }
    ]

    window.addEventListener("scroll", function(){
        const downArrow = document.querySelector(".down-arrow");

        if(this.scrollY >=90) downArrow.classList.add(".hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow")
    });


   
  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-20 text-center'>
        <h2 className='text-5xl text-rose-600 font-medium uppercase font-bold'>Mohamed Umair</h2>
        <h3 className='py-3 text-2xl'>Software Engineer</h3>
        <p className='max-w-xl font-light text-gray-500'>
            Hello <span className='animate-pulse text-4xl'>👋</span>
            Welcome to my
            site. I am software developer. I love to work on web, dev, mobile dev & automation projects.
        </p>
       {/*Social media icons */}
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
        {SOCIAL.map(({id, link, icon}) =>(
            <a 
            href={link} 
            key={id} 
            className='cursor-pointer duration-300 hover:text-rose-600'
            target='_blank'
            rel='noopener noreferrer'>{icon}</a>
        ))}
        </div>

        {/*avatar and resume*/}
        <div>           
            <img src={avatar} alt="avtar" className=' w-30 h-30 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5' />
            
            <a href="/MohamedUmair_SE.pdf" download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to to-teal-500 py-2 rounded-lg'>
                Resume
            </a>
        </div>

        {/*arrow down animation*/}
        <div className="mt-10 down-arrow">
            <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
        </div>

        
    </section>
  )
}

export default Hero