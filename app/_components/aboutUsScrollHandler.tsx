"use client"

import { useEffect } from "react"

const AboutScrollHandler =({section}:{section?:string})=>{
  const init =()=>{
    if(!section) return

    document.getElementById(section)?.scrollIntoView({behavior:"smooth"});
  }
    useEffect  (()=>{
        init()
    },[section])


    return null
}

export default AboutScrollHandler