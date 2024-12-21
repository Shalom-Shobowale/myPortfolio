import React from 'react'

export default function Contact() {
  return (
    <div className='flex justify-center mt-14' id='contact'>
      <div className='w-[90%] md:w-[85%] flex md:flex-row justify-center gap-10 flex-col-reverse'>
        <div className='text-secondary md:w-[50%] flex flex-col justify-center'>
          <h1 className='text-4xl font-bold mb-8'>Get In Touch</h1>
          <form action='https://formspree.io/f/mpwzpyjj' method='POST' onSubmit={""}>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col w-[50%]'>
                <label htmlFor="" className='font-semibold'>Name</label>
                <input type="text" name="Name" id="" className='border-b-2 border-secondary bg-bgBody focus:outline-none p-2' />
              </div>
              <div className='flex flex-col w-[50%]'>
                <label htmlFor="email" className='font-semibold'>Email</label>
                <input type="email" name="E-mail" id="" className='border-b-2 border-secondary w-[100%] bg-bgBody focus:outline-none p-2' />
              </div>
            </div>
            <div className='flex flex-col my-8'>
              <label htmlFor="" className='font-semibold'>Subject</label>
              <input type="text" name="Subject" id="" className='border-b-2 border-secondary bg-bgBody focus:outline-none p-2' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="" className='font-semibold'>Message</label>
              <textarea name="Message" id="" cols="5" rows="2" className='border-b-2 border-secondary bg-bgBody focus:outline-none px-2'></textarea>
            </div>
            <button type="submit" className='py-3 px-5 bg-secondary text-primary font-semibold rounded mt-5'>Submit</button>
          </form>
        </div>
        <div className='md:w-[40%] bg-cover bg-center bg-no-repeat' style={{backgroundImage:'url(contact2.jpg)'}}>
          {/* <img src="contact2.jpg" alt="" className='h-[450px] w-full' /> */}
        </div>
      </div>
    </div>
  )
}
