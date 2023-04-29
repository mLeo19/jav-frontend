import React from 'react'
import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project: { name, slug, description, image } }) => {
  return (
    <div>
      <Link href={`/project/${slug.current}`}>
        <div className='rounded-lg bg-slate-200 p-6 hover:scale-105 ease-in duration-100'>
          <div>
            <Image
              src={urlFor(image && image[0]).url()}
              width={450}
              height={450}
              className='rounded-lg'
            />
          </div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Project

