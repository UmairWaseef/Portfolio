import React from 'react'
import Section from './common/Section'
import {FaFacebook, FaLinkedin, FaGithub, FaMedium} from 'react-icons/fa'
import contact from '../assets/mobile.png'

const Contact = () => {

  const SOCIAL = [
    {
        id: 1,
        link : "https://www.linkedin.com/in/mohamed-umair-a31436250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqZxKWwICSMWa%2F92kLHfomA%3D%3D",
        icon : <FaLinkedin />
    },
    {
        id: 2,
        link : "https://github.com/UmairWaseef",
        icon : <FaGithub />
    },
    {
        id: 3,
        link : "https://www.facebook.com/me/",
        icon : <FaFacebook />
    },
    /* {
        id: 4,
        link : "linkedin.com/in/mohamed-umair-a31436250",
        icon : <FaMedium />
    } */
]

  return (
    <div name = "contact">
    <Section title='Contact 📞'  
             subtitle='These are the ways you can get in touch with me. Hope tp hear from you soon :)'>

        <div className='flex flex-col items-center justify-center gap-8 text-center'>
          <div>
            <img src={contact} alt="" className='w-32 h-32' />
          </div>

          <div>
            <p className='max-w-xs md:max-w-lg font-extralight'>
              I am open to talk regarding Software engineering Internship and Ai Related Things.
            </p>
          </div>

          <div className='flex w-full items-center justify-evenly text-3xl'>
            {SOCIAL.map(({id, link, icon}) =>(
              <a href={link} alt = '' target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-rose-600'>{icon}</a>
            ))}
          </div>

              {/* bootom form*/}

              <div className='p-8 text-left w-full'>
                <form action="https://getform.io/f/381c27cd-ec28-45da-a415-52334a86db67" method='POST'>
                  <div className='w-full'>
                    <div className='flex flex-col'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                          name
                        </label>
                        <input type="text" name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900'/>
                    </div>

                    <div className='flex flex-col'>
                        <label className='capitalize text-sm py-2 font-extralight my-2'>
                          Phone
                        </label>
                        <input type="text" name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900'/>
                    </div>

                    <div className='flex flex-col'>
                        <label className='capitalize text-sm py-2 font-extralight my-2'>
                          Email
                        </label>
                        <input type="text" name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900'/>
                    </div>

                    <div className='flex flex-col'>
                        <label className='capitalize text-sm py-2 font-extralight my-2'>
                          Message
                        </label>
                        <textarea name="message"  rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:text-white
                        dark:bg-gray-900 resize-none'></textarea>
                        
                    </div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>


        </div>

    </Section>
    </div>
  )
}

export default Contact