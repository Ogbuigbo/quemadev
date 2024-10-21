import React from 'react'
import { Check } from 'lucide-react';
import { MIDDLE } from '../utils/data';
import Link from 'next/link';

function Middle() {
  return (
<section className='bg-[#f8f9fa] px-8 xl:px-[150px] lg:px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-12'>
  {/* Left Content Section */}
  <div className='lg:w-1/2'>
  <h1 className='text-3xl lg:text-4xl font-bold text-gray-900 leading-snug'>
    Empowering Your Workforce for Success
    <hr className='w-[80px] lg:w-[100px] bg-slate-500 h-[2px] mt-4' />
  </h1>
  <p className='mt-6 text-gray-700 leading-relaxed'>
    At Quema Consulting, we help businesses build strong, efficient teams with a focus on talent acquisition, employee engagement, and leadership development. Our customized HR solutions ensure that your workforce is empowered and aligned with your business goals.
  </p>

  {/* Feature List */}
  <div className='flex flex-col gap-4 py-8'>
    <p className='flex items-center gap-4'>
      <Check className='text-green-600 w-6 h-6' />
      Tailored talent acquisition strategies for business growth
    </p>
    <p className='flex items-center gap-4'>
      <Check className='text-green-600 w-6 h-6' />
      Employee engagement programs that drive productivity
    </p>
    <p className='flex items-center gap-4'>
      <Check className='text-green-600 w-6 h-6' />
      Leadership development and training for long-term success
    </p>
  </div>
  
    {/* Call to Action Button */}
    <Link href="/contact?section=contact" className="bg-[#5f1928] text-white py-3 px-8 rounded-lg font-medium hover:bg-[#a23d58] transition-all duration-300 ease-in-out text-lg">
      CONTACT US
    </Link>
  </div>

  {/* Right Grid Section */}
  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-1/2'>
    {MIDDLE.map((item, index) => (
      <div key={index} className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg p-8 flex flex-col items-center text-center'>
        <div className='text-5xl mb-4'>
          {item.icons}
        </div>
        <h2 className='text-xl font-semibold text-gray-900'>
          {item.title}
        </h2>
        <p className='mt-4 text-gray-600'>
          {item.description}
        </p>
      </div>
    ))}
  </div>
</section>

  )
}

export default Middle
