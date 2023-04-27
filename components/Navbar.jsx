import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import logo from '../public/jav-contractors-logo.png'

const Navbar = () => {
  const [nav, setNav] =useState(false)
  const [color, setColor] = useState('transparent')
  const [borderColor, setBorderColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white');
  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setBorderColor('gray')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setBorderColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])
  
  return (
    <>
      <div style={{backgroundColor: `${color}`, borderBottomColor: `${borderColor}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 border-b'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
          <Link href='/'>
            <Image
              src={logo}
              alt='Company Logo'
              width={200}
              className='brightness-200'
            />
          </Link>
          <ul style={{color: `${textColor}`}} className="hidden sm:flex">
            <li className='p-4'><Link href='/'>Home</Link></li>
            <li className='p-4'><Link href='/#about' scroll={false}>About Us</Link></li>
            <li className='p-4'><Link href='/#services' scroll={false}>Services</Link></li>
            <li className='p-4'><Link href='/#gallery' scroll={false}>Gallery</Link></li>
            <li className='p-4'><Link href='/#contact' scroll={false}>Contact Us</Link></li>
          </ul>
          {/* Mobile button */}
          <div onClick={handleNav} className='block sm:hidden z-10'>
            {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
          </div>
          {/* Mobile menu */}
          <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
            <ul>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'><Link href='/'>Home</Link></li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'><Link href='/#about' scroll={false}>About Us</Link></li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'><Link href='/#services' scroll={false}>Services</Link></li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'><Link href='/#gallery' scroll={false}>Gallery</Link></li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'><Link href='/#contact' scroll={false}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar