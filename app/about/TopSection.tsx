import React from 'react'
import Image from 'next/image';

function TopSection() {
  return (
    <div className='pb-16 px-8 xl:px-[150px] lg:px-10 '>
      <div className='flex flex-col justify-center items-center px-6 w-full'>
        <h1 className='text-4xl font-bold text-gray-900 mt-20 flex flex-col gap-2 justify-center items-center'>
          About Us
          <hr className='w-[100px] bg-slate-500 p-[1px] mt-4' />
        </h1>
        <p className='mt-6 w-full lg:w-[600px] text-center text-gray-700'>
          Learn more about our HR consulting services and how we help organizations grow through tailored solutions.
        </p>
      </div>

      <div className='mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-20 mt-16'>
        {/* Image Section */}
        <div className='flex-shrink-0'>
          <Image 
            src='https://tinypic.host/images/2024/10/16/freepik-export-20241016130445xxO9.jpeg' 
            alt='about-us' 
            width={500} 
            height={500} 
            className='lg:w-[400px] xl:w-full rounded-md 2xl:w-[700px] lg:h-[600px] md:h-[400px] h-[300px] object-cover'
          />
        </div>
        
        {/* Text Section */}
        <div className='xl:max-w-[500px] space-y-8'>
          <h1 className='text-4xl font-extrabold text-gray-900 leading-tight'>
            Why Choose Quema Consulting
          </h1>

          <p className='text-lg text-gray-600 leading-relaxed'>
            Quema Consulting provides organizational development and HR business advisory services, offering strategic solutions for companies to ensure continued growth through effective HR planning.
          </p>

          {/* Progress Bars Section */}
          <div className='space-y-6'>
            {/* Progress 1 */}
            <div className='space-y-2'>
              <h6 className='text-xl font-semibold text-gray-800'>Talent Acquisition <span className='text-gray-600'>80%</span></h6>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className='bg-[#5f1928] h-2.5 rounded-full' style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Progress 2 */}
            <div className='space-y-2'>
              <h6 className='text-xl font-semibold text-gray-800'>HR Development <span className='text-gray-600'>75%</span></h6>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className='bg-[#5f1928] h-2.5 rounded-full' style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Progress 3 */}
            <div className='space-y-2'>
              <h6 className='text-xl font-semibold text-gray-800'>Performance Management <span className='text-gray-600'>85%</span></h6>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className='bg-[#5f1928] h-2.5 rounded-full' style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection;
