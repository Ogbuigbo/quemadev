import React from 'react'
import Image from 'next/image'
import TopSection from './TopSection'
import Middle from './Middle'
import Bottom from './Bottom'
import type { Metadata } from "next";
import AboutScrollHandler from '../_components/aboutUsScrollHandler';

export const metadata: Metadata = {
  title: "Services",
  description: "Quema Consulting is an organizational development and HR business advisory firm that provides organizational solution for companies and institutions to ensure that their corporate concern are thriving through strategic planning.",
};

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <div className='pb-10'>
      <AboutScrollHandler section={searchParams?.section} />
        <TopSection />
        <Middle/>
        <Bottom />
    </div>
  )
}

export default page
