import React from 'react'
import type { Metadata } from "next";
import AboutScrollHandler from '../_components/aboutUsScrollHandler';

export const metadata: Metadata = {
  title: "Quema Consulting",
  description: "Quema Consulting is an organizational development and HR business advisory firm that provides organizational solution for companies and institutions to ensure that their corporate concern are thriving through strategic planning.",
};

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  
  return (
    <div>
      <h1>dev mode</h1>

      <AboutScrollHandler section={searchParams?.section} />
    </div>
  )
}

export default page
