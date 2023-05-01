import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/client'
import { PortableText } from '@portabletext/react';

const AboutUs = ({homePageContent}) => {
  const {about_us_content, about_us_image} = homePageContent
  console.log(about_us_content)
  return (
    <div id='about' className='max-w-[1240px] mx-auto h-screen border-4 flex justify-center items-center'>
      <div>
        <h1 className='flex justify-center border-2 pb-7'>About Us</h1>
        <div className='sm:flex'>
          <div className='pr-4'>
            <Image
              src={urlFor(about_us_image).url()}
              width={400}
              height={400}
            />
          </div>
          <div className='w-80'>
            <PortableText value={about_us_content} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs