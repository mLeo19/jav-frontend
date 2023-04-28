import React from 'react'
import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project: { name, slug, description, image } }) => {
  return (
    <div>
      <Link href={`/project/${slug.current}`}>
        <div>
          <div>
            <Image
              src={urlFor(image && image[0]).url()}
              width={500}
              height={500}
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

