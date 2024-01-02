import React from 'react'
import Section from './common/Section'
import { MdEventAvailable } from 'react-icons/md'
import avatar from '../assets/avatar.png'

const Testimonails = () => {

    const TESTIMONIALS = [
        {
            id : 1,
            image : avatar,
            name : "John Doe",
            comment : "Somethin is good from ypu and also ypu all code review has been good"
        },
        {
            id : 2,
            image : avatar,
            name : "John Doe",
            comment : "Somethin is good from ypu and also ypu all code review has been good"
        },
        {
            id : 3,
            image : avatar,
            name : "John Doe",
            comment : "Somethin is good from ypu and also ypu all code review has been good"
        }
    ]

  return (
    <Section title="Testimonials" subtitle="This is what other clients have to say about me. I accept clients from all around the world.">
        <div>
            {TESTIMONIALS.map(({id, image, name, comment})=>(
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
            ))}
        </div>
    </Section>
  )
}

export default Testimonails