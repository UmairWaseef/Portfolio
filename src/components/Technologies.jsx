import React from 'react'
import Section from './common/Section'
import html from '../assets/html.jpg'
import css from '../assets/css.jpeg'
import javascript from '../assets/javascript.jpg'
import react from '../assets/react.jpeg'
import springboot from '../assets/spring.jpg'
import nodejs from '../assets/nodejs.jpeg'
import express from '../assets/express.png'
import mysql from '../assets/mysql.jpeg'
import git from '../assets/git.png'
import tailwind from '../assets/tailwind.png'
import java from '../assets/java.png'

const Technologies = () => {
    const TECHNOLOGIES = [
        {
            id : 1,
            image : html ,
            title : "html"
        },
        {
            id : 2,
            image : css ,
            title : "CSS"
        },
        {
            id : 3,
            image : javascript  ,
            title : "JavaScript"
        },
        {
            id : 4,
            image : react ,
            title : "ReactJS"
        },
        {
            id : 5,
            image : springboot ,
            title : "Springboot"
        },
        {
            id : 6,
            image : nodejs ,
            title : "NodeJS"
        },
        {
            id : 7,
            image : express ,
            title : "ExpressJS"
        },
        {
            id : 8,
            image : mysql ,
            title : "MySql"
        },
        {
            id : 9,
            image : java ,
            title : "JAVA"
        },
        {
            id : 10,
            image : tailwind ,
            title : "Tailwind CSS"
        },
        {
            id : 11,
            image : git ,
            title : "GIT"
        },
    ]
  return (
    <div name="technologies">
        <Section title="Technologies </>" subtitle="These are the technologies I've worked with">
        <div className='grid gap-10 lg:grid-cols-3'>
            {TECHNOLOGIES.map(({id, image, title})=>(
                <div key={id} className='flex flex-col items-center justify-center p-3 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                    <img src={image} alt={title}  className='w-30 h-30 md:w-44 md:h-44'/>
                    <h3 className='mt-5 text-base'>{title}</h3>
                </div>
            ))}
        </div>
        </Section>
    </div>
  )
}

export default Technologies