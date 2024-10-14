"use client";
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITEMS } from '../utils/data';

function ImageScroll() {
  const settings = {
    dots: true,  // Enable dots for pagination
    infinite: true,
    speed: 800,  // Smoother transition
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",  // For smoother animations
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative mb-16"> {/* Added margin-bottom to create space */}
      <Slider {...settings} className="flex items-center justify-center mt-8">
        {ITEMS.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-2 2xl:p-8">
            <div className="shadow-md transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden">
              <Image 
                src={item.icons} 
                width={400} 
                height={400} 
                alt='splash' 
                className="object-cover md:h-[250px] h-[200px] 2xl:w-full"  
              />
              <div className="text-center mt-2 p-4 2xl:p-8">
                <h1 className="text-xl font-semibold text-gray-900 transition-colors ">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom CSS for dots */}
  
    </div>
  );
}

export default ImageScroll;
