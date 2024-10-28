'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '../utils/data';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  key: string | number;
};

function Header() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled
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
    if (router === '/') {
      setActiveLink('/');
    } else {
      setActiveLink(router);
    }
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Apply effect after scrolling down 50px
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleLinkClick = (link: NavLink) => {
    setActiveLink(link.href);
    setNav(false);
  };

  return (
    <header
      className={`w-full px-6 lg:px-12 flex items-center justify-between z-50  py-4 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-[#712323] text-white shadow-md' : 'bg-[#712323] text-white shadow-md'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://tinypic.host/images/2024/10/14/quema-2-fotor-202410142237.png"
          width={250}
          height={100}
          alt="logo"
          className={`object-cover w-[100px] ${isScrolled ? 'sm:w-[250px] w-[200px] h-[100px]' : 'sm:w-[250px] w-[200px] h-[100px]'}`}
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
                ? isScrolled
                  ? 'text-white border-b-2 border-white'
                  : 'text-white border-b-2 border-white'
                : isScrolled
                ? 'text-white hover:text-gray-200 hover:border-b-2 hover:border-gray-200'
                : 'text-white hover:text-gray-200 hover:border-b-2 hover:border-gray-200'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Contact Us Button */}
      <Link href="/contact" className="hidden lg:block">
        <button className={`py-3 px-6 rounded-[4px] font-medium transition-all duration-300 ease-in-out shadow-lg ${
          isScrolled ? 'bg-white text-[#5f1928] hover:bg-gray-200' : 'bg-white text-black hover:bg-[#5f1928] hover:text-white'
        }`}>
          Contact Us
        </button>
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden">
        {!nav ? <Menu onClick={handleClick} className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-white'}`} /> : <X onClick={handleClick} className={` w-8 h-8 ${isScrolled ? 'text-white' : 'text-white'}`} />}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-[120px] left-0 w-full bg-white bg-opacity-50 shadow-md text-white transform z-50 ${
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
              className={`regular-16 text-black text-center hover:text-[#5f1928] border-b-[#5f1928] hover:border-b-2 bg-white cursor-pointer transition-all hover:font-bold w-full py-2 active:text-[#5f1928] ${
                activeLink === link.href
                  ? 'text-[#5f1928] border-b border-b-[#5f1928] font-bold text-[16px]'
                  : 'hover:text-[#5f1928] hover:border-b hover:border-b-[#5f1928] text-[14px]'
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
