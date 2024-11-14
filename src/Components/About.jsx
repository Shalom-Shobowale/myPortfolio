import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function About() {
  const [open, setOpen] = useState(1);
  const handleClick = (id) => {
    setOpen(id);
  };

  // useEffect(()=>{
  //   AOS.init({duration:1200})
  // })
  return (
    <div className="my-12 flex justify-center" id="about">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[75%] items-center md:gap-y-0 gap-y-10">
        <div className="md:w-[45%]">
            <img src="Shallom1.jpg" alt="" className='md:h-[400px] md:w-[350px] w-full rounded' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" />
        </div>
        <div className="md:w-[50%] text-secondary">
          <div className="flex gap-5 font-semibold">
            <button
              className={`p-3 rounded ${
                open === 1
                  ? "bg-secondary text-primary"
                  : "bg-tertiary text-secondary"
              }`}
              onClick={() => handleClick(1)}
            >
              About Me
            </button>
            <button
              className={`p-3 rounded ${
                open === 2
                  ? "bg-secondary text-primary"
                  : "bg-tertiary text-secondary"
              }`}
              onClick={() => handleClick(2)}
            >
              Skills
            </button>
            <button
              className={`p-3 rounded ${
                open === 3
                  ? "bg-secondary text-primary"
                  : "bg-tertiary text-secondary "
              }`}
              onClick={() => handleClick(3)}
            >
              Experience
            </button>
          </div>
          <div className="mt-7">
            <div className={`${open === 1 ? "inline-block" : "hidden"}`}>
              <h1 className='text-3xl font-bold'>I'm Shobowale Shallom</h1>
              <p className="font-medium text-pretty mt-4">
                A creative{" "}
                <em>frontend developer</em> who loves solving problems through
                design and technology. With a passion for building user-friendly
                applications, I combine technical skills with a
                flair for creativity, making the digital world more engaging and
                accessible.
              </p>
              <p className="font-medium text-pretty my-4">
                My goal is to use my skills as a frontend developer to solve real time world problem to make life easier for people, and to collaborate with other developers to build innovative solutions as a team.
              </p>
              <div>
                <div className="flex gap-3 items-center font-semibold">
                  <p className="text-xl">
                    <FaPhone />
                  </p>
                  <p>
                    <a href="tel:+234-903-818-6039">(+234)903-818-6039</a>
                  </p>
                </div>
                {/* <div className='flex gap-3 items-center font-medium my-4'>
                                <p className='text-xl'><FaLocationDot /></p>
                                <p><a href="">Lagos, Nigeria.</a></p>
                            </div> */}
                <div className="flex gap-3 items-center font-semibold mt-3">
                  <p className="text-xl">
                    <MdEmail />
                  </p>
                  <p>
                    <a href="">shalomshobowale65@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${open === 2 ? "inline-block" : "hidden"}`}>
              <h1 className="text-2xl font-bold">My Skills</h1>
              <p className="font-medium text-pretty">
                I'm always learning, always growing. As a frontend developer, my
                skills are constantly evolving to meet the demands of an
                ever-changing digital landscape. Here's a look at my current
                toolkit.
              </p>
              <div className="grid grid-cols-3 gap-14 mt-5">
                <div className="relative">
                    <div className="bg-primary shadow-md flex justify-center items-center h-20 w-20 p-3 rounded-md">
                        <img src="img1.svg" alt="" className="h-20 w-20"/>
                    </div>
                    <div className="absolute h-20 w-20 top-0 opacity-0 hover:opacity-100 flex justify-center">
                        <p className="font-semibold py-1 px-4 bg-primary text-center shadow-md shadow-secondary rounded-md absolute top-24">Html</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-primary shadow-md flex justify-center items-center h-20 w-20 p-3 rounded-md">
                        <img src="img2.svg" alt="" className="h-20 w-20"/>
                    </div>
                    <div className="absolute h-20 w-20 top-0 opacity-0 hover:opacity-100 flex justify-center">
                        <p className="font-semibold py-1 px-4 bg-primary text-center shadow-md shadow-secondary rounded-md absolute top-24">JavaScript</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-primary shadow-md flex justify-center items-center h-20 w-20 p-3 rounded-md">
                        <img src="img3.svg" alt="" className="h-20 w-20"/>
                    </div>
                    <div className="absolute h-20 w-20 top-0 opacity-0 hover:opacity-100 flex justify-center">
                        <p className="font-semibold py-1 px-4 bg-primary text-center shadow-md shadow-secondary rounded-md absolute top-24">Bootstrap</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-primary shadow-md flex justify-center items-center h-20 w-20 p-3 rounded-md">
                        <img src="img4.svg" alt="" className="h-20 w-20"/>
                    </div>
                    <div className="absolute h-20 w-20 top-0 opacity-0 hover:opacity-100 flex justify-center">
                        <p className="font-semibold py-1 px-4 bg-primary text-center shadow-md shadow-secondary rounded-md absolute top-24">Tailwind</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-primary shadow-md flex justify-center items-center h-20 w-20 p-3 rounded-md">
                        <img src="img5.svg" alt="" className="h-20 w-20"/>
                    </div>
                    <div className="absolute h-20 w-20 top-0 opacity-0 hover:opacity-100">
                        <p className="font-semibold py-1 px-4 bg-primary text-center shadow-md shadow-secondary rounded-md absolute top-24">React</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-primary shadow-md flex justify-center items-center h-20 w-20 p-3 rounded-md">
                        <img src="img1.svg" alt="" className="h-20 w-20"/>
                    </div>
                    <div className="absolute h-20 w-20 top-0 opacity-0 hover:opacity-100">
                        <p className="font-semibold py-1 px-4 bg-primary text-center shadow-md shadow-secondary rounded-md absolute top-24 right-1">Html</p>
                    </div>
                </div>
              </div>
            </div>
            <div className={`${open === 3 ? "inline-block" : "hidden"}`}>
              <div className="flex">
                <div className="hidden md:flex relative">
                  <div className="h-44 w-1 bg-secondary absolute left-[8px] top-7"></div>
                  <div className="h-44 w-1 bg-secondary absolute left-[8px] bottom-8"></div>
                  <div>
                    <button className="rounded-full bg-black h-5 w-5">1</button>
                    <button className="rounded-full bg-black h-5 w-5 my-48">
                      2
                    </button>
                    <button className="rounded-full bg-black h-5 w-5">3</button>
                  </div>
                </div>
                <div className="">
                  <div className="bg-primary shadow-md p-5 md:w-[85%] mb-7">
                    <h1 className="font-bold text-xl">
                      Aptech Computer Education
                    </h1>
                    <h2 className="font-semibold">
                      Information Technology Instructor
                    </h2>
                    <h3 className="text-gray-400 font-semibold">
                      May 2023 - Feb 2024
                    </h3>
                    <p className="font-medium text-sm mt-5">
                      Prompted students’ technological development, regularly
                      assessing progress with material and adapting strategies
                    </p>
                  </div>
                  <div className="bg-primary shadow-md p-5 md:w-[85%]">
                    <h1 className="font-bold text-xl">
                      Aptech Computer Education
                    </h1>
                    <h2 className="font-semibold">
                      Information Technology Instructor
                    </h2>
                    <h3 className="text-gray-400 font-semibold">
                      May 2023 - Feb 2024
                    </h3>
                    <p className="font-medium text-sm mt-5">
                      Prompted students’ technological development, regularly
                      assessing progress with material and adapting strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}