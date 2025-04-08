import React from 'react'

export default function Service() {
  return (
    <div className='flex justify-center text-secondary mt-16' id='service'>
        <div className='w-[90%] md:w-[85%]'>
            <h1 className='text-5xl font-bold text-center mb-4'>Services</h1>
            {/* <h1 className='font-semibold text-xl text-center'>These are My Expertises.</h1> */}
            <div className='flex md:flex-row flex-col gap-5 mt-6'>
                <div className='bg-primary md:w-[32%] p-5 rounded-md'>
                    <h1 className='text-xl font-bold mb-4'>Website Development
                    </h1>
                    <div className='font-semibold text-sm'>
                        <p className='mb-4'>Stay ahead of the digital curve leveraging cutting-edge technologies. As web developer i deliver:
                        </p>
                        <li>Fast, secure, and scalable <p className='ml-5'>solutions</p></li>
                        <li className='my-1'>Responsive design for optimal UX</li>
                        <li>API integration and backend <p className='ml-5'>development</p></li>
                        <li className='mt-1'>Continuous testing and <p className='ml-5'>optimization</p></li>
                        <p className='mt-4'>Let's bring your online vision to life!</p>
                    </div>
                </div>
                <div className='bg-primary rounded-md md:w-[32%] p-5'>
                    <h1 className='text-xl font-bold mb-4'> E-commerce Solutions </h1>
                    <div className='font-semibold text-sm'>
                        <p className='mb-4'>Transform your online store into a seamless shopping experience with our expert E-commerce Solutions.I ensure effortless navigation, secure checkout processes, and engaging product showcases. With expertise in:
                        </p>
                        <li>Responsive design</li>
                        <li className='my-1'>Custom theme development</li>
                        <li>Payment gateway integration</li>
                        <li className='my-1'>Shopping cart optimization</li>
                        <li>Product filtering and search <p className='ml-5'>functionality</p></li>
                        <p className='mt-4'>Elevate your brand's online presence.</p>
                    </div>
                </div>
                <div className='bg-primary md:w-[32%] p-5  rounded-md'>
                    <h1 className='text-xl font-bold mb-4'>Communication and Collaboration
                    </h1>
                    <div className='text-sm font-semibold'>
                        <p className='mb-4'>Effective communication and seamless collaboration are the backbone of successful projects. My communication and collaboration services ensure:
                        </p>
                        <li>Clear requirements gathering and <p className='ml-5'>project scope definition</p></li>
                        <li className='my-1'>Regular progress updates and <p className='ml-5'>timely feedback</p></li>
                        <li>Active listening and empathetic <p className='ml-5'>problem-solving</p></li>
                        <li className='my-1'>Collaborative problem-solving<p className='ml-5'> and problem-solving</p></li>
                        <li>Adaptable communication styles <p className='ml-5'>(written, verbal, visual)</p></li>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
