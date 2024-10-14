import * as React from "react";
import { SVGProps } from "react"
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path
      stroke="#003049"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M31.5 15h-21M31.5 9h-27M31.5 21h-27M31.5 27h-21"
    />
  </svg>
)
export default Hamburger