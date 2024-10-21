import React from 'react'
import type { Metadata } from "next";
import AboutScrollHandler from '../_components/aboutUsScrollHandler';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import Logo from '../_components/Logo';


export const metadata: Metadata = {
  title: "About",
  description: "Quema Consulting is an organizational development and HR business advisory firm that provides organizational solution for companies and institutions to ensure that their corporate concern are thriving through strategic planning.",
};

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  
  return (
    <div >
      <TopSection/>
      <AboutScrollHandler section={searchParams?.section} />
      <MiddleSection/>
      <Logo/>
    </div>
  )
}

export default page
