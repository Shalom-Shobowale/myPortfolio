import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className='flex justify-center items-center' id='home'>
        <div className='w-[90%] md:w-[80%] flex items-center justify-center text-center h-[96vh] my-auto'>
            <div className='md:mt-0 mt-28 text-primary'>
              <h1 className='text-5xl font-bold'>Hi, I'm <span className=''>Shallom,</span></h1>
              <h3 className='font-bold text-2xl my-3'>A Frontend Developer</h3>
              <p className='text-pretty font-semibold'>I love transforming ideas into responsive, user-friendly web applications that provide <br/>exceptional user experiences, Skilled in HTML, CSS, TailwindCss, JavaScript, and ReactJs.</p>
              <div className='flex justify-center gap-5 text-xl my-5'>
                  <a href='https://github.com/Shalom-Shobowale' className='w-8 h-8 flex justify-center items-center rounded-full border-2 border-secondary hover:bg-primary hover:text-secondary hover:border-none duration-1000'><FaGithub /></a>
                  <a href='https://twitter.com' className='w-8 h-8 flex justify-center items-center rounded-full border-2 border-secondary hover:bg-primary hover:text-secondary hover:border-none duration-1000'><FaTwitter /></a>
                  <a href='https://www.linkedin.com/in/shalom-shobowale' className='w-8 h-8 flex justify-center items-center rounded-full border-2 border-secondary hover:bg-primary hover:text-secondary hover:border-none duration-1000'><FaLinkedinIn /></a>
              </div>
              <div className='flex justify-center gap-5'>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='px-5 py-2 rounded-3xl hover:border-primary hover:text-primary hover:border-2 font-semibold bg-primary text-secondary cursor-pointer hover:bg-transparent' >Contact</Link>
                  <button className='px-5 py-2 text-primary rounded-3xl border-2 border-primary font-semibold hover:bg-primary hover:text-secondary hover:border-none duration-1000'>Download CV</button>
              </div>
            </div>
        </div>
    </div>
  )
}
