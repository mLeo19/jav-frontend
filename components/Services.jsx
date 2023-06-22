import React from 'react'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import Service from './Service'

const Services = ({ services, homePageContent }) => {
  const {services_content} = homePageContent
  return (
    <div id='services' className='max-w-[1240px] mx-auto h-screen flex justify-center items-center border-4 mt-32'>
      <div>
        <h1 className='flex justify-center border-2 pb-7'>Services</h1>
        <div className='w-96 border-4 mx-auto'>
          <PortableText value={services_content} />
        </div>
        <div className='flex justify-center items-center'>
          {services?.map((service, index) => (
            <div key={index} className='p-4'>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services