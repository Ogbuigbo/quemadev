import Image from 'next/image'
import React from 'react'




function About() {
  return (
    <section className='py-24 md:px-10 px-6 xl:px-[150px] lg:px-[50px] 2xl:pt-[380px] '>
      <div className='mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-center  gap-20'>

        {/* Image Section */}
        <div className='flex-shrink-0'>
          <Image 
            src='https://tinypic.host/images/2024/10/13/freepik-export-20241013125900zYKt.jpeg' 
            alt='about-us' 
            width={500} 
            height={500} 
            className='lg:w-[400px] xl:w-full rounded-md 2xl:w-[700px] lg:h-[600px] md:h-[400px] h-[300px] object-cover'
          />
        </div>
        
        {/* Text Section */}
        <div className='xl:max-w-[500px] space-y-8'>
          <h1 className='text-4xl font-extrabold text-gray-900 leading-tight'>
            Our Commitment to Excellence
          </h1>

          <p className='text-lg text-gray-600 leading-relaxed '>
            Quema Consulting is an organizational development and HR business advisory firm that provides strategic solutions for companies and institutions, ensuring their continued growth through tailored organizational planning.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Mission Section */}
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold text-gray-800'>
                Mission
              </h2>
              <p className='text-base text-gray-600 '>
                Our mission is to bridge the gap for employers by finding the best candidates while fostering a dynamic, professional, and non-rigid work environment.
              </p>
            </div>

            {/* Vision Section */}
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold text-gray-800'>
                Vision
              </h2>
              <p className='text-base text-gray-600 t'>
                We are committed to providing our employees with a stable work environment and equal opportunities for growth and development.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;
