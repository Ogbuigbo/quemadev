'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  // Explicitly type the ref
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) { // Check if line is not null
      line.style.width = "100%"; // Set the width of the line
    }
  }, []);

  return (
    <section className="relative bg-[#f2f4f6]">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat z-3 2xl:h-[1000px] "
        style={{
          backgroundImage:
            "url('https://tinypic.host/images/2024/10/13/freepik-export-20241013131912RnnL.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0000005a] opacity-80 z-1 h-auto"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 md:py-32 py-20 lg:flex lg:items-center  z-3 md:pb-[200px]">
        <div className="mx-auto max-w-xl text-center flex flex-col justify-center items-center 2xl:mt-[200px]">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white relative">
            Elevate Your Workforce.
            <strong className="font-extrabold  sm:block">
              Drive Business Results.
            </strong>
            {/* Snake Line animation */}
            <div
              ref={lineRef}
              className="snake-line bg-[#fff] h-[4px] w-0 mt-2 mx-auto"
              style={{ transition: "width 2s ease-in-out" }}
            ></div>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
            We help you streamline HR processes, enhance employee engagement, and optimize your organization's growth.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
  <Link href="/services/#sourcing">
  <button className="block rounded bg-[#ffff] px-8 py-3 text-sm font-medium text-black shadow hover:bg-[#821fa0] hover:text-[#fff] transition-colors duration-300 focus:outline-none focus:ring active:bg-[#821fa0] sm:w-auto"
  >
    Get Started
  </button>
  </Link>
  <Link
    className="block rounded px-8 py-3 text-sm font-medium border text-[#fff] shadow hover:text-black hover:bg-[#fff] transition-colors duration-300 focus:outline-none focus:ring active:text-[#0f151b] sm:w-auto"
    href="#"
  >
    Learn More
  </Link>
</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;