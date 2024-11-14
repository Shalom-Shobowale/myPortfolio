import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='bg-white text-secondary flex justify-between items-center p-10 mt-10'>
        <div>
            <h1 className='text-2xl font-bold'>SHALLOM.</h1>
        </div>
        <div className='flex gap-6'>
           <a href='https://github.com/Shalom-Shobowale' className='w-8 h-8 flex justify-center items-center rounded-full border-2 border-secondary hover:bg-secondary hover:text-primary hover:border-none duration-1000'><FaGithub /></a>
           <a href='https://twitter.com' className='w-8 h-8 flex justify-center items-center rounded-full border-2 border-secondary hover:bg-secondary hover:text-primary hover:border-none duration-1000'><FaTwitter /></a>
           <a href='https://www.linkedin.com/in/shalom-shobowale' className='w-8 h-8 flex justify-center items-center rounded-full border-2 border-secondary hover:bg-secondary hover:text-primary hover:border-none duration-1000'><FaLinkedinIn /></a>
        </div>
    </div>
  )
}
