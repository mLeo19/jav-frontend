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
            <h1 className='justify-center border-2 mx-8 text-gray-700 text-xl md:px-6'>About Us</h1>
            <h1 className='text-blue-500 mx-8 justify-center border-2 md:px-6 text-2xl'>
              {/*about_us_heading*/}
              Turn Your Dream Project Into a Reality
            </h1>
            <div className='border-4 mx-8 text-lg text-gray-500 md:text-base md:px-6 lg:text-lg'>
              <PortableText value={about_us_content} />
            </div>
            <div className='border-2 flex justify-center py-2'>
              <Link href='/service/general-contracting'>
                <button className='px-8 py-2 border-4 border-red-600 text-xl text-red-600 font-extrabold hover:bg-red-200 transition ease-in-out hover:'>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Separator line between about us section and logos */}
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
    </div>
  )
}

export default AboutUs