import React from 'react';

import ContactUsForm from '../_components/form';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";
import AboutScrollHandler from '../_components/aboutUsScrollHandler';

export const metadata: Metadata = {
  title: "Contact",
  description: "Quema Consulting is an organizational development and HR business advisory firm that provides organizational solution for companies and institutions to ensure that their corporate concern are thriving through strategic planning.",
};


function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <section className="bg-[#f2f4f6] py-20 px-6 md:px-10 xl:px-[150px] lg:px-10">
      <AboutScrollHandler section={searchParams?.section} />
      <div className="max-w-screen-md mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Connect with Quema Consulting
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-12">
          We are here to assist you with your HR needs. Reach out to us today to discover how we can help your organization thrive.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            className="block rounded bg-[#5f1928] px-8 py-3 text-sm lg:text-base font-medium text-white shadow hover:bg-[#a23d58] focus:outline-none focus:ring active:bg-[#356bb1] sm:w-auto"
            href="/contact?section=contact"
          >
            Contact Us Now
          </Link>

          <Link
            className="block rounded border px-8 py-3 text-sm lg:text-base font-medium  shadow hover:text-[#16202a] hover:bg-white  hover:border-[#5f1928]  focus:outline-none focus:ring active:text-[#0f151b] sm:w-auto"
            href="/about"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mt-16">
        
        {/* Contact Information */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-10">
            Reach out to us for tailored HR solutions.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 text-sm lg:text-base text-gray-700">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 " />
              <div>
                <p className="font-medium">PLOT 268, Trans Amadi Industrial Layout Rd</p>
                <p>Ordinance, Port Harcourt, 500211 <br /> Rivers State.</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 " />
              <span>+234 8121901685</span>
            </div>

            {/* Email Address */}
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 " />
              <span>quemaconsulting@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id='contact'>
          <ContactUsForm />
        </div>

      </div>
    </section>
  );
}

export default page;
