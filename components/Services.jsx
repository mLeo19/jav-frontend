import React from 'react'
import Link from 'next/link'

const Services = () => {
  return (
    <div id='services' className='max-w-[1240px] mx-auto h-screen'>
      <div>
        <h1>Services</h1>
        <div>
          <Link href='/roofing'>Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default Services