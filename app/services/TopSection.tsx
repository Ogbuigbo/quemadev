import React from 'react';
import Image from 'next/image';

function TopSection() {
  return (
    <div className='pb-10'>
      {/* Top Heading Section */}
      <div className='flex flex-col justify-center items-center px-6 w-full'>
  <h1 className='text-4xl font-bold text-gray-900 mt-20 flex flex-col gap-2 justify-center items-center'>
    What We Provide
    <hr className='w-[100px] bg-slate-500 p-[1px] mt-4' />
  </h1>
  <p className='mt-6 w-full lg:w-[600px] text-center text-gray-700'>
    At Quema Consulting, we offer comprehensive HR services that streamline your processes, enhance talent acquisition, and drive organizational success. 
  </p>
</div>


      {/* Main Content Section */}
      <section className='px-8 xl:px-[150px] lg:px-10 mt-16 space-y-16 2xl:space-y-24 pb-8 xl:pb-0'>
        {/* First Block */}
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-8'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl lg:text-4xl font-semibold text-gray-900'>Human Resources Planning
            </h1>
            <p className='w-full xl:w-[500px] text-gray-700 text-justify'>
            Human Resource Planning begins with an analysis of the available labour pool from which they can draw. Quema Consulting would help evaluate your firm’s present and future demands for various types of labour and attempt to match the demand with the supply of job applicants. 
            </p>
            {/* <button className="bg-[#5f1928] text-white py-[14px] px-[30px] rounded-lg font-medium hover:bg-[#a23d58] transition-all duration-300 ease-in-out self-start">
              Read More
            </button> */}
          </div>
          <Image src='https://tinypic.host/images/2024/10/13/freepik-export-20241013124818bAhM.jpeg' width={600} height={600} alt='about-us' className='lg:w-[500px] lg:shadow-none md:shadow-lg bg-[#f8f9fa] w-full rounded-lg 2xl:w-[900px]' />
        </div>

        {/* Second Block */}
        <div className='flex flex-col lg:flex-row  items-center justify-center gap-12' id='sourcing'>
          <Image src='https://tinypic.host/images/2024/10/13/freepik-export-202410131239441j5p.jpeg' width={600} height={600} alt='about-us' className='lg:w-[500px] lg:shadow-none md:shadow-lg bg-[#f8f9fa] w-full rounded-lg 2xl:w-[900px] lg:h-[350px] object-cover' />
          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl lg:text-4xl font-semibold text-gray-900'>Recruitment & Selection Process</h1>
            <p className='w-full xl:w-[550px] text-gray-700 text-justify'>
            Quema Consulting is committed to employing the best qualified candidates while engaging in recruitment and selection practices that comply with all applicable employment laws. It is the policy of Quema Consulting to provide equal employment opportunity to all applicants and employees.
            </p>
            {/* <button className="bg-[#5f1928] text-white py-[14px] px-[30px] rounded-lg font-medium hover:bg-[#a23d58] transition-all duration-300 ease-in-out self-start xl:self-end">
              Read More
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopSection;
