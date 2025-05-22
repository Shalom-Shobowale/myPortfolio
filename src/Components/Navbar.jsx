import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-scroll'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Home from './Home';

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className='h-screen md:h-[95vh] bg-no-repeat bg-center bg-cover' style={{backgroundImage:"url(port2.png)"}}>
        <header className={`flex justify-center fixed w-full z-10 ${isSticky ? "w-full bg-secondary md:bg-primary duration-300 ease-in-out text-primary md:text-secondary backdrop:blur-md bg-opacity-80": "text-primary md:bg-transparent bg-secondary"}`}>
           <div className='flex justify-between w-[85%] items-center h-20'>
                <div className='text-2xl font-bold'>
                  <Link to="home" spy={true} smooth={true} offset={50} duration={500}>SHALLOM.</Link>
                </div>
                <nav>
                    <ul className={`flex md:flex-row flex-col gap-5 md:gap-10 font-semibold md:bg-transparent bg-secondary backdrop:blur-md bg-opacity-80 absolute left-0 items-center md:top-7 md:justify-end top-20 w-full md:py-0 py-5 md:w-[90%] cursor-pointer ${menu ? "top-20" : "top-[-490px]"}`}>
                        <li><Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={()=>setMenu(false)} >Home</Link></li>
                        <li><Link onClick={()=>setMenu(false)} to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link></li>
                        {/* <li><Link to="service" spy={true} smooth={true} offset={-100} duration={500} >Service</Link></li> */}
                        <li><Link onClick={()=>setMenu(false)} to="portfolio" spy={true} smooth={true} offset={-100} duration={500} >Portfolio</Link></li>
                        <li><Link onClick={()=>setMenu(false)} to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link></li>
                    </ul>
                </nav>
                <p className="md:hidden text-4xl cursor-pointer flex text-bgBody" onClick={()=> setMenu(!menu)}>{menu ? <IoMdClose />: <FaBars />}</p>
           </div>
        </header>
        <Home />
    </div>
  )
}
