import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/client'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const AboutUs = ({ homePageContent }) => {

  const { about_us_content, about_us_image, about_us_heading } = homePageContent
  console.log(about_us_heading)
  
  return (
    <div id='about' className='max-w-[1240px] mx-auto h-screen border-4 flex justify-center items-center'>
      <div className='flex-auto border-2 mt-72 sm:mt-64 md:mt-0'>
        <h1 className='flex justify-center border-2 mb-3 text-4xl font-extrabold'>About Us</h1>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/2 border-2 flex justify-center mb-5'>
            <Image
              src={urlFor(about_us_image).url()}
              width={450}
              height={450}
              
            />
          </div>
          {/* The div below holds the heading, portable text and the button(s) */}
          <div className='border-4 md:w-1/2'>
            <h1 className='text-blue-500 font-extrabold text-4xl flex justify-center border-2 mx-auto px-12 md:text-4xl md:px-6 lg:text-2xl'>
              {/*about_us_heading*/}
              Turn Your Dream Project Into a Reality
            </h1>
            <div className='h-46 border-4 px-14 mt-5 text-lg text-gray-500 md:text-base md:px-7 lg:text-lg'>
              <PortableText value={about_us_content} />
            </div>
            <div className='border-2 flex justify-center py-2'>
              <Link href='/service/general-contracting'>
                <button className='px-8 py-2 border-4 border-red-600 text-xl text-red-600 font-extrabold hover:bg-red-200 transition ease-in-out hover:'>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs