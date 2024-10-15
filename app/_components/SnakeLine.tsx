'use client'

import React from 'react';
import { useEffect, useRef } from "react";

function SnakeLine() {
      // Explicitly type the ref
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) { // Check if line is not null
      line.style.width = "100%"; // Set the width of the line
    }
  }, []);
  return (
    <div
              ref={lineRef}
              className="snake-line bg-[#fff] h-[4px] w-0 mt-2 mx-auto"
              style={{ transition: "width 2s ease-in-out" }}
    ></div>
  )
}

export default SnakeLine
