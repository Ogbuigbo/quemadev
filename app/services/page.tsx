import React from 'react'
import Image from 'next/image'
import TopSection from './TopSection'
import Middle from './Middle'
import Bottom from './Bottom'

function page() {
  return (
    <div className='pb-10'>
        <TopSection/>
        <Middle/>
        <Bottom />
    </div>
  )
}

export default page
