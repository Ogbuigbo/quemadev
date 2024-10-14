'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '../utils/data'; // Assuming this is where your links data is
import Hamburger from '../../components/Hamburger';
import Close from '../../components/Close';
import { usePathname } from 'next/navigation';

// Define the NavLink type based on your link structure
type NavLink = {
  href: string;
  label: string;
  key: string | number;  // Adjust based on the actual type
};

function Header() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const router = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Ensure activeLink updates correctly based on current route
    if (router === '/') {
      setActiveLink('/');
    } else {
      setActiveLink(router);
    }
  }, [router]);

  const handleClick = () => {
    setNav(!nav);
  };

  // Function to handle link click
  const handleLinkClick = (link: NavLink) => {
    setActiveLink(link.href);
    setNav(false);
  };

  return (
    <header className="w-full px-6 lg:px-12 flex items-center justify-between bg-[#f9fafb] shadow-md z-50 py-8">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://tinypic.host/images/2024/10/14/Screenshot-2024-10-14-at-08.23.42-fotor-2024101410422.png"
          width={250}
          height={250}
          alt="logo"
          className="object-cover w-[250px] sm:w-[250px] md:w-full"
        />
      </Link>

      {/* Navigation Links for Desktop */}
      <nav className="hidden lg:flex items-center space-x-8">
        {NAV_LINKS.map((link: NavLink) => (
          <Link
            href={link.href}
            key={link.key}
            className={`text-[15px] font-medium transition-all duration-300 ease-in-out px-2 py-1 rounded-md ${
              activeLink === link.href
                ? 'text-[#821fa0] border-b-2 border-[#821fa0]'
                : 'text-gray-700 hover:text-[#821fa0] hover:border-b-2 hover:border-[#821fa0]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Contact Us Button */}
      <Link href="/contact" className="hidden lg:block">
        <button className="bg-[#821fa0] text-white py-3 px-6 rounded-[4px] font-medium hover:bg-[#ae4bcc] transition-all duration-300 ease-in-out">
          Contact Us
        </button>
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden">
        {!nav ? <Hamburger onClick={handleClick} /> : <Close onClick={handleClick} />}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-[100px] left-0 w-full bg-white bg-opacity-50 shadow-md text-white transform z-50 ${
          !nav
            ? 'opacity-0 pointer-events-none translate-y-full'
            : 'opacity-100 pointer-events-auto translate-y-0'
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="py-3 flex flex-col items-center gap-2">
          {NAV_LINKS.map((link: NavLink) => (
            <Link
              href={link.href}
              key={link.key}
              className={`regular-16 text-black text-center hover:text-orange border-b-orange hover:border-b-2 bg-white cursor-pointer transition-all hover:font-bold w-full py-2 active:text-orange ${
                activeLink === link.href
                  ? 'text-orange border-b border-b-orange font-bold text-[16px]'
                  : 'hover:text-orange hover:border-b hover:border-b-orange text-[14px]'
              }`}
              onClick={() => {
                handleLinkClick(link);
                handleClick(); // Close the mobile menu when a link is clicked
              }}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
