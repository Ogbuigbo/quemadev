
import React from 'react';
import Image from 'next/image'; // If you're using Next.js

const Logo = () => {
  const logos = [
    {
      src: 'https://tinypic.host/images/2024/10/12/cropped-DEslog-ENERGY-LOGO-300x160.png',
      alt: 'DEslog Energy Logo',
    },
    {
      src: 'https://tinypic.host/images/2024/10/12/Mikano_Logo_transparent.png',
      alt: 'Mikano Logo',
    },
    {
      src: 'https://tinypic.host/images/2024/10/15/COBEF-LOGO.jpg',
      alt: 'Cobef',
    },
    {
        src: 'https://tinypic.host/images/2024/10/12/logo-1.png',
        alt: 'Geolind',
      },
      {
        src: 'https://tinypic.host/images/2024/10/15/Screenshot-2024-10-15-at-17.29.18.png',
        alt: 'Serviteco',
      },
      {
        src: 'https://tinypic.host/images/2024/10/14/images-1.png',
        alt: 'Jevant Spencer',
      },
  ];

  return (
    <div className="text-center my-12 xl:px-[150px] lg:px-[60px] md:px-10  px-6">
      <h2 className='text-4xl font-bold mb-6'>Our Clients</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:gap-16 gap-10 gap-y-4 items-center">
        {logos.map((logo, index) => (
          <div className="logo-item flex flex-wrap  items-center" key={index}>
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={150} // Adjust based on the size you need
              height={80} 
              className='h-16 w-16  md:h-20 md:w-20 xl:w-full xl:h-full object-contain transition-transform duration-300 hover:scale-11'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
