import React from 'react';
import ImageScroll from './Slider';

const Solution = () => {

    return (
        <div className='px-6 md:px-10 xl:px-[150px] lg:px-[50px] bg-[#f8f9fa]  py-16 overflow-hidden'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-4xl font-bold text-gray-900'>
                    Our HR Consulting Services
                </h1>
                <hr className='w-[100px] bg-slate-500 p-[1px] mt-2 mb-6' />
                <p className='lg:w-[600px] text-gray-700'>
                    At Quema Consulting, we offer a range of HR consulting services designed to help your organization thrive. Our expert team provides tailored solutions to optimize your human resources and align them with your business goals.
                </p>
            </div>


           <ImageScroll/>
           
        </div>
    );
};

export default Solution;
