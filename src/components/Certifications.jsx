import React from 'react'
import Section from './common/Section'
import uom from '../assets/uom.png'
import aquinas from '../assets/aquinas.jpg'
import nibm from '../assets/nibm.jpeg'

const Certifications = () => {
    const INSTITUTE = [
        {
            id : 1,
            image : uom,
            name : "University Of Moratuwa CODL",
            comment :"Web Designing for Beginners | Open LearningPlatform | University Of Moratuwa (2023)",
            link : "https://drive.google.com/file/d/1ylE2SVjtcp54gpnVQOyztRuFlezWe7Y3/view?usp=drive_link"
        },
        {
            id : 2,
            image : aquinas,
            name : "Aquinas College Of Higher Education",
            comment :"Diploma In English Language and Literature (2021 - 2022)",
            link : "https://drive.google.com/file/d/1_ffUEa09MhFyoqMMhK1tuDW4d9FRi7ep/view?usp=drive_link"
            
        },
        {
            id : 3,
            image : nibm,
            name : "National Institute Of Business Management",
            comment : "Certificate in Computer Science | C196024 (2020)",
            link : "https://drive.google.com/file/d/1oicEBptn9rAEHpP88_FuVket2ZpRWFm-/view?usp=drive_link"
        }
    ]

  return (
    <div name = "certifications">
    <Section title="Certifications 🎓" >
        
        <div>
            {INSTITUTE.map(({id, image, name, comment, link})=>(
                <a href={link} target='_blank'>
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                    <div className='w-2/3 '>
                        <img 
                            src={image} 
                            alt={name}
                            className='w-20 h-20 object-cover object-top pt-2' />
                    </div>

                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
                </a>
            ))}
        </div>
        
    </Section>
    </div>
  )
}

export default Certifications