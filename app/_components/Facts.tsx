'use client'
import React, { useState, useEffect } from 'react';
import { FolderOpen, Headphones, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function Facts() {
  // States for the numbers that will animate
  const [projectsCount, setProjectsCount] = useState(0);
  const [consultantsCount, setConsultantsCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);

  // Use Intersection Observer to detect when the facts section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger the animation once
    threshold: 0.3, // percentage of the section visible before triggering
  });

  // Function to animate numbers
  useEffect(() => {
    if (inView) {
      const duration = 2000; // Duration of the animation in milliseconds
      const incrementSpeed = 20; // Time interval between increments

      // Function to increment numbers
      const animateCount = (start: number, end: number, setter: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: number): void; }) => {
        let current = start;
        const increment = end / (duration / incrementSpeed);
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= end) {
            setter(end);
            clearInterval(interval);
          } else {
            setter(Math.floor(current));
          }
        }, incrementSpeed);
      };

      // Start animating the numbers
      animateCount(0, 385, setProjectsCount);
      animateCount(0, 260, setConsultantsCount);
      animateCount(0, 150, setAwardsCount);
    }
  }, [inView]);

  return (
    <section ref={ref} className='relative overflow-hidden '>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://tinypic.host/images/2024/10/09/stats_bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#000] opacity-70 z-1"></div>

      {/* Content */}
      <div className='relative px-6  md:px-10 xl:px-[150px] lg:px-[50px] md:pt-16 pt-12 pb-[150px] flex flex-col lg:flex-row justify-between items-center z-10 mt-10'>
        {/* Text Section */}
        <div className='flex flex-col gap-4 items-center xl:w-[500px] lg:w-[500px]  text-left'>
          <h1 className='text-4xl  font-bold text-white flex flex-col justify-start text-left items-start w-full'>
            Some of Our Company
            <span>Real Facts</span>
          </h1>
          <p className='text-white text-lg'>
  At Quema Consulting, we are dedicated to empowering organizations through strategic human resources solutions. Our team has successfully completed hundreds of projects, supporting businesses to optimize talent, enhance employee engagement, and achieve sustained growth.
</p>

        </div>

        {/* Stats Section */}
        <div className='flex mt-10 items-center justify-between w-full lg:w-[400px] xl:w-[500px]'>
        <div className='flex flex-col items-center text-center gap-4'>
          <FolderOpen className='xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] text-white hover:scale-110 transition-transform duration-300' />
          <p className='text-4xl font-bold text-white mt-2'>{projectsCount}</p>
          <p className='text-white'>Projects</p>
        </div>

        <div className='flex flex-col items-center text-center gap-4'>
          <Headphones className='w-[60px] h-[60px] text-white hover:scale-110 transition-transform duration-300' />
          <p className='text-4xl font-bold text-white mt-2'>{consultantsCount}</p>
          <p className='text-white'>Consultants</p>
        </div>

        <div className='flex flex-col items-center text-center gap-4'>
          <Trophy className='w-[60px] h-[60px] text-white hover:scale-110 transition-transform duration-300' />
          <p className='text-4xl font-bold text-white mt-2'>{awardsCount}</p>
          <p className='text-white'>Awards</p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Facts;
