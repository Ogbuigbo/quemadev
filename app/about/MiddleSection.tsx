"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function MiddleSection() {
  const [clientSuccessCount, setClientSuccessCount] = useState(0); // Start from 0
  const [projectCompletionCount, setProjectCompletionCount] = useState(0); // Start from 0

  useEffect(() => {
    const clientSuccessTarget = 300; // Target value for Client Success
    const projectCompletionTarget = 400; // Target value for Project Completion

    const clientSuccessInterval = setInterval(() => {
      if (clientSuccessCount < clientSuccessTarget) {
        setClientSuccessCount(prevCount => prevCount + 1); // Increment by 1
      } else {
        clearInterval(clientSuccessInterval); // Stop counting when target is reached
      }
    }, 10); // Adjust the interval speed for Client Success

    const projectCompletionInterval = setInterval(() => {
      if (projectCompletionCount < projectCompletionTarget) {
        setProjectCompletionCount(prevCount => prevCount + 1); // Increment by 1
      } else {
        clearInterval(projectCompletionInterval); // Stop counting when target is reached
      }
    }, 10); // Adjust the interval speed for Project Completion

    return () => {
      clearInterval(clientSuccessInterval);
      clearInterval(projectCompletionInterval);
    };
  }, [clientSuccessCount, projectCompletionCount]);

  return (
    <div className='bg-[#f8f9fa] px-8 xl:px-[150px] lg:px-10 py-24 flex flex-col lg:flex-row justify-between items-center'>
      <div className='lg:w-1/2'>
        <h5 className='text-lg font-medium text-gray-600 mb-3'>HR Consulting and Talent Development</h5>
        <h2 className='text-3xl font-bold text-gray-900 mb-6'>Strategic HR Solutions for Organizational Growth</h2>

        <div className='mt-8 space-y-6 flex gap-8 items-center flex-col md:flex-row'>
          {/* Client Success Counter */}
          <div className='flex flex-col'>
            <span className='text-4xl font-extrabold text-[#5f1928]'>{clientSuccessCount}+</span>
            <h4 className='text-xl font-semibold text-gray-800 my-4'>Successful Client Engagements</h4>
            <p className='text-gray-600'>We help organizations optimize their workforce for better efficiency and growth.</p>
          </div>

          {/* Project Completion Counter */}
          <div className='flex flex-col'>
            <span className='text-4xl font-extrabold text-[#5f1928]'>{projectCompletionCount}+</span>
            <h4 className='text-xl font-semibold text-gray-800 my-4'>HR Projects Completed</h4>
            <p className='text-gray-600'>Our team has successfully delivered tailored HR solutions across various industries.</p>
          </div>
        </div>
      </div>

      <div className='mt-10 lg:mt-0'>
        <Image 
          src='https://tinypic.host/images/2024/10/21/freepik-export-202410211228233jEl.jpeg' 
          width={500} 
          height={500} 
          alt='about-us' 
          className='rounded-lg object-cover'
        />
      </div>
    </div>
  );
}

export default MiddleSection;
