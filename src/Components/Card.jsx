import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
export default function Card({image, text, link, textLink, about, tools,gitLink}) {
  return (
    <div className='flex justify-center mt-10'>
        <div className='bg-tertiary flex flex-col md:flex-row gap-12 text-secondary p-2 md:p-6 w-[90%] md:w-[80%] rounded-xl shadow-xl'>
          <div className='md:w-[55%]'>
            <img src={image} alt="firstProject.png" className='rounded-xl h-72' />
          </div>
          <div className='md:w-[45%] flex flex-col justify-center'>
            <h1 className='font-bold'>{text}</h1>
            <a href={link} className='mt-1 hover:underline text-blue-700 text-sm font-semibold flex items-center gap-2'>
              <p>{textLink}</p>
              <p><LuExternalLink /></p>
            </a>
            <p className='text-sm font-medium my-3 text-[15px]'>{about}</p>
            <p className='font-semibold text-[15px]'>{tools}</p>
            <a href={gitLink} className='font-bold flex items-center hover:bg-gray-300 justify-between p-3 rounded-xl mt-6'>
              <div className='flex items-center gap-3'>
                <p className='text-xl'><FaGithub /></p>
                <p>Github</p>
              </div>
              <p><BsArrowUpRight /></p>
            </a>
          </div>
        </div>
    </div>
  )
}
